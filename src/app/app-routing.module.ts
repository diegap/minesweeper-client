import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationModule } from '@angular/core';
import { BoardViewComponent } from './board-view/board-view.component';

const routes: Routes = [
  { path: 'home', component: ApplicationModule },
  { path: 'user-boards', component: BoardViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
