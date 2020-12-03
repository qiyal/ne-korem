import {Component, Input, OnInit} from '@angular/core';
import {Editorial} from '../../../core/objects/editorial';
import {User} from '../../../core/objects/user';
import {UserService} from '../../../core/services/user.service';

@Component({
  selector: 'app-editorial-card',
  templateUrl: './editorial-card.component.html',
  styleUrls: ['./editorial-card.component.scss']
})
export class EditorialCardComponent implements OnInit {
  @Input() card: Editorial;
  user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.card.id).subscribe(res => {
      this.user = res;
    });
  }

}
