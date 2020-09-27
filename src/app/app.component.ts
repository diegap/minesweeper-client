import { Component } from '@angular/core';
import { User } from './model/Domain';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserDataService]
})
export class AppComponent {

  constructor(private userDataService: UserDataService) { }

  title = 'minesweeper-client';

  users: User[] = [
    {userName: 'diegap'},
    {userName: 'elenis'},
    {userName: 'rociocarolina'}
  ];
  selectedUser: string;

  save(){
    this.userDataService.save(new User({"userName": this.selectedUser})).subscribe(this.showSuccess, this.showError);
  }

  showSuccess = () => {}

  showError = (err) => {}

}
