import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '@app/features/layouts/dashboard/cards/dashboard-card';
import { DashboardCardsService } from '@app/features/layouts/dashboard/services/dashboard-cards.service';
import { UsersListComponent } from '../../users/users-list/users-list.component';
import { Observable } from 'rxjs/Observable';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: DashboardCard[] = [];
  cols: Observable<number>;
  cols_big: Observable<number>;
  cols_sml: Observable<number>;

  constructor(private cardService: DashboardCardsService,
              private observableMedia: ObservableMedia) {
    this.cardService.cards.subscribe(cards => this.cards = cards);
  }

  ngOnInit() {
     /* Grid column map */
     const cols_map = new Map([
      ['xs', 1],
      ['sm', 4],
      ['md', 8],
      ['lg', 10],
      ['xl', 16]
    ]);
    /* Big card column span map */
    const cols_map_big = new Map([
      ['xs', 1],
      ['sm', 2],
      ['md', 4],
      ['lg', 4],
      ['xl', 4]
    ]);
    /* Small card column span map */
    const cols_map_sml = new Map([
      ['xs', 1],
      ['sm', 1],
      ['md', 2],
      ['lg', 2],
      ['xl', 2]
    ]);
    let start_cols: number;
    let start_cols_big: number;
    let start_cols_sml: number;
    cols_map.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start_cols = cols;
      }
    });
    cols_map_big.forEach((cols_big, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start_cols_big = cols_big;
      }
    });
    cols_map_sml.forEach((cols_sml, mqAliast) => {
      if (this.observableMedia.isActive(mqAliast)) {
        start_cols_sml = cols_sml;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        return cols_map.get(change.mqAlias);
      }).startWith(start_cols);
    this.cols_big = this.observableMedia.asObservable()
      .map(change => {
        return cols_map_big.get(change.mqAlias);
      }).startWith(start_cols_big);
    this.cols_sml = this.observableMedia.asObservable()
      .map(change => {
        return cols_map_sml.get(change.mqAlias);
      }).startWith(start_cols_sml);
    this.createCards();
  }

  createCards(): void {

    const rdm: number = Math.floor(Math.random() * 10);
    let numCol = new Observable<number>();
    let numRow = new Observable<number>();
    console.log(rdm);
    switch (rdm) {
      case 0:
      case 1:
      case 2:
        numCol = this.cols_sml;
        numRow = this.cols_sml;
        break;
      case 3:
      case 4:
      case 5:
        numCol = this.cols_big;
        numRow = this.cols_big;
        break;
      case 6:
      case 7:
      case 8:
       numCol = this.cols_sml;
        numRow = this.cols_big;
        break;
      default:
      numCol = this.cols_big;
      numRow = this.cols_big;
    }
    this.cardService.addCard(
      new DashboardCard(
        {
          name: { key: DashboardCard.metadata.NAME, value: 'users'},
          routerLink: { key: DashboardCard.metadata.ROUTERLINK, value: '/dashboard/users'},
          cols: { key: DashboardCard.metadata.COLS, value: numCol },
          rows: { key: DashboardCard.metadata.ROWS, value: numRow },
          color: {key: DashboardCard.metadata.COLOR, value: 'blue'}
        }, UsersListComponent
      )
    );
  }

}
