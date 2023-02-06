import { Component, OnInit } from '@angular/core';
import { groupList } from 'src/app/data/groupList';
import { IGroup } from '../model/group';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit{

  groupList:IGroup[] = [...groupList]
  showModal: boolean = false
  modalLeft: number
  modalTop: number



  show(event:any) {
    this.modalLeft = event.clientY
    this.modalTop = event.clientX
    this.showModal = true
    console.log(event)
  }


  ngOnInit() {}


}
