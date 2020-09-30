import {Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Movie} from '../../objects/movie';

@Component({
  selector: 'app-continue-viewing',
  templateUrl: './continue-viewing.component.html',
  styleUrls: ['./continue-viewing.component.scss']
})
export class ContinueViewingComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  movies: Movie[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`ContinueViewingComponent: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit(): void {
    this.movies = [
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie7.webp', 'Fantastic Beasts and Where to Find Them', 9.0),
      new Movie(1400, 6170, '1 h 21 min', '../../assets/images/movies/movie9.webp', 'A Dog\'s Purpose 2', 5.0),
    ];
    console.log('ContinueViewingComponent: OnInit(movies variable)');
  }

  ngDoCheck() {
    console.log('ContinueViewingComponent: DoChek');
  }

  ngOnDestroy() {
    console.log('ContinueViewingComponent: OnDestroy');
  }

  deleteInArr(index: number) {
    console.log(index);
    this.movies.splice(index, 1);
    // console.log(this.movies);
  }


}
