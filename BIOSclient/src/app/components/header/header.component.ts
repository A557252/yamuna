import { Component, OnInit } from '@angular/core';
import { UtilFunctions } from '../../utils/utilFunctions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDetailObj:any = {};
  constructor(private router: Router) { }

  ngOnInit() {
    //this.userDetailObj = UtilFunctions.getLocalStorage('userDetail');
  }
  logout() {
    UtilFunctions.clearLocalStorage();
    this.router.navigateByUrl('/login');
  }
  isUserLoggedIn() {
    this.userDetailObj = UtilFunctions.getLocalStorage('userDetail');
    if (this.userDetailObj) {
      return true;
    } else {
      return false;
    }
  }
}
