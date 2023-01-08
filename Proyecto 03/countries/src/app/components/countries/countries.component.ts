import { Component } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {

  countries: any[] = [];

  constructor() {

    /* Leer desde el localStorage */
    let animeWorld = JSON.parse(localStorage.getItem("animeWorld")!);
      
    if(animeWorld) {
      this.countries = animeWorld as any[]  
    }
    
  }

}
