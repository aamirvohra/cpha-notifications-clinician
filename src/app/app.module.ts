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
import { MenuComponent } from './menu/menu.component';
import { SeeMoreComponent } from './see-more/see-more.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TandcComponent } from './tandc/tandc.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SeeMoreComponent,
    PrivacyPolicyComponent,
    TandcComponent,
    ContactComponent,
    AboutComponent,
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
