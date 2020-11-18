import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  auth = true;

  constructor() { }

  isAuth() {
    console.log("Auth: " + this.auth);
    return this.auth;
  }

}
