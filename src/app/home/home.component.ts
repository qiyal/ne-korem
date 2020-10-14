import {Component, OnInit, QueryList, ViewChildren, AfterViewInit, ViewChild} from '@angular/core';
import {CarouselComponent} from './carousel/carousel.component';
import {Movies} from '../objects/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputData = new Movies();

  constructor() { }

  ngOnInit(): void {
  }

}
