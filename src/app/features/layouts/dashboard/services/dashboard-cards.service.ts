import { Injectable } from '@angular/core';
import { DashboardCard } from '../cards/dashboard-card';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DashboardCardsService {

  private _cards: BehaviorSubject<DashboardCard[]> = new BehaviorSubject<DashboardCard[]>([]);

  constructor() { }

  addCard(card: DashboardCard): void {
    this._cards.next(this._cards.getValue().concat(card));
  }

  get cards(): BehaviorSubject<DashboardCard[]> {
    return this._cards;
  }

}
