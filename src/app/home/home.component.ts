import {Component, OnInit, QueryList, ViewChildren, AfterViewInit, ViewChild} from '@angular/core';
import {CarouselComponent} from './carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
