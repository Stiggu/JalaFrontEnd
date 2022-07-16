import {Component, Input} from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {PokemonEvolution} from "../../../core/interfaces/pokemonEvolution";

@Component({
  selector: 'poke-evolution',
  templateUrl: "poke-evolution.component.html",
  styleUrls:["./poke-evolution.component.sass"]
})
export class PokeEvolutionComponent {
  @Input()
  evolutionData!: PokemonEvolution[];

  faArrowRight = faArrowRight

  placeArrow(offset: number){
    return {
      'position': 'absolute',
      'left': '50%',
      'right': '100%',
      'margin-top': '62px',
      'margin-left': (180 * offset).toString() + 'px',
      'background': 'blue',
      'width': '20px',
      'text-align': 'center',
    }
  }
}
