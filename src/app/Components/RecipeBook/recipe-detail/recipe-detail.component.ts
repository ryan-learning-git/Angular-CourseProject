import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../Shared/Data/recipe.model';
import { Ingredient } from '../../../Shared/Data/ingredient.model';
import {ShoppinglistService} from '../../ShoppingList/shoppinglist.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppinglistService) { }

  ngOnInit() {
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    for (const ingredient of ingredients){
      this.shoppingListService.addIngredient(ingredient);
    }
    alert('Job done.');
  }

}
