import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatSelectModule} from '@angular/material/select'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 
import { HttpClientModule } from '@angular/common/http';
import {MatSliderModule} from '@angular/material/slider';
import { BoardViewComponent } from './board-view/board-view.component'; 
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { BoardCreationComponent } from './board-creation/board-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardViewComponent,
    BoardCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatSliderModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
