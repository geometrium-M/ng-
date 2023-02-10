import { Injectable } from '@angular/core';
import { groupList } from '../data/groupList';
import { functionsList } from '../data/functions';
import { IGroup } from '../components/model/group';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groupList:IGroup[] = groupList
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

  deteleGroup(id:number) {
    let el = this.groupList.find(group=> group.id == id)
    if(el) {
      this.groupList.splice(groupList.indexOf(el),1)
    }
  }
}
