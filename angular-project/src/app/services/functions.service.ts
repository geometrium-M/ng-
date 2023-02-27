import { Injectable } from '@angular/core';
import { IFunctionElement } from '../components/model/functionElement';
import { functionsList } from '../data/functions';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  functionsList:IFunctionElement[] = functionsList

  constructor() {
    this.functionsList.sort((a,b)=>{
      if(a.function_name < b.function_name) return -1
      else return 1
    })    
  }




  getFunctionsList() {

    return this.functionsList
  }

}
