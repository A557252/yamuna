import { Component, OnInit, Input } from '@angular/core';
import { Package } from '../../../share/package.model';
import { InquiryService } from '../../../../services/inquiryService';
import { Broadcaster } from '../../../../utils/brodcaster';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
   @Input() packagesArray: Package[];
  selectedPackageArray: Package[] = [];
  totalAmount = 0;

  constructor(private _inquiryService: InquiryService, private brodcaster: Broadcaster) {}

  ngOnInit() {
    this.brodcaster.on<string>('updateAmount')
    .subscribe((message: any) => {
        this.totalAmount = message;
        console.log("this.totalAmount"+this.totalAmount);
    });
  }

  selectPackages(selectedPackage, isSelectAll) {
    console.log(this.totalAmount);
    if (selectedPackage.selected) {
      this.selectedPackageArray.push(selectedPackage);
      this.totalAmount += selectedPackage.price;
    } else {
      this.selectedPackageArray.splice(this.selectedPackageArray.indexOf(selectedPackage), 1);
      this.totalAmount -= selectedPackage.price;
    }
    // this._inquiryService.amount.emit(this.totalAmount);
    this.brodcaster.broadcast('updateAmount', this.totalAmount);
  }
}
