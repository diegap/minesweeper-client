import { Component, OnInit } from '@angular/core';
import { BoardDraft, ViewBoard } from '../model/Domain';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.css']
})
export class BoardViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // load board
  }
  
  viewBoard = new ViewBoard({
    boardId: '',
    rows: [],
    status: '',
    elapsedTimeInSeconds: 0
  })
    
}
