import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RecipeBookComponent } from './recipe-book.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    RecipeBookComponent,
    HeaderComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [RecipeBookComponent]
})
export class AppModule { }
