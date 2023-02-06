import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';
import { GroupListComponent } from './components/group-list/group-list.component';

import { ModalComponent } from './components/modal/modal.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {AppRoutingModule} from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    ModalComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
