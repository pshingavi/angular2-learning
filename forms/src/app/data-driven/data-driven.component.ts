import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styles: []
})
export class DataDrivenComponent implements OnInit {
  myForm: FormGroup;  // Make it more useful. See constructor

  constructor() {
    // For heavy lifting do this in ngOnInit
    this.myForm = new FormGroup({
      'username': new FormControl(),// Key can be non quoted but to avoid minification errors or use special chars, use quotes
      'email': new FormControl(),
      'password': new FormControl()
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }

  ngOnInit() {
  }

}
