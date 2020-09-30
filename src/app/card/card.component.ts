import {Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, SimpleChanges, DoCheck} from '@angular/core';
import {Movie} from '../objects/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Output() deleteMoviesInHistoryWatching = new EventEmitter<number>();
  @Input() movie: Movie;
  @Input() movieIndex: number;

  percent: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`CardComponent: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit(): void {
    this.percent = Math.floor(this.movie.time * 100 / this.movie.totalTime) + '%';
    console.log('CardComponent: OnInit(set percent variable)');
  }

  ngDoCheck() {
    console.log('CardComponent: DoCheck');
  }

  ngOnDestroy() {
    console.log('CardComponent: OnDestroy');
  }

  deleteMovieInHistory() {
    // console.log("index dlete: " + this.movieIndex);
    this.deleteMoviesInHistoryWatching.emit(this.movieIndex);
  }

}
