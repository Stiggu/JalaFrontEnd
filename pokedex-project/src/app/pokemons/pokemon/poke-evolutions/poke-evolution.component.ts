import {Component, Input} from "@angular/core";
import {PokemonEvolution} from "../../../core/interfaces/pokemonEvolution";

@Component({
  selector: 'poke-evolution',
  templateUrl: "poke-evolution.component.html"
})
export class PokeEvolutionComponent {
  @Input()
  evolutionData!: PokemonEvolution[];
}
