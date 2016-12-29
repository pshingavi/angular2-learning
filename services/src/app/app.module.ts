import { LogService } from './services/log.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CmpAComponent } from './services/cmp-a.component';
import { CmpBComponent } from './services/cmp-b.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpAComponent,
    CmpBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService],  // Here is the place to add providers shared by all other classes. ONE INSTANCE ONLY
  bootstrap: [AppComponent]
})
export class AppModule { }
