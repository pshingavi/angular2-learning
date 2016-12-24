import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-other></app-other>
    <app-another>
      <div>
        <h1>Hello</h1>  <!--Style for this element is used from the current component and not from app-another-->
        <p>This is external code</p>
      </div>
    </app-another>
    <app-another>
      <p>Something more</p>
    </app-another>
    <app-another></app-another>
  `,
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`h1 {color:red;}`]
})
export class AppComponent {
  title = 'This is so cool!';
}
