import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { LoginModule } from '@app/features/login/login.module';
import { SideNavComponent } from '@app/features/layouts/side-nav/side-nav.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { DashboardModule } from '@app/features/layouts/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // browser and animation modules.
    BrowserModule,
    BrowserAnimationsModule,
    // routing module.
    AppRoutingModule,
    CoreModule,
    SharedModule,
    // DashboardModule,
    LoginModule
  ],
  providers: [],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
