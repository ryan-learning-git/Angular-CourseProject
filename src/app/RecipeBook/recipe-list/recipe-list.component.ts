import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../../Shared/Data/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Creme Brulee', 'Delicious creme brulee', 'https://du7ybees82p4m.cloudfront.net/334_5362628d3d4fa.jpg'),
    new Recipe('Passionfruit Souffle', 'Delicious passionfruit!', 'http://img.taste.com.au/9NjlxYev/taste/2016/11/frozen-passionfruit-souffles-87376-1.jpeg')
  ];

  constructor() {
    console.log('Recipes are ', this.recipes);
  }

  ngOnInit() {
  }

  onRecipeSelected(recipeEl: Recipe){
    this.recipeWasSelected.emit(recipeEl);
  }

}
