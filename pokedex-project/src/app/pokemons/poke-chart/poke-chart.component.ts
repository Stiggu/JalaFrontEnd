import {Component, Input} from "@angular/core";
import IPokemonData from "../../core/interfaces/IPokemonData";

@Component({
  selector: 'poke-chart',
  templateUrl: './poke-chart.component.html',
  styleUrls: ['./poke-chart.component.sass']
})
export class PokeChartComponent {
  @Input()
  pokemon!: IPokemonData;
  constructor() {
  }

}
