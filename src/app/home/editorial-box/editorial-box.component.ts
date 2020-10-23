import { Component, OnInit } from '@angular/core';
import {Movie} from '../../objects/movie';
import {Editorial} from '../../objects/editorial';
import {Movies} from '../../objects/movies';
import {EditorialBoxService} from '../../services/editorial-box.service';

@Component({
  selector: 'app-editorial-box',
  templateUrl: './editorial-box.component.html',
  styleUrls: ['./editorial-box.component.scss']
})
export class EditorialBoxComponent implements OnInit {
  k: number;
  total: number;
  movies: Editorial[];

  constructor(private editorialBoxService: EditorialBoxService) { }

  ngOnInit(): void {
    this.getEditorials();
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

  getEditorials() {
    this.movies = this.editorialBoxService.getEditorials();
  }

}
