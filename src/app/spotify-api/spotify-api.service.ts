import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from './models/search.model';

@Injectable({
  providedIn: 'root'
})

export class SpotifyApiService {

  private baseUrl = 'https://api.spotify.com/';

  public constructor(
    private http: HttpClient
  ) { }

  public search(q: string, type: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(`${this.baseUrl}v1/search?q=${q}&type=${type}`);
  }

}
