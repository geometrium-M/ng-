import { Injectable,ViewChild,ElementRef } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GroupActionsService {

@ViewChild('functions') func:ElementRef;


 public disable:boolean
  



 disableForm(value:boolean) {
  this.disable = value
 }

 getDiasbleForm() {
  return this.disable
 }

}
