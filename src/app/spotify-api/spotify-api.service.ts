import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Artist } from './models/artist.model';
import { SearchResult } from './models/search.model';
import { Track } from './models/track.model';

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

  public getTopTracks(artistId: string): Observable<Track[]> {
    return this.http.get<any>(`${this.baseUrl}v1/artists/${artistId}/top-tracks?market=US`).pipe(
      map(res => res.tracks)
    );
  }

}
