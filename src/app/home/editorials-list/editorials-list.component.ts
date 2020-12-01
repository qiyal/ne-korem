import { Component, OnInit } from '@angular/core';
import {EditorialList} from '../../objects/editorial-list';
import {EditorialListService} from '../../services/editorial-list.service';

@Component({
  selector: 'app-editorials-list',
  templateUrl: './editorials-list.component.html',
  styleUrls: ['./editorials-list.component.scss']
})
export class EditorialsListComponent implements OnInit {
  editorialList: EditorialList[];

  constructor(private editorialListService: EditorialListService) { }

  ngOnInit(): void {
    this.getEditorialList();
  }

  getEditorialList() {
    this.editorialList = this.editorialListService.getEditorialList();
  }

}
