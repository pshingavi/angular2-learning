import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
      <p #boundContent>{{test}}</p>
    </app-lifecycle>
    <button (click)="delete = true">Click to destroy</button>
    <button (click)="test = 'Changed value'">Click to change content</button>
    <button (click)="boundValue = 2000">Click to change binding</button>
    <!--app-databinding></app-databinding-->
  `,
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`h1 {color:red;}`]
})
export class AppComponent {
  title = 'This is so cool!';
  delete = false;
  test = 'This is a test from AppContent';
  boundValue = 1000;
}
