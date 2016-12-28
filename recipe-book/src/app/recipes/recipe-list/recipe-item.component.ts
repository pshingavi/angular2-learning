import { Recipe } from './../recipe';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;  // This is binded from outsite. Here from the recipe-list component
  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
