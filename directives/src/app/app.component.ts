import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private switch = true;
  private items = [1, 2, 3, 4];
  private value = 8;
  onSwitch() {
    this.switch = !this.switch;
  }
}
