import { Component, OnInit } from '@angular/core';
import {Movie} from '../../objects/movie';

@Component({
  selector: 'app-editorial-box',
  templateUrl: './editorial-box.component.html',
  styleUrls: ['./editorial-box.component.scss']
})
export class EditorialBoxComponent implements OnInit {
  movies: Movie[] = [
    new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie1.webp', 'Fantastic Beasts and Where to Find Them', 9.3),
    new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie2.webp', 'A Dog\'s Purpose 2', 5.1),
    new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie3.webp', 'A Dog\'s Purpose 2', 3.5),
    new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/movie4.webp', 'A Dog\'s Purpose 2', 2.2),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
