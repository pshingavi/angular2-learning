import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() value: string;
  @Input() showPrompt: boolean;
  @Input() placeHolder: string;
  @Input() title: string;
  @Input() template: string;
  @Input() okText: string;
  @Input() cancelText: string;
  @Output() valueEmitted = new EventEmitter<string>();

  constructor() {
    this.okText = "OK";
    this.cancelText = "Cancel";
  }

  emitValue(value: string) {
    this.valueEmitted.emit(value);
  }

  ngOnInit() {
  }

}
