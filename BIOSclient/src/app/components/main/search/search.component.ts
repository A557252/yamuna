import { Component, OnInit, EventEmitter } from '@angular/core';
import { InquiryService } from '../../../services/inquiryService';
import { Package } from '../../share/package.model';
import { Broadcaster } from '../../../utils/brodcaster';
import { Constants } from '../../../utils/constants';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  vinNumber;

  packagesArray: Package[] = [];
  extraServices: Package[] = [];
  inquiryArray: Array<any> = [];
  vinNumberValidation = new FormControl('', [
    this.validateVin
  ]);
  constructor(private _inquiryService: InquiryService, private broadcaster: Broadcaster ) { }

  ngOnInit() {}

  serachByVinNumber(vinNumber) {
    if(!this.vinNumberValidation.valid) {
      return false;
    }
    this._inquiryService.vinSearch(vinNumber).subscribe((res) => {
      console.log(res);
      if(res!=null && res.length > 0){
        this.packagesArray = res[0].packages;
        this.broadcaster.broadcast('updatePackages', this.packagesArray);
        this.broadcaster.broadcast('updateAmount', 0);
      }
    }, (resError) => {
      console.log(resError);
    });

    this._inquiryService.getExtraServices().subscribe((res) => {
      console.log(res);
      if(res !=null && res.length >0){
        this.extraServices = res;
        this.broadcaster.broadcast('extraServices', this.extraServices);
      }
    }, (resError) => {
      console.log(resError);
    });
    
    // if service is offline use below data for  //dev
    // this.packagesArray = JSON.parse(JSON.stringify(Constants.json[0])).packages;
    // this.broadcaster.broadcast('updatePackages', this.packagesArray);
    // this.getExtraServices();
  }

  getInquiries(vinNumber){
    console.log('getInquiries');
    this._inquiryService.vinInquiries(vinNumber).subscribe((res) => {
      console.log(res);
      this.inquiryArray = res;
      this.broadcaster.broadcast('updateInquiries', this.inquiryArray);
  }, (resError) => {
      console.log(resError);
    });
    this.inquiryArray = Constants.inquiries;
    this.broadcaster.broadcast('updateInquiries', this.inquiryArray);
  }

  getExtraServices(){
    this._inquiryService.getExtraServices().subscribe((res) => {
      console.log(res);
      this.extraServices = res;
      this.broadcaster.broadcast('extraServices', this.extraServices);
    }, (resError) => {
      console.log(resError);
    });
  }
  validateVin(input: FormControl) {
    let vinNumber = input.value;
    if(vinNumber) {
      if(vinNumber.length > 17 || vinNumber.length < 17) {
        return { matchLength: true };
      }
      let vinNumberDigit = vinNumber.substring(11,17);
      if(/([a-zA-Z])/.test(vinNumberDigit)) {
        return { invalidVInDigit: true };
      }
      if(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(vinNumber)) {
        return {containsSpecialCharacter: true }
      }
      let vinNumberLetters = vinNumber.substring(0,6);
      if(/([^a-z^A-Z])/.test(vinNumberLetters)) {
        return {invalidVInLetters: true }
      }
     // return hasExclamation ? null : { needsExclamation: true };
    }
  }
}
