import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx"

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
export class UserComponent implements OnInit, OnDestroy {
  id: string;
  private subscription: Subscription;  // Need this to destroy the subscription in the constructor which by default is not destroyed when the component is destroyed. Causes memory leak
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    //this.id = activatedRoute.snapshot.params['id'];
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param["id"]  // Call back function (first of the 3 callbacks)
    );
  }

  ngOnInit() {
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();   // Prevent memory leaks. Destroy subscription mentioned in constructor
  }

}
