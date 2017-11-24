import {Component, Input, OnInit} from '@angular/core';
import { Ingredient } from '../../../Shared/Data/ingredient.model';
import {ShoppinglistService} from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      ((passedIngredients: Ingredient[]) => {
        this.ingredients = passedIngredients;
      })
    );
  }


}
