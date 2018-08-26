import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoZero]'
})
export class NozeroDirective {

  constructor(private inputElement: ElementRef) { 
  }

  @Input('appNoZero') personNumber: string;

  @HostListener('keyup') onkeyup() {
    this.hideZero();
  }

  private hideZero(){
    if(this.inputElement.nativeElement.value == '0')
      this.inputElement.nativeElement.value = '';
  }
}
