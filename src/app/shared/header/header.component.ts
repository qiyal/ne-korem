import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {NavbarService} from "../../core/services/navbar.service";
import {UserService} from '../../core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  input: string;
  clickSearch: boolean;

  constructor(
    private authService: AuthService,
    public navbarService: NavbarService,
  ) { }

  ngOnInit(): void {
    this.input = '';
    this.clickSearch = false;
  }

  isAuth(): boolean {
    return this.authService.isAuth();
  }

  getAvatar(): string {
    return this.authService.userAvatarUrl;
  }

}
