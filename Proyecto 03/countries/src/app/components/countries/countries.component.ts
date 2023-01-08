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
    let countriesL = JSON.parse(localStorage.getItem("countriesL")!);
      
    if(countriesL) {
      this.countries = countriesL as any[]
      
    }
    
  }

}




























/*import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../service/resources.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})

export class AnimesComponent implements OnInit {
  getData: any[] = [];

  constructor(private resourcesService: ResourcesService) {
    this.resourcesService.getData<any[]>("").subscribe(data => {
      this.getData = data 
      console.log(this.getData)
      
    })

    /*let animeWorld = JSON.parse(localStorage.getItem("animeWorld")!);
      
    if(animeWorld) {
      this.getData = animeWorld as any[]
    }
  }
  ngOnInit() { }

 

}*/

