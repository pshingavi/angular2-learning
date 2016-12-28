import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'green';
  };

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'white';
  };

  @HostListener('click', ['$event']) onClick(event) {
    console.log(event);
  };

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  private backgroundColor = 'white';

  constructor() {
  }

}
