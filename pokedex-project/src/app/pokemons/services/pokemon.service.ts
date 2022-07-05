import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import IPokemonData from "../../core/interfaces/IPokemonData";
import {dataPokemons, pokemonColorMap} from "../../utils/utils";
import axios from "axios";
import IPokemonSpecies from "../../core/interfaces/IPokemonSpecies";

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private api = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {
  }

  getPokemonList(offset: number = 0, limit: number = 25) {
    return this.http.get(`${this.api}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{ results: IPokemonData[] }>
  }

  async getPokemon(id: number): Promise<IPokemonData> {
    const request = await axios(`${this.api}/pokemon/${id}`);
    return {
      image: request.data.sprites.front_default,
      url: `${this.api}/pokemon/${id}`,
      name: request.data.name,
      id: id,
      stats: {
        hp: request.data.stats[0].base_stat,
        attack: request.data.stats[1].base_stat,
        defense: request.data.stats[2].base_stat,
        specialAttack: request.data.stats[3].base_stat,
        specialDefense: request.data.stats[4].base_stat,
        speed: request.data.stats[5].base_stat
      },
      species: {
        url: request.data.species.url,
        colour: '#fff',
      }
    };
  };

  async getPokemonSpecies(url: string) :Promise<IPokemonSpecies> {
    const request = await axios(url);
    return {
      url: url,
      colour: request.data.color.name,
      description: request.data.flavor_text_entries[0].flavor_text,
    }
  }

  getPokemonMockData(): IPokemonData[] {
    const pokemons = dataPokemons.results;
    const pokemonList: IPokemonData[] = [];
    for (let pokemon = 0; pokemon < pokemons.length; pokemon++) {
      pokemonList.push({
        name: dataPokemons.results[pokemon].name,
        url: dataPokemons.results[pokemon].url,
        image: this.getPokemonImageUri(pokemon),
        id: pokemon + 1,
        species: {
          url: '',
          colour: Object.values(pokemonColorMap)[pokemon],
        },
      })
    }
    return pokemonList;
  }

  getPokemonImageUri(id: number): string {
    const imageId = ('00' + (id + 1)).slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }
}
