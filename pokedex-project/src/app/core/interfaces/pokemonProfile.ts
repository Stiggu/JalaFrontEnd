import PokemonSpecies from "./PokemonSpecies";
import {PokemonTypes} from "./pokemonTypes";
import PokemonStats from "./pokemonStats";
import {PokemonEvolution} from "./pokemonEvolution";

export default interface PokemonProfile {
  name: string,
  url: string,
  image: string,
  id: number,
  weight: number,
  height: number,
  stats: PokemonStats,
  types: PokemonTypes[],
  species: PokemonSpecies,
  evolutions: PokemonEvolution[]
}
