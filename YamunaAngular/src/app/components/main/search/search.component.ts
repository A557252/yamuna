import { Component, OnInit, EventEmitter } from '@angular/core';
import { InquiryService } from '../../../services/InquiryService';
import { Package } from '../../share/package.model';
import { Broadcaster } from '../../../utils/brodcaster';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  vinNumber;

  packagesArray: Array<any> = [];

  constructor(private _inquiryService: InquiryService, private broadcaster: Broadcaster ) { }

  ngOnInit() {

  }

  serachByVinNumber(vinNumber) {
    this._inquiryService.vinSearch(vinNumber).subscribe((res) => {
      console.log(res);
      this.packagesArray = res;
      // this._inquiryService.packageList.emit(this.packagesArray);
      this.broadcaster.broadcast('updatePackages', this.packagesArray);
    }, (resError) => {
      console.log(resError);
    });
    // if service is offline use below data for  //dev
    // this.packagesArray = constants.json;
  }

}
