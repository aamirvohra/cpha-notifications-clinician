import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'activity',
    component: ActivityComponent,
  },
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
