import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { TypeComponent } from './pages/type/type.component';
import { TipoComponent } from './components/tipo/tipo.component';
import { GeneracionComponent } from './pages/generacion/generacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PokemonComponent,
    TypeComponent,
    TipoComponent,
    GeneracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
