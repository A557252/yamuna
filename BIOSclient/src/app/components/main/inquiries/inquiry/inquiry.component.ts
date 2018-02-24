import { Component, OnInit, Input } from '@angular/core';
import { Inquiry } from '../../../share/inquiry.model';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  @Input() inquiriesArray: Inquiry[];
  constructor() { }

  ngOnInit() {
  }

}
