import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      '1 A Test Recipe1',
      '1 This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJOkRblMeK8tti3DKIGNSVRogdJ0uho2h3A&usqp=CAU',
      [
        new Ingredient('meat', 1),
        new Ingredient('bread', 2),
      ]),
    new Recipe(
      '2 A Test Recipe',
      '2This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJOkRblMeK8tti3DKIGNSVRogdJ0uho2h3A&usqp=CAU',
      [
        new Ingredient('tomato', 3),
        new Ingredient('banana', 1),
      ]
    )
  ];

  constructor() {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

}
