import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Artist } from './models/artist.model';
import { Playlist } from './models/playlist.model';
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

  public getCurUserPlaylists(): Observable<Playlist[]> {
    return this.http.get<any>(`${this.baseUrl}v1/me/playlists`).pipe(
      map(res => res.items)
    );
  }

  public createPlaylist(name: string, description: string, isPublic: boolean): Observable<Playlist> {
    const body = {
      name, description, public: isPublic
    };

    return this.http.post<Playlist>(`${this.baseUrl}v1/me/playlists`, body);
  }

  public addTracksToPlaylist(playlistId: string, trackIds: string[]): Observable<Playlist> {
    const uris = trackIds.map(id => `spotify:track:${id}`).join(',');
    return this.http.post<Playlist>(`${this.baseUrl}v1/playlists/${playlistId}/tracks?uris=${uris}`, {});
  }

  public getPlaylistTracks(playlistId: string): Observable<string[]> {
    return this.http.get<any>(`${this.baseUrl}v1/playlists/${playlistId}/tracks?fields=items(track(name))&limit=100`).pipe(
      map(res => res.items.map(t => t.track.name))
    );
  }

}
