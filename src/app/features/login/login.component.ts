import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { Router } from '@angular/router';

const AVATAR_URL = 'https://api.adorable.io/avatars/285';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rdmUser: any;

  constructor(private authService: AuthService,
              private router: Router) { }

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
    const randomID = this.getRandomId();
    this.rdmUser = {
      id: randomID,
      avatar: `${AVATAR_URL}/${randomID}.png`
    };
  }

  private getRandomId(): number {
    return Math.floor(Math.random() * 1000000) + 1;
  }
}
