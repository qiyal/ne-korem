import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {NavbarService} from "../services/navbar.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  input: string;
  clickSearch: boolean;

  constructor(private authService: AuthService, public navbarService: NavbarService) { }

  ngOnInit(): void {
    this.input = '';
    this.clickSearch = false;
  }

  isAuth(): boolean {
    return this.authService.isAuth();
  }

}
