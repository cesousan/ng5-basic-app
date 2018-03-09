import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardCardSpawnerComponent } from './cards/dashboard-card-spawner/dashboard-card-spawner.component';
import { DashboardCardsService } from '@app/features/layouts/dashboard/services//dashboard-cards.service';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UsersModule } from '../../users/users.module';
import { UsersListComponent } from '../../users/users-list/users-list.component';
import { UserComponent } from '@app/features/users/user/user.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    UsersModule
  ],
  declarations: [
    DashboardComponent,
    DashboardCardSpawnerComponent
  ],
  providers: [DashboardCardsService],
  entryComponents: [UsersListComponent]
})
export class DashboardModule { }
