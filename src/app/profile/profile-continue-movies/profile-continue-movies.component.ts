import { Component, OnInit } from '@angular/core';
import {ContinueMovieService} from '../../services/continue-movie.service';
import {Movie} from '../../objects/movie';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-profile-continue-movies',
  templateUrl: './profile-continue-movies.component.html',
  styleUrls: ['./profile-continue-movies.component.scss']
})
export class ProfileContinueMoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private continueMovieService: ContinueMovieService, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.continueMovieService.getContinueMovies();
  }

}
