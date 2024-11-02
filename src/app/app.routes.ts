import { LocationDataViewComponent } from './components/location-data-view/location-data-view.component';
import { CharacterDataViewComponent } from './components/character-data-view/character-data-view.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';

export const routes: Routes = [
  {path: '',
  component: HomeComponent,
  children: [{path: 'rickandmorty', component: RickAndMortyComponent},
    {path: 'chardata', component: CharacterDataViewComponent},
    {path: 'locationdata', component: LocationDataViewComponent}]}];
