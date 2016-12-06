import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersHttpService {

  constructor(private http: Http) { }

  get() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
