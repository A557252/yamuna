import { Component, OnInit } from '@angular/core';
import { Package } from '../../../share/package.model';
import { InquiryService } from '../../../../services/inquiryService';
import { Broadcaster } from '../../../../utils/brodcaster';

@Component({
  selector: 'app-other-package',
  templateUrl: './other-package.component.html',
  styleUrls: ['./other-package.component.css']
})
export class OtherPackageComponent implements OnInit {

  extraServices: any;
  extraServicesArray: Array<any> = [];
  totalAmount = 0;
  constructor(private _inquiryService: InquiryService, private brodcaster: Broadcaster) { }

  ngOnInit() {
    this.brodcaster.on<string>('updatePackages')
    .subscribe(message => {
      this.extraServices = message;
    });
  }

  selectService(selectedService, isSelectAll) {
    if (selectedService.selected) {
      this.extraServicesArray.push(selectedService);
      this.totalAmount += selectedService.price;
    } else {
      this.extraServicesArray.splice(this.extraServicesArray.indexOf(selectedService), 1);
      this.totalAmount -= selectedService.price;
    }
    // this._inquiryService.amount.emit(this.totalAmount);
    this.brodcaster.broadcast('updateAmount', this.totalAmount);
  }

}
