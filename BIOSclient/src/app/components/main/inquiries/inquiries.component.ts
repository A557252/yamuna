import { Component, OnInit } from '@angular/core';
import { Broadcaster } from '../../../utils/brodcaster';
import { Model } from '../../share/model.model';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent implements OnInit {

  inquiriesArray: any = [];

  constructor(private broadcaster: Broadcaster) { }
  model: Model;
  
  ngOnInit() {
    this.broadcaster.on<string>('updateInquiries')
    .subscribe(message => {
      this.inquiriesArray = message;
    });
    this.broadcaster.on<string>('modelData')
    .subscribe((message: any) => {
      this.model = message;
    });
  }

}
