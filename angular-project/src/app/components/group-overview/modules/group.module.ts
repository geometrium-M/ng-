import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { GroupOverviewComponent } from "../group-overview.component";
import { GroupOverviewRoutingModule } from "./group-routing.module";

import {MatInputModule} from '@angular/material/input';
import { FormsModule } from "@angular/forms";






@NgModule ({
    imports : [
        GroupOverviewRoutingModule,
        CommonModule,
        MatInputModule,
        FormsModule
        
      
    ],
    declarations: [GroupOverviewComponent]
})

export class GroupModule { }