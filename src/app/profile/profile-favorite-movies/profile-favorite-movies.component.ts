import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../objects/movie';
import {UserService} from '../../services/user.service';
import {User} from '../../objects/user';

@Component({
  selector: 'app-profile-favorite-movies',
  templateUrl: './profile-favorite-movies.component.html',
  styleUrls: ['./profile-favorite-movies.component.scss']
})
export class ProfileFavoriteMoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MovieService, private userService: UserService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    let login = localStorage.getItem('userLogin');
    let user: User;

    this.userService.getUserByLogin(login).subscribe(data => {
      user = data;
    });

    this.movies = this.movieService.getMoviesById(user.favoriteMovie);
  }

}
