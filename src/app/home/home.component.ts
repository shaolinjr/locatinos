import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locatinos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content = 'Bem vindo ao Locatinos - Sua locadora de veículos online';
  
  constructor() { }

  ngOnInit() {
  }

}
