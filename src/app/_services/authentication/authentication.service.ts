import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

    return this.http.post(`/dlg-gateway-routing/mta-api/mta/login`, body, httpOptions).pipe(
      map(user => {
        if (user) {
          sessionStorage.setItem('mta-dashboard-user', JSON.stringify(user));
        }
        return user;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('mta-dashboard-user');
  }
}
