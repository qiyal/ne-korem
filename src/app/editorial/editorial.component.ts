import { Component, OnInit } from '@angular/core';
import {Movies} from '../objects/movies';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {
  arr = new Movies().arrEditorialListCard;

  constructor() { }

  ngOnInit(): void {
  }

}
