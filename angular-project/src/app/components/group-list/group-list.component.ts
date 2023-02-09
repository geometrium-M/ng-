import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

import { IGroup } from '../model/group';

import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';

import { GroupActionsService } from 'src/app/services/group-actions.service';
import { group } from '@angular/animations';



@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit{

  constructor( 
    private GroupService: GroupService, 
    private router:Router,
    private actions:GroupActionsService
  ){
   this.groupList =  this.GroupService.getGropuList()
  }
  
  groupList:IGroup[]
  showModal: boolean = false
  modalLeft: number
  modalTop: number



  show(e:Event) {
    e.stopPropagation()

    // this.modalLeft = event.clientY
    // this.modalTop = event.clientX
    this.showModal = true

  }


  ngOnInit() {}

  modifGroup(id:number, name:string) {
    console.log(name)
    
    this.router.navigate(['/group',id])
  }

  openGroup(id:number) { 
    this.actions.toShowGroup()
    this.router.navigate(['/group',id])
  }

  createNewGroup() {
    this.router.navigate(['/group'])
  }

  deleteGroup(id:number) {
    this.GroupService.deteleGroup(id)
  }

}
