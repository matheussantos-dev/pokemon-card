import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/models/deck';
import { Router } from '@angular/router';
import { DeckService } from 'src/services/deck.service';

@Component({
  selector: 'app-manage-deck',
  templateUrl: './manage-deck.component.html',
  styleUrls: ['./manage-deck.component.scss']
})
export class ManageDeckComponent implements OnInit {

  constructor(private router: Router, private deckService: DeckService) { }

  public decks: Deck[] = [];

  ngOnInit(): void {
    this.decks = this.deckService.getDecks();
  }

  goToDeckDetails(deckname: string) {
    this.router.navigate(['/deck-details'], { queryParams: { name: deckname } });
  }

}
