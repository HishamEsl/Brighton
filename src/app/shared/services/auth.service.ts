import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlEndpoints } from '../constant/url-endpoints';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'Auth/login';
  private registerUrl = 'Auth/register';

  private roles!: string[];
  constructor(private _http: HttpClient) {}

  login = (model: any) =>
    this._http.post(UrlEndpoints.apiRoot + this.loginUrl, model).pipe(
      tap((response: any) => {
        this.roles = response.roles;
      })
    );

  register = (model: any) =>
    this._http.post(UrlEndpoints.apiRoot + this.registerUrl, model).pipe(
      tap((response: any) => {
        this.roles = response.roles;
      })
    );

  getUserRoles(): string[] {
    // Return the roles array
    return this.roles;
  }
}
