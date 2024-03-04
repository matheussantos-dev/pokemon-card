import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deck } from 'src/app/shared/models/deck';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.scss']
})
export class DeckDetailsComponent implements OnInit {
  public deck: Deck = {
    id: '',
    name: '',
    cards: [],
    uniqueSupertypes: [],
    uniqueTypes: []
  };

  constructor(private route: ActivatedRoute, private deckService: DeckService, private router: Router) {}

    ngOnInit(): void {
      if (!this.route.snapshot.params['id'] || !this.deckService.getDeck(this.route.snapshot.params['id'])) {
        this.router.navigate(['/home']);
      }
      this.deck = this.deckService.getDeck(this.route.snapshot.params['id']) ?? this.deck;
    }

    navigateToCreateDeck(id: string | undefined) {
      if (!id) {
        return;
      }
      this.router.navigate(['/create-deck', id]);
    }

    removeDeck() {
      if (this.deck.id) {
        this.deckService.removeDeck(this.deck.id);
        this.router.navigate(['/manage-deck']);
      }
    }
}
