import { Component, OnInit } from '@angular/core';
import {Movie} from '../../core/objects/movie';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../core/services/movie.service';

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

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
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

}
