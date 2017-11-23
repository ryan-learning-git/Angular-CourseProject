import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './Components/root/app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HeaderComponent } from './Components/PageFurniture/header/header.component';
import { ShoppingListComponent } from './Components/ShoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './Components/ShoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './Components/RecipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Components/RecipeBook/recipe-item/recipe-item.component';
import { RecipesComponent } from './Components/RecipeBook/recipes/recipes.component';
import { RecipeDetailComponent } from './Components/RecipeBook/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './Shared/Directives/dropdown/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    RecipeDetailComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
