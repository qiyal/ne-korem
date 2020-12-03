import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Movie} from '../../../objects/movie';
import {MovieService} from '../../../services/movie.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnChanges, OnInit, OnDestroy {
  @Input() genre: string;
  @Input()
  get checkGenre(): string { return this._checkGenre; }
  set checkGenre(checkGenre: string) {
    this._checkGenre = (checkGenre) || null;
    if (this.checkGenre !== 'qwe' && this.checkGenre !== this.genre) {
      this.closeDetail();
    }
  }
  private _checkGenre;
  movies: Movie[];
  @Output() getGenre = new EventEmitter<string>();

  lastShowMovie: Movie;
  showMovieDetail;
  aboutClick = true;
  detailsClick = false;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    // for (const propName in changes) {
    //   const chng = changes[propName];
    //   const cur  = JSON.stringify(chng.currentValue);
    //   const prev = JSON.stringify(chng.previousValue);
    //   console.log(`CarouselComponent: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    // }
  }

  ngOnInit(): void {
    this.getMovies();
    this.lastShowMovie = null;
    this.showMovieDetail = false;
  }

  ngOnDestroy() {
  }

  getMovies() {
    this.movieService.get10MoviesByGenre(this.genre).subscribe(res => {
      this.movies = res;
    });
  }

  onClickMovieCarouselCard(movie: Movie) {
    if (movie !== this.lastShowMovie) {
      this.detailsClick = false;
      this.aboutClick = true;
      this.lastShowMovie = movie;
      this.showMovieDetail = true;
      this.getGenre.emit(this.genre);
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

  closeDetail() {
    this.showMovieDetail = false;
    this.lastShowMovie = null;
  }
}
