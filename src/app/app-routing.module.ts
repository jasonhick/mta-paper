import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule, NavigationStart } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
// import { ResetComponent } from './login/reset/reset.component';
// import { FormDownloadComponent } from './manage/form-download/form-download.component';
// import { QuoteInputComponent } from './manage/quote-input/quote-input.component';
// import { AuditingComponent } from './manage/auditing/auditing.component';
// import { UserAddComponent } from './users/add/add.component';
// import { UserResetComponent } from './password/reset/reset.component';
// import { UserListComponent } from './users/list/list.component';
// import { ErrorComponent } from './error/error.component';
// import { SessionTimeoutComponent } from './session-timeout/session-timeout.component';
// import { ManageComponent } from './manage/manage.component';
// import { LoggedInResolver } from './shared/services/data/logged-in/logged-in.resolve';
// import { ConfirmPaymentComponent } from './manage/confirm-payment/confirm-payment.component';
// import { AccessService } from './shared/guards/access/access.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
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
