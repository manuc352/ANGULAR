import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

//import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface PokemonResult {
  results ?: IPokemon[];
}

interface IPokemon {

  name ?: string;
  url ?:string;
}

@Injectable({
  providedIn: 'root'
})


export class APIPokemonService {

  constructor(private httpService: HttpClient) { }

  getListe():Observable<PokemonResult>
  {
    return this.httpService.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807');
  }

  getPokemon(poke:any):Observable<any>{
    return this.httpService.get('https://pokeapi.co/api/v2/pokemon/'+poke);
  }
}

