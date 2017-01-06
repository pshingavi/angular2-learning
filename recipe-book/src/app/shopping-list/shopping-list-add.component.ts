import { EventEmitter } from '@angular/common/src/facade/async';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient';
import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  @Input() item: Ingredient;  // Set by property binding or when isAdd mode. Set isAdd = false if sent from outside using property binding. Use onChanges hook for this
  isAdd: boolean = true;
  @Output() cleared = new EventEmitter();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    // Will be fired whenever Input() item changes. Check changes for "item" property
    if(changes.item.currentValue === null) {
      // Initial state
      this.isAdd = true;
      this.item = {name: null, amount: null};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    console.log(ingredient);
    // Add the ingredient to shopping list
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if(!this.isAdd) {
      // Edit
      this.shoppingListService.editItem(this.item, newIngredient);
      this.onClear();
    } else {
      // Add
      this.item = newIngredient;
      this.shoppingListService.addItem(this.item);
    }
  }

  onDelete() {
    this.shoppingListService.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }

}
