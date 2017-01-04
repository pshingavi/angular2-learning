import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: []
})
export class TemplateDrivenComponent implements OnInit {

  onSubmit(form: NgForm) {
    console.log("Got access to the form object");
    console.log(form);
  }
  constructor() { }

  ngOnInit() {
  }

}
