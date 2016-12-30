import { UserComponent } from './user/user.component';
import { HomeComponent } from './home.component';
import {Routes, RouterModule} from "@angular/router"
// Configure the routes and export to the AppModule
const APP_ROUTES: Routes = [
  // Each route is a js object
  // First let's have route for home Component
  { path: '', component: HomeComponent },  // localhost:4200
  // User component
  { path: 'user/:id', component: UserComponent}  // localhost:4200/user
];

// Register the routes to the RouterModule and export to the root
export const ConfiguredRouting = RouterModule.forRoot(APP_ROUTES);
