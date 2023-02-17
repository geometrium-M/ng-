import { Component, Input, OnInit,Output,EventEmitter,OnChanges } from '@angular/core';

import { IGroup } from '../model/group';

import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';

import { GroupActionsService } from 'src/app/services/group-actions.service';
import { group } from '@angular/animations';
import { Observable } from 'rxjs';



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
  ){
   
  }
  
  groupList:IGroup[]
  showModal: boolean = false
  modalLeft: number
  modalTop: number

  groupsFilter:string = ''
  showUsers:boolean = false





  show(e:Event) {
    e.stopPropagation()

    // this.modalLeft = event.clientY
    // this.modalTop = event.clientX
    console.log(e.target)
    this.showModal = true

  }


  ngOnInit() {
    this.groupList = this.GroupService.getGropuList()
    

  }
  


  modifGroup(id:number, name:string) {
    console.log(name)
    
    this.router.navigate(['/group',id])
    this.actions.disableForm(false)
  }

  openGroup(id:number) { 
    this.router.navigate(['/group',id])
    this.actions.disableForm(true)
  }

  createNewGroup() {
    this.router.navigate(['/group'])
    this.actions.disableForm(false)
  }

  // deleteGroup(id:number) {
  //   this.GroupService.deteleGroup(id)
  // }

  f(e:Event) {
    e.stopPropagation()
    this.showUsers = !this.showUsers
    console.log(this.showUsers)
  }
}
