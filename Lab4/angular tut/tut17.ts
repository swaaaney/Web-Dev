import {Routes} from '@angular/router';

import {Home} from '../tut18';
import {User} from '../tut19';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: Home,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: User,
  },
];
