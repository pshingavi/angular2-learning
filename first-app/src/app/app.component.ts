import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-other></app-other>
  `,
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`h1 {color:red;}`]
})
export class AppComponent {
  title = 'This is so cool!';
}
