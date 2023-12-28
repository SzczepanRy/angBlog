import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  constructor(private http: HttpClient, private router: Router) {
    let token = localStorage.getItem('token');
    console.log(token);
    this._isLoggedIn$.next(!!token?.length);
  }

  logout() {
    console.log('AD');

    localStorage.clear();
    this._isLoggedIn$.next(false);
  }

  loginAuth(login: string, password: string) {
    return this.http
      .post<any>('http://localhost:3000/login/signin', {
        login,
        password,
      })
      .pipe(
        tap((response) => {
          //if token is correct module
          console.log(response);

          //if (response.accestoken > 20) {
          localStorage.setItem('token', response.accestoken);
          this._isLoggedIn$.next(true);
          // }
        })
      );
  }
}
