import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { LoginModule } from '@app/features/login/login.module';
import { SideNavComponent } from '@app/features/layouts/side-nav/side-nav.component';
import { AppRoutingModule } from '@app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent
  ],
  imports: [
    // browser and animation modules.
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    // routing module.
    AppRoutingModule,
    SharedModule,
    LoginModule
  ],
  providers: [],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
