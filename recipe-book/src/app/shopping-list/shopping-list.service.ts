import { Ingredient } from './../shared/ingredient';
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    // Use default push method of an array to apply to all items to pass it to this.items
    Array.prototype.push.apply(this.items, items);
  }

}
