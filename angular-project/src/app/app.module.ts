import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';
import { GroupListComponent } from './components/group-list/group-list.component';

import { ModalComponent } from './components/modal/modal.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {AppRoutingModule} from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterGroupsPipe } from './pipes/filter-groups.pipe';

import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    ModalComponent,
    NotFoundComponent,
    FilterGroupsPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  HttpClientModule  ],
  providers: [
    DecimalPipe
  
 

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
