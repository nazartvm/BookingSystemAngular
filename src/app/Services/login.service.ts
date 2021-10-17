import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Models/login.model';
import { response } from '../Models/response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //baseUrl="https://localhost:44393";
  baseUrl="https://indian-booking.azurewebsites.net";
  loginData: Login = new Login();
  constructor(private http: HttpClient) { }
  
  loginUser(loginData:Login):Observable<response> {
    return this.http.post<response>(`${this.baseUrl}/api/login/login`, loginData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
}
