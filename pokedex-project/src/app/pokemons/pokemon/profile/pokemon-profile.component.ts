import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {PokemonService} from "../../services/pokemon.service";
import IPokemonData from "../../../core/interfaces/IPokemonData";
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";

@Component({
  selector: 'pokemon-profile',
  templateUrl: './pokemon-profile.component.html'
})
export class PokemonProfileComponent implements OnInit {
  id: number = 1;
  fields: any;
  pokemon!: IPokemonData;

  constructor(private location: Location, private pokemonService: PokemonService, private route: ActivatedRoute) {
  }

  goBack(): void {
    this.location.back();
  }

  async ngOnInit(): Promise<void> {

    const _id = this.route.snapshot.paramMap.get('id') || "1";
    this.id = parseInt(_id);
    this.route.data.subscribe(({pokemon}) => {
      this.pokemon = pokemon;
    })
  }
}
