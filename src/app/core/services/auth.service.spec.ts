import { TestBed, inject } from '@angular/core/testing';
import {} from 'jasmine';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  afterEach(() => {
    localStorage.removeItem('token');
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should return true from isAuthenticated when there is a token',
    inject([AuthService], (service: AuthService) => {
      localStorage.setItem('token', '1234');
      expect(service.isAuthenticated()).toBeTruthy();
  }));

  it('should return false from isAuthenticated when there is a no token',
    inject([AuthService], (service: AuthService) => {
      expect(service.isAuthenticated()).toBeFalsy();
  }));

});
