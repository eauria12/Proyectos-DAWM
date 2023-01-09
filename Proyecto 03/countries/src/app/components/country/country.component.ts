import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {

  country: any;

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      let name = params['name'];

      let countriesL = JSON.parse(localStorage.getItem("countriesL")!);

      if(countriesL) {
        let countries = countriesL as Array<any>
        let countriesfiltered = countries.filter(country=> country.name.common == name)    
        this.country = countriesfiltered[0]; 
      }

    });

  }


}
