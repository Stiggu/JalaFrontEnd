import {Component, Input} from "@angular/core";
import PokemonProfile from "../../../core/interfaces/pokemonProfile";

@Component({
  selector: 'poke-chart',
  templateUrl: './poke-chart.component.html',
  styleUrls: ['./poke-chart.component.sass']
})
export class PokeChartComponent {
  @Input()
  pokemon!: PokemonProfile;
  constructor() {
  }

}
