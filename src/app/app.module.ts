import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './core/material.module';
import { LoginComponent } from './views/login/login.component';

import { AuthFormModule } from './components/auth-form/auth-form.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        AppRoutingModule,
        AuthFormModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
