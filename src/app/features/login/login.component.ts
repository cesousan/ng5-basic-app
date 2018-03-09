import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { Router } from '@angular/router';
import { AvatarService } from '../../shared/services/avatar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rdmUser: any;

  constructor(private authService: AuthService,
              private router: Router,
              private avatarService: AvatarService) { }

  ngOnInit() {
    this.initModel();
  }

  canLogin(): boolean {
    return !this.authService.isAuthenticated();
  }

  login(): void {
    this.goDashboard();
  }

  goDashboard() {
    this.router.navigate(['dashboard']);
  }

  private initModel(): void {
    const randomID = this.avatarService.getRandomId();
    this.rdmUser = {
      id: randomID,
      avatar: this.avatarService.getAvatarByIdOrRandom(randomID)
    };
  }

}
