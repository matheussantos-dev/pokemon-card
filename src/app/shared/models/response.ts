import { Card } from "./deck";

export interface IGetCardsResponse {
    data: Card[];
    page: number;
    pageSize: number;
    count: number;
    totalCount: number;
}
  