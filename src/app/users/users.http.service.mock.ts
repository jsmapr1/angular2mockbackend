import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MockUsers } from './users.data.mock';

export class UsersHttpServiceMock {
  get() {
    let response = new ResponseOptions({
      body: JSON.stringify(MockUsers)
    });
    return Observable.of(new Response(response));
  }
}
