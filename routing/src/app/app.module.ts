import { UserEditGuard } from './user/user-edit.guard';
import { UserDetailGuard } from './user/user-detail.guard';
import { ConfiguredRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserEditComponent } from './user/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    ConfiguredRouting
  ],
  providers: [UserDetailGuard, UserEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
