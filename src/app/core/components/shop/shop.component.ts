import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../objects/movie';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  inputData1;
  inputData2;
  inputData3;
  inputData4;
  status;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.status = 'qwe';
    // this.inputData1 = this.doSpliceMovieService(16, 20);
    // this.inputData2 = this.doSpliceMovieService(20, 24);
    // this.inputData3 = this.doSpliceMovieService(24, 28);
    // this.inputData4 = this.doSpliceMovieService(27, 31);
  }

  checkGenreF(str: string) {
    this.status = str;
  }

  // doSpliceMovieService(start: number, end: number): Movie[] {
  //   return this.movieService.doSliceMoviesArr(start, end);
  // }

}
