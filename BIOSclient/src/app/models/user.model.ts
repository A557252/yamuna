import { Injectable } from '@angular/core';

@Injectable()
export class User {
  private _userId?: number;
  private _loginName?: string;
  private _userName?: string;
  private _userPassword?: string;
  private _userRole?: string;
  private _IsActive?: string;

  constructor(
    
  ) { }

  get userId(): number {
    return this._userId;
  }

  set userId(userId: number) {
    this._userId = userId;
  }

  get loginName(): string {
    return this._loginName;
  }

  set loginName(loginName: string) {
    this._loginName = loginName;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(userName: string) {
    this._userName = userName;
  }

  get userPassword(): string {
    return this._userPassword;
  }

  set userPassword(userPassword: string) {
    this._userPassword = userPassword;
  }

  get userRole(): string {
    return this._userRole;
  }

  set userRole(userRole: string) {
    this._userRole = userRole;
  }

  get IsActive(): string {
    return this._IsActive;
  }

  set IsActive(IsActive: string) {
    this._IsActive = IsActive;
  }

}
