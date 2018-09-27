import { Component } from '@angular/core';

import { Login } from '../components/auth-form/login.interface';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private authenticationService: AuthenticationService) { }

    loginUser(login: Login) {
        // console.log('>>>', login);
        // const test = this.authenticationService.login(login);
        // console.log('LOGIN : ', test);

        this.authenticationService.login(login).subscribe(data => {
            console.log('DATA:', data);
        }, error => {
            console.log('ERROR:', error);
        });
    }

}
