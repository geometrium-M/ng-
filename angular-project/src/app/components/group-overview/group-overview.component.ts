import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroup } from '../model/group';
import { GroupService } from 'src/app/services/group.service';


import { IFunctionElement } from '../model/functionElement';

import { FunctionsService } from 'src/app/services/functions.service';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.css']
})
export class GroupOverviewComponent implements OnInit {

  constructor(
    private route:ActivatedRoute, 
    private GroupService: GroupService, 
    private userService:UsersService,
    private functionsService: FunctionsService
  ) {}

  group?:IGroup;
  functionsList:IFunctionElement[]

  newUsers: any
  users:any
  functions:any

  newGroup: boolean = false


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(!id) this.newGroup = true
    
    let findGroup = this.GroupService.getGroup(id)
    if(findGroup) this.group = findGroup
    console.log(findGroup?.groupName)
    


    this.users = this.group?.users
    console.log(this.users)
    this.newUsers = this.userService.getNewUsers(this.users) 
    console.log(this.newUsers)


  

    console.log(this.group?.functions)
    this.functions = this.group?.functions
    

    this.functionsList = this.functionsService.getFunc(this.functions)


  }
}
