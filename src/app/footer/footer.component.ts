import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locatinos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  appTitle="Locatinos";
  subtitle="Sua locadora de veículos online";

  constructor() { }

  ngOnInit() {
  }

}
