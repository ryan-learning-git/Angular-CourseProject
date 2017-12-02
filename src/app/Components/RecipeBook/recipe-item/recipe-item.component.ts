import {Component, Input, OnInit } from '@angular/core';
import {Recipe} from '../../../Shared/Data/recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
