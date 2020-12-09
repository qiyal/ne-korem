import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {EditorialListService} from '../../services/editorial-list.service';
import {Movie} from '../../objects/movie';
import {Editorial} from '../../objects/editorial';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  input: string;
  movies: Movie[] = [];
  editrs: Editorial[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private editorialListService: EditorialListService
  ) { }

  ngOnInit(): void {
    this.input = this.route.snapshot.paramMap.get('type');
    this.getMovies();
    this.getEditors();

    // this.getUrl();

  }

  getMovies() {
    this.movieService.getMoviesBySeacrh(this.input).subscribe(res => {
      this.movies = res;
    });
  }

  getEditors() {
    this.editorialListService.getEditorsBySearch(this.input).subscribe(res => {
      this.editrs = res;
    });
  }

  // getUrl() {
  //   this.route.paramMap.subscribe(res => {
  //     this.input = res['input'];
  //   });
  // }


}
