import { Component, OnInit } from '@angular/core';
import {ContinueMovieService} from '../../services/continue-movie.service';
import {Movie} from '../../objects/movie';
import {MovieService} from '../../services/movie.service';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import {ContinueMovies} from '../../objects/continue-movies';

@Component({
  selector: 'app-profile-continue-movies',
  templateUrl: './profile-continue-movies.component.html',
  styleUrls: ['./profile-continue-movies.component.scss']
})
export class ProfileContinueMoviesComponent implements OnInit {
  continueMovies: Movie[] = [];
  movieWatchTimes: number[] = [];

  constructor(
    private continueMovieService: ContinueMovieService,
    private movieService: MovieService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getContinueMovies();
  }

  getContinueMovies() {
    this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(user => {
      const continueMovies: ContinueMovies[] = user[0].continueMovies;
      let request = '';

      for (let i = 0; i < continueMovies.length; i++) {
        if (i < continueMovies.length - 1) {
          request += `id=${continueMovies[i].movieId}&`;
        } else {
          request += `id=${continueMovies[i].movieId}`;
        }
        this.movieWatchTimes.push(continueMovies[i].watchTime);
      }

      this.movieService.getMoviesById(request).subscribe(res => {
        this.continueMovies = res;
      });
    });
  }

  deleteMovieInContinueMovies(movieId: number) {
    this.continueMovieService.deleteMovie()
  }

}
