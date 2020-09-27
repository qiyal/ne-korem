import { Component, OnInit } from '@angular/core';
import {Movie} from '../../objects/movie';

@Component({
  selector: 'app-continue-viewing',
  templateUrl: './continue-viewing.component.html',
  styleUrls: ['./continue-viewing.component.scss']
})
export class ContinueViewingComponent implements OnInit {
  movies: Movie[] = [
    new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie7.webp', 'Fantastic Beasts and Where to Find Them', 9.0),
    new Movie(1400, 6170, '1 h 21 min', '../../assets/images/movies/movie9.webp', 'A Dog\'s Purpose 2', 5.0),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
