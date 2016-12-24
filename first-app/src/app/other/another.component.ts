import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <article>
    Insert external data here
      <ng-content></ng-content>
    </article>
  `,
  styles: [`article {border:1px solid;}`]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
