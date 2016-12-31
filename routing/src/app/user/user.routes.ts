import { AppModule } from '../../../../recipe-book/src/app/app.module';
import { UserDetailGuard } from './user-detail.guard';
import { UserEditComponent } from './user-edit.component';
import { UserDetailComponent } from './user-detail.component';
import { Routes } from '@angular/router';
export const USER_ROUTES: Routes = [
  { path: 'detail', component: UserDetailComponent, canActivate: [UserDetailGuard] },  // UserDetailGuard needs to be provided to angular for injection. See app.module.ts
  { path: 'edit', component: UserEditComponent }
];
