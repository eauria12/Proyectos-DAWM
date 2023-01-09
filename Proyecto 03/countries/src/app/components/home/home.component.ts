import { Component, OnInit} from '@angular/core';
import { ResourcesService } from '../../service/resources.service';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private resourcesService: ResourcesService) {
  }

  ngOnInit() {
    this.resourcesService.getData().subscribe(response => {
      
      let countriesL = localStorage.getItem("countriesL");
      if(!countriesL) {
        localStorage.setItem("countriesL", JSON.stringify(response));
      }

    })

    /*setTimeout(() => {
      this.router.navigate(['countries']);
    }, 1500);*/


  }



}


//private router: Router