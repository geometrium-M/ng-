import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { GroupListComponent } from "./components/group-list/group-list.component";


const routes: Routes = [
  {
    path: '',
    component: GroupListComponent
  },
  {
    path: 'group',
    loadChildren: () => import('./components/group-overview/modules/group.module').then(m =>
      m.GroupModule)

  },
  {
    path: 'group/:id',
    loadChildren: () => import('./components/group-overview/modules/group.module').then(m =>
      m.GroupModule)

  },
  {
    path: '**',
    component: NotFoundComponent
  }
]


@NgModule({
  imports:[
      RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }