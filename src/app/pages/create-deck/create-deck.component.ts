import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, Deck, DeckRestrictions } from 'src/app/models/deck';
import { DeckService } from 'src/app/services/deck.service';
import { GetCardsService } from 'src/app/services/get-cards.service';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.scss']
})
export class CreateDeckComponent implements OnInit {
  constructor(private deckService: DeckService, private route: ActivatedRoute, private getCardsService: GetCardsService) { 
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
    this.cards = this.getCardsService.getCards();
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

