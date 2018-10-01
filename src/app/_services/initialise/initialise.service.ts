import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class InitialiseService {
  private baseUrl = '/dlg-gateway-routing/mta-api/metadata';

  constructor(private tokenService: TokenService, private http: HttpClient) {}

  initialise() {
    if (this.tokenService.getToken('x-auth-token')) {
      return;
    }

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.baseUrl + '/DLIMotorAmendDirect/initialize', '', { observe: 'response' })
      .pipe(
        map(response => {
          this.tokenService.setToken('x-auth-token', response.headers.get('x-auth-token'));
        })
      )
      .toPromise();
  }
}
