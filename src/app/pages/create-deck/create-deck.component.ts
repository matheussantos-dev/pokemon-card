import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, Deck, DeckRestrictions } from 'src/app/models/deck';
import { DeckService } from 'src/app/services/deck.service';
import { GetCardsService } from 'src/app/services/get-cards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.scss']
})
export class CreateDeckComponent implements OnInit {
  public cards: Card[] = [];
  public newDeck: Deck | undefined = {
    name: '',
    cards: []
  };
  public title = 'Criar baralho';
  public buttonText = 'Salvar';
  private editMode = false;

  constructor(private deckService: DeckService, private route: ActivatedRoute, private getCardsService: GetCardsService, private router: Router) {
    this.initializeDeck();
  }

  ngOnInit(): void {
    this.getList();
  }

  private getList() {
    this.cards = this.getCardsService.getCards();
  }

  private addCardToDeck(card: Card) {
    if (!this.newDeck) return;
    if (this.newDeck.cards.length >= DeckRestrictions.maxNumberOfCards) return;
    this.newDeck.cards.push(card);
  }

  private removeCardFromDeck(card: Card) {
    if (this.newDeck) {
      this.newDeck.cards = this.newDeck.cards.filter((item) => item.id !== card.id);
    }
  }

  private initializeDeck() {
    if (this.route.snapshot.params['id']) {
      this.newDeck = this.deckService.getDeck(this.route.snapshot.params['id']);
      if (!this.newDeck) this.router.navigate(['/home']);
      else {
        this.title = 'Editar baralho';
        this.editMode = true;
      }
    }
  }

  isCardInDeck(card: Card) {
    if (!this.newDeck) return;
    if (this.newDeck.cards.find((item) => item.id === card.id)) this.removeCardFromDeck(card);
    else this.addCardToDeck(card);
  }


  saveDeck() {
    if (!this.newDeck) return;
    if (!this.newDeck.name || this.newDeck.cards.length < DeckRestrictions.minNumberOfCards) return;
    if (this.editMode) this.deckService.updateDeck(this.newDeck);
    else this.deckService.createDeck(this.newDeck);
    this.router.navigate(['/manage-deck']);
  }

  onInputChange(event: Event) {
    if (!this.newDeck) return;
    const inputValue = (event.target as HTMLInputElement).value;
    this.newDeck.name = inputValue;
  }

}

