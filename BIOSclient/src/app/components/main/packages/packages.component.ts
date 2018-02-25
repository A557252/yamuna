import { Component, OnInit } from '@angular/core';
import { Broadcaster } from '../../../utils/brodcaster';
import { Package } from '../../share/package.model';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packagesArray: Package[] = [];
  extraServices: Package[] = [];
  totalAmount: any = 0;
  expand: boolean = false;
  
  constructor(private broadcaster: Broadcaster) { }

  ngOnInit() {
    this.broadcaster.on<string>('updateAmount')
    .subscribe(message => {
      this.totalAmount = message;
    });

    this.broadcaster.on<string>('updatePackages')
    .subscribe( (message: any) => {
      this.packagesArray = message;
    });

    this.broadcaster.on<string>('extraServices')
    .subscribe((message:any) => {
        this.extraServices = message;
        console.log('extraServices'+this.extraServices);
    });
  }
}
