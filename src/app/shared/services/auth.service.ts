import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlEndpoints } from '../constant/url-endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'Auth/login';
  private registerUrl = 'Auth/register';

  constructor(private _http: HttpClient) {}

  login = (model: any) =>
    this._http.post(UrlEndpoints.apiRoot + this.loginUrl, model);

  register = (model: any) =>
    this._http.post(UrlEndpoints.apiRoot + this.registerUrl, model);

    
}
