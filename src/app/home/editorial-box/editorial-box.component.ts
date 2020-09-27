import { Component, OnInit } from '@angular/core';
import {Movie} from '../../objects/movie';

@Component({
  selector: 'app-editorial-box',
  templateUrl: './editorial-box.component.html',
  styleUrls: ['./editorial-box.component.scss']
})
export class EditorialBoxComponent implements OnInit {
  movies: Movie[] = [
    new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie1.jpg', 'Fantastic Beasts and Where to Find Them', 9.3),
    new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie2.webp', 'A Dog\'s Purpose 2', 5.1),
    new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie3.webp', 'A Dog\'s Purpose 2', 3.5),
    new Movie(3000, 6170, '1 h 42 min', '../../assets/images/movies/mmovie4.jpg', 'A Dog\'s Purpose 2', 2.2),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
