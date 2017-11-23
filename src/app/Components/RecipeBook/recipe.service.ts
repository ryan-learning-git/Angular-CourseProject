import {Recipe} from '../../Shared/Data/recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Creme Brulee', 'Delicious creme brulee', 'https://du7ybees82p4m.cloudfront.net/334_5362628d3d4fa.jpg'),
    new Recipe('Passionfruit Souffle', 'Delicious passionfruit!', 'http://img.taste.com.au/9NjlxYev/taste/2016/11/frozen-passionfruit-souffles-87376-1.jpeg')
  ];

  getRecipes() {
    // slice() returns a new array which is a copy of the one stored. Avoids the reference issue.
    return this.recipes.slice();
  }

}
