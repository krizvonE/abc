import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {

  id: number;
  constructor(public activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
  }

  ngOnInit() {
  }

  generos = [
    {nombre: 'Psychedelic rock'},
    {nombre: 'Psychedelic rock'},
    {nombre: 'Indie rock'}
  ];


}
