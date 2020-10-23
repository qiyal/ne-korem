import { Component, OnInit } from '@angular/core';
import {Movies} from '../objects/movies';
import {MovieService} from '../services/movie.service';
import {Movie} from '../objects/movie';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  inputChildData: Movie[];
  status;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // this.inputChildData = new Movies();
    this.status = 'qwe';
  }

  checkGenreF(str: string) {
    this.status = str;
    console.log(str);
  }

  getMovies(): Movie[] {
    return this.movieService.getMovies();
  }

  doSpliceMovieService(start: number, end: number): Movie[] {
    return this.movieService.doSliceMoviesArr(start, end);
  }

}
