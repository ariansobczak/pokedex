import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/pokemon-list.model';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemons$: Observable<List>;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {
    this.pokemons$ = this.pokemonService.pokemons$;
  }

  getPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemons', pokemon.name]);
  }
}
