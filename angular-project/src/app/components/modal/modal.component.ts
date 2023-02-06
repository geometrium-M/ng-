import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() delete = new EventEmitter()
  @Output() modify = new EventEmitter()


  deleteGroupElement() {
    this.delete.emit()
  }

  modifyGroupElement() {
    this.modify.emit()
  }

}
