import { Pipe, PipeTransform } from '@angular/core';
import { IGroup } from '../components/model/group';

@Pipe({
  name: 'filterGroups',
  pure:false
})
export class FilterGroupsPipe implements PipeTransform {

  transform(groups: IGroup[], filterString:string): IGroup[] {
    return groups.filter(e => {
      return e.groupName.toLowerCase().includes(filterString.toLowerCase())
    }) 
  }
}
