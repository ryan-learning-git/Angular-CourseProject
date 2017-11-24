import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../Shared/Data/recipe.model';
import { Ingredient } from '../../../Shared/Data/ingredient.model';
import {RecipeService} from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  addIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
