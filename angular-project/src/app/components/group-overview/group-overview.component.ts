import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {FormGroup,FormBuilder, FormArray, Validators } from '@angular/forms'
import { IGroup } from '../model/group';
import { IUser } from '../model/user';
import { GroupService } from 'src/app/services/group.service';
import { IFunctionElement } from '../model/functionElement';
import { FunctionsService } from 'src/app/services/functions.service';
import { UsersService } from 'src/app/services/users.service';
import { GroupActionsService } from 'src/app/services/group-actions.service';
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


  group?:IGroup;
  functionsNew: IFunctionElement[]
  usersList: IUser[]
  usersFilter:string
  newGroup = false
  showGroup = false
  groupForm:FormGroup
  detailsForm:FormGroup
  usersForm:FormGroup
  isChecked = true
  submitted = true


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    
    if(!id) this.newGroup = true
    const findGroup = this.GroupService.getGroup(Number(id))
    this.group = findGroup

    this.groupForm = this.fb.group({

      groupName: this.fb.control('', [Validators.required]),
      groupMaxValue: this.fb.control('', [Validators.required,Validators.pattern("^[0-9]*$")]),
      groupMinValue: this.fb.control('', [Validators.required,Validators.pattern("^[0-9]*$")]),
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

  get groupName() {
    return this.groupForm.get('groupName')
  }

  get groupMinValue() {
    return this.groupForm.get('groupMinValue')
  }

  get groupMaxValue() {
    return this.groupForm.get('groupMaxValue')
  }
  get function(): FormArray {
    return this.groupForm.get('functions') as FormArray;
  } 

  patch() {
    this.groupForm.get('groupName')?.setValue(this.group?.groupName)
    this.groupForm.get('groupMinValue')?.setValue(this.group?.minValue)
    this.groupForm.get('groupMaxValue')?.setValue(this.group?.maxValue)

    const functionsControl = <FormArray>this.groupForm.get('functions');
    const usersControl = <FormArray>this.groupForm.get('users');

    for(let i=0;i<this.functionsNew.length;i++) {
      const same = this.group?.functions.find(item=> item.title == this.functionsNew[i].function_name )  
      if(same) functionsControl.push(this.patchValues(same.title, same.functionCode,true, same.minValue, same.maxValue))
      if(!same) functionsControl.push(this.patchValues(this.functionsNew[i].function_name, this.functionsNew[i].function_code, false, '0', '0'))
    }

    for(let i=0; i<this.usersList.length; i++) {
      const same = this.group?.users.find(item=> item.userId == this.usersList[i].userId)
      if(same) usersControl.push(this.patchValuesUsers(this.usersList[i].fullName, this.usersList[i].userId, true, this.usersList[i].userInitials))
      if(!same) usersControl.push(this.patchValuesUsers(this.usersList[i].fullName, this.usersList[i].userId, false, this.usersList[i].userInitials))
    }
  }

  patchValues(title:string,functionCode:string,  checked?:boolean | null, minValue?:string | number, maxValue?:string | number) {
    return this.fb.group({
        title: [title],
        functionCode:[functionCode],
        minValue: [minValue, [Validators.required, Validators.pattern("^[0-9]*$")]],
        maxValue: [maxValue, [Validators.required, Validators.pattern("^[0-9]*$")]],
        checked:[checked]
    })
  }

  patchValuesUsers(fullName:string,userId:string,checked:boolean, userInitials?:string) {
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

  addGroup() {
    if(!this.groupForm.valid) {
      this.submitted = false
      return 
    }

    else {
      this.submitted = true
    }
    
    const groupFunctions:IFunction[] = []
    const groupUsers:IUser[] = []
    const groupId = 0

    this.groupForm.value.functions.forEach((func:IFunction)=>{
      if(func.checked) {
        delete func.checked
        groupFunctions.push(func)
      }})

    this.groupForm.value.users.forEach((user:IUser)=>{
      if(user.checked) {
        delete user.checked
        groupUsers.push(user)
      }})
    const generatedGroup:IGroup = {
      functions: groupFunctions,
      groupName: this.groupForm.value.groupName,
      minValue: this.groupForm.value.groupMinValue,
      maxValue: this.groupForm.value.groupMaxValue,
      users: groupUsers,
      id:groupId,
    }

    if(this.newGroup) {
      generatedGroup.id = Date.now()
      this.GroupService.addGroup(generatedGroup)
    }
    if(!this.newGroup && this.group) {
    generatedGroup.id = this.group.id
      this.GroupService.modifyGroup(this.group?.id, generatedGroup)
    }

    this.goToMain()
 
  }


}
