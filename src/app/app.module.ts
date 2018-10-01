import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';

import { HomeComponent } from './home';
import { LoginComponent } from './login';

import { AuthFormModule } from './components/auth-form/auth-form.module';
import { MaterialModule } from './_core/material/material.module';

import { XAuthInterceptor } from './_helpers';
import { InitialiseService } from './_services';

// Services
// Services now use 'providedIn' attribute (Angular 6)

export function initialiseProviderFactory(initialiseService: InitialiseService) {
  return () => initialiseService.initialise();
}

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, AlertComponent],
  imports: [
    AppRoutingModule,
    AuthFormModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: initialiseProviderFactory,
      deps: [InitialiseService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
