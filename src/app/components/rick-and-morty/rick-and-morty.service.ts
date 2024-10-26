import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IRequestData } from './form-request-interface';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  apiURL: string = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  getFilteredCharacters(requestData:IRequestData){
    let params= new HttpParams();
    for(const key in requestData){
      if((requestData as any)[key]){
        params = params.append(key, (requestData as any)[key])
      }
    }
    return this.http.get(this.apiURL, {params});
  }

  sendApiRequest(url:string){
    return this.http.get(url);
  }
}
