import { Pipe, PipeTransform } from '@angular/core';
import { IFunction } from '../components/model/function';

@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {

  transform(functions: IFunction[]): IFunction[] {
  
    functions.sort((a,b)=>{
      if(a.title < b.title) return -1
      else return 1
    })
    return functions
  }
}
