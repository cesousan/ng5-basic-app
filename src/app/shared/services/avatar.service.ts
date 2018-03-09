import { Injectable } from '@angular/core';


const AVATAR_URL = 'https://api.adorable.io/avatars/285';

@Injectable()
export class AvatarService {


  constructor() { }

  getAvatarByIdOrRandom(idAvatar?: number): string {
    if (!idAvatar) {
      idAvatar = this.getRandomId();
    }
    return `${AVATAR_URL}/${idAvatar}.png`;
  }

  getRandomId(): number {
    return Math.floor(Math.random() * 1000000) + 1;
  }

}
