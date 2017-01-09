import { Recipe } from './../recipe';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipeIndex: number;
  private recipe: Recipe;
  private isNew: boolean = true;
  private recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    // Extract the route params. Can be done in the constructor, but leave the heavy lifting here
    // Let's subscribe to the params in the Route, also unsubscribe in ngOnDestroy
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        // I want to update the index or id of the recipe
        if(params.hasOwnProperty('id')) {
          // In edit existing recipe mode
          this.recipeIndex = +params['id'];  // using this statement alone will fail for /recipes/new since id is not in the route. + prefix converts string to number
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
          this.isNew = false;
        } else {
          // In add new recipe mode
          this.isNew = true;
          this.recipe = null;
        }
        this.initForm();
      }
    );
  }

  ngOnDestroy() {
    // Avoid memory leaks because of the subscription to route params
    this.subscription.unsubscribe();
  }

  private initForm() {
    let recipeName = '';
    let recipeImageURL = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);
    // If we are in edit mode then create the FormControls for each ingredient
    if(!this.isNew) {
      for(let i=0; i<this.recipe.ingredients.length; i++) {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
            amount: new FormControl(this.recipe.ingredients[i].amount, [Validators.required, Validators.pattern("\\d+")])
          })
        );
      }
      recipeName = this.recipe.name;
      recipeImageURL = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }

    // Create a form for new or edit mode
    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageURL, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });

  }

  onSubmit() {
    const newRecipe = this.recipeForm.value;
    if(this.isNew) {
      // Add new recipe
      this.recipeService.addRecipe(newRecipe);
    } else {
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onAddItem(name: String, amount: number) {
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        amount: new FormControl(amount, [Validators.required, Validators.pattern("\\d+")])
      })
    );
  }

  onRemoveItem(index: number) {
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

  private navigateBack() {
    // Navigate back to starting position. Needs router
    this.router.navigate(['../']);
  }

}
