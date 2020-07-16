import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private type_API: string    = "https://pokeapi.co/api/v2/type";
  
  private pokemon_API: string = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=200";
  
  constructor( private http:HttpClient ) { }

  getTypes(){
    return this.http.get<any>( this.type_API );
  }
  
  getTipo( id:number ){
    return this.http.get<any>( `${ this.type_API }/${ id }`);
  }

  getPokemons(){
    return this.http.get<any>( this.pokemon_API );
  }

}
