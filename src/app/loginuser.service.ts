import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginuserService {

  private baseUrl = "http://localhost:8080/user/login"

  constructor(private httpClient: HttpClient){}
  
  loginUser(user: User):Observable<Object>{
    console.log(user)
    return this.httpClient.post(`${this.baseUrl}`,user);
  }



}
