import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';
import { Card, Deck, DeckRestrictions } from 'src/app/models/deck';
import { DeckService } from 'src/app/services/deck.service';

interface IResponse {
  data: Card[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.scss']
})
export class CreateDeckComponent implements OnInit {
  constructor(private http: HttpClient, private deckService: DeckService, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this.title = 'Edit Deck';
        this.buttonText = 'Edit Deck';
        this.editMode = true;
        this.newDeck = this.deckService.getDeck(params['id']) ?? this.newDeck;
      }
    });
  }
  public cards: Card[] = [];
  public newDeck: Deck = {
    name: '',
    cards: []
  };
  public title = 'Create Deck';
  public buttonText = 'Create Deck';
  editMode = false;
  

  ngOnInit(): void {
    this.getList();
  }

  private getList() {

    if (localStorage.getItem('cards')) {
      const cardsString = localStorage.getItem('cards');
      if (cardsString) {
        this.cards = JSON.parse(cardsString);
      }
      return;
    }

    const headers = new HttpHeaders().set('X-Api-Key', environment.apiKey);

    this.http.get<IResponse>('https://api.pokemontcg.io/v2/cards', { headers })
      .subscribe((response) => {
        this.cards = response.data;
        this.saveCards();
      });
  }

  private saveCards() {
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }

  isCardInDeck(card: Card) {
    if (this.newDeck.cards.find((item) => item.id === card.id)) this.removeCard(card);
    else this.addCard(card);
  }

  private addCard(card: Card) {
    if (this.newDeck.cards.length >= DeckRestrictions.maxNumberOfCards) return;
    this.newDeck.cards.push(card);
  }

  private removeCard(card: Card) {
    if (this.newDeck) {
      this.newDeck.cards = this.newDeck.cards.filter((item) => item.id !== card.id);
    }
  }

  updateOrCreateDeck() {
    if (!this.newDeck.name || this.newDeck.cards.length < DeckRestrictions.minNumberOfCards) return;
    if (this.editMode) {
      return this.deckService.updateDeck(this.newDeck);
    }
    this.deckService.createDeck(this.newDeck);
  }

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.newDeck.name = inputValue;
  }

}

