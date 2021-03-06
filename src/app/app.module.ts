import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { APP_ROUTES } from './app-routes';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, PaginationModule } from 'ngx-bootstrap';
import { ActivityService } from './activity.service';
import { Daterangepicker } from 'ng2-daterangepicker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    RouterModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    Daterangepicker
  ],
  providers: [
    ActivityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
