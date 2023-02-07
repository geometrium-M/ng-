import { Injectable } from '@angular/core';
import { groupList } from '../data/groupList';
import { IGroup } from '../components/model/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groupList:IGroup[] = groupList

  constructor() { }

  getGropuList() {
    return this.groupList
  }

  getGroup(id:any) {
    return this.groupList.find(group=> group.id == id)
  }

  addGroup(group:IGroup) {
    this.groupList.push(group)
  }
}
