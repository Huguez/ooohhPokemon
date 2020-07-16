import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { InterfacePokemon } from '../../interfaces/interface-pokemon';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {
  
  private id : number = -1;
  public titulo = "";
  public damageRelations: any;
  
  public gameIndices: any;
  public generation: any;
  public moveDamageClass: any;
  public moves: any;
  public names: any;
  public pokemons: any;

  constructor( private _ps : PokemonService , private actRou: ActivatedRoute ) {
    const param = this.actRou.snapshot.paramMap.get("id");
    this.id = parseInt( param, 10 );
  }

  ngOnInit(): void {
    this._ps.getTipo( this.id ).subscribe( (pokebato: InterfacePokemon) => { 
      // this.pokemon = pokebato;
      this.titulo =  pokebato.name ;
      this.damageRelations = pokebato.damage_relations ;
      // console.log( this.damageRelations );
      
      this.gameIndices = pokebato.game_indices;

      this.generation  = pokebato.generation ;
      this.moveDamageClass  = pokebato.move_damage_class ;
      this.moves  = pokebato.moves ;
      this.names  = pokebato.names ;
      this.pokemons = pokebato.pokemon.map( elem => { return elem.pokemon.name  } ) ;

     });
  }

}
