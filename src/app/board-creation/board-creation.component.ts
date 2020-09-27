import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { User, BoardDraft } from '../model/Domain';

@Component({
  selector: 'app-board-creation',
  templateUrl: './board-creation.component.html',
  styleUrls: ['./board-creation.component.css'],
  providers: [UserDataService]
})
export class BoardCreationComponent implements OnInit {

  ngOnInit(): void {
  }

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
    this.router.navigate(['/users/', this.selectedUser], { queryParams: { 'board-id': data['boardId'] } });
  }

  showError = (err) => {
    console.error(err)
  }

}
