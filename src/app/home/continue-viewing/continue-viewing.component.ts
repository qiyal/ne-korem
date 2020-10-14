import {Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Movie} from '../../objects/movie';
import {Movies} from '../../objects/movies';

@Component({
  selector: 'app-continue-viewing',
  templateUrl: './continue-viewing.component.html',
  styleUrls: ['./continue-viewing.component.scss']
})
export class ContinueViewingComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Input() movies: Movies;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // for (const propName in changes) {
    //   const chng = changes[propName];
    //   const cur  = JSON.stringify(chng.currentValue);
    //   const prev = JSON.stringify(chng.previousValue);
    //   console.log(`ContinueViewingComponent: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    // }
  }

  ngOnInit(): void {
    // console.log('ContinueViewingComponent: OnInit(movies variable)');
  }

  ngDoCheck() {
    // console.log('ContinueViewingComponent: DoChek');
  }

  ngOnDestroy() {
    // console.log('ContinueViewingComponent: OnDestroy');
  }

  deleteInArr(index: number) {
    console.log(index);
    this.movies.arrContinueMovies.splice(index, 1);
    // console.log(this.movies);
  }


}
