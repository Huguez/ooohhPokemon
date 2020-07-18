import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public name: string;
  public dataPokemon: Pokemon;
  public carga: boolean;


  constructor( private _ps:PokemonService, private actRout: ActivatedRoute ) {
    this.name = actRout.snapshot.paramMap.get('name'); 
    this.carga = false;
  }

  ngOnInit(): void {
    
    this._ps.getPokemonName( this.name ).subscribe( ( data : Pokemon) => {
      this.dataPokemon = data;
      console.log( this.dataPokemon );
      this.carga = true;
    } );

  }

}
