import { Component, OnInit } from '@angular/core';

import {Carousel} from './carousel/carousel.model';

import {HomeService} from './home.service';

@Component({
  selector: 'locatinos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content = 'Bem vindo ao Locatinos - Sua locadora de veículos online';
  
  cars:Carousel[];
  
  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.cars = this.homeService.Cars();
  }

}
