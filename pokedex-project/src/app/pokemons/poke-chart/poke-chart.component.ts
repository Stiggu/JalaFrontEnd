import {Component, Input, OnInit} from "@angular/core";
import IPokemonData from "../../core/interfaces/IPokemonData";
import {ChartConfiguration, ChartData, ChartOptions} from "chart.js";
import {ThemeService} from "ng2-charts";

@Component({
  selector: 'poke-chart',
  templateUrl: './poke-chart-component.html'
})
export class PokeChartComponent implements OnInit {
  @Input()
  pokemon!: IPokemonData;

  constructor(private themeService: ThemeService) {
  }

  radarChartLabels: string[] = ['HP', 'Attack', 'Defence', 'Special Attack', 'Special Defence', 'Speed'];
  radarChartData!: ChartData<'polarArea'>;
  public radarChartOptions!: ChartConfiguration<'polarArea'>['options'];

  ngOnInit(): void {
    this.radarChartData = {
      labels: this.radarChartLabels,
      datasets: [
        {
          data: [
            this.pokemon.stats.hp,
            this.pokemon.stats.attack,
            this.pokemon.stats.defence,
            this.pokemon.stats.specialAttack,
            this.pokemon.stats.specialDefence,
            this.pokemon.stats.speed,
          ],
          label: this.pokemon.name,
          backgroundColor: [
            'rgb(255, 99, 132, .9)',
            'rgb(255,0,0, .9)',
            'rgb(17,108,171, .9)',
            'rgb(100,9,9, .9)',
            'rgb(2,56,93, .9)',
            'rgb(165,68,255, .9)',
          ],
          borderColor: [
            'rgb(255,255,255)'
          ],
          borderWidth: 1,
          spacing: 10,
        },
      ]
    }

    this.radarChartOptions = {
      responsive: false,
      elements: {
      },
    };

    const overrides: ChartOptions = {
    };

  }
}
