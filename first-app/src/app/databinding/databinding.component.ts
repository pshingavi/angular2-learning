import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'This is string interpolation';
  numberInterpolation = 2;
  boolRetmethod() {
    return true;
  }

/**
 * Method to listen to `clicked` EventEmitter defined in the child component EventDataBinding
 */
  onClicked(value: string) {
    alert(value);
  }
}
