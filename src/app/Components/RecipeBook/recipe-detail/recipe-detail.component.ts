import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../Shared/Data/recipe.model';
import { Ingredient } from '../../../Shared/Data/ingredient.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipe(this.id);
    this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log('id is ', this.id);
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  addIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
