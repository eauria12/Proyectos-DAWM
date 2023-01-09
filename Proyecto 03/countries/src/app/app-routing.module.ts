import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {CountriesComponent} from "./components/countries/countries.component";
import {CountryComponent} from "./components/country/country.component";
import {MapComponent} from "./components/map/map.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "countries", component: CountriesComponent},
  { path: "country/:name", component: CountryComponent },
  { path: "map", component: MapComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
