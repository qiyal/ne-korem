import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../objects/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() movie: Movie;
  percent: string;

  constructor() { }

  ngOnInit(): void {
    this.percent = Math.floor(this.movie.time * 100 / this.movie.totalTime) + '%';
    console.log(this.percent);
  }

}
