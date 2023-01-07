import { Component, OnInit} from '@angular/core';
import { ResourcesService } from '../../service/resources.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private resourcesService: ResourcesService) {
  }

  ngOnInit() {
    this.resourcesService.getData<any[]>("").subscribe(response => {
      
      let countries= localStorage.getItem("countries");
      if(!countries) {
        localStorage.setItem("countries", JSON.stringify(response));
      }

    })
  }


}