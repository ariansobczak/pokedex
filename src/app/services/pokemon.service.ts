import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, merge } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { List } from '../models/pokemon-list.model';
import { switchMap, map, concat, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons$: Observable<List>;
  pokemon$: Observable<Pokemon>;
  private _pokemon = new Subject<string>();

  constructor(private httpClient: HttpClient) {
    const ROOT_LINK = 'https://pokeapi.co/api/v2/pokemon/';
    this.pokemons$ = this.httpClient.get<List>(ROOT_LINK);
    this.pokemon$ = this._pokemon.asObservable().pipe(
      switchMap(url => {
        return this.httpClient.get<Pokemon>(url);
      })
    );
  }

  getPokemonDetails(url: string) {
    this._pokemon.next(url);
  }
}
