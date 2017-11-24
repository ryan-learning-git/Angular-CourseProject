import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../../Shared/Data/ingredient.model';
import {ShoppinglistService} from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppinglistService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);

    this.shoppingListService.addIngredient(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
  }

}
