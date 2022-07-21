import PokemonDescription from "./pokemonDescription";

export default interface PokemonSpecies {
  url: string,
  colour: string,
  description: PokemonDescription[],
  habitat?: string,
  generation: string,
  evolutionChain: string
}
