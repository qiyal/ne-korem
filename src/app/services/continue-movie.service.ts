import { Injectable } from '@angular/core';
import {Movie} from '../objects/movie';
import {LoggerService} from './logger.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()
export class ContinueMovieService {
  api = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private logger: LoggerService
  ) {}

  public getContinueMovies(): Observable<Movie[]> {
    this.logger.log('Getting continue movies.[ContinueMovieService]');
    return this.http.get<Movie[]>(this.api + `login=${this.authService.authUserLogin}`);
  }

  public deleteMovie(index: number) {
    this.logger.log('Removing continue movie with index ' + index + ' in continueMovies array.[ContinueMovieService]');
    this.continueMovies.splice(index, 1);
  }
}
