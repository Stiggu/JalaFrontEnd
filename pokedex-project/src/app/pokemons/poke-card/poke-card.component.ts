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

  @Input()
  showNumber: boolean = true;

  @Input()
  size: string = "30px";


  constructor(private router: Router) {
  }

  getStyles() {
    return {
      'background-color': this.pokeData.color
    }

  }

  goToProfile() {
    this.router.navigate([`/pokedex/${this.pokeData.id}`]);
  }

  getNumber() {
    return `#${('00' + this.pokeData.id).slice(-3)}`
  }
}

