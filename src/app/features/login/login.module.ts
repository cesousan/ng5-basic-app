import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@app/core/services/auth.service';
import { LoginComponent } from './login.component';
import { SharedModule } from '@app/shared/shared.module';
import { AvatarService } from '../../shared/services/avatar.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthService, AvatarService]
})
export class LoginModule { }
