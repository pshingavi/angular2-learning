import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  // Like *ngIf. * is not a part of selector
  selector: '[unless]'
})
export class UnlessDirective {
  @Input() set unless(condition: boolean) {
    if(!condition) {
      // Show the template
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // Hide the template
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
    // Need handle or reference to template where the directive is going to be used and ref to the view where it's used
  }

}
