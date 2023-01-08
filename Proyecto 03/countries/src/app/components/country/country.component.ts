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

    });

  }


}
