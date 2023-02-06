import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { GroupOverviewComponent } from "../group-overview.component";
import { GroupOverviewRoutingModule } from "./group-routing.module";

import {MatInputModule} from '@angular/material/input';





@NgModule ({
    imports : [
        GroupOverviewRoutingModule,
        CommonModule,
        MatInputModule
    ],
    declarations: [GroupOverviewComponent]
})

export class GroupModule { }