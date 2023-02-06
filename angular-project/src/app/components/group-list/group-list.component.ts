import { Component, Input, OnInit } from '@angular/core';

import { IGroup } from '../model/group';

import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router'



@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit{

  constructor( private GroupService: GroupService){
   this.groupList =  this.GroupService.getGropuList()

  }
  
  groupList:IGroup[]
  showModal: boolean = false
  modalLeft: number
  modalTop: number

  @Input() deleteGroup:boolean
  @Input() modifyGroup:boolean



  show(event:any) {
    this.modalLeft = event.clientY
    this.modalTop = event.clientX
    this.showModal = true
    console.log(event)
  }


  ngOnInit() {}
  
  func() {
    console.log('delete')

  }


}
