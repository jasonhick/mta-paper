import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule, NavigationStart } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home';
import { UsersComponent } from './views/users';
import { LoginComponent } from './views/login';

import { AuthGuard } from './_guards';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  },

  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {}
}
