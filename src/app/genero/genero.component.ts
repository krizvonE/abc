import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandasService } from '../bandas.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {

  id: number;
  bandas = [];
  constructor(public activatedRoute: ActivatedRoute, public bandasService: BandasService) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    this.bandas = this.bandasService.getBandas ();  
    console.log(this.id);
  }

  bandasArc = {
    grupos: [
      {
        nombre: "Psychedelic rock",
        bandas: [
          {id: 0, nombre: 'The Doors', pais: 'USA', genero: 'Psychedelic rock'},
          {id: 1,nombre: 'Pink Floyd', pais: 'England', genero: 'Psychedelic rock'},
        ]
      },
      {
        nombre: "Indie rock",
        bandas: [
          {id: 2,nombre: 'Enjambre', pais: 'Mexico', genero: 'Indie rock'}
        ]
      },
    ]
  };

  ngOnInit() {
    // logica para generar el bandas Arc

  }
}
