import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Resp } from '../../interfaces/resp';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public array:any[] = []; 
  public carga:boolean = false;
  public offset: number = 5;
  public limit: number = 5;

  private imagenAux:string = "";

  constructor( private _ps: PokemonService ) { }

  ngOnInit(): void {
    this.loadingPokemons();
  }

  private getParam( next:string ){
    let aux = next.split( '?' );
    aux = aux[1].split('&');

    const a = aux[1].split('=');
    
    const b = aux[0].split('=');
    
    return { limit: parseInt(a[1], 10), offset: parseInt(b[1], 10) };
  }


  cargarPokemons(){
    this.loadingPokemons();
  }

  private loadingPokemons(){
    
    this._ps.getPokemons( this.limit, this.offset ).subscribe( 
      a => {
      
        this.array.push.apply( this.array, a.results.map( (item:any) => {
          return { name: item.name, img: "" }
        } ) );
        
        this.array.forEach( item =>{
          
          this._ps.getPokemonName( item.name ).subscribe( p =>{
            
            item.img = p.sprites.front_default;

          } );
        });
        
        const param = this.getParam( a.next );      
        this.limit = param.limit;
        this.offset = param.offset;
         
        this.carga = true;
      }
    );
  }

}