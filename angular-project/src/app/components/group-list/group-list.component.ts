import { Component,OnInit} from '@angular/core';
import { IGroup } from '../model/group';
import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';
import { GroupActionsService } from 'src/app/services/group-actions.service';


@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit{

  constructor( 
    public GroupService: GroupService, 
    private router:Router,
    private actions:GroupActionsService
  ){}
  
  groupList:IGroup[]
  groupsFilter = ''

  ngOnInit() {
    this.groupList = this.GroupService.getGropuList()
  }
  
  // modifGroup(id:number, name:string) {    
  //   this.router.navigate(['/group',id])
  //   this.actions.disableForm(false)
  // }

  openGroup(id:number) { 
    this.router.navigate(['/group',id])
    this.actions.disableForm(true)
  }

  createNewGroup() {
    this.router.navigate(['/group'])
    this.actions.disableForm(false)
  }
}
