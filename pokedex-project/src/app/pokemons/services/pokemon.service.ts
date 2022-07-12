﻿import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import PokemonListData from "../../core/interfaces/PokemonListData";
import {dataPokemons, pokemonColorMap} from "../../utils/utils";
import axios from "axios";
import PokemonSpecies from "../../core/interfaces/PokemonSpecies";
import PokemonProfile from "../../core/interfaces/pokemonProfile";
import PokemonStats from "../../core/interfaces/pokemonStats";
import {PokemonEvolution} from "../../core/interfaces/pokemonEvolution";
import {PokemonTypes} from "../../core/interfaces/pokemonTypes";

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private api = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {
  }

  getPokemonList(offset: number = 0, limit: number = 25) {
    return this.http.get(`${this.api}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{ results: PokemonListData[] }>
  }

  async getPokemonSpecies(url: string): Promise<PokemonSpecies> {
    const species = await axios(url);
    return {
      url: url,
      colour: species.data.color.name,
      description: species.data.flavor_text_entries[0].flavor_text,
      habitat: species.data.habitat.name,
      generation: species.data.generation.name,
    }
  }

  async getPokemonEvolutions(url: string): Promise<PokemonEvolution[]> {
    const evolutions = await axios(url);
    return this.findEvolutionInRequest(evolutions.data.chain, evolutions.data.id);
  }

  findEvolutionInRequest(evolutionData: any, id: number, currentData: PokemonEvolution[] = []) {

    console.log(evolutionData);
    if (evolutionData.evolves_to.length === 0) {
      return currentData;
    }

    evolutionData.evolves_to.forEach((evo: any) => {
      currentData.push({
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`,
        name: evo.species.name,
        url: evo.species.url
      })

      if (evo.evolves_to.length !== 0) {
        currentData.concat(this.findEvolutionInRequest(evo, id + 1, currentData))
      }
    })

    return currentData;
  }

  async getPokemon(id: number): Promise<PokemonProfile> {
    const mainData = await axios(`${this.api}/pokemon/${id}`);
    const species = await this.getPokemonSpecies(mainData.data.species.url);
    return {
      image: mainData.data.sprites.front_default,
      url: `${this.api}/pokemon/${id}`,
      name: mainData.data.name,
      id: id,
      height: mainData.data.height,
      weight: mainData.data.weight,
      stats: this.normalizeStats(mainData),
      species: species,
      types: this.normalizeTypes(mainData),
      evolutions: await this.getPokemonEvolutions(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
    };
  };

  normalizeTypes(mainData: any): PokemonTypes[] {
    const types = mainData.data.types.map((type: any) => type.type);
    console.log(types);
    return [...types]
  }

  normalizeStats(mainData: any): PokemonStats {
    return {
      hp: mainData.data.stats[0].base_stat,
      attack: mainData.data.stats[1].base_stat,
      defence: mainData.data.stats[2].base_stat,
      specialAttack: mainData.data.stats[3].base_stat,
      specialDefence: mainData.data.stats[4].base_stat,
      speed: mainData.data.stats[5].base_stat
    }
  }

  getPokemonMockData(): PokemonListData[] {
    const pokemons = dataPokemons.results;
    const pokemonList: PokemonListData[] = [];
    for (let pokemon = 0; pokemon < pokemons.length; pokemon++) {
      pokemonList.push({
        name: dataPokemons.results[pokemon].name,
        url: dataPokemons.results[pokemon].url,
        image: this.getPokemonImageUri(pokemon),
        id: pokemon + 1,
        color: Object.values(pokemonColorMap)[pokemon]
      })
    }
    return pokemonList;
  }

  getPokemonImageUri(id: number): string {
    const imageId = ('00' + (id + 1)).slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }
}
