import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {PokemonService} from "../../services/pokemon.service";
import IPokemonData from "../../../core/interfaces/IPokemonData";

@Component({
  selector: 'pokemon-profile',
  templateUrl: './pokemon-profile.component.html'
})
export class PokemonProfileComponent implements OnInit{
  id: number = 1;
  fields: any;
  pokemon!: IPokemonData;

  constructor(private location: Location, private pokemonService: PokemonService) {
  }

  goBack(): void {
    this.location.back();
  }

  async ngOnInit(): Promise<void> {
    this.pokemon = await this.pokemonService.getPokemon(this.id);
  }

}
