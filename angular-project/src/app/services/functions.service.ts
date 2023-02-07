import { Injectable } from '@angular/core';
import { IFunctionElement } from '../components/model/functionElement';
import { IFunction } from '../components/model/function';
import { functionsList } from '../data/functions';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  functionsList:IFunctionElement[] = [...functionsList]

  constructor() { }


  getFunc(functions:Array<IFunction>) {

    if(functions) {
      for (let i=0; i< functions.length; i++) {
        for(let j=0;j<functionsList.length; j++) {
          if(functions[i].title == functionsList[j].function_name) {
            functionsList[j].minValue = functions[i].minValue
            functionsList[j].maxValue = functions[i].maxValue
          }
        }
      }
    }
    return this.functionsList
  }

}
