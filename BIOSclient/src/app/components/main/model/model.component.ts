import { Component, OnInit } from '@angular/core';
import { Broadcaster } from '../../../utils/brodcaster';
import { Model } from '../../share/model.model';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  model: Model;
  constructor(private broadcaster: Broadcaster) { }

  ngOnInit() {
    this.broadcaster.on<string>('modelData')
    .subscribe((message: any) => {
      this.model = message;
    });

  }

}
