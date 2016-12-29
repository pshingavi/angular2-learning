import { RecipeService } from './../recipe.service';
import { EventEmitter } from '@angular/common/src/facade/async';
import { Recipe } from './../recipe';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];  // Fetch using the RecipeService
  // Custom event
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }  // Provider of the recipeService is in recipe-book component

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
