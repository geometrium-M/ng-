import { Injectable } from '@angular/core';
import { IFunctionElement } from '../components/model/functionElement';
import { IFunction } from '../components/model/function';
import { functionsList } from '../data/functions';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  functionsList:IFunctionElement[] = functionsList

  constructor() { }


  getFunc(functions:Array<IFunction>) {
    console.log(functionsList)
    let funcList = [...this.functionsList]
    console.log(funcList)

    if(functions) {
      for (let i=0; i< functions.length; i++) {
        for(let j=0;j<funcList.length; j++) {
          if(functions[i].title == funcList[j].function_name) {
            funcList[j].minValue = functions[i].minValue
            funcList[j].maxValue = functions[i].maxValue
          }
        }
      }
    }
    return funcList
  }

  


}
