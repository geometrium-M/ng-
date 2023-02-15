import { Component,Output,EventEmitter,Input } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(private groupService:GroupService){}


  @Input() id: number
  

  deleteGroup(id:number) {
    console.log('delete',id)
    this.groupService.deleteGroup(id)
  }

}
