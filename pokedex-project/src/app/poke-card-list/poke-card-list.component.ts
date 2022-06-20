import {Component, OnInit} from '@angular/core';
import {dataPokemons, getPokemonImageUri, pokemonColorMap} from "../../utils/utils";
import IPokemonData from "../../shared/IPokemonData";

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
    for(let x = 0; x < dataPokemons.results.length; x++){
      this.pokemonList.push({
        name: dataPokemons.results[x].name,
        url: dataPokemons.results[x].url,
        colour: Object.values(pokemonColorMap)[x],
        image: getPokemonImageUri(x)
      })
    }
    console.log(this.pokemonList);
  }
}
