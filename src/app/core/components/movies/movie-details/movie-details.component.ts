import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../objects/movie';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../../services/movie.service';
import {User} from '../../../objects/user';
import {UserService} from '../../../services/user.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  movieId: number;
  aboutClick = true;
  detailsClick = false;
  inputData1: Movie[] = [];
  inputData2: Movie[] = [];
  status;
  clickAdd = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id');
    this.getMovie();
    this.getInputData1();
    this.getInputData2();
    this.status = 'qwe';
  }

  checkGenreF(str: string) {
    this.status = str;
  }

  getMovie() {
    this.movieService.getMovieById(this.movieId).subscribe(res => {
      this.movie = res;
    });
  }

  getInputData1() {
    this.movieService.get10MoviesByGenre('comedy').subscribe(res => {
      this.inputData1 = res;
    });
  }

  getInputData2() {
    this.movieService.get10MoviesByGenre('anime').subscribe(res => {
      this.inputData2 = res;
    });
  }

  setRating(rating: number): string {
    if (rating < 3) {
      return '#f6f6f6';
    } else if (rating < 5) {
      return '#686868';
    } else if (rating < 7) {
      return '#f6db3b';
    } else {
      return '#72f643';
    }
  }

  aboutBtnClick() {
    if (!this.aboutClick) {
      this.detailsClick = false;
      this.aboutClick = true;
    }
  }

  detailsBtnClick() {
    if (!this.detailsClick) {
      this.aboutClick = false;
      this.detailsClick = true;
    }
  }

  addToFa() {
    this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(userRes => {
      let user: User = userRes[0];
      let has = false;
      this.clickAdd = !this.clickAdd;

      for (let i = 0; i < user.favoriteMovie.length; i++) {
        if (this.movie.id === user.favoriteMovie[i]) {
          has = true;
          break;
        }
      }

      if (has === false && this.clickAdd === true) {
        console.log("Add");
        user.favoriteMovie.push(this.movie.id);
        this.userService.updateUser(user).subscribe();
      }

      if (has === true && this.clickAdd === false) {
        console.log("NO");

        let newArr = [];
        for (let i = 0; i < user.favoriteMovie.length; i++) {
          if (this.movie.id !== user.favoriteMovie[i]) {
            newArr.push(user.favoriteMovie[i]);
          }
        }
        user.favoriteMovie = newArr;
        this.userService.updateUser(user).subscribe();
      }
    });
  }
}
