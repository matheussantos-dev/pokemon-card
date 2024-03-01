import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deck } from 'src/models/deck';
import { DeckService } from 'src/services/deck.service';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.scss']
})
export class DeckDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private deckService: DeckService, private router: Router) {}

    public deck: Deck = {
      name: '',
      cards: []
    };

    ngOnInit(): void {
      this.route.queryParams.subscribe((params) => {
        this.deck = this.deckService.getDeck(params['name']) ?? this.deck;
        console.log(this.deck);
      });
    }

    navigateToCreateDeck(deckname: string) {
      this.router.navigate(['/create-deck'], { queryParams: { name: deckname } });
    }
}
