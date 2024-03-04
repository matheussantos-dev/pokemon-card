import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/models/deck';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: Card = {} as Card;
  @Output() clickEvent = new EventEmitter();

  onClick(): void {
    this.clickEvent.emit();
  }
}
