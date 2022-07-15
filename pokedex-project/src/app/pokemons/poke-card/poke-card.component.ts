import {Component, Input} from '@angular/core';
import PokemonListData from "../../core/interfaces/PokemonListData";
import {Router} from "@angular/router";

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.sass']
})
export class PokeCardComponent {

  @Input()
  pokeData!: PokemonListData;

  constructor(private router: Router) {
  }

  goToProfile() {
    this.router.navigate([`/pokedex/${this.pokeData.id}`]);
  }
}

