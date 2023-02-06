import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { GroupOverviewComponent } from "../components/group-overview/group-overview.component";

const routes: Routes = [
  {
    path: 'groupElement',
    component: GroupOverviewComponent
  }
]

@NgModule({
  imports:[
      RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }