import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <h1>user Component</h1>
    <a [routerLink]="['user']">User</a>
    <a [routerLink]="['../']">Home</a>
  `,
  styles: []
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
