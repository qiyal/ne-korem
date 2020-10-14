import { Component, OnInit } from '@angular/core';
import {Movie} from '../../objects/movie';
import {Editorial} from '../../objects/editorial';
import {Movies} from '../../objects/movies';

@Component({
  selector: 'app-editorial-box',
  templateUrl: './editorial-box.component.html',
  styleUrls: ['./editorial-box.component.scss']
})
export class EditorialBoxComponent implements OnInit {
  k: number;
  total: number;
  movies: Movies;

  constructor() { }

  ngOnInit(): void {
    this.movies = new Movies();
    this.k = 0;
    this.total = 0;
    console.log('Start: ' + this.total);
  }

  nextMovie() {
    console.log('Was: ' + this.total);
    if (this.k < this.movies.arrEditorial.length - 1) {
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
