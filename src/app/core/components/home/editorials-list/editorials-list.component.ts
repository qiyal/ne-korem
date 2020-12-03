import { Component, OnInit } from '@angular/core';
import {EditorialListService} from '../../../services/editorial-list.service';
import {Editorial} from '../../../objects/editorial';

@Component({
  selector: 'app-editorials-list',
  templateUrl: './editorials-list.component.html',
  styleUrls: ['./editorials-list.component.scss']
})
export class EditorialsListComponent implements OnInit {
  editorialList: Editorial[];

  constructor(private editorialListService: EditorialListService) { }

  ngOnInit(): void {
    this.getEditorialList();
  }

  getEditorialList() {
    this.editorialListService.get6EditorialLastAdd().subscribe(res => {
      this.editorialList = res;
    });
  }

}
