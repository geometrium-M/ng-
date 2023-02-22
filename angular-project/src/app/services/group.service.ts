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


    // this.groupList.forEach(group=>{
    //   if(typeof group.minValue != 'number') group.minValue =  Number(group.minValue)
    //    if(typeof group.maxValue != 'number') group.maxValue = Number(group.maxValue)
       
    //    group.functions.forEach(func=> {
    //     if(typeof func.minValue != 'number') func.minValue = this.decimalPipe.transform(Number(group.minValue), '4.1-5')!
    //     if(typeof func.maxValue !='number') func.maxValue = Number(func.maxValue)
    //    })
    // })

    // this.groupList.forEach(group=>{
    //   group.functions.forEach(func=>{
   

    //   })
       

       
    // })
    // console.log(this.groupList)
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
    console.log(this.groupList)
  }

  modifyGroup(id:any, group:IGroup) {
    let el = this.groupList.find(group=> group.id == id)
    console.log(el)
    if(el?.warning) group.warning = el.warning
    
    this.groupList[this.groupList.indexOf(el!)] = group
    console.log(this.groupList[this.groupList.indexOf(el!)])
  } 

  

  deleteGroup(id:number) {

    console.log(id)
    let el = this.groupList.find(group=> group.id == id)
    if(el) {
      this.groupList.splice(groups.indexOf(el),1)
    }
    console.log(this.groupList)
  }
}
