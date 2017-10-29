import { Component, OnInit } from '@angular/core';

import {Carousel} from './carousel/carousel.model';
import {CarouselComponent} from './carousel/carousel.component';

@Component({
  selector: 'locatinos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content = 'Bem vindo ao Locatinos - Sua locadora de veículos online';
  
  cars:Carousel[] = [
    {id:'car_1',titulo:'Caprice SS',imageUrl:'./assets/img/banner/1.png'},
    {id:'car_2',titulo:'Fusion Titanium',imageUrl:'./assets/img/banner/2.png'},
    {id:'car_3',titulo:'Hyundai Tucson GLS',imageUrl:'./assets/img/banner/3.png'},
    {id:'car_4',titulo:'Hyundai Grandeur',imageUrl:'./assets/img/banner/4.png'}
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
