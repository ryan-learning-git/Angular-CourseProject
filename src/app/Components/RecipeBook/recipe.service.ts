import {Recipe} from '../../Shared/Data/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../../Shared/Data/ingredient.model';
import {ShoppinglistService} from '../ShoppingList/shoppinglist.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppinglistService){};

  private recipes: Recipe[] = [
    new Recipe('Creme Brulee',
      'Delicious creme brulee',
      'https://du7ybees82p4m.cloudfront.net/334_5362628d3d4fa.jpg',
      [
        new Ingredient('Sugar', 1),
        new Ingredient('Custard', 2)
      ]),
    new Recipe('Passionfruit Souffle',
      'Delicious passionfruit!',
      'http://img.taste.com.au/9NjlxYev/taste/2016/11/frozen-passionfruit-souffles-87376-1.jpeg',
      [
        new Ingredient('Passionfruit', 3),
        new Ingredient('Sugar', 5),
        new Ingredient('Flour', 2)
      ])
  ];

  getRecipes() {
    // slice() returns a new array which is a copy of the one stored. Avoids the reference issue.
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
