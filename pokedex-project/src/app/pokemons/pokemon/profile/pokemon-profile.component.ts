import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {PokemonService} from "../../services/pokemon.service";
import IPokemonData from "../../../core/interfaces/IPokemonData";
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

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
    /*    console.log(_id);
        this.pokemon = await this.pokemonService.getPokemon(this.id);
        console.log(this.pokemon)*/
    this.pokemon = {
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      "url": "https://pokeapi.co/api/v2/pokemon/5",
      "name": "charmeleon",
      "id": 5,
      "stats": {
        "hp": 58,
        "attack": 64,
        "defense": 58,
        "specialAttack": 80,
        "specialDefense": 65,
        "speed": 80
      },
      "species": {
        "url": "https://pokeapi.co/api/v2/pokemon-species/5/",
        "colour": "#fff"
      }
    }

  }

}
