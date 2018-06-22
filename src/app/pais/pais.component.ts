import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
 
  constructor() {}

  ngOnInit() {
  }

  bandas = [
    {nombre: 'The Doors', pais: 'USA', genero: 'Psychedelic rock'},
    {nombre: 'Pink Floyd', pais: 'England', genero: 'Psychedelic rock'},
    {nombre: 'Enjambre', pais: 'Mexico', genero: 'Indie rock'}
  ];

}
