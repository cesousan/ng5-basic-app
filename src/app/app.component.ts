import { Component, OnInit, Input } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/startWith';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    const grid = new Map([
      ['xs', 8],
      ['sm', 12],
      ['md', 12],
      ['lg', 18],
      ['xl', 24]
    ]);

  }


}
