import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() delete = new EventEmitter()
  @Output() modify = new EventEmitter()

  @Input() showM:boolean


  deleteGroupElement() {
    this.delete.emit()
  }

  modifyGroupElement(e:Event) {
    e.stopPropagation()
    this.modify.emit()
  }

}
