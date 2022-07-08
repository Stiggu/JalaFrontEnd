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

    const _id = this.route.snapshot.paramMap.get('id');
    if (_id) {
      this.id = parseInt(_id);
    }
    // this.pokemon = await this.pokemonService.getPokemon(this.id);
    console.log(this.pokemon)

    this.pokemon = {
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "url": "https://pokeapi.co/api/v2/pokemon/1",
      "name": "bulbasaur",
      "id": 1,
      "stats": {
        "hp": 45,
        "attack": 49,
        "defence": 49,
        "specialAttack": 65,
        "specialDefence": 65,
        "speed": 45
      },
      "species": {
        "url": "https://pokeapi.co/api/v2/pokemon-species/1/",
        "colour": "green",
        "description": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON."
      }
    }
  }
}
