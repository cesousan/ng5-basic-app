import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { DashboardModule } from '@app/features/layouts/dashboard/dashboard.module';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', loadChildren: 'app/features/layouts/dashboard/dashboard.module#DashboardModule' /*component: DashboardModule */},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
