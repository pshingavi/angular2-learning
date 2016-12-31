import { Observable } from 'rxjs/Rx';
import { ComponentCanDeactivate } from './user-edit.guard';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  template: `
    <h3>User Edit</h3>
    <button (click)="done=true">Done</button>
    <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
  `,
  styles: []
})
export class UserEditComponent implements OnInit, ComponentCanDeactivate {
  done = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

 canDeactivate(): Observable<boolean> | boolean {
    if(!this.done) {
      return confirm("Not done. Still want to leave?");
    }
    return true;
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

}
