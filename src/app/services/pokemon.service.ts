import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Resp } from '../interfaces/resp';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private generacion_API: string     = "https://pokeapi.co/api/v2/generation";
  
  private pokemonAbility_API: string = "https://pokeapi.co/api/v2/ability";
  
  private pokemon_API: string        = "https://pokeapi.co/api/v2/pokemon";
  
  private type_API: string           = "https://pokeapi.co/api/v2/type";
  
  private all_pokemons_API: string   = "https://pokeapi.co/api/v2/pokemon";
  
  constructor( private http:HttpClient ) { }

  getTypes(){
    return this.http.get<any>( this.type_API );
  }
  
  getTipo( id:number ){
    return this.http.get<any>( `${ this.type_API }/${ id }`);
  }

  getPokemons( limit?: number, offset?: number ){
    
    let url = `${ this.all_pokemons_API }?`;
    
    if( limit ){
      url = `${ url }&limit=${limit}`;
    }

    if( offset ){
      url = `${ url }&offset=${offset}`;
    }
    
    return this.http.get<any>( url );
  }
  
  getPokemon( id:number ){
    return this.http.get<any>( `${ this.pokemon_API }/${ id }` );
  }

  getPokemonName( name:string ){
    return this.http.get<any>( `${ this.pokemon_API }/${ name }` );
  }

  getAllGeneraciones(){
    return this.http.get<any>( `${ this.generacion_API }` );
  }

  getGeneracion( id:any ){
    return this.http.get<any>( `${ this.generacion_API }/${id}` );
  }

}
