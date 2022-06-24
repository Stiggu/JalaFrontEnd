import {Component, OnInit} from '@angular/core';
import {dataPokemons, getPokemonImageUri, pokemonColorMap} from "../../utils/utils";
import IPokemonData from "../../core/interfaces/IPokemonData";

@Component({
  selector: 'app-poke-card-list',
  templateUrl: './poke-card-list.component.html',
  styleUrls: ['./poke-card-list.component.sass']
})
export class PokeCardListComponent implements OnInit{

  pokemonList: IPokemonData[] = [];

  constructor() {
  }

  ngOnInit() {
    const pokemons = dataPokemons.results;
    for(let pokemon = 0; pokemon < pokemons.length; pokemon++){
      this.pokemonList.push({
        name: dataPokemons.results[pokemon].name,
        url: dataPokemons.results[pokemon].url,
        colour: Object.values(pokemonColorMap)[pokemon],
        image: getPokemonImageUri(pokemon)
      })
    }
  }
}
