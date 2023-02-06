import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { GroupOverviewComponent } from "../group-overview.component";

const routes: Routes = [
    {
        path: '',
        component: GroupOverviewComponent
    },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class GroupOverviewRoutingModule { }