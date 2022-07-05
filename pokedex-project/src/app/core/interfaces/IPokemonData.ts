import IPokemonSpecies from "./IPokemonSpecies";

export default interface IPokemonData {
  name: string,
  url: string,
  image: string,
  id: number,
  stats: {
    hp: number,
    attack: number,
    defence: number,
    specialAttack: number,
    specialDefence: number,
    speed: number
  },
  species?: IPokemonSpecies
}
