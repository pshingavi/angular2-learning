import { setTimeout } from 'timers';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'pipes-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myValue = 'lowercase';
  myDate = new Date(2016,5,24);
  values = ["Milk", "Beans", "Bread"];
  asyncValues = new Promise(
    (resolve, reject) => {
      setTimeout(
        () => resolve('Data is here!'), 2000
      );
    }
  );
}
