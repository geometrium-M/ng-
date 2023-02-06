import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { GroupOverviewComponent } from "../group-overview.component";
import { GroupOverviewRoutingModule } from "./group-routing.module";




@NgModule ({
    imports : [
        GroupOverviewRoutingModule,
        CommonModule
    ],
    declarations: [GroupOverviewComponent]
})

export class GroupModule { }