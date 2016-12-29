import { RecipeService } from './recipes/recipe.service';
import { Component } from '@angular/core';

@Component({
  selector: 'rb-root',
  templateUrl: './recipe-book.component.html',
  providers: [RecipeService]
})
export class RecipeBookComponent {
}
