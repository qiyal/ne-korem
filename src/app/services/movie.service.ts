import { Injectable } from '@angular/core';
import {Movie} from '../objects/movie';
import {LoggerService} from './logger.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MovieService {

  api = 'http://localhost:3000';

  constructor(
    private logger: LoggerService,
    private http: HttpClient
  ) {}

  getMoviesById(request: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.api + '/movies?' + request);
  }

}
