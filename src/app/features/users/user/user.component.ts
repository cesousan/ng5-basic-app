import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../model/user';
import { AvatarService } from '../../../shared/services/avatar.service';

const AVATAR_URL = 'https://api.adorable.io/avatars/285';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  avatar: string;

  @Input() user: User;

  @Output() sayMyName: EventEmitter<string> = new EventEmitter<string>();

  constructor(private avatarService: AvatarService) { }

  ngOnInit() {
    this.avatar = this.avatarService.getAvatarByIdOrRandom();
  }

  hello(name: string) {
    this.sayMyName.emit(name);
  }


}
