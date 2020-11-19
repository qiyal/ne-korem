import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  auth = false;

  constructor() { }

  isAuth() {
    return this.auth;
  }

}
