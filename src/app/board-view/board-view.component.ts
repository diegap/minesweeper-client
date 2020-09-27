import { Component, OnInit } from '@angular/core';
import { BoardDraft, ViewBoard } from '../model/Domain';
import { UserDataService } from '../user-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.css'],
  providers: [UserDataService]
})
export class BoardViewComponent implements OnInit {

  constructor(private userDataService: UserDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('id');
    const boardId = this.route.snapshot.paramMap.get('id');
    this.userDataService.findBoard(username, boardId)
  }
  
  viewBoard = new ViewBoard({
    boardId: '',
    rows: [],
    status: '',
    elapsedTimeInSeconds: 0
  })
    
}
