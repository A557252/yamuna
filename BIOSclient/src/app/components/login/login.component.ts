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
  user: User;
  loginFormObj:any = {};
  constructor(private router: Router, private _usrSer: UserService) {
    this.user = new User();
   }

  ngOnInit() {
  }

 loginUser() {
   debugger
   if(Object.keys(this.loginFormObj).length <= 0) {
      return false;
   }
   if (this.loginFormObj.userName == 'horst' && this.loginFormObj.password == 'abc123') {
      UtilFunctions.setLocalStorage('userDetail','horst');
      this.router.navigate(['/dashboard']);
   } else {
    this.loginFormObj = {};
     this.loginFormObj.loginFormError = {
      hasError: true,
      errorMsg: 'UserName or password is in correct'
     };
   }
  //  this._usrSer.loginUser(data).then((res) => {
  //   if (res.Status) {
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     this.submitted = true;
  //     this.router.navigate(['/login']);
  //   }
  //  }, (resErr) => {
  //   console.log(resErr);
  //  });
 }
}
