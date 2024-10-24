import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';
import { RandomImageComponent } from './components/random-image/random-image.component';
import { GameComponent } from './components/game/game.component';

export const routes: Routes = [
  {path: '',
  component: HomeComponent,
  children: [{path: 'rickandmorty', component: RickAndMortyComponent},
    {path: 'game', component: GameComponent},
    {path: 'randomimage', component: RandomImageComponent}]}];
