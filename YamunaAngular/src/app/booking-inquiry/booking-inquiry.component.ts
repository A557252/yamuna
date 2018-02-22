import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-inquiry',
  templateUrl: './booking-inquiry.component.html',
  styleUrls: ['./booking-inquiry.component.css']
})
export class BookingInquiryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  packagesArray:any = [{
    name: "Basic package"
  },
  {
    name: "Summer package"
  },
  {
    name: "Vacation package"
  },
  {
    name: "15,000 km Service inspection"
  }];
}
