import {Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Movie} from '../../objects/movie';
import {ContinueMovieService} from '../../services/continue-movie.service';

@Component({
  selector: 'app-continue-viewing',
  templateUrl: './continue-viewing.component.html',
  styleUrls: ['./continue-viewing.component.scss']
})
export class ContinueViewingComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  movies: Movie[];

  constructor(private continueMovieService: ContinueMovieService) { }

  ngOnChanges(changes: SimpleChanges) {
    // for (const propName in changes) {
    //   const chng = changes[propName];
    //   const cur  = JSON.stringify(chng.currentValue);
    //   const prev = JSON.stringify(chng.previousValue);
    //   console.log(`ContinueViewingComponent: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    // }
  }

  ngOnInit(): void {
    this.getMovies();
  }

  ngDoCheck() {
    // console.log('ContinueViewingComponent: DoChek');
  }

  ngOnDestroy() {
    // console.log('ContinueViewingComponent: OnDestroy');
  }

  getMovies() {
    // this.movies = this.continueMovieService.getContinueMovies();
  }

  deleteInArr(index: number) {
    // this.continueMovieService.deleteMovie(index);
    this.getMovies();
  }
}
