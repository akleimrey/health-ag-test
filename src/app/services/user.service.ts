import { Injectable } from '@angular/core';
import { IAddress } from '../interfaces/address';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: IUser;

  constructor() { }

  set _user(healthAgUser: IUser) {
    this.user = healthAgUser;
  }

  get _user() {
    return this.user;
  }

  set _userAddress(address: IAddress) {
    this._user.address = address;
  }

  get _userAddress() {
    return this.user.address;
  }

}
