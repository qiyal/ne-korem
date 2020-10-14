import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  input: string;
  clickSearch: boolean;

  constructor() { }

  ngOnInit(): void {
    this.input = '';
    this.clickSearch = false;
  }

}
