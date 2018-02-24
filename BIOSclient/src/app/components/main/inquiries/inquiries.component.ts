import { Component, OnInit } from '@angular/core';
import { Broadcaster } from '../../../utils/brodcaster';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent implements OnInit {

  inquiriesArray: any = [];

  constructor(private broadcaster: Broadcaster) { }

  ngOnInit() {
    this.broadcaster.on<string>('updateInquiries')
    .subscribe(message => {
      console.log('updateInquiries'+message);
      this.inquiriesArray = message;
    });
  }

}
