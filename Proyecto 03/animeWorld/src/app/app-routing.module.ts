import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AnimesComponent } from './components/animes/animes.component';
import { AnimeComponent } from './components/anime/anime.component';
import { ScoreComponent } from './components/score/score.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "animes", component: AnimesComponent },
  { path: "anime", component: AnimeComponent },
  { path: "score", component: ScoreComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
