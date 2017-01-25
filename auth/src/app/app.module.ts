import { AppRouting } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProtectedComponent } from './protected/protected.component';
import { SigninComponent } from './unprotected/signin.component';
import { SignupComponent } from './unprotected/signup.component';
import { HeaderComponent } from './shared/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
