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

  public deleteMovie(id: number): Observable<ContinueMovies[]> {
    this.logger.log('Removing continue movie with id ' + id + ' in continueMovies array.[ContinueMovieService]');
    return this.http.delete<ContinueMovies[]>(this.api + `/continueMovies/${id}`);
  }
}
