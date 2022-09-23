import { Artist } from "./artist.model";

export interface SearchResult {
  artists: SearchResultCategory<Artist>;
}

export interface SearchResultCategory<T> {
  href: string;
  items: T[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}
