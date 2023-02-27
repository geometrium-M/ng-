import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'numberPipe'
})
export class NumberPipe implements PipeTransform {
  constructor(private decimalPipe:DecimalPipe){}

  transform(value:number) {
    if(value != 0) {
      return this.decimalPipe.transform(value,'1.2-2')
    }
    return value
  }

}
