import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deck } from 'src/app/models/deck';
import { DeckService } from 'src/app/services/deck.service';


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

  goToDeckDetails(id: string | undefined) {
    if (!id) return;
    this.router.navigate(['/deck-details'], { queryParams: { id: id } });
  }

}
