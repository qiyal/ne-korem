import { Injectable } from '@angular/core';
import {User} from '../objects/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {
  api = 'http://localhost:3000';

  constructor(
    private _http: HttpClient
  ) {}

  getUserByLogin(login: string): Observable<User> {
    return this._http.get<User>(this.api + `/users?login=${login}`);
  }

  hasLogin(login: string): Observable<any> {
    return this._http.get<Response>(this.api + `/users?login=${login}`);
  }

  createUser(user): Observable<User> {
    return this._http.post<User>(this.api + `/users`, user);
  }

  getContinueMovies() {

  }
}
