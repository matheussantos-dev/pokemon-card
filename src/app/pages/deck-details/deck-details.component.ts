import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deck } from 'src/app/models/deck';
import { DeckService } from 'src/app/services/deck.service';

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
        this.deck = this.deckService.getDeck(params['id']) ?? this.deck;
        console.log(this.deck);
      });
    }

    navigateToCreateDeck(id: string | undefined) {
      if (!id) return;
      this.router.navigate(['/create-deck'], { queryParams: { id: id } });
    }
}
