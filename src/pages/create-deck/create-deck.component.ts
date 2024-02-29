import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface IResponse {
  data: Card[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

interface Ability {
  name: string;
  text: string;
  type: string;
}

interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: { [key: string]: string };
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: {
      symbol: string;
      logo: string;
  };
}

interface WeaknessResistance {
  type: string;
  value: string;
}

interface TCGPlayerPrices {
  low: number | null;
  mid: number;
  high: number;
  market: number;
  directLow: number | null;
}

interface CardMarketPrices {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow: number;
  suggestedPrice: number;
  reverseHoloSell: number;
  reverseHoloLow: number;
  reverseHoloTrend: number;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: number;
  reverseHoloAvg7: number;
  reverseHoloAvg30: number;
}

interface TCGPlayer {
  url: string;
  updatedAt: string;
  prices: {
      holofoil: TCGPlayerPrices;
      reverseHolofoil: TCGPlayerPrices;
  };
}

interface CardMarket {
  url: string;
  updatedAt: string;
  prices: CardMarketPrices;
}

interface Images {
  small: string;
  large: string;
}

interface Legalities {
  [key: string]: string;
}

interface Card {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level?: string;
  hp?: string;
  types: string[];
  evolvesFrom?: string;
  abilities: Ability[];
  attacks: Attack[];
  weaknesses: WeaknessResistance[];
  resistances: WeaknessResistance[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities;
  images: Images;
  tcgplayer: TCGPlayer;
  cardmarket: CardMarket;
}



@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.scss']
})
export class CreateDeckComponent implements OnInit {
  constructor(private http: HttpClient) { }
  public cards: Card[] = [];
  private newDeck: Card[] = [];

  ngOnInit(): void {
    this.getList();
  }

  private getList() {
    const headers = new HttpHeaders().set('X-Api-Key', '892710cf-7ab8-42d7-be38-5b41d22f8816');

    this.http.get<IResponse>('https://api.pokemontcg.io/v2/cards', { headers })
      .subscribe((response) => {
        this.cards = response.data;
      });
  }

  isCardInDeck(card: Card) {
    if (this.newDeck.find((item) => item.id === card.id)) this.removeCard(card);
    else this.addCard(card);
  }

  addCard(card: Card) {
    this.newDeck.push(card);
  }

  removeCard(card: Card) {
    this.newDeck = this.newDeck.filter((item) => item.id !== card.id);
  }

  log() {
    console.log(this.newDeck);
  }

}
