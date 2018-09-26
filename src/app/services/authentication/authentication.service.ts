import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Login } from '../../components/auth-form/login.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(private httpClient: HttpClient) { }

    login(login: Login) {
        console.log('HERE');
        const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        return this.httpClient.post<any>(`${environment.apiUrl.base}/${environment.apiUrl.login}`,
            'username=hjie&password=qweqewqe',
            { headers });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
