import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { TypeComponent } from './pages/type/type.component';
import { TipoComponent } from './components/tipo/tipo.component';
import { GeneracionComponent } from './pages/generacion/generacion.component';

const routes:Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pokemon/:name', component: PokemonComponent },
  { path: 'generacion/:id', component: GeneracionComponent},
  { path: 'tipos', component: TypeComponent },
  { path: 'tipo/:id', component: TipoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'  }
];
  

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ],
  
})
export class AppRoutingModule { }
