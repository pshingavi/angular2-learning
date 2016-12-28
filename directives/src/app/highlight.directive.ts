import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover() {
    console.log(this.highlightColor);
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  };

  @HostListener('click', ['$event']) onClick(event) {
    console.log(event);
  };

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @Input() defaultColor = 'white';
  @Input() highlightColor = 'green';
  private backgroundColor: string;

  constructor() {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
