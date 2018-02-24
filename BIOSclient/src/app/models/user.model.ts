import { Injectable } from '@angular/core';

export class User {

  public userId: number;
  public loginName: string;
  public userName: string;
  public userPassword: string;
  public userRole: string;
  public IsActive: string;

  constructor(
    userId: number, loginName: string, userName: string, userPassword: string, userRole: string, IsActive: string
  ) {
    this.userId = userId;
    this.loginName = loginName;
    this.userName = userName;
    this.userPassword = userPassword;
    this.userRole = userRole;
    this.IsActive = IsActive;
   }


}
