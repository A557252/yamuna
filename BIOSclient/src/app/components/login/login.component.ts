import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../services/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  user: User;
  constructor(private router: Router, private _usrSer: UserService) {
    this.user = new User();
   }

  ngOnInit() {
  }

 loginUser(data) {
   this._usrSer.loginUser(data).then((res) => {
    if (res.Status) {
      this.router.navigate(['/dashboard']);
    } else {
      this.submitted = true;
      this.router.navigate(['/login']);
    }
   }, (resErr) => {
    console.log(resErr);
   });
 }
}
