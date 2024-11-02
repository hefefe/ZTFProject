import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IRequestData } from './form-request-interface';
import { map } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  apiURL: string = 'https://rickandmortyapi.com/api/character';
  locationApiUrl: string = 'https://rickandmortyapi.com/api/location';

  constructor(private http: HttpClient, private toast: MessageService) { }

  getFilteredCharacters(requestData:IRequestData){
    let params= new HttpParams();
    for(const key in requestData){
      if((requestData as any)[key]){
        params = params.append(key, (requestData as any)[key])
      }
    }
    return this.http.get(this.apiURL, {params, observe: 'response'}).pipe(map(res => {
      if(res.status === 200){
        this.toast.add({ severity: 'success', summary: 'Success', detail: 'Resources retrieved successfully. Data can be viewed on other pages.', life: 3000 });
      }
      return res.body;
   }));
  }

  sendApiRequest(url:string){
    return this.http.get(url);
  }

  getFilteredLocation(requestData: IRequestData){
    let params= new HttpParams();
    for(const key in requestData){
      if((requestData as any)[key]){
        params = params.append(key, (requestData as any)[key])
      }
    }
    return this.http.get(this.locationApiUrl, {params, observe: 'response'}).pipe(map(res => {
      if(res.status === 200){
        this.toast.add({ severity: 'success', summary: 'Success', detail: 'Resources retrieved successfully. Data can be viewed on other pages.', life: 3000 });
      }
      return res.body;
   }));
  }
}
