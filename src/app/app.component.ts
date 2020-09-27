import { Component, OnInit } from '@angular/core';
import { User, Board, BoardDraft, ViewBoard } from './model/Domain';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserDataService]
})
export class AppComponent implements OnInit{

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    // retrieve boards
  }

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

  viewBoard = new ViewBoard({
    boardId: '',
    rows: [],
    status: '',
    elapsedTimeInSeconds: 0
  })

  start(){
    this.userDataService
      .save(new User({"userName": this.selectedUser}), this.boardDraft)
      .subscribe(
        this.showSuccess, 
        this.showError
      );
  }

  showSuccess = () => {}

  showError = (err) => {}

}
