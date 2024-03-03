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
    const hasName = deck.name;
    const hasValidNumberOfCards = deck.cards.length >= DeckRestrictions.minNumberOfCards && deck.cards.length <= DeckRestrictions.maxNumberOfCards;
    const hasUniqueCards = !this.isThereMoreThanFourOfTheSameCard(deck);
    return hasName && hasValidNumberOfCards && hasUniqueCards;
  }

  private setDeckId(deck: Deck) {
    deck.id = Math.random().toString(36).substr(2, 9);
  }

  private setSupertypes(deck: Deck) {
    const supertypes = new Set(deck.cards.map((card) => card.supertype));
    deck.uniqueSupertypes = Array.from(supertypes);
  }

  private setTypes(deck: Deck) {
    const types = (deck.cards.map((card) => card.types));
    deck.uniqueTypes = Array.from(new Set(types.flat())); 
  }

  private setCalculatedValues(deck: Deck) {
    this.setDeckId(deck);
    this.setSupertypes(deck);
    this.setTypes(deck);
  }
  
  public createDeck(deck: Deck) {
    if (!this.isDeckValid(deck)) {
      return { success: false, error: 'Baralho inválido' };
    }
    this.setCalculatedValues(deck);
    this.decks.push(deck);
    return { success: true, error: null };
  }

  public getDeck(id: string) {
    return this.decks.find((deck) => deck.id === id);
  }


  public removeDeck(id: string) {
    const index = this.decks.findIndex((deck) => deck.id === id);
    if (index === -1) {
      return { success: false, error: 'Baralho não encontrado' };
    }
    this.decks.splice(index, 1);
    return { success: true, error: null };
  }

  public updateDeck(deck: Deck) {
    if (!this.isDeckValid(deck)) {
      return { success: false, error: 'Baralho inválido' };
    }
    const index = this.decks.findIndex((d) => d.id === deck.id);
    if (index === -1) {
      return { success: false, error: 'Baralho não encontrado' };
    }
    this.decks[index] = deck;
    return { success: true, error: null };
  }

  public getDecks() {
    return this.decks;
  }
}
