import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";

export class UserDetailGuard implements CanActivate {
  // Return either observable or a boolean
  // The method needs to give an answer. Returns observable because if there are asynchronous tasks inside it will ask the router to wait
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | boolean {
  return confirm("Are you sure?");
 }
}
