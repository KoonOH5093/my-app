import { Component, OnInit } from '@angular/core';
import { User } from '../users/models/user';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user_list: User[] = [];
  user?: User

  day!: Date;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUsers()
    this.day = new Date()
  }

  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => this.user_list = users);
  }

  updatedate(user:User, event: any) {
    user.birthdate = new Date(event);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.userService.updateUser(this.user!)
      .subscribe(() => this.goBack());
  }

  add(
    name: string,
    email: string,
    phone: string,
    birthdate: Date
  ): void {
    name = name.trim();
    email = email.trim();
    phone = phone.trim();
    birthdate = birthdate;
    if (!name) { return; }
    this.userService.addUser({name, email, phone, birthdate} as User)
      .subscribe(user => {
        this.user_list.push(user);
        this.goBack();
      });
  }

}
