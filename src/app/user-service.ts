import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:9000/user'; // URL de ton backend

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/user/add', user);
  }

  login(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/login', user);
  }
}
