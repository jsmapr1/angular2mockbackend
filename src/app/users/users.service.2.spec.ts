/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { UsersService } from './users.service';
import { UsersHttpService } from './users.http.service';
import { MockUsers } from './users.data.mock';

describe('Service: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        UsersHttpService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        },
      ]
    });
  });

  it('should create a service', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  it('should return users', inject([UsersService, MockBackend], (service: UsersService, backend: MockBackend) => {
    let response = new ResponseOptions({
      body: JSON.stringify(MockUsers)
    });

    const baseResponse = new Response(response);

    backend.connections.subscribe(
      (c: MockConnection) => c.mockRespond(baseResponse)
    );

    return service.getUsers().subscribe( data => {
      expect(data).toEqual(MockUsers);
    });
  }));
});
