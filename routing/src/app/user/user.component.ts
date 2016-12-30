import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  template: `
    <h1>user Component</h1>
    <h2>Imperative Routing</h2>
    <button (click)="onNavigate()">Go Home</button>
    <hr>
    {{id}}
  `,
  styles: []
})
export class UserComponent implements OnInit {
  private id: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

}
