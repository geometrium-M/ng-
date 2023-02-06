import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"


const routes: Routes = [
  {
    path: 'group',
    loadChildren: () => import('./components/group-overview/modules/group.module').then(m =>
      m.GroupModule)

  }
]

@NgModule({
  imports:[
      RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }