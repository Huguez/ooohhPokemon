import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generacion',
  templateUrl: './generacion.component.html',
  styleUrls: ['./generacion.component.css']
})
export class GeneracionComponent implements OnInit {
  
  private param : string = '';
  public generacion : string;
  public carga: boolean;
  public habilidades : any;
  public main_region: any;
  public moves: any;
  public pokemon_species: any;
  public types: any;
  public version_groups: any;
  
  constructor( private _ps:PokemonService, private actRou: ActivatedRoute ){
    this.param = this.actRou.snapshot.paramMap.get("id");
    this.carga = false;
  }

  ngOnInit(): void {
    this._ps.getGeneracion( this.param ).subscribe( ( item:any ) => {
      // console.log(item);
      
      this.generacion = item.name;

      this.habilidades = item.abilities;
      
      this.main_region = item.main_region;
      
      this.moves = item.moves;

      this.pokemon_species = item.pokemon_species;

      this.types = item.types;

      this.version_groups = item.version_groups;

      this.carga = true;
    });
  }
}
