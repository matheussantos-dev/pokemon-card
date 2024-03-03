import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Card } from '../models/deck';

interface IResponse {
  data: Card[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class GetCardsService {

  constructor(private http: HttpClient) { }

  private saveCards(cards: Card[]) {
    localStorage.setItem('cards', JSON.stringify(cards));
  }

  public getCards() {

    if (localStorage.getItem('cards')) {
      const cardsString = localStorage.getItem('cards');
      if (cardsString) {
        return JSON.parse(cardsString);
      }
    }

    const headers = new HttpHeaders().set('X-Api-Key', environment.apiKey);

    this.http.get<IResponse>('https://api.pokemontcg.io/v2/cards', { headers })
      .subscribe((response) => {
        this.saveCards(response.data.slice(0, 30));
        return response.data.slice(0, 30);
  /*       this.saveCards(response.data);
        return response.data; */
      });
  }
}
