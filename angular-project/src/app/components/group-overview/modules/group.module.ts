import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { GroupOverviewComponent } from "../group-overview.component";
import { GroupOverviewRoutingModule } from "./group-routing.module";

import {MatInputModule} from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatCheckboxModule} from '@angular/material/checkbox';






@NgModule ({
    imports : [
        GroupOverviewRoutingModule,
        CommonModule,
        MatInputModule,
        FormsModule,
        MatSlideToggleModule,
        MatCheckboxModule

        
      
    ],
    declarations: [GroupOverviewComponent]
})

export class GroupModule { }