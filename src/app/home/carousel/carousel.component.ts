import { Component, OnInit ,Input} from '@angular/core';

import {Carousel} from './carousel.model';

@Component({
  selector: 'locatinos-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  
  @Input() carousel:Carousel;
  
  constructor() { }

  ngOnInit() {
  }

}
