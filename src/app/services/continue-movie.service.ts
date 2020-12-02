import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {User} from '../objects/user';
import {ContinueMovies} from '../objects/continue-movies';

@Injectable()
export class ContinueMovieService {
  api = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private userService: UserService,
    private logger: LoggerService
  ) {}

  public getContinueMovies(id: number): Observable<ContinueMovies[]> {
    return this.http.get<ContinueMovies[]>(this.api + `/users/${id}/continueMovies`);
  }

  public deleteMovie(id: number): Observable<any> {
    console.log("GET ID: " + id);
    return this.http.delete<any>(this.api + `/continueMovies/${id}`);
  }
}
