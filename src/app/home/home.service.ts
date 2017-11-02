import { Injectable } from '@angular/core';

import {Carousel} from './carousel/carousel.model';

@Injectable()
export class HomeService {
  carousel:Carousel[] = [
    {id:'car_1',titulo:'Caprice SS',imageUrl:'./assets/img/banner/1.png'},
    {id:'car_2',titulo:'Fusion Titanium',imageUrl:'./assets/img/banner/2.png'},
    {id:'car_3',titulo:'Hyundai Tucson GLS',imageUrl:'./assets/img/banner/3.png'},
    {id:'car_4',titulo:'Hyundai Grandeur',imageUrl:'./assets/img/banner/4.png'}
  ]
  Cars (){
    console.log("Service just got called!");
    return this.carousel;
  }
  constructor() { }

}
