import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../services/navbar.service";
import {FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validUser: boolean;
  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  constructor(public navbarService: NavbarService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.navbarService.hide();
    console.log("valid: " + this.validUser);
  }

  submit() {
    this.validUser = this.authService.doAuth(this.loginForm.getRawValue());

    if (this.validUser) {
      this.router.navigate(['/profile']);
    }
  }
}
