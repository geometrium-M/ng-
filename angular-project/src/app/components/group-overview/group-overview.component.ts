import { Component,OnInit,Input,ViewChildren,ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import {FormGroup, FormControl,FormBuilder, FormArray } from '@angular/forms'


import { IGroup } from '../model/group';
import { IUser } from '../model/user';
import { GroupService } from 'src/app/services/group.service';


import { IFunctionElement } from '../model/functionElement';

import { FunctionsService } from 'src/app/services/functions.service';

import { UsersService } from 'src/app/services/users.service';

import { ModalComponent } from '../modal/modal.component';

import { GroupActionsService } from 'src/app/services/group-actions.service';
import { concat } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { IFunction } from '../model/function';



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

  functionsNew: IFunctionElement[]

  usersList: IUser[]

  newUsers: any
  users?:IUser[]
  functions:any
  usersFilter:string


  newGroup: boolean = false
  showGroup:boolean = false
  modifGroup:boolean = false
  nGroup:any
  groupForm:FormGroup
  detailsForm:FormGroup
  usersForm:FormGroup
  hide:boolean

  isGroupFunction:boolean= false




  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(!id) this.newGroup = true
   let findGroup = this.GroupService.getGroup(id)
   this.group = findGroup

    this.groupForm = this.fb.group({
      groupName: this.fb.control(''),
      groupMaxValue: this.fb.control(''),
      groupMinValue: this.fb.control(''),
      functions:this.fb.array([]),
      users:this.fb.array([]),
      filterUsers:this.fb.control('')
    });
    this.functionsNew = this.functionsService.getFunctionsList()
    this.usersList = this.userService.getUsersList()

    this.patch()

    if(this.actions.getDiasbleForm()) {
      this.showGroup = true
      this.groupForm.disable()
    } 



   
  }

  patch() {
    const functionsControl = <FormArray>this.groupForm.get('functions');
    const usersControl = <FormArray>this.groupForm.get('users');
    
    for(let i=0;i<this.functionsNew.length;i++) {
      let same =  this.group?.functions.find(item=> item.title == this.functionsNew[i].function_name )     
      if(same) functionsControl.push(this.patchValues(same.title, same.functionCode!, true,'EUR', same.minValue, same.maxValue))
      if(!same) functionsControl.push(this.patchValues(this.functionsNew[i].function_name, this.functionsNew[i].function_code,false,"EUR", '0', '0'))
    }

    for(let i=0; i<this.usersList.length; i++) {
      let same = this.group?.users.find(item=> item.userId == this.usersList[i].userId)
      if(same) usersControl.push(this.patchValuesUsers(this.usersList[i].fullName, this.usersList[i].userId, true, this.usersList[i].userInitials!))
      if(!same) usersControl.push(this.patchValuesUsers(this.usersList[i].fullName, this.usersList[i].userId, false, this.usersList[i].userInitials!))
    }

    this.groupForm.get('groupName')?.setValue(this.group?.groupName)
    this.groupForm.get('groupMinValue')?.setValue(this.group?.minValue)
    this.groupForm.get('groupMaxValue')?.setValue(this.group?.maxValue)
  }

  patchValues(title:string,functionCode:string,checked:boolean,currency:string, minValue?:string,maxValue?:string) {
    return this.fb.group({
        title: [title],
        functionCode:[functionCode],
        currency:[currency],
        minValue: [minValue],
        maxValue: [maxValue],
        checked:[checked]
    })
  }
  patchValuesUsers(fullName:string,userId:string,checked:boolean, userInitials:string) {
    return this.fb.group({
      fullName: [fullName],
      userId: [userId],
      checked:[checked],
      userInitials: [userInitials]
    })
  }

  goToMain() {
    this.router.navigate([''])
  }



  // createGroup() {
  //   this.nGroup = {
  //     title: this.form.get('groupTitle')?.value,
  //     minValue:this.form.get('groupMinValue')?.value,
  //     maxValue:this.form.get('groupMaxValue')?.value,
  //     id: Date.now()
  //   }

  //   console.log(this.nGroup)
  //   console.log(this.inputs)


  // }

  // ngAfterViewInit() {
  //   this.inputs.forEach(input => console.log(input.nativeElement));
  // }

  // isChecked(id: string): boolean{
  //   let flag = false
  //   this.group?.functions.forEach(fn => {
  //     if(fn.functionCode == id) flag = true      
  //   });
  //   return flag
  // }

  changeGroup() {
    this.showGroup = false
    this.groupForm.enable()
   
  }

 

}
