import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Movie} from '../../objects/movie';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnChanges, OnInit, OnDestroy {
  movies: Movie[];
  lastShowMovie: Movie;
  showMovieDetail;
  aboutClick = true;
  detailsClick = false;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // for (const propName in changes) {
    //   const chng = changes[propName];
    //   const cur  = JSON.stringify(chng.currentValue);
    //   const prev = JSON.stringify(chng.previousValue);
    //   console.log(`CarouselComponent: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    // }
  }

  ngOnInit(): void {
    this.lastShowMovie = null;
    this.showMovieDetail = false;
    this.movies = [
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie1.webp', 'Movies - 1', 9.3, new Date(1990, 1, 1)),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie2.webp', 'Movies - 2', 5.1, new Date(1990, 1, 1)),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie3.webp', 'Movies - 3', 3.5, new Date(1990, 1, 1)),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie4.webp', 'Movies - 4', 2.2, new Date(1990, 1, 1)),
    ];
  }

  ngOnDestroy() {
    // this.showMovieDetail = false;
    // console.log('CarouselComponent: OnDestroy');
  }

  onClickMovieCarouselCard(movie: Movie) {
    if (movie !== this.lastShowMovie) {
      this.lastShowMovie = movie;
      this.showMovieDetail = true;
    }
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
