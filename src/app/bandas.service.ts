import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BandasService {
  bandas = [
    {nombre: 'The Doors', pais: 'USA', genero: 'Psychedelic rock'},
    {nombre: 'Pink Floyd', pais: 'England', genero: 'Psychedelic rock'},
    {nombre: 'Enjambre', pais: 'Mexico', genero: 'Indie rock'}
  ];
  constructor() { }
  getBandas(){
    return this.bandas;
  }

}
