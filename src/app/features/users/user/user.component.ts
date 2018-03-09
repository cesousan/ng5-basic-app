import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  @Output() sayMyName: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  hello(name: string) {
    this.sayMyName.emit(name);
  }

}
