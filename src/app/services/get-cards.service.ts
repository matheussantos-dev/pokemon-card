import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { IGetCardsResponse } from '../shared/models';


@Injectable({
  providedIn: 'root'
})
export class GetCardsService {

  constructor(private http: HttpClient) { }

  public getCards() {
    const headers = new HttpHeaders().set('X-Api-Key', environment.apiKey);
    return this.http.get<IGetCardsResponse>('https://api.pokemontcg.io/v2/cards', { headers });
  }
}
