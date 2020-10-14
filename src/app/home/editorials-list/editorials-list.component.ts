import { Component, OnInit } from '@angular/core';
import {EditorialList} from '../../objects/editorial-list';
import {Movies} from '../../objects/movies';

@Component({
  selector: 'app-editorials-list',
  templateUrl: './editorials-list.component.html',
  styleUrls: ['./editorials-list.component.scss']
})
export class EditorialsListComponent implements OnInit {
  editorialList: Movies;

  constructor() { }

  ngOnInit(): void {
    this.editorialList = new Movies();
  }

}
