import { RecipeService } from './../recipe.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Recipe } from './../recipe';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipeIndex: number;
  selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService,
  private activatedRoute: ActivatedRoute,
  private recipeService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: any) => {
        // Function to execute on params
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

}
