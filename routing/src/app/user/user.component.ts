import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  template: `
    <h1>user Component</h1>
    <a [routerLink]="['/user']">User</a>
    <h2>Imperative Routing</h2>
    <button (click)="onNavigate()">Go Home</button>
  `,
  styles: []
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

}
