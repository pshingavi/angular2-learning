import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styles: []
})
export class DataDrivenComponent implements OnInit {
  myForm: FormGroup;  // Make it more useful. See constructor

  genders = ['male','female'];

  constructor() {
    // For heavy lifting do this in ngOnInit
    this.myForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('pshingavi', Validators.required),// Key can be non quoted but to avoid minification errors or use special chars, use quotes
        'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      }),
      'password': new FormControl('', Validators.required),
      'gender': new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }

  ngOnInit() {
  }

}
