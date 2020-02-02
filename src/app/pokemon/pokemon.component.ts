import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon$: Observable<Pokemon>;
  
  constructor(private pokemonService: PokemonService) {
    this.pokemon$ = this.pokemonService.pokemon$;
  }

  ngOnInit() {
  }

}
