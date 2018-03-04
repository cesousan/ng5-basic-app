import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@app/core/services/auth.service';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginComponent
  ],
  declarations: [],
  providers: [AuthService]
})
export class LoginModule { }
