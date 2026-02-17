import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './tut14';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
