import { RecipesComponent } from './recipes.component';
import { Headers, Http, Response } from '@angular/http';
import { Ingredient } from './../shared/ingredient';
import { Recipe } from './recipe';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe("Dum Biryani","Best rice biryani - Veg",
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQXzzZPlu2EyusjqdnbWt948Loq564ajoG0i56GGmta8N6Zct0X", [
      new Ingredient('rice', 1),
      new Ingredient('onion', 2)]),

    new Recipe("Masala Dosa","The South Indian taste",
"http://newyorkstreetfood.com/wp-content/uploads/2013/03/maxresdefault-15.jpg", [
      new Ingredient('Dosa batter', 1)]),

    new Recipe("Triple Shezwan Noodles","Indo-Chinese plate",
"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAqkg5aR4S014ChQ8OIU2rgmLgumA2XNHK0c5iDdOVny0v9v5d", [
      new Ingredient('Rice', 1),
      new Ingredient('Noodles', 1),
      new Ingredient('Shezwan sauce', 1)]),

    new Recipe("Chai","Wake up Tea",
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEg8C-7smd9cO-B-_t94PvJlEjCy9SWjugaRTfdGytRej1WD6daw", [
      new Ingredient("Water", 1),
      new Ingredient('Tea powder', 1)
  ])
  ];

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    // Configure the Observable
    return this.http.put('https://recipebook-50f9c.firebaseio.com/RecipesComponent.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipebook-50f9c.firebaseio.com/RecipesComponent.json')
      .map((response: Response) => response.json())  // Provide only data to the subscriber and not whole object
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          // Emit the EventEmitter for recipe change
          this.recipesChanged.emit(this.recipes);  // Who is interested - see recipe list component by subscribing to this
        }
      );
  }

}
