import {
  ApplicationConfig,
  APP_INITIALIZER,
  ErrorHandler,
} from '@angular/core';
import {
  provideRouter,
  Router,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';

import * as Sentry from '@sentry/angular-ivy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: false,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {
        //
      },
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
};
