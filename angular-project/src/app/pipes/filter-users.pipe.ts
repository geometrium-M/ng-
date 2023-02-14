import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../components/model/user';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: IUser[], filterString:string): IUser[] {
    if(users.length === 0 || !filterString) {
      return users;
    }
    let filteredUsers:IUser[] = []

    for (let user of users ) {
      if(user.fullName.toLowerCase().includes(filterString.toLowerCase()) || 
        user.userInitials?.toLowerCase().includes(filterString.toLowerCase())) {
        filteredUsers.push(user)
      }
    }
   return filteredUsers;
  }
}