import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  template: `
  <!--I could have used ng-content to get data from the component's usage-->
    {{result}}
  `,
  styles: []
})
export class PropBindingComponent {
  // @Input() makes this property bindable from anywhere in the app
  @Input() result: number = 0;
}
