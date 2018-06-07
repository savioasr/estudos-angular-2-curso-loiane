import { Directive, HostBinding, HostListener, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') ouMouseOver(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') ouMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string    = 'white';
  @Input() highlightColor: string  = 'yellow';

  constructor() {}

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
