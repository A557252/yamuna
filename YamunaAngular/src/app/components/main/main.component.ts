import { Component, OnInit } from '@angular/core';
import { InquiryService } from '../../services/InquiryService';
import { Broadcaster } from '../../utils/brodcaster';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  totalAmount: any = 0;
  constructor(private _inquiryService: InquiryService, private brodcaster: Broadcaster) { }

  ngOnInit() {
    this.brodcaster.on<string>('updateAmount')
    .subscribe(message => {
      this.totalAmount = message;
    });
  }

}
