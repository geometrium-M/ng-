import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupOverviewComponent } from './components/group-overview/group-overview.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    GroupOverviewComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
