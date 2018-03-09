import { Component, OnInit, Input, Injector } from '@angular/core';
import { User } from '../../../model/user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { DashboardCard } from '@app/features/layouts/dashboard/cards/dashboard-card';
import { AbstractDashboardCard } from '@app/features/layouts/dashboard/cards/abstract-dashboard-card';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent extends AbstractDashboardCard implements OnInit {

  $users: Observable<User[]> = new Observable<User[]>();

  constructor(private injector: Injector) {
    super(injector.get(DashboardCard.metadata.NAME),
      injector.get(DashboardCard.metadata.ROUTERLINK),
      injector.get(DashboardCard.metadata.ICONCLASS),
      injector.get(DashboardCard.metadata.COLS),
      injector.get(DashboardCard.metadata.ROWS),
      injector.get(DashboardCard.metadata.COLOR)
    );
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
