import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './_core/material.module';
import { HomeComponent } from './home';
import { LoginComponent } from './login';

import { AuthFormModule } from './components/auth-form/auth-form.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
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
