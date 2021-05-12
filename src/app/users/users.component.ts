import { Component, OnInit } from '@angular/core';
import { User } from './models/user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user_list: User[] = [];
  headElements = ['ID', 'Name', 'Email', 'Phone', 'Birthdate','',''];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => this.user_list = users);
  }

  delete(user: User): void {
    this.user_list = this.user_list.filter(u => u !== user);
    this.userService.deleteUser(user.id).subscribe();
  }


}
