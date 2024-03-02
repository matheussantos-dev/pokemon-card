import { Injectable } from '@angular/core';
import { Deck, DeckRestrictions } from '../models/deck';


@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor() { }
  public decks: Deck[] = [];

  private isThereMoreThanFourOfTheSameCard(deck: Deck) {
    const cardNames = deck.cards.map((card) => card.name);
    const uniqueCardNames = new Set(cardNames);
    for (const name of uniqueCardNames) {
      const count = cardNames.filter((cardName) => cardName === name).length;
      if (count > DeckRestrictions.maxCardsWithSameName) return true;
    }
    return false;
  }

  private isDeckValid(deck: Deck) {
    console.log(this.isThereMoreThanFourOfTheSameCard(deck));
    return deck.name && deck.cards.length >= DeckRestrictions.minNumberOfCards && deck.cards.length <= DeckRestrictions.maxNumberOfCards && !this.isThereMoreThanFourOfTheSameCard(deck);
  }
  
  public createDeck(deck: Deck) {
    if (!this.isDeckValid(deck)) return;
    deck.id = Math.random().toString(36).substr(2, 9);
    this.decks.push(deck);
  }

  public getDeck(id: string) {
    return this.decks.find((deck) => deck.id === id);
  }


  public removeDeck(id: string) {
    this.decks = this.decks.filter((deck) => deck.id !== id);
  }

  public updateDeck(deck: Deck) {
    if (!this.isDeckValid(deck)) return;
    const index = this.decks.findIndex((d) => d.id === deck.id);
    this.decks[index] = deck;
  }

  public getDecks() {
    return this.decks;
  }
}
