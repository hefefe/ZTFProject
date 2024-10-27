import { RickAndMortyService } from './rick-and-morty.service';
import { Component } from '@angular/core';
import {
  ICharacterResponse,
  IEpisodeData,
  IExtendedCharData,
  ILocationResponse,
  IRequestData,
} from './form-request-interface';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CharacterCardComponent } from "./character-card/character-card.component";
import { TableModule } from 'primeng/table';

interface IFormSelect {
  name: string;
}

@Component({
  selector: 'app-rick-and-morty',
  standalone: true,
  imports: [FormsModule, DropdownModule, MultiSelectModule, NgIf, ButtonModule, CharacterCardComponent, TableModule],
  templateUrl: './rick-and-morty.component.html',
  styleUrl: './rick-and-morty.component.scss',
})
export class RickAndMortyComponent {
  requestData: IRequestData = {};

  formOptions!: IFormSelect[];

  selectedFormOption!: IFormSelect;

  statuses!: IFormSelect[];

  selectedStatus!: IFormSelect;

  genders!: IFormSelect[];

  characterData!: IExtendedCharData[];
  CharacterPreviousURL!: string;
  CharacterNextURL!:string;
  LocationData!: ILocationResponse;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.formOptions = [{ name: 'Characters' }, { name: 'Locations' }];
    this.selectedFormOption = this.formOptions[0];

    this.statuses = [{ name: 'alive' }, { name: 'dead' }, { name: 'unknown' }];

    this.genders = [
      { name: 'female' },
      { name: 'male' },
      { name: 'genderless' },
      { name: 'unknown' },
    ];
  }

  onChange(event: any) {
    this.requestData = {};
  }

  getApiData() {
    if (this.selectedFormOption.name == this.formOptions[0].name) {
      this.rickAndMortyService
        .getFilteredCharacters(this.requestData)
        .subscribe((charData: ICharacterResponse) => {
          this.loadCharacterData(charData);
        });
    } else if (this.selectedFormOption.name == this.formOptions[1].name) {
      this.rickAndMortyService.getFilteredLocation(this.requestData).subscribe((locationData: ILocationResponse) =>{
        console.log()
        this.LocationData = locationData;
      });
    }
  }

  getCharacterPage(url: string){
    this.rickAndMortyService.sendApiRequest(url).subscribe((charData: ICharacterResponse) => {
      this.loadCharacterData(charData);
    });
  }

  loadCharacterData(charData: ICharacterResponse){
    var extendedCharArray: IExtendedCharData[] = [];
          charData.results?.forEach((character) => {
            if (character.episode) {
              this.rickAndMortyService
                .sendApiRequest(character.episode[0])
                .subscribe((data: IEpisodeData) => {
                  var extendedCharData: IExtendedCharData = character;
                  extendedCharData.firstSeenInEp = data.name;
                  extendedCharArray.push(extendedCharData);
                });
            } else {
              var extendedCharData: IExtendedCharData = character;
              extendedCharData.firstSeenInEp = 'unknown';
              extendedCharArray.push(extendedCharData);
            }
          });
          this.characterData = extendedCharArray;
          this.CharacterPreviousURL = charData.info?.prev!;
          this.CharacterNextURL = charData.info?.next!;
          console.log(this.characterData);
  }

getLocationPage(url: string){
  this.rickAndMortyService.sendApiRequest(url).subscribe((locationData: ILocationResponse) =>{
    this.LocationData = locationData;
  });
}

}
