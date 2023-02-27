import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../components/model/user';

@Pipe({
  name: 'filterUsers',
  pure:false
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: IUser[], filterString:string): IUser[] {
    if(users.length === 0 || !filterString) {
      return users;
    }
    const filteredUsers:IUser[] = []

    for (const user of users ) {
      if(user.fullName.toLowerCase().includes(filterString.toLowerCase()) || 
        user.userInitials?.toLowerCase().includes(filterString.toLowerCase())) {
        filteredUsers.push(user)
      }
    }
   return filteredUsers;
  }
}
