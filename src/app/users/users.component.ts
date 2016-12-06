import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UsersService } from './users.service';
import { UsersHttpService } from './users.http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [
    UsersService,
    UsersHttpService
  ],
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  constructor(private service: UsersService) {}

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
