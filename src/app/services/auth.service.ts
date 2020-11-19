import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  auth: boolean;
  authUserLogin: string;

  constructor(private userService: UserService, private router: Router) {
    this.auth = false;
  }

  isAuth() {
    const userLogin: string = localStorage.getItem('userLogin');

    if (userLogin) {
      this.auth = true;
    }

    return this.auth;
  }

  doAuth(data): boolean {
    if (this.userService.checkUser(data.login, data.password)) {
      this.auth = true;
      this.authUserLogin = data.login;
      localStorage.setItem('userLogin', data.login);
    }

    return this.auth;
  }

  logOut() {
    localStorage.removeItem('userLogin');
    this.auth = false;
    this.router.navigate(['/login']);
  }

}
