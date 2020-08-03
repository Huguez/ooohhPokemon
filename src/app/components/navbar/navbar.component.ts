import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public listaGeneracion: Array<any> = [];

  constructor(private _ps:PokemonService, private router: Router ){}

  ngOnInit(): void {
    this._ps.getAllGeneraciones().subscribe( ( lg : any ) => {
      this.listaGeneracion = lg.results.map( item => { 
        
        const arreglo = item.url.split('/');
        
        return { name: item.name, id: arreglo[6] };
       } );
    } );
  }

  reload( id ){
    this.router.navigateByUrl('/generacion', { skipLocationChange: true }).then(() => {
      this.router.navigate( [ '/generacion/', id ] );
    }); 
  }

}
