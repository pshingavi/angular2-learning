import { Subscription } from 'rxjs/Rx';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipeIndex: number;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    // Extract the route params. Can be done in the constructor, but leave the heavy lifting here
    // Let's subscribe to the params in the Route, also unsubscribe in ngOnDestroy
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        // I want to update the index or id of the recipe
        if(params.hasOwnProperty('id')) {
          // In edit existing recipe mode
          this.recipeIndex = params['id'];  // using this statement alone will fail for /recipes/new since id is not in the route.
        } else {
          // In add new recipe mode
        }
      }
    );
  }

  ngOnDestroy() {
    // Avoid memory leaks because of the subscription to route params
    this.subscription.unsubscribe();
  }

}
