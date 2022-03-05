import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'A test Description', 'https://cdn.pixabay.com/photo/2017/12/29/19/37/food-3048440_960_720.jpg'),
    new Recipe('A test recipe', 'A test Description', 'https://cdn.pixabay.com/photo/2017/12/29/19/37/food-3048440_960_720.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
