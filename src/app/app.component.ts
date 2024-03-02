import { Component } from '@angular/core';
import { DeckService } from './services/deck.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private deckService: DeckService) {}

  logDecks() {
    const decks = this.deckService.getDecks();
    console.log(decks);
  }
}
