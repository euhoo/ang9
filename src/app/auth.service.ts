import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  private isAuth = false;

  login = () => {
    this.isAuth = true;
  }
  logout = () => {
    this.isAuth = false;
  }
  isAuthentificated = () => {
    return new Promise(res => {
      setTimeout(() => {
        res(this.isAuth);
      }, 1000);
    });
  }
}
