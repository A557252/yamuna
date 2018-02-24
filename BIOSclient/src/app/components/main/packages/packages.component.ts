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
  totalAmount: any = 0;

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
  }
}
