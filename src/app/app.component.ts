import { Component, OnInit } from '@angular/core';
import { User, Board, BoardDraft, ViewBoard } from './model/Domain';
import { UserDataService } from './user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserDataService]
})
export class AppComponent{

  constructor(private userDataService: UserDataService, private router: Router) { }

  title = 'minesweeper-client';

  // predefined users
  users: User[] = [
    {userName: 'diegap'},
    {userName: 'elenis'},
    {userName: 'rociocarolina'}
  ];
  selectedUser: string;

  // default values for starting game
  boardDraft = new BoardDraft({
    rows : 3,
    cols: 3,
    mines: 1
  })

  start(){
    this.userDataService
      .save(new User({"userName": this.selectedUser}), this.boardDraft)
      .subscribe((data) => {
        this.showSuccess(data),
        this.showError
     });
  }

  showSuccess = (data) => {
    this.router.navigate(['/user-boards'], { queryParams: { 'user-name': this.selectedUser, 'board-id': data['boardId'] } });
  }

  showError = (err) => {
    console.error(err)
  }

}
