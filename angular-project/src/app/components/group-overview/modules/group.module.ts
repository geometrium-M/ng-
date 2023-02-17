import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GroupOverviewComponent } from "../group-overview.component";
import { GroupOverviewRoutingModule } from "./group-routing.module";

import {MatInputModule} from '@angular/material/input';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';

import { DisableDirective } from "src/app/directives/disable.directive";
import { FilterUsersPipe } from "src/app/pipes/filter-users.pipe";
import { SortListPipe } from "src/app/pipes/sort-list.pipe";
import { DecimalPipe } from "@angular/common";








@NgModule ({
    imports : [
        GroupOverviewRoutingModule,
        CommonModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatFormFieldModule,
    ],
    declarations: [
        GroupOverviewComponent, 
        DisableDirective,
        FilterUsersPipe,
        SortListPipe
    ],
    providers:[
        DecimalPipe
    ]
})

export class GroupModule { }