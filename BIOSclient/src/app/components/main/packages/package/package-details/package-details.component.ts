import { Component, OnInit, Input } from '@angular/core';
import { Package } from '../../../../share/package.model';


@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {

  @Input() packageObj: Package;
  constructor() { }

  ngOnInit() {

  }

}
