import {Component, OnInit, QueryList, ViewChildren, AfterViewInit, ViewChild} from '@angular/core';
import {CarouselComponent} from './carousel/carousel.component';
import {Movies} from '../objects/movies';
import {MovieService} from '../services/movie.service';
import {Movie} from '../objects/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputData1;
  inputData2;
  inputData3;
  inputData4;
  status;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.status = 'qwe';
    this.inputData1 = this.doSpliceMovieService(1, 5);
    this.inputData2 = this.doSpliceMovieService(5, 9);
    this.inputData3 = this.doSpliceMovieService(9, 13);
    this.inputData4 = this.doSpliceMovieService(12, 16);
  }

  checkGenreF(str: string) {
    this.status = str;
  }

  doSpliceMovieService(start: number, end: number): Movie[] {
    return this.movieService.doSliceMoviesArr(start, end);
  }

}
