import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './Components/root/app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './Components/PageFurniture/header/header.component';
import { ShoppingListComponent } from './Components/ShoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './Components/ShoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './Components/RecipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Components/RecipeBook/recipe-item/recipe-item.component';
import { RecipesComponent } from './Components/RecipeBook/recipes/recipes.component';
import { RecipeDetailComponent } from './Components/RecipeBook/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './Shared/Directives/dropdown/dropdown.directive';
import {ShoppinglistService} from './Components/ShoppingList/shoppinglist.service';
import {RecipeService} from './Components/RecipeBook/recipe.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { RecipeStartComponent } from './Components/RecipeBook/recipe-start/recipe-start.component';


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
    DropdownDirective,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ShoppinglistService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
