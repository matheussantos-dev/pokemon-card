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
  
  export interface Card {
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
  
  export interface Deck {
    id?: string;
    name: string;
    cards: Card[];
    pokemonCards?: number;
    trainerCards?: number;
    uniqueTypes?: string[];
  }

  export const DeckRestrictions = {
    minNumberOfCards: 24,
    maxNumberOfCards: 60,
    maxCardsWithSameName: 4
  }
  