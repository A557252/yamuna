import { Component, OnInit } from '@angular/core';
import { Broadcaster } from '../../../utils/brodcaster';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(private broadcaster: Broadcaster) { }

  ngOnInit() {
    this.broadcaster.on<string>('updateAmount')
    .subscribe(message => {
      console.log(message);
    });
  }


}
