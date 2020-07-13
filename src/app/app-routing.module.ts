import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { TypeComponent } from './pages/type/type.component';

const routes:Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pokemon/:name', component: PokemonComponent },
  { path: 'tipos', component: TypeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'  }
];
  

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ],
  
})
export class AppRoutingModule { }
