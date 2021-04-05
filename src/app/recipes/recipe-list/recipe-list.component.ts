import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://tse3.mm.bing.net/th?id=OIP.dUtSVIi6aDDgX0sBNjy96QAAAA&pid=Api'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://tse3.mm.bing.net/th?id=OIP.dUtSVIi6aDDgX0sBNjy96QAAAA&pid=Api'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
