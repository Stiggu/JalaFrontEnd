import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import IPokemonData from "../../core/interfaces/IPokemonData";
import {dataPokemons, pokemonColorMap} from "../../utils/utils";

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private api = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) { }

  getPokemonList(offset: number = 0, limit: number = 25){
    return this.http.get(`${this.api}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{ results: IPokemonData[] }>
  }

  getPokemonMockData(): IPokemonData[]{
    const pokemons = dataPokemons.results;
    const pokemonList: IPokemonData[] = [];
    for(let pokemon = 0; pokemon < pokemons.length; pokemon++){
      pokemonList.push({
        name: dataPokemons.results[pokemon].name,
        url: dataPokemons.results[pokemon].url,
        colour: Object.values(pokemonColorMap)[pokemon],
        image: this.getPokemonImageUri(pokemon),
        id: ("00" + (pokemon + 1).toString()).slice(-3),
      })
    }
    return pokemonList;
  }

  getPokemonImageUri (id: number): string {
    const imageId = ('00' + (id + 1)).slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }
}
