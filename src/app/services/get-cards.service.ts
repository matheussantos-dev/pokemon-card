import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { IResponse } from '../pages/create-deck/create-deck.component';

@Injectable({
  providedIn: 'root'
})
export class GetCardsService {

  constructor(private http: HttpClient) { }

  public getCards() {
    const headers = new HttpHeaders().set('X-Api-Key', environment.apiKey);
    return this.http.get<IResponse>('https://api.pokemontcg.io/v2/cards', { headers });
  }
}
