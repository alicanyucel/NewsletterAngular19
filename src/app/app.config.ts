import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [ provideHttpClient(),
    provideToastr(
      {
        closeButton: true, positionClass: 'toast-top-right',
        timeOut: 1000000,preventDuplicates:false
      }
    )
    ]
};
