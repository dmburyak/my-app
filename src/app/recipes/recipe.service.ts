import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('1 A Test Recipe1', '1 This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJOkRblMeK8tti3DKIGNSVRogdJ0uho2h3A&usqp=CAU'),
    new Recipe('2 A Test Recipe', '2This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJOkRblMeK8tti3DKIGNSVRogdJ0uho2h3A&usqp=CAU')
  ];

  constructor() {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

}
