import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  constructor() {
  }

  findId(url: string) {
    return parseInt(url.split('/').reverse()[1]);
  }

  async getPokemonList(offset: number = 0, limit: number = 50) {
    const pokemonListRequest = await axios.get(`${this.api}/pokemon?limit=${limit}&offset=${offset}`)
    const pokeListData: PokemonListData[] = []
    for (let i = 0; i < pokemonListRequest.data.results.length; i++) {
      const id = this.findId(pokemonListRequest.data.results[i].url);
      pokeListData.push({
        id: id,
        image: this.getPokemonImageUri(id),
        name: pokemonListRequest.data.results[i].name,
        url: pokemonListRequest.data.results[i].url,
        color: this.getPokemonColourFromHash(id),
      })
    }
    return pokeListData;
  }

  getPokemonColourFromHash(id: number){
    return Object.values(pokemonColorMap)[id];
  }

  async getPokemonSpecies(url: string): Promise<PokemonSpecies> {
    const species = await axios(url);
    return {
      url: url,
      colour: species.data.color.name,
      description: species.data.flavor_text_entries[0].flavor_text,
      habitat: species.data.habitat.name,
      generation: species.data.generation.name,
      evolutionChain: species.data.evolution_chain.url
    }
  }

  async getPokemonEvolutions(url: string, id: number): Promise<PokemonEvolution[]> {
    const evolutions = await axios(url);
    return this.findEvolutionInRequest(evolutions.data.chain, id);
  }

  findEvolutionInRequest(evolutionData: any, id: number, currentData: PokemonEvolution[] = []) {

    console.log(evolutionData);
    if (evolutionData.evolves_to.length === 0) {
      return currentData;
    }

    console.log("TEST", evolutionData, id);

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
    /*    const mainData = await axios(`${this.api}/pokemon/${id}`);
        const species = await this.getPokemonSpecies(mainData.data.species.url);
        const builtPokemon = {
          image: mainData.data.sprites.front_default,
          url: `${this.api}/pokemon/${id}`,
          name: mainData.data.name,
          id: id,
          height: mainData.data.height,
          weight: mainData.data.weight,
          stats: this.normalizeStats(mainData),
          species: species,
          types: this.normalizeTypes(mainData),
          evolutions: await this.getPokemonEvolutions(species.evolutionChain, id)
        };
        return builtPokemon;*/
    return {
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      "url": "https://pokeapi.co/api/v2/pokemon/4",
      "name": "charmander",
      "id": 4,
      "height": 6,
      "weight": 85,
      "stats": {
        "hp": 39,
        "attack": 52,
        "defence": 43,
        "specialAttack": 60,
        "specialDefence": 50,
        "speed": 65
      },
      "species": {
        "url": "https://pokeapi.co/api/v2/pokemon-species/4/",
        "colour": "red",
        "description": "Obviously prefers\nhot places. When\nit rains, steam\fis said to spout\nfrom the tip of\nits tail.",
        "habitat": "mountain",
        "generation": "generation-i",
        "evolutionChain": "https://pokeapi.co/api/v2/evolution-chain/2/"
      },
      "types": [
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      ],
      "evolutions": [
        {
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
          "name": "charmeleon",
          "url": "https://pokeapi.co/api/v2/pokemon-species/5/"
        },
        {
          "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
          "name": "charizard",
          "url": "https://pokeapi.co/api/v2/pokemon-species/6/"
        }
      ]
    }
  };

  normalizeTypes(mainData: any): PokemonTypes[] {
    const types = mainData.data.types.map((type: any) => type.type);
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
