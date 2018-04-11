import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {TandcComponent} from './tandc/tandc.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'activity',
    pathMatch: 'full',
    // component: HomeComponent
  },
  {
    path: 'activity',
    component: ActivityComponent,
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms',
    component: TandcComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
