import { Injectable } from '@angular/core';
import {Movie} from '../objects/movie';
import {LoggerService} from './logger.service';

@Injectable()
export class MovieService {
  private movies: Movie[] = [];

  constructor(private logger: LoggerService) {}

  getMovies(): Movie[] {
    this.logger.log('Getting movies.[MovieService]');
    return this.movies;
  }

  doSliceMoviesArr(start: number, end: number) {
    this.logger.log('Doing splice, getting movies start index ' + start + ' and end index ' + end + ' in array movies.[MovieService]');
    return this.movies.slice(start, end);
  }

  getMovieById(id: number): Movie {
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].id === id) {
        return this.movies[i];
      }
    }
  }

  getMoviesById(moviesId: number[]): Movie[] {
    let movies: Movie[] = [];

    for (let id of moviesId) {
      movies.push(this.getMovieById(id));
    }

    return movies;
  }
}
