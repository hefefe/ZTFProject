import { Injectable } from '@angular/core';
import { ICharacterResponse, IEpisodeData, IExtendedCharData, ILocationResponse, IRequestData } from './components/rick-and-morty/form-request-interface';
import { RickAndMortyService } from './components/rick-and-morty/rick-and-morty.service';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  characterData = new BehaviorSubject<IExtendedCharData[]>([]);
  currentCharacterData= this.characterData.asObservable();

  characterPreviousURL = new BehaviorSubject<string>("");
  currentCharacterPreviousURL = this.characterPreviousURL.asObservable();

  characterNextURL = new BehaviorSubject<string>("");
  currentCharacterNextURL = this.characterNextURL.asObservable();

  locationData = new BehaviorSubject<ILocationResponse>({});
  currentLocation = this.locationData.asObservable();

  constructor(private rickAndMortyService: RickAndMortyService, private toast: MessageService) { }

  setCharacterData(data: IExtendedCharData[]){
    this.characterData.next(data);
  }

  setCharacterNextURLData(data: string){
    this.characterNextURL.next(data);
  }

  setCharacterPreviousURLData(data: string){
    this.characterPreviousURL.next(data);
  }

  setLocationData(data: ILocationResponse){
    this.locationData.next(data);
  }
  clearCharacterData(){
    this.characterData.next([]);
    this.characterNextURL.next("");
    this.characterPreviousURL.next("");
  }

  clearLocationData(){
    this.locationData.next({});
  }

  apiGetCharacterData(requestData: IRequestData) {
      this.rickAndMortyService
        .getFilteredCharacters(requestData)
        .subscribe((charData) => {
          this.loadCharacterData(charData!);
        });
  }

  apiGetLocationData(requestData: IRequestData){
    this.rickAndMortyService.getFilteredLocation(requestData).subscribe((locationData) =>{
      this.setLocationData(locationData!);
    });
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
          this.setCharacterData(extendedCharArray);
          this.setCharacterPreviousURLData(charData.info?.prev!);
          this.setCharacterNextURLData(charData.info?.next!);
  }

getLocationPage(url: string){
  this.rickAndMortyService.sendApiRequest(url).subscribe((locationData: ILocationResponse) =>{
    this.setLocationData(locationData);
  });
}

}
