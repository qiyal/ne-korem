import { Component, OnInit } from '@angular/core';
import {Movie} from '../objects/movie';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../services/movie.service';

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
  inputData1;
  inputData2;
  status;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id');
    this.movie = this.getMovie();
    this.status = 'qwe';
    this.inputData1 = this.doSpliceMovieService(1, 5);
    this.inputData2 = this.doSpliceMovieService(5, 9);
  }

  checkGenreF(str: string) {
    this.status = str;
  }

  doSpliceMovieService(start: number, end: number): Movie[] {
    return this.movieService.doSliceMoviesArr(start, end);
  }

  getMovie() {
    return this.movieService.getMovieById(this.movieId);
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
