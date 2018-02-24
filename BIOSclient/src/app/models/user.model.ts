import { Injectable } from '@angular/core';

@Injectable()
export class User {

  constructor(
    private _userId?: number,
    private _userFullName?: string,
    private _userName?: string,
    private _userPassword?: string,
    private _userRole?: string,
    private _IsActive?: string
  ) { }

  get userId(): number {
    return this._userId;
  }

  set userId(userId: number) {
    this._userId = userId;
  }

  get userFullName(): string {
    return this._userFullName;
  }

  set userFullName(userFullName: string) {
    this._userFullName = userFullName;
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