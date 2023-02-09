import { Component,OnInit,Input,ViewChildren,ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import {FormGroup, FormControl,FormBuilder } from '@angular/forms'


import { IGroup } from '../model/group';
import { GroupService } from 'src/app/services/group.service';


import { IFunctionElement } from '../model/functionElement';

import { FunctionsService } from 'src/app/services/functions.service';

import { UsersService } from 'src/app/services/users.service';

import { ModalComponent } from '../modal/modal.component';

import { GroupActionsService } from 'src/app/services/group-actions.service';



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
    private functionsService: FunctionsService,
    private router:Router,
    private fb:FormBuilder,
    private actions:GroupActionsService
  ) {}

  @ViewChildren('input') inputs: QueryList<any>;



  group?:IGroup;
  functionsList:IFunctionElement[]

  newUsers: any
  users:any
  functions:any


  newGroup: boolean = false
  showGroup:boolean = false
  modifGroup:boolean = false
  nGroup:any

  isGroupFunction:boolean= false

  form = new FormGroup({
    // groupTitle:[''],
    // funcMinValue:'',
    // funcMaxValue: null,
 
    groupMinValue: new FormControl(),
    groupMaxValue:new FormControl(),
    funcMinValue:new FormControl(),
    funcMaxValue:new FormControl([{value:''}]),
    groupTitle:new FormControl(),

 

  })
  
    

  ngOnInit(): void {
    this.form.controls["groupTitle"].setValue('value');
    console.log(this.form.controls.groupTitle)




    console.log(this.showGroup)

    if(this.actions.getShowGroup()) {
      this.showGroup = true
    } 

    if(this.actions.modifGroup) {
      this.modifGroup = true
    }
    

    
   
  

    const id = this.route.snapshot.paramMap.get('id')
    if(!id) this.newGroup = true
    
    let findGroup = this.GroupService.getGroup(id)
    if(findGroup) this.group = findGroup
   
    


    this.users = this.group?.users

    this.newUsers = this.userService.getNewUsers(this.users) 


  


    this.functions = this.group?.functions
    


    this.functionsList = this.functionsService.getFunc(this.functions)
    console.log(this.functionsList)

  

      console.log(this.form.get('funcMinValue')?.value )

      console.log(this.inputs)
    




  }
  goToMain() {
    this.router.navigate([''])

  }

  createGroup() {
    this.nGroup = {
      title: this.form.get('groupTitle')?.value,
      minValue:this.form.get('groupMinValue')?.value,
      maxValue:this.form.get('groupMaxValue')?.value,
      id: Date.now()
    }

    console.log(this.nGroup)
    console.log(this.inputs)


  }

  ngAfterViewInit() {
    this.inputs.forEach(input => console.log(input.nativeElement));
  }

}
