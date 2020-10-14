import { Component, OnInit } from '@angular/core';
import {Movies} from '../objects/movies';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  inputChildData: Movies;
  status;

  constructor() { }

  ngOnInit(): void {
    this.inputChildData = new Movies();
    this.status = 'qwe';
  }

  checkGenreF(str: string) {
    this.status = str;
    console.log(str);
  }

}
