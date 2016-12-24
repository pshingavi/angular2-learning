import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click me</button>
  `,
  styles: []
})
export class EventBindingComponent {
  // Define new peoperty, make it an EventEmitter of type string, make it listenable outside of this component using @Output()
  @Output() clicked = new EventEmitter<string>();

  onClicked() {
    //alert('Clicked Me!');
    this.clicked.emit("Emit works !"); // Emit String
  }
}
