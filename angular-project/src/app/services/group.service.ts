import { Injectable,OnInit } from '@angular/core';
import { groupList as groups } from '../data/groupList';
import { functionsList } from '../data/functions';
import { IGroup } from '../components/model/group';
import { BehaviorSubject, Observable } from 'rxjs';

import {HttpClientModule} from '@angular/common/http';

import { DecimalPipe } from '@angular/common';
import { group } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class GroupService{

  groupList:IGroup[] = groups
  newGroup:IGroup

  constructor(private decimalPipe:DecimalPipe) {
    this.groupList.forEach(group=>{
      group.functions.forEach(func=>{
        if(func.minValue == 'null') func.minValue = '0'
        if(func.maxValue == 'null') func.maxValue = '0'
      })
    })
  }

 getGropuList() {
  return this.groupList 
  }

  getGroup(id:any) {
    return this.groupList.find(group=> group.id == id)
  }

  getEmptyGroup() {
    return this.newGroup
  }

  addGroup(group:IGroup) {
    this.groupList.push(group)
  }

  modifyGroup(id:any, group:IGroup) {
    let el = this.groupList.find(group=> group.id == id)
    console.log(el)
    if(el?.warning) group.warning = el.warning
    this.groupList[this.groupList.indexOf(el!)] = group
  } 

  deleteGroup(id:number) {
    let el = this.groupList.find(group=> group.id == id)
    if(el) this.groupList.splice(groups.indexOf(el),1)
  }
}
