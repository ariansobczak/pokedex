import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/pokemon-list.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemons$: Observable<List>;

  constructor(private pokemonService: PokemonService) {
    this.pokemons$ = this.pokemonService.pokemons$;
  }

  getPokemon(url: string) {
    this.pokemonService.getPokemonDetails(url);
  }
}
