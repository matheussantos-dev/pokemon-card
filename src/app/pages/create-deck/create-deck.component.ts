import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, Deck, DeckRestrictions } from 'src/app/models/deck';
import { DeckService } from 'src/app/services/deck.service';
import { GetCardsService } from 'src/app/services/get-cards.service';
import { Router } from '@angular/router';

export interface IResponse {
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
  public cards: Card[] = [];
  public newDeck: Deck = {
    name: '',
    cards: []
  };
  public title = 'Criar baralho';
  public buttonText = 'Salvar';
  private editMode = false;
  public loadingCards = false;

  constructor(private deckService: DeckService, private route: ActivatedRoute, private getCardsService: GetCardsService, private router: Router) {
    this.initializeDeck();
  }

  ngOnInit(): void {
    this.getList();
  }

  private getList() {
    this.loadingCards = true;
    this.getCardsService.getCards().subscribe((response: IResponse) => {
      this.cards = response.data;
      this.loadingCards = false;
    });
  }

  private addCardToDeck(card: Card) {
    if (!this.newDeck) return;
    if (this.newDeck.cards.length >= DeckRestrictions.maxNumberOfCards) {
      alert('Número máximo de cartas atingido');
      return;
    }
    this.newDeck.cards.push(card);
  }

  private removeCardFromDeck(card: Card) {
    this.newDeck.cards = this.newDeck.cards.filter((item) => item.id !== card.id);
  }

  private initializeDeck() {
    if (this.route.snapshot.params['id']) {
      const deck = this.deckService.getDeck(this.route.snapshot.params['id']);
      if (!deck) this.router.navigate(['/home']);
      else {
        this.title = 'Editar baralho';
        this.editMode = true;
        this.newDeck = deck;
      }
    }
  }

  private handleServiceReturn(result: { success: boolean, error: string | null }) {
    if (result.success) this.router.navigate(['/manage-deck']);
    else alert(result.error);
  }

  clearDeck() {
    this.newDeck.cards = [];
  }

  isCardInDeck(card: Card) {
    if (this.newDeck.cards.find((item) => item.id === card.id)) this.removeCardFromDeck(card);
    else this.addCardToDeck(card);
  }


  saveDeck() {
    if (!this.newDeck.name || this.newDeck.cards.length < DeckRestrictions.minNumberOfCards) {
      if (!this.newDeck.name) alert('Nome é obrigatório');
      else alert('Número mínimo de cartas não atingido');
      return;
    };
    const result = this.editMode ? this.deckService.updateDeck(this.newDeck) : this.deckService.createDeck(this.newDeck);
    this.handleServiceReturn(result);
  }

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.newDeck.name = inputValue;
  }
}

