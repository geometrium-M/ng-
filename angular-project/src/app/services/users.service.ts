import { Injectable } from '@angular/core';
import { users } from '../data/users';
import { IUser } from '../components/model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  newUsersList:IUser[] = [...users]

  constructor() { }

  getUsersList() {
    return this.newUsersList
  }

  getNewUsers(users:Array<IUser>) {
    if(users) {
      return this.newUsersList.filter(newUser => {
        return !users.some(user => {
          return newUser.userId === user.userId
        })
      })
    } 
    else {
      return this.newUsersList
    }    
  }

}
