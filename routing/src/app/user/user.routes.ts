import { UserEditComponent } from './user-edit.component';
import { UserDetailComponent } from './user-detail.component';
import { Routes } from '@angular/router';
export const USER_ROUTES: Routes = [
  { path: 'detail', component: UserDetailComponent },
  { path: 'edit', component: UserEditComponent }
];
