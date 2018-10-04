import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// -----------------------------------------
// Core Services
// -----------------------------------------
import { CoreModule } from './_core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';

// -----------------------------------------
// Views
// -----------------------------------------
import { HomeComponent } from './views/home';
import { UsersComponent } from './views/users';
import { LoginComponent } from './views/login';

import { AuthFormModule } from './components/auth-form/auth-form.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, AlertComponent, UsersComponent],
  imports: [
    AppRoutingModule,
    AuthFormModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
