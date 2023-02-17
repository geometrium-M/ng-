import { Component,OnInit,Input,ViewChildren,ElementRef, QueryList, AfterViewInit,OnChanges } from '@angular/core';
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
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DecimalPipe } from '@angular/common';




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
    private actions:GroupActionsService,
    public decimalPipe: DecimalPipe
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

  isChecked:boolean = true




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
    this.groupForm.get('groupName')?.setValue(this.group?.groupName)
    this.groupForm.get('groupMinValue')?.setValue(this.group?.minValue)
    this.groupForm.get('groupMaxValue')?.setValue(this.group?.maxValue)

    const functionsControl = <FormArray>this.groupForm.get('functions');
  
    const usersControl = <FormArray>this.groupForm.get('users');

    let itemMin = this.groupForm.get('groupMinValue')
    let itemMax = this.groupForm.get('groupMaxValue')
    
    for(let i=0;i<this.functionsNew.length;i++) {
      let same =  this.group?.functions.find(item=> item.title == this.functionsNew[i].function_name )  
      let minValue
      let maxValue
    
      if(same) {
        minValue = same.minValue
        maxValue = same.maxValue
        // if(same.minValue == 'null') minValue = '0'
        // else minValue = same.minValue
        // if(same.maxValue =='null') maxValue = '0'
        // else maxValue = same.maxValue
        // if(Number(same.minValue) !== Number(itemMin?.value) ) {
        //   Wm = true
        // }
        // else {
        //   Wm = false
        // }


        // if(Number(same.maxValue) !== Number(itemMax?.value) ) {
         
        //   WM = true
        // }
     
        functionsControl.push(this.patchValues(same.title, same.functionCode!,true, minValue, maxValue))
      } 




      if(!same) functionsControl.push(this.patchValues(this.functionsNew[i].function_name, this.functionsNew[i].function_code, null, '0', '0'))
    }

    for(let i=0; i<this.usersList.length; i++) {
      let same = this.group?.users.find(item=> item.userId == this.usersList[i].userId)
      if(same) usersControl.push(this.patchValuesUsers(this.usersList[i].fullName, this.usersList[i].userId, true, this.usersList[i].userInitials!))
      if(!same) usersControl.push(this.patchValuesUsers(this.usersList[i].fullName, this.usersList[i].userId, false, this.usersList[i].userInitials!))
    }

    
  }

  patchValues(title:string,functionCode:string,  checked?:boolean | null, minValue?:string | number, maxValue?:string | number) {
    return this.fb.group({
        title: [title],
        functionCode:[functionCode],

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


  changeGroup() {
    this.showGroup = false
    this.groupForm.enable()
   
  }
  change() {

    console.log('jj')

  }

  get rolesFieldAsFormArray(): any {

    return this.groupForm.get('functions') as FormArray;
 
   
  }

  role(): any {
    return this.fb.group({
      role: this.fb.control('role'),
    });
  }
  addControl(): void {
    console.log(this.rolesFieldAsFormArray.controls)
    this.rolesFieldAsFormArray.controls.forEach((f:any)=> {
      f.addControl(this.role());

    }) 
  }


  addGroup() {

   

    let groupFunctions:IFunction[] = []
    let groupUsers:IUser[] = []
    let groupId:number = 0

    this.groupForm.value.functions.forEach((func:IFunction)=>{
      if(func.checked) {
        delete func.checked
        groupFunctions.push(func)
      } 
    })
    
    this.groupForm.value.users.forEach((user:IUser)=>{
      if(user.checked) {
        delete user.checked
        groupUsers.push(user)
      }
    })

   

  const generatedGroup:IGroup = {
    functions: groupFunctions,
    groupName: this.groupForm.value.groupName,
    minValue: this.groupForm.value.groupMinValue,
    maxValue: this.groupForm.value.groupMaxValue,
    users: groupUsers,
    id:groupId,
  }

  if(this.newGroup) {
    groupId = Date.now()
    console.log('new')
    this.GroupService.addGroup(generatedGroup)
  }
  if(!this.newGroup) {
    groupId = this.group?.id!
    console.log('modify')
    this.GroupService.modifyGroup(groupId, generatedGroup)
  }

  this.goToMain()
}
}
