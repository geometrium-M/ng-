import { Directive,ElementRef,Input,QueryList,Renderer2, ViewChildren } from '@angular/core';

@Directive({
  selector: '[appDisable]'
})
export class DisableDirective {
  constructor(private renderer:Renderer2,private el:ElementRef) { 
  }

  @Input() set appDisable(condition:boolean) {
    if(condition) {
      this.renderer.setAttribute(this.el.nativeElement, 'disabled','')
    }
      
    }
  }



