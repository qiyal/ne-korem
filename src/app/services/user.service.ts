import { Injectable } from '@angular/core';
import {User} from '../objects/user';

@Injectable()
export class UserService {
  private users: User[] = [];
  private authUser: User;

  constructor() {
    this.users = [
      new User(26244, 'nicos', '12345', 'nico@gmail.com', 'Yerbolat', 'Pazyl', [],[], [], [])
    ];
  }

  checkUser(login: string, password: string): boolean {
    for (let i = 0; i < this.users.length; ++i) {
      const user: User = this.users[i];
      if (user.login === login && user.password === password) {
        this.authUser = user;
        return true;
      }
    }
    return false;
  }

  getAuthUser(): User {
    return this.authUser;
  }

  getUserById(userId: number): User {
    for (let i = 0; i < this.users.length; ++i) {
      const user: User = this.users[i];
      if (user.id === userId) {
        return user;
      }
    }
    return null;
  }
}
