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
 
  username = this.route.snapshot.paramMap.get('id');
  actions: string[] = ["reveal", "flag", "unflag", "question", "unquestion"]
  selectedAction: string;

  actuate(x:string, y:string){
    const username = this.route.snapshot.paramMap.get('id');
    const boardId = this.route.snapshot.queryParamMap.get('board-id');
    this.userDataService.actuate(username, boardId, x, y, this.selectedAction)
      .subscribe(data => {
        this.refresh(),
        (err) => console.error(err)
      });
  }

  refresh(){
    window.location.reload();
  }

  showSuccess = (data) => {
    console.log(data);
    this.viewBoard.boardId = data['boardId'];
    this.viewBoard.length = data['rows'].map(row => {
        row.cols
    }).length;
    
    this.viewBoard.rows = this.mapRows(data['rows']);
    this.viewBoard.status = data['status'];
    this.viewBoard.elapsedTimeInSeconds = data['elapsedTimeInSeconds'];

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
          value: this.mapColValue(data['value']) 
        });
        cols.push(col);
    });

    return cols;
   
  }

  mapColValue(colData: string): string {
    if(colData == "-1") return "MINE";
    return colData;
  }

  showError = (err) => {
    console.error(err)
  }

}
