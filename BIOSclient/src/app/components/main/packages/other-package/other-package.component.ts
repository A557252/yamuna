import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Package } from '../../../share/package.model';
import { InquiryService } from '../../../../services/inquiryService';
import { Broadcaster } from '../../../../utils/brodcaster';
import { SparePart } from '../../../share/spare-part.model';
import { SaveInquiry } from '../../../share/saveInquiry.mode';
import { AddItem } from '../../../share/addItem.model';
import { LabourPosition } from '../../../share/labour-position.model';

@Component({
  selector: 'app-other-package',
  templateUrl: './other-package.component.html',
  styleUrls: ['./other-package.component.css']
})
export class OtherPackageComponent implements OnInit {

  @Input() extraServices: Package[];
  @Input() saveInquiry: SaveInquiry;
  @Output() saveInquiryChnage: EventEmitter<SaveInquiry> = new EventEmitter();

  constructor(private brodcaster: Broadcaster) { }

  ngOnInit() {
  }

  selectSpare(selectedService, sparePart) {
    const addItem: AddItem = new AddItem(sparePart.spareName, sparePart.sparePrice);
    if (sparePart.selected) {
      this.addItemToSaveInquiry(addItem, true);
    } else {
      this.addItemToSaveInquiry(addItem, false);
    }
  }

  selectLposition(selectedService, lposition) {
    const addItem: AddItem = new AddItem(lposition.lpositionName, lposition.lpositionPrice);
    if (lposition.selected) {
      this.addItemToSaveInquiry(addItem, true);
    } else {
      this.addItemToSaveInquiry(addItem, false);
    }
  }

 addItemToSaveInquiry(addItem: AddItem, isPush: boolean) {
    if (isPush) {
      this.saveInquiry.addItems.push(addItem);
      this.saveInquiry.totalPrice += addItem.price;
    } else {
      this.saveInquiry.addItems.splice(this.saveInquiry.addItems.indexOf(addItem), 1);
      this.saveInquiry.totalPrice -= addItem.price;
    }
  }
}
