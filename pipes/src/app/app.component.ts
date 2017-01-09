import { Component } from '@angular/core';

@Component({
  selector: 'pipes-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myValue = 'lowercase';
  myDate = new Date(2016,5,24);
}
