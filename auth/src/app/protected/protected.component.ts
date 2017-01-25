import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-protected',
  template: `
        <h1>Protected - you shouldn't be here if not signed in</h1>
  `,
  styles: []
})
export class ProtectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
