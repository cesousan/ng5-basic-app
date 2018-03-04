import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

}
