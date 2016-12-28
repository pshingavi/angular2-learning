import { EventEmitter } from '@angular/common/src/facade/async';
import { Recipe } from './../recipe';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];  // Empty at begining
  // Let's create dummy recipe to test UI immediately
  dummyRecipe = new Recipe("Dummy","Dummy description",
  "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2007/4/4/0/ip0202_fudge.jpg.rend.sni12col.landscape.jpeg");

  // Custom event
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
