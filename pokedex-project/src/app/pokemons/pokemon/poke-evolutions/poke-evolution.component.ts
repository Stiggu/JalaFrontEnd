import {Component, Input} from "@angular/core";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import PokemonListData from "../../../core/interfaces/PokemonListData";

@Component({
  selector: 'poke-evolution',
  templateUrl: "poke-evolution.component.html",
  styleUrls:["./poke-evolution.component.sass"]
})
export class PokeEvolutionComponent {
  @Input()
  evolutionData!: PokemonListData[];
  faArrowRight = faArrowRight
}
