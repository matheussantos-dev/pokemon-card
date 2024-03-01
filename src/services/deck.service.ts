// Deck service will not use local storage anymore we will keep the decks in memory.

import { Injectable } from '@angular/core';
import { Deck } from 'src/models/deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor() { }
  public decks: Deck[] = [];

  private isDeckValid(deck: Deck) {
    return deck.name && deck.cards.length > 0;
  }
  
  public createDeck(deck: Deck) {
    if (!this.isDeckValid(deck)) return;
    this.decks.push(deck);
  }

  public getDeck(name: string) {
    return this.decks.find((deck) => deck.name === name);
  }

  public removeDeck(name: string) {
    this.decks = this.decks.filter((deck) => deck.name !== name);
  }

  public updateDeck(deck: Deck) {
    const index = this.decks.findIndex((item) => item.name === deck.name);
    this.decks[index] = deck;
  }

  public getDecks() {
    return this.decks;
  }
}
