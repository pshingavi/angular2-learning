import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {
  item: Ingredient;
  isAdd: boolean = true;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(ingredient: Ingredient) {
    console.log(ingredient);
    // Add the ingredient to shopping list
    if(!this.isAdd) {
      // Edit
    } else {
      // Add
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.shoppingListService.addItem(this.item);
    }
  }
}
