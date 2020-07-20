import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Resp } from '../../interfaces/resp';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public array:any[] = []; 
  public carga:boolean = false;
  private imagenAux:string = "";

  constructor( private _ps: PokemonService ) { }

  ngOnInit(): void {
    
    this._ps.getPokemons().subscribe( ( p: Resp ) =>{
        
      this.array = p.results.map( (item:any) => {
        return { name: item.name, img: "" };
      });
      
      this.array.forEach( item =>{
      
        this._ps.getPokemonName( item.name ).subscribe( p =>{
          
          item.img = p.sprites.front_default
  
        } );
  
  
      });
  
      this.carga = true;
    });

  }

}


// this._ps.getPokemonName( item.name ).subscribe( p =>{  
          
//   console.log( p.sprites );

//   if ( p.sprites.front_default != null ) {
//     imagen = p.sprites.front_default;

//   } else {
//     if( p.sprites.front_female != null ){
//       imagen = p.sprites.front_female;
//     } else {
//       if( p.sprites.front_shiny != null  ){
//         imagen = p.sprites.front_shiny;
//       }else{
//         if( p.sprites.front_shiny_female != null ){
//           imagen = p.sprites.front_shiny_female;
//         }else{
//           imagen = "";
//         }
//       }
//     } 
//   }
  
// });
