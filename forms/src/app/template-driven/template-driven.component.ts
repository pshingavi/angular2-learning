import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
    input.ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class TemplateDrivenComponent implements OnInit {
  user = {
    username: 'pshingavi',
    email: 'pshingavi@xyz.com',
    password: 'test',
    gender: 'male'
  };

  genders = ['male', 'female'];

  onSubmit(form: NgForm) {
    console.log("Got access to the form object");
    console.log(form.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
