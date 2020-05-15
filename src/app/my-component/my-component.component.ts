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
  valid(){
    var a = document.getElementById(1).selectedIndex;
    var b = this.pokemons[a].toString();
    var c = b.substring(3, b.length-1);
    console.log(a);
    console.log(c)
    this.monservice.getPokemon(c).subscribe(res =>{
      let truc = res
      alert("name : " +truc.name + "\n" + "base_experience : "+truc.base_experience+"\n"+"height : "+truc.height+"\n"+"species : "+res.species.name)
    });
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
