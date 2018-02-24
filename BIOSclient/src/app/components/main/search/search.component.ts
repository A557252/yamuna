import { Component, OnInit, EventEmitter } from '@angular/core';
import { InquiryService } from '../../../services/inquiryService';
import { Package } from '../../share/package.model';
import { Broadcaster } from '../../../utils/brodcaster';
import { Constants } from '../../../utils/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  vinNumber;

  packagesArray: Array<any> = [];
  inquiryArray: Array<any> = [];

  constructor(private _inquiryService: InquiryService, private broadcaster: Broadcaster ) { }

  ngOnInit() {

  }

  serachByVinNumber(vinNumber) {
    this._inquiryService.vinSearch(vinNumber).subscribe((res) => {
      console.log(res);
      this.packagesArray = res;
      this.broadcaster.broadcast('updatePackages', this.packagesArray);
    }, (resError) => {
      console.log(resError);
    });
    // if service is offline use below data for  //dev
    this.packagesArray = Constants.json;
    this.broadcaster.broadcast('updatePackages', this.packagesArray);
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

}
