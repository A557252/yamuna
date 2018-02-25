import { Component, OnInit, Input } from '@angular/core';
import { Package } from '../../../share/package.model';
import { InquiryService } from '../../../../services/inquiryService';
import { Broadcaster } from '../../../../utils/brodcaster';
import { SparePart } from '../../../share/spare-part.model';

@Component({
  selector: 'app-other-package',
  templateUrl: './other-package.component.html',
  styleUrls: ['./other-package.component.css']
})
export class OtherPackageComponent implements OnInit {

  @Input() extraServices: Package[];
  extraServicesArray: Array<any> = [];
  totalAmount = 0;
  constructor(private _inquiryService: InquiryService, private brodcaster: Broadcaster) { }

  ngOnInit() {
    this.brodcaster.on<string>('updateAmount')
    .subscribe((message: any) => {
        this.totalAmount = message;
        console.log("this.totalAmount"+this.totalAmount);
    });
  }

  selectSpare(selectedService, spareSpart) {
    if (spareSpart.selected) {
      this.extraServicesArray.push(selectedService);
      this.totalAmount += spareSpart.sparePrice;
    } else {
      this.extraServicesArray.splice(this.extraServicesArray.indexOf(selectedService), 1);
      this.totalAmount -= spareSpart.sparePrice;
    }
    // this._inquiryService.amount.emit(this.totalAmount);
    this.brodcaster.broadcast('updateAmount', this.totalAmount);
  }

  selectLposition(selectedService, lposition) {
    if (lposition.selected) {
      this.extraServicesArray.push(selectedService);
      this.totalAmount += lposition.lpositionPrice;
    } else {
      this.extraServicesArray.splice(this.extraServicesArray.indexOf(selectedService), 1);
      this.totalAmount -= lposition.lpositionPrice;
    }
    // this._inquiryService.amount.emit(this.totalAmount);
    this.brodcaster.broadcast('updateAmount', this.totalAmount);
  }
}
