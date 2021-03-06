import { USER_ROUTES } from './user/user.routes';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home.component';
import {Routes, RouterModule} from "@angular/router"
// Configure the routes and export to the AppModule
const APP_ROUTES: Routes = [
  // Each route is a js object
  // Redirect
  { path:'user', redirectTo: '/user/1', pathMatch: 'full' },
  // First let's have route for home Component
  { path: '', component: HomeComponent },  // localhost:4200
  // User component
  { path: 'user/:id', component: UserComponent, children: USER_ROUTES},  // localhost:4200/user/1
  // If route doesn't exist, redirect to default route
  { path:'**', redirectTo: '/user/1', pathMatch: 'full' },
];

// Register the routes to the RouterModule and export to the root
export const ConfiguredRouting = RouterModule.forRoot(APP_ROUTES);
