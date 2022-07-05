import IPokemonSpecies from "./IPokemonSpecies";

export default interface IPokemonData {
  name: string,
  url: string,
  image: string,
  id: number,
  stats?: {
    hp: number,
    attack: number,
    defense: number,
    specialAttack: number,
    specialDefense: number,
    speed: number
  },
  species?: IPokemonSpecies
}
