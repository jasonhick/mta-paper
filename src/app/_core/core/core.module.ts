import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// -----------------------------
// Interceptors
// -----------------------------
import { XAuthInterceptor } from '../../_helpers';
import { InitialiseService } from '../../_services';
import { MaterialModule } from '../material/material.module';

export function initialiseProviderFactory(initialiseService: InitialiseService) {
  return () => initialiseService.initialise();
}

@NgModule({
  imports: [MaterialModule],
  exports: [MaterialModule],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initialiseProviderFactory,
    //   deps: [InitialiseService],
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XAuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor() {}
}
