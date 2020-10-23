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
  inputData = new Movies();
  status;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
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
