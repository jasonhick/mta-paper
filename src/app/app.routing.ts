import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule, NavigationStart } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    // {
    //     path: 'reset',
    //     component: ResetComponent
    // },
    // {
    //     path: 'manage',
    //     component: ManageComponent,
    //     resolve: {
    //         loggedIn: LoggedInResolver
    //     },
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: 'form-download',
    //             pathMatch: 'full'
    //         },
    //         {
    //             path: 'form-download',
    //             data: {
    //                 roles: [
    //                     'ROLE_BS_SUPERVISOR',
    //                     'ROLE_BS_TEAMLEADER'
    //                 ]
    //             },
    //             component: FormDownloadComponent,
    //             canActivate: [AccessService]
    //         },
    //         {
    //             path: 'quote-input',
    //             data: {
    //                 roles: [
    //                     'ROLE_BS_SUPERVISOR',
    //                     'ROLE_BS_TEAMLEADER'
    //                 ]
    //             },
    //             component: QuoteInputComponent,
    //             canActivate: [AccessService]
    //         },
    //         {
    //             path: 'auditing',
    //             data: {
    //                 roles: [
    //                     'ROLE_BS_SUPERVISOR',
    //                     'ROLE_BS_TEAMLEADER'
    //                 ]
    //             },
    //             component: AuditingComponent,
    //             canActivate: [AccessService]
    //         },
    //         {
    //             path: 'confirm-payment',
    //             data: {
    //                 roles: [
    //                     'ROLE_BS_SUPERVISOR',
    //                     'ROLE_CC'
    //                 ]
    //             },
    //             component: ConfirmPaymentComponent,
    //             canActivate: [AccessService]
    //         }
    //     ]
    // },
    // {
    //     path: 'users',
    //     resolve: {
    //         loggedIn: LoggedInResolver
    //     },
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: 'list',
    //             pathMatch: 'full'
    //         },
    //         {
    //             path: 'list',
    //             data: {
    //                 roles: [
    //                     'ROLE_ADMIN'
    //                 ]
    //             },
    //             component: UserListComponent,
    //             canActivate: [AccessService]
    //         },
    //         {
    //             path: 'add',
    //             data: {
    //                 roles: [
    //                     'ROLE_ADMIN'
    //                 ]
    //             },
    //             component: UserAddComponent,
    //             canActivate: [AccessService]
    //         },
    //         {
    //             path: '**',
    //             component: ErrorComponent
    //         }
    //     ]
    // },
    // {
    //     path: 'password',
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: '/login',
    //             pathMatch: 'full'
    //         },
    //         {
    //             path: 'reset/:token',
    //             component: UserResetComponent
    //         }
    //     ]
    // },
    // {
    //     path: 'error',
    //     component: ErrorComponent
    // },
    // {
    //     path: 'session-timeout',
    //     component: SessionTimeoutComponent,
    //     data: {
    //         timeout: true
    //     }
    // },
    // {
    //     path: 'session-ended',
    //     component: SessionTimeoutComponent,
    //     data: {
    //         timeout: false
    //     }
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})

export class AppRoutingModule {

    constructor(router: Router) {}
}
