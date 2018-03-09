import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DashboardCard } from '@app/features/layouts/dashboard/cards/dashboard-card';
import { DashboardCardsService } from '@app/features/layouts/dashboard/services/dashboard-cards.service';
import { UsersListComponent } from '../../users/users-list/users-list.component';
import { Observable } from 'rxjs/Observable';
import { ObservableMedia } from '@angular/flex-layout';
import { AbstractDashboardCard } from '@app/features/layouts/dashboard/cards/abstract-dashboard-card';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  cards: DashboardCard[] = [];
  cols: Observable<number>;
  cols_big: Observable<number>;
  cols_sml: Observable<number>;

  $cards: Subject<any> = new Subject();

  constructor(private cardService: DashboardCardsService,
              private observableMedia: ObservableMedia) {
    this.cardService.cards.subscribe(cards => this.cards = cards);
    this.$cards.subscribe(card => {
      console.log(card);
      console.log(card.component);
      console.log(card.component.__prop__metadata__.componentCloned);

      // card.component.__prop__metadata__.componentCloned.subscribe(listener => {
      //   console.log('listnening');
      // });

      // const usersComponent: UsersListComponent = card.component;
      // console.log(usersComponent);
      // usersComponent.componentCloned.subscribe(listener => console.log('listened!'));
    });
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


  ngAfterViewInit() {

    // const usersComponent: UsersListComponent = card.component;
    // console.log(usersComponent);
    // usersComponent.componentCloned.subscribe(listener => console.log('listened!'));
  }

  createCards(): void {

    const rdm: number = Math.floor(Math.random() * 10);
    let numCol = new Observable<number>();
    let numRow = new Observable<number>();
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
        numRow = this.cols_sml;
        break;
      default:
        numCol = this.cols_sml;
        numRow = this.cols_sml;
    }

    const usersListInfo: CardInfo = new CardInfo('users', '/dashboard/users', 'blue', 'fa=users', this.cols_big, this.cols_big);
    const card = createDashboardCard(usersListInfo, UsersListComponent, usersListInfo.cols, usersListInfo.rows);
    this.cardService.addCard(card);
    dispatch(card, this.$cards);

  }

  deleteCard(card: AbstractDashboardCard): void {
    console.log(card);
  }

  cardC(card: AbstractDashboardCard): void {
    console.log(card);
  }
}

class CardInfo {


  constructor(public name: string,
              public  routerLink: string,
              public color: string,
              public iconClass: string,
              public cols ?: Observable<number>,
              public rows?: Observable<number>
) {}
}

const dispatch = (card: DashboardCard, cards: Subject<any>): void => {
  console.log('dispatched!');
  cards.next(card);
};

function createDashboardCard(cardInfo: CardInfo, component: any,
    cols: Observable<number>, rows: Observable<number>): DashboardCard {
  return new DashboardCard({
        name: { key: DashboardCard.metadata.NAME, value: cardInfo.name},
        routerLink: { key: DashboardCard.metadata.ROUTERLINK, value: cardInfo.routerLink},
        cols: { key: DashboardCard.metadata.COLS, value: cols },
        rows: { key: DashboardCard.metadata.ROWS, value: rows },
        color: { key: DashboardCard.metadata.COLOR, value: cardInfo.color },
        iconClass: { key: DashboardCard.metadata.ICONCLASS, value: cardInfo.iconClass }, // 'fa=users'
  }, component
  );
}


