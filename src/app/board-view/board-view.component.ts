import { Component, OnInit } from '@angular/core';
import { BoardDraft, ViewBoard, Row, Col } from '../model/Domain';
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
    const boardId = this.route.snapshot.queryParamMap.get('board-id');

    this.userDataService.findBoard(username, boardId).subscribe(data => {
      this.showSuccess(data),
      this.showError
    });
  }
  
  viewBoard = new ViewBoard({
    boardId: '',
    rows: [],
    status: '',
    elapsedTimeInSeconds: 0
  })
 
  showSuccess = (data) => {
    console.log(data);
    this.viewBoard.boardId = data['boardId'];
    this.viewBoard.length = data['rows'].map(row => {
        row.cols
    }).length;
    
    this.viewBoard.rows = this.mapRows(data['rows']);
    this.viewBoard.status = data['status'];

    console.log("parsed rows", this.viewBoard.rows);
   
  }

  mapRows(rowData: [Object]): Row[]{
   
    return rowData.map(r => {
        let mappedCols: Col[] = this.mapCols(r['cols']);
        let row: Row = new Row({
          cols: mappedCols
        });
        return row;
    });

  }

  mapCols(colData: [Object]): Col[]{
    let cols: Col[] = [];

    colData.map(data => {
        let col: Col = new Col({
          x: data['x'],
          y: data['y'],
          value: data['value'] 
        });
        cols.push(col);
    });

    return cols;
   
  }

  showError = (err) => {
    console.error(err)
  }

}
