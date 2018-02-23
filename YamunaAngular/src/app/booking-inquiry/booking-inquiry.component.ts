import { Component, OnInit } from '@angular/core';
import { InquiryService } from '../Services/InquiryService';
import { constants } from '../Utils/constants';

@Component({
  selector: 'app-booking-inquiry',
  templateUrl: './booking-inquiry.component.html',
  styleUrls: ['./booking-inquiry.component.css']
})
export class BookingInquiryComponent implements OnInit {

  vinNumber;
  totalAmount:number = 0;

  constructor(private _inquiryService: InquiryService) { }

  ngOnInit() {

  }
  packagesArray: Array<any> = [];
  selectedPackageArray: Array<any> = [];
  
  serachByVinNumber(vinNumber) {
    this._inquiryService.vinSearch(vinNumber).subscribe((res)=> {
      console.log(res);
      this.packagesArray = res;
    },(resError)=>{
      console.log(resError);
    });
    // if service is offline use below data for  //dev
    // this.packagesArray = constants.json;
  }
  selectPackages(selectedPackage,isSelectAll) {
    if (selectedPackage.selected) {
      this.selectedPackageArray.push(selectedPackage);
      this.totalAmount += selectedPackage.price;
    } else {
      this.selectedPackageArray.splice(this.selectedPackageArray.indexOf(selectedPackage), 1);
      this.totalAmount -= selectedPackage.price;
    }
  }
}
