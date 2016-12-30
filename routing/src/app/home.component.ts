import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>Home Component !</h2>
    <hr>
    {{analytics}}
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {
  analytics: string;

  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.queryParams.subscribe(
      queryParam => this.analytics = queryParam['analytics']
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // Prevent memory leak
    this.subscription.unsubscribe();
  }

}
