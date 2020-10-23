import { Component, OnInit } from '@angular/core';
import {Movies} from '../objects/movies';
import {EditorialListCardService} from '../services/editorial-list-card.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {
  editorialListCards = [];

  constructor(private editorialListCardService: EditorialListCardService) { }

  ngOnInit(): void {
    this.getEditorialListCards();
  }

  getEditorialListCards() {
    this.editorialListCards = this.editorialListCardService.getEditorialListCards();
  }

}
