import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {JwtRequestModel} from '../models/JwtRequestModel';
import {UserModel} from '../models/UserModel';
import {CurrentAndLoginUserModel} from "../models/CurrentAndLoginUserModel";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient) {
   }

  registration(req: UserModel): Observable<any> {
    return this.http.post('http://localhost:8080/user-registration', req);
  }

  login(req: CurrentAndLoginUserModel): Observable<any> {
    return this.http.post('http://localhost:8080/user-login', req);
  }
}
