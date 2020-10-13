import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Movie} from '../../objects/movie';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnChanges, OnInit, OnDestroy {
  movies: Movie[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`CarouselComponent: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit(): void {
    this.movies = [
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie1.webp', 'Fantastic Beasts and Where to Find Them', 9.3, new Date(1990, 1, 1)),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie2.webp', 'A Dog\'s Purpose 2', 5.1, new Date(1990, 1, 1)),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie3.webp', 'A Dog\'s Purpose 2', 3.5, new Date(1990, 1, 1)),
      new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie4.webp', 'A Dog\'s Purpose 2', 2.2, new Date(1990, 1, 1)),
    ];
    console.log('CarouselComponent: OnInit');
  }

  ngOnDestroy() {
    console.log('CarouselComponent: OnDestroy');
  }
}
