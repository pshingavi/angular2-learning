import { LogService } from './log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-a',
  template: `
    <div>
      <input type="text" #input>  <!--local variable #input-->
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onSend(input.value)">Send</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
  `,
  styles: [],
  providers: [LogService] // This tells angular to provide an instance of the class LogService
})
export class CmpAComponent {
  constructor(private logService: LogService) {}  // This alone doesn't get access to the LogService class. See providers meta-data above that tells angular to get an instance of the service class.

  onLog(value: string) {
    this.logService.writeToLog(value);
  }
}
