import { Injectable } from '@angular/core';
import { groupList as qwe } from '../data/groupList';
import { functionsList } from '../data/functions';
import { IGroup } from '../components/model/group';
import { BehaviorSubject, Observable } from 'rxjs';

import {HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groupList:IGroup[] = qwe
  newGroup:IGroup

  

  constructor() { }

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

  deleteGroup(id:number) {

    console.log(id)
    let el = this.groupList.find(group=> group.id == id)
    if(el) {
      this.groupList.splice(qwe.indexOf(el),1)
    }
    console.log(this.groupList)
  }
}
