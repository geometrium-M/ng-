import { Injectable,ViewChild,ElementRef } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GroupActionsService {

@ViewChild('functions') func:ElementRef;


  public showGroup:boolean = false
  public modifGroup:boolean = false
  

  constructor() { }

 toShowGroup() {
  this.showGroup = true
 }

 getShowGroup() {
  return this.showGroup
 }

 toModifGroup() {
  this.modifGroup = true
 }

//  createGroup() {
//   console.log(this.func.nativeElement.getElementsbyTagName('input'))

//  }



}
