import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [
    'http://periodicoeldia.mx/wp-content/uploads/2017/01/The-Doors.jpg',
    'http://pinkfloyd.eu/wp-content/uploads/2016/05/Pink-Foyd-Drawings-30.jpg',
    'https://static.wixstatic.com/media/f0141f_0cdcae17d3d34a55a88fdb9e9069fbf9~mv2.jpg/v1/fill/w_500,h_492/f0141f_0cdcae17d3d34a55a88fdb9e9069fbf9~mv2.jpg'
  ];

}
