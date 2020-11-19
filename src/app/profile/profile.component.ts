import { Component, OnInit } from '@angular/core';
import {ContinueMovieService} from '../services/continue-movie.service';
import {Movie} from "../objects/movie";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private continueMovieService: ContinueMovieService) { }

  ngOnInit(): void {
    this.movies = this.continueMovieService.getContinueMovies();
  }

}
