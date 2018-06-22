import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GeneroComponent } from './genero/genero.component';
import { ArtistaComponent } from './artista/artista.component';
import { PaisComponent } from './pais/pais.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'genero', component: GeneroComponent},
  {path: 'artista', component: ArtistaComponent},
  {path: 'pais', component: PaisComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GeneroComponent,
    ArtistaComponent,
    PaisComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
