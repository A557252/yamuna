import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Package } from '../../../share/package.model';
import { InquiryService } from '../../../../services/inquiryService';
import { Broadcaster } from '../../../../utils/brodcaster';
import { SaveInquiry } from '../../../share/saveInquiry.mode';
import { InquiryPackage } from '../../../share/inquiryPackage.model';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  @Input() packagesArray: Package[];
  @Input() saveInquiry: SaveInquiry;
  @Output() saveInquiryChnage: EventEmitter<SaveInquiry> = new EventEmitter();

  constructor(private _inquiryService: InquiryService, private brodcaster: Broadcaster) {}

  ngOnInit() {}

  selectPackages(selectedPackage, isSelectAll) {
    const inquiryPackage = new InquiryPackage(selectedPackage.packageId, selectedPackage.price);
    if (selectedPackage.selected) {
      this.updateSaveInquiry(inquiryPackage, true);
    } else {
      this.updateSaveInquiry(inquiryPackage, false);
    }
  }

  updateSaveInquiry(inquiryPackage: InquiryPackage, isPush: boolean) {
    if (isPush) {
      this.saveInquiry.inquiryPackage.push(inquiryPackage);
      this.saveInquiry.totalPrice += inquiryPackage.packagePrice;
    } else {
      this.saveInquiry.inquiryPackage.splice(this.saveInquiry.inquiryPackage.indexOf(inquiryPackage), 1);
      this.saveInquiry.totalPrice -= inquiryPackage.packagePrice;
    }
  }
}
