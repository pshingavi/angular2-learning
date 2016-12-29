import { Recipe } from './recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe("Dum Biryani","Best rice biryani - Veg",
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQXzzZPlu2EyusjqdnbWt948Loq564ajoG0i56GGmta8N6Zct0X", []),
  new Recipe("Masala Dosa","The South Indian taste",
  "http://newyorkstreetfood.com/wp-content/uploads/2013/03/maxresdefault-15.jpg", []),
  new Recipe("Triple Shezwan Noodles","Indo-Chinese plate",
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAqkg5aR4S014ChQ8OIU2rgmLgumA2XNHK0c5iDdOVny0v9v5d", []),
  new Recipe("Chai","Wake up Tea",
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEg8C-7smd9cO-B-_t94PvJlEjCy9SWjugaRTfdGytRej1WD6daw", [])
  ];

  constructor() { }

  getRecipe() {
    return this.recipes;
  }
}
