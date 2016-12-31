import { ComponentCanDeactivate } from './user-edit.guard';
import { Observable } from 'rxjs/Rx';
import { CanDeactivate } from '@angular/router';

export interface ComponentCanDeactivate {
  // Component implementing this interface must implement a function with no arguments and returning bool or Observable wrapping a bool
  canDeactivate: () => boolean | Observable<boolean>;
}

export class UserEditGuard implements CanDeactivate<ComponentCanDeactivate> {
  // The component in the fun will has to implement an interface mentioned above
  canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
    // return ifAvailable? execute : default
  }
}
