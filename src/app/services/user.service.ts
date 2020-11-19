import { Injectable } from '@angular/core';
import {User} from '../objects/user';

@Injectable()
export class UserService {
  private users: User[] = [];

  constructor() {
    this.users = [
      new User(26244, 'nicos', '12345', 'nico@gmail.com', 'Yerbolat', 'Pazyl', [1, 2, 3, 4], [], [7, 8, 9, 10, 11, 12, 13], [])
    ];
  }

  checkUser(login: string, password: string): boolean {
    for (let i = 0; i < this.users.length; ++i) {
      const user: User = this.users[i];
      if (user.login === login && user.password === password) {
        return true;
      }
    }
    return false;
  }

  getUserByLogin(login: string): User {
    for (let user of this.users) {
      if (user.login === login) {
        return user;
      }
    }
    return null;
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
