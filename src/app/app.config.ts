import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),
    provideToastr(
      {
        closeButton: true, positionClass: 'toast-top-right',
        timeOut: 1000000,preventDuplicates:false
      }
    )
    ]
};
