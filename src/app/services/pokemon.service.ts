import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { List } from '../models/pokemon-list.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons$: Observable<List>;
  pokemon$: Observable<Pokemon>;
  private _pokemon = new Subject<string>();
  private ROOT_LINK = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient) {
    this.pokemons$ = this.httpClient.get<List>(this.ROOT_LINK);

    this.pokemon$ = this._pokemon.asObservable().pipe(
      switchMap(name => {
        return this.httpClient.get<Pokemon>(this.ROOT_LINK + name);
      })
    );
  }

  getPokemonDetails(name: string) {
    return this.httpClient.get<Pokemon>(this.ROOT_LINK + name)
  }
}
