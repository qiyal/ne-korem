import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { User } from '../objects/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  logOutUser() {
    this.authService.logOut();
  }

  getUser() {
    this.user = this.userService.getUserByLogin(localStorage.getItem('userLogin'));
  }
}
