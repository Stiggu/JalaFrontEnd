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

  constructor(private router: Router) {
  }

  getStyles(){
    if(this.showNumber){
      return {
        'background-color': this.pokeData.color
      }
    }

    return {
    }
  }

  goToProfile() {
    this.router.navigate([`/pokedex/${this.pokeData.id}`]);
  }

  getCompleteName() {
    return this.showNumber ? `${this.pokeData.name} #${('00' + this.pokeData.id).slice(-3)}` : `${this.pokeData.name}`
  }
}

