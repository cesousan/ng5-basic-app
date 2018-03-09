import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../model/user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  // entryComponents: [UsersListComponent]
})
export class UsersListComponent implements OnInit {

  $users: Observable<User[]> = new Observable<User[]>();

  constructor() {
    console.log('instanciation of a UsersListComponent!');
  }

  ngOnInit() {
    this.$users = of([
      new User('josé', 'specialist'),
      new User('germaine', 'sargeant'),
      // new User('mike', 'captain'),
      // new User('washington', 'first class'),
      // new User('jeffrey', 'first class'),
      // new User('rudolf', 'medic'),
      // new User('derek', 'radio'),
  ]);
  }

  sayMyName(name: string) {
    console.log(name);
  }

}
