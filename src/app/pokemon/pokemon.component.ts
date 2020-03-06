import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon$: Observable<Pokemon>;

  constructor(
    private pokemonService: PokemonService,
    private activeRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getPokemon();
  }

  goBack(): void {
    this.location.back();
  }

  getPokemon() {
    const name = this.activeRoute.snapshot.paramMap.get('name');
    this.pokemon$ = this.pokemonService.getPokemonDetails(name);
  }
}
