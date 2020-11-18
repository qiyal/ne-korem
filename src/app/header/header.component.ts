import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  input: string;
  clickSearch: boolean;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.input = '';
    this.clickSearch = false;
  }

}
