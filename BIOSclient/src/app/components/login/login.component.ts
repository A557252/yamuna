import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../services/UserService';
import { UtilFunctions } from '../../utils/utilFunctions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  // user: User;
  loginFormObj: User;
  errorObj:any = {};
  showPassword: any = false;
  constructor(private router: Router, private _usrSer: UserService) {
    this.initializeUser();
   }

  ngOnInit() {
    UtilFunctions.clearLocalStorage();
  }

  initializeUser(){
    this.loginFormObj = new User(0,'','','','','');
  }
 loginUser(data) {
  //  if(Object.keys(data).length <= 0) {
  //     return false;
  //  }
  //  if (data.userName == 'horst' && data.userPassword == 'abc123') {
  //     UtilFunctions.setLocalStorage('userDetail','horst');
  //     this.router.navigate(['/dashboard']);
  //  } else {
  //   this.initializeUser();
  //    this.errorObj = {
  //     hasError: true,
  //     errorMsg: 'Username or Password is incorrect'
  //    };
  //  }
  if (!data.userName || !data.userPassword) {
    return false;
  }
   this._usrSer.loginUser(data).then((res: User) => {
    if (res.userId != null) {
      UtilFunctions.setLocalStorage('userDetail', JSON.stringify(res));
      this.router.navigate(['/dashboard']);
    } else {
      this.initializeUser();
      this.errorObj = {
       hasError: true,
       errorMsg: 'Username or Password is incorrect'
      };
    }
   }, (resErr) => {
      this.initializeUser();
     this.errorObj = {
      hasError: true,
      errorMsg: 'Username or Password is incorrect'
     };
    console.log(resErr);
   });
 }
}
