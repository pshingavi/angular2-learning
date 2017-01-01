import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];  // Fetch using the RecipeService

  constructor(private recipeService: RecipeService) { }  // Provider of the recipeService is in recipe-book component

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

 // onSelected(recipe: Recipe) {
   // this.recipeSelected.emit(recipe);
 // }

}
