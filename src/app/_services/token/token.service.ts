import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  getToken(key): string {
    return sessionStorage.getItem(key);
  }

  setToken(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }
}
