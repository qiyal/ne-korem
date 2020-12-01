import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {User} from '../objects/user';

@Injectable()
export class ContinueMovieService {
  api = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private userService: UserService,
    private logger: LoggerService
  ) {}

  public deleteMovie(movieId: number): Observable<User> {
    this.logger.log('Removing continue movie with id ' + movieId + ' in continueMovies array.[ContinueMovieService]');
    this.http.delete(this.api + `/users?login=${this.authService.authUserLogin}&continueMovies_like=`)
  }
}
