import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') ouMouseOver(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') ouMouseLeave(){
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   ''
    // );
    this.backgroundColor = '';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    private _elementRef : ElementRef,
    private _renderer: Renderer) { 

    }

}
