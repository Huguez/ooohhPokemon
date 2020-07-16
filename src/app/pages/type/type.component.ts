import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Resp } from '../../interfaces/resp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  
  public listaType : Array<any> = [];
  public numero = 1;
  
  constructor(private _ps:PokemonService, private router: Router )  { }

  ngOnInit(): void {
    this._ps.getTypes().subscribe( ( _lista : Resp ) => { 
      this.listaType = _lista.results;
    });    
  }

  irAlTipo( tipo:any ){
    const cadenaAux = tipo.url.split('/')
    
    const id = parseInt( cadenaAux[6], 10 );
    
    this.router.navigateByUrl( "/tipo/"+id ); 
  }
}
