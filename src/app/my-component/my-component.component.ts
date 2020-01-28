import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import {APIPokemonService} from "../poke-api.service";
import {formatPercent} from "@angular/common";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  fileterpokemon= '';
  pokemons = [];
  clickMessage='';

  constructor(private monservice: APIPokemonService) { }
  valid(message){
    var a = document.querySelector("select").selectedIndex;
    //this.clickMessage = this.pokemons[a];
  }

  ngOnInit() {
    this.monservice.getListe().subscribe(res =>{
      for (let i = 0; i < res.results.length; i++) {
        let po;
        po = new Pokemon(i, res.results[i].name);
        this.pokemons.push(po);
      }
    });

  }




}
