import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  fileterpokemon= '';
  pokemons = [new Pokemon('1', "nom1"), new Pokemon('2', 'nom2')];

  constructor() { }

  ngOnInit() {
  }

  
  

}
