import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardViewComponent } from './board-view/board-view.component';
import { BoardCreationComponent } from './board-creation/board-creation.component';

const routes: Routes = [
  { path: '', component: BoardCreationComponent },
  { path: 'home', component: BoardCreationComponent },
  { path: 'users/:id', component: BoardViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
