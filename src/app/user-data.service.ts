import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/Domain';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private http: HttpClient;
  private path = 'http://localhost:8080/admin/users';
  
  constructor(http: HttpClient) { 
    this.http = http
  }

  save(user: User): Observable<{}> {
    return this.http.post(this.path, user, {});
  }
  
}
