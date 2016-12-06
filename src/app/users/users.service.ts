import { Injectable } from '@angular/core';
import { UsersHttpService } from './users.http.service';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private usersHttp: UsersHttpService) { }

  getUsers() {
    return this.usersHttp.get().map(data => {
      return data.json();
    });
  }
}
