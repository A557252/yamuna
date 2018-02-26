import { Component, OnInit, Input } from '@angular/core';
import { Broadcaster } from '../../../utils/brodcaster';
import { Package } from '../../share/package.model';
import { SaveInquiry } from '../../share/saveInquiry.mode';
import { InquiryService } from '../../../services/inquiryService';
import { User } from '../../../models/user.model';
import { UtilFunctions } from '../../../utils/utilFunctions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  @Input() vinNumber: string;
  @Input() carId: number;

  packagesArray: Package[] = [];
  extraServices: Package[] = [];
  totalAmount: any = 0;
  expand: boolean = false;
  saveInquiry: SaveInquiry;
  constructor(private _inquiryService: InquiryService, private broadcaster: Broadcaster, private router: Router) {
    this.initializeSaveInquiry();
  }

  ngOnInit() {
    this.broadcaster.on<string>('updatePackages')
    .subscribe( (message: any) => {
      this.packagesArray = message;
    });

    this.broadcaster.on<string>('extraServices')
    .subscribe((message:any) => {
        this.extraServices = message;
        console.log('extraServices'+ this.extraServices);
    });
    this.broadcaster.on<string>('clearSaveInquiry')
    .subscribe(() => {
      this.initializeSaveInquiry();
    });
  }

  initializeSaveInquiry() {
    this.saveInquiry = new SaveInquiry(0, '', 0, new Date(), new Date(), 0, '', [], []);
  }

  onSave() {
    const user: User = JSON.parse(UtilFunctions.getLocalStorage('userDetail'));
    this.saveInquiry.vin = this.vinNumber;
    this.saveInquiry.carId = this.carId;
    this.saveInquiry.createdOn = new Date();
    this.saveInquiry.modifiedOn = new Date();
    this.saveInquiry.userId = user.userId;
    console.log(JSON.stringify(this.saveInquiry));
    this._inquiryService.saveInquiry(this.saveInquiry).subscribe((res) => {
      console.log(res);
      this.initializeSaveInquiry();
      this.broadcaster.broadcast('updateInquiries', []);
      this.broadcaster.broadcast('updatePackages',[]);
        this.broadcaster.broadcast('modelData', null);
    }, (resError) => {
      console.log(resError);
    });
  }
}
