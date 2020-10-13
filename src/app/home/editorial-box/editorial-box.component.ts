import { Component, OnInit } from '@angular/core';
import {Movie} from '../../objects/movie';
import {Editorial} from '../../objects/editorial';

@Component({
  selector: 'app-editorial-box',
  templateUrl: './editorial-box.component.html',
  styleUrls: ['./editorial-box.component.scss']
})
export class EditorialBoxComponent implements OnInit {
  k: number;
  total: number;
  movies: Editorial[] = [
    new Editorial('rgb(33,69,117)', 'linear-gradient(90deg, rgba(33,69,117,1) 0%, rgba(142,51,51,1) 29%, rgba(31,44,73,1) 90%)', new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie1.jpg', 'The Avengers', 9.3, new Date(2012, 1, 1))),
    new Editorial('rgb(131,26,26)', 'linear-gradient(90deg, rgba(131,26,26,1) 0%, rgba(116,29,29,1) 29%, rgba(43,58,92,1) 90%)', new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie4.jpg', 'Avengers: Age of Ultron', 2.2, new Date(2015, 1, 1))),
    new Editorial('rgb(0,0,0)', 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(202,141,28,1) 29%, rgba(9,9,8,1) 90%)', new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie3.webp', 'Avengers: Infinity War', 3.5, new Date(2018, 1, 1))),
    new Editorial('rgb(0,0,0)', 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(160,86,160,1) 29%, rgba(0,0,0,1) 90%)', new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie2.webp', 'Avengers: Endgame', 5.1, new Date(2019, 1, 1))),
  ];

  constructor() { }

  ngOnInit(): void {
    this.k = 0;
    this.total = 0;
    console.log('Start: ' + this.total);
  }

  nextMovie() {
    console.log('Was: ' + this.total);
    if (this.k < this.movies.length - 1) {
      this.total = 100 * ++this.k;
    }
    console.log('Become: ' + this.total);

  }

  prevMovie() {
    console.log('Was: ' + this.total);
    if (this.k > 0) {
      this.total = 100 * --this.k;
    }
    console.log('Become: ' + this.total);
  }

}
