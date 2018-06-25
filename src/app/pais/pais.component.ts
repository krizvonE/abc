import { Component, OnInit } from '@angular/core';
import { BandasService } from '../bandas.service';


@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  pos: number;
  
  bandas = [];

  constructor(public bandasService: BandasService) {
    this.bandas = this.bandasService.getBandas();
  }

  ngOnInit() {
  }
  

}
