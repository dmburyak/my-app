import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('1 A Test Recipe1', '1 This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJOkRblMeK8tti3DKIGNSVRogdJ0uho2h3A&usqp=CAU'),
    new Recipe('2 A Test Recipe', '2This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJOkRblMeK8tti3DKIGNSVRogdJ0uho2h3A&usqp=CAU')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeItem: Recipe): void {
    this.recipeWasSelected.emit(recipeItem);
  }
}
