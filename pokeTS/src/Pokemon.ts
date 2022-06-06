import axios from "axios";

/*

Pokemon class
  - one pokemon has name, id, types and moves
  
List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  ✅ get a List of types from a pokemon, assign to a variable called types
  ✅ get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decorator to get new pokemons Ids in PokemonTrainer class 
*/

export function getSinglePokemon(id: string | number) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

function getNewPokemons<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    listOfIds = [1,2,3];
  }
}

type Move = {
  name: string;
  url: string;
  type?: string;
  damage?: number; // power
  powerPoints?: number; // pp
  accuracy?: number;
};

type Type = {
  name: string;
  url: string;
};

type PokemonData = {
  types: [{ 
      type: Type[] 
    }],
  moves: [{ 
      move: Move
    }],
  name: string,
  id: number,
  
}

export class Pokemon {
  name: string = '';
  id: number = 0;
  moves: Move[] = [];
  types: Type[] = [];

  constructor(pokemonResult: any) {
    console.log(pokemonResult.types);
    const parsedPokemonData = this.parsePokemonData(pokemonResult);
    this.buildFieldsPokemon(parsedPokemonData);
  }
  
  parsePokemonData(pokemon: any): PokemonData{
    return {
      name: pokemon.name,
      id: pokemon.id,
      types: pokemon.types,
      moves: pokemon.moves
    }    
  }

  getPokemonMoves(pokemon: PokemonData){
    const moves: Move[] = [];
    
    for(let currentMove = 0; currentMove < pokemon.moves.length; currentMove++){
      if(moves.length === 4){
        break;
      }
      
      const currentSkillIndex = Math.floor(Math.random() * (pokemon.moves.length + 1))
      const skill = pokemon.moves.splice(currentSkillIndex, 1)[0];
      moves.push({
        name: skill.move.name,
        url: skill.move.url,
      })
    }
    
    return moves;
  }
  
  getPokemonTypes(pokemon: PokemonData){
    const types: Type[] = [];
    // pokemon.types.forEach(typeData => types.push(typeData.type))
    return types;
  }
  
  buildFieldsPokemon(pokemon: PokemonData) {
    this.name = pokemon.name;
    this.id = pokemon.id;
    this.moves = this.getPokemonMoves(pokemon);
    this.types = this.getPokemonTypes(pokemon);
  }

  displayInfo() {
    console.log(`==========================`);
    console.log(`${this.id} ${this.name}`);
    if(this.types.length > 0){
      console.log(`Type:`)
      this.types.forEach(type => {
        console.log(`${type.name}`);
      });
    }

    if(this.moves.length > 0){
      console.log(`Moves:`)
      this.moves.forEach(move => {
        console.log(`${move.name}`);
      });
    }
  }
}

export class PokemonTrainer {
  name: string;
  pokemons: Pokemon[] = [];
  listOfIds: number[] = [2,4];
  constructor(name: string) {
    this.name = name;
  }

  async getPokemons() {
    const listPokemons = this.listOfIds.map(id => getSinglePokemon(id));
    const results = await Promise.all(listPokemons)
    results.forEach(result => {
      this.pokemons.push(new Pokemon(result.data));
    });
  }

  async showTeam() {
    await this.getPokemons();
    console.log('Trainer:', this.name);
    this.pokemons.forEach(pokemon => {
      pokemon.displayInfo();
    });
  }
}
