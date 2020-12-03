import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-editorial-card',
  templateUrl: './editorial-card.component.html',
  styleUrls: ['./editorial-card.component.scss']
})
export class EditorialCardComponent implements OnInit {
  @Input() card;

  constructor() { }

  ngOnInit(): void {
  }

}
