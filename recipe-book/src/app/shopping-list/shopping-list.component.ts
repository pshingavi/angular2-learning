import { Ingredient } from './../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  selectedItem: Ingredient = null;  // No selected item. This is to be passed to the shopping-list-add component

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.items = this.shoppingListService.getItems();
  }

  onSelectItem(item: Ingredient) {
    // Selected ingredient from the shopping bag
    this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null;
  }

}
