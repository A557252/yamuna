import { Component, HostListener } from '@angular/core';
import { UtilFunctions } from './utils/utilFunctions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isUserLoggedIn() {
    return UtilFunctions.isUserLoggedIn();
  }
}
