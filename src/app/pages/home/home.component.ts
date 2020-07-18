import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Resp } from '../../interfaces/resp';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public array: any[] = []; 

  constructor( private _ps: PokemonService ) { }
// { count: number, next: any, previous: any, results: Array<any> }
  ngOnInit(): void {
    this._ps.getPokemons().subscribe( ( p: Resp ) =>{
      this.array = p.results;
    });
  }
  
  


}
