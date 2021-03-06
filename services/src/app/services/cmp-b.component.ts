import { DataService } from './data.service';
import { LogService } from './log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-b',
  template: `
    <div>
      <input type="text" #input>  <!--local variable #input-->
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
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
  styles: []
})
export class CmpBComponent implements OnInit {
  private value: string = '';
  private items: string[] = [];
  constructor(private logService: LogService, private dataService: DataService) {}  // This alone doesn't get access to the LogService class. See providers meta-data above that tells angular to get an instance of the service class.

  onLog(value: string) {
    this.logService.writeToLog(value);
  }

  onStore(value: string) {
    this.dataService.addData(value);
  }

  onGet() {
    // With slice we limit the list to show live update.
    this.items = this.dataService.getData().slice(0);
  }

  ngOnInit() {
    this.dataService.pushDataEmitter.subscribe(
      // multiple callbacks
      // when data is emitted. Look at ES6 for below
      data => {
        this.value = data;
      }
    );
  }

}
