/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { UsersService } from './users.service';
import { UsersHttpService } from './users.http.service';
import { UsersHttpServiceMock } from './users.http.service.mock';
import { MockUsers } from './users.data.mock';

describe('Service: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersHttpService,
          useClass: UsersHttpServiceMock,
        }
      ]
    });
  });

  it('should create a service', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  it('should return users', inject([UsersService], (service: UsersService) => {
    return service.getUsers().subscribe( data => {
      expect(data).toEqual(MockUsers);
    });
  }));
});
