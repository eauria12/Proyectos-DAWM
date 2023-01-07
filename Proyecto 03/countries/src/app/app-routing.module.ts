import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {CountriesComponent} from "./components/countries/countries.component";
import {CountryComponent} from "./components/country/country.component";
import {CommentComponent} from "./components/comment/comment.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "countries", component: CountriesComponent},
  { path: "country", component: CountryComponent },
  { path: "comment", component: CommentComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
