import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { User, BoardDraft } from './model/Domain';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private http: HttpClient;
  //private apiServer = 'http://localhost:8080'
  private apiServer = 'https://minesweeper-kata.herokuapp.com'
  
  private adminUsersPath = this.apiServer + '/admin/users';
  private usersPath = this.apiServer + '/users';
  private boardsPath = '/boards'
  constructor(http: HttpClient) { 
    this.http = http
  }

  save(user: User, boardDraft: BoardDraft): Observable<{}> {
    boardDraft.user = user;
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*' 
      })
    }
    return this.http.post(this.adminUsersPath, user, httpOptions)
      .pipe(mergeMap(_ => this.http.post(this.usersPath + "/" + user.userName + this.boardsPath, boardDraft, {})));
  }
  
}
