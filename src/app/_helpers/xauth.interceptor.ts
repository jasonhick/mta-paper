import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../_services';

@Injectable()
export class XAuthInterceptor implements HttpInterceptor {
  constructor(public tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.tokenService.getToken('x-auth-token')) {
      request = request.clone({
        setHeaders: { 'x-auth-token': this.tokenService.getToken('x-auth-token') }
      });
    }

    return next.handle(request);
  }
}
