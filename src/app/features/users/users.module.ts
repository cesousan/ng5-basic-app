import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [UsersListComponent, UserComponent],
  exports: [UsersListComponent, UserComponent]
})
export class UsersModule { }
