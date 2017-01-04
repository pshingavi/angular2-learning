import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: []
})
export class TemplateDrivenComponent implements OnInit {

  onSubmit() {
    console.log("Would be nice to have access to the form here!");
  }
  constructor() { }

  ngOnInit() {
  }

}
