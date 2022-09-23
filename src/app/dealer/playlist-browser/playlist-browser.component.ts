import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Playlist } from 'src/app/spotify-api/models/playlist.model';
import { SpotifyApiService } from 'src/app/spotify-api/spotify-api.service';

@Component({
  selector: 'app-playlist-browser',
  templateUrl: './playlist-browser.component.html',
  styleUrls: ['./playlist-browser.component.scss']
})
export class PlaylistBrowserComponent implements OnInit, OnDestroy {

  private getPlaylistsSub: Subscription;
  private actionSub: Subscription;

  public selection: Playlist;
  public tracks: string[] = [];

  public form = new FormGroup({
    name: new FormControl(null, Validators.required)
  })

  public playlists: Playlist[] = [];

  public constructor(
    private spotifyApi: SpotifyApiService
  ) { }

  public ngOnInit(): void {
    this.getPlaylists();
  }

  public ngOnDestroy(): void {
    this.getPlaylistsSub?.unsubscribe();
    this.actionSub?.unsubscribe();
  }

  public getPlaylists(): void {
    this.getPlaylistsSub = this.spotifyApi.getCurUserPlaylists().subscribe({
      next: p => {
        console.log('Got current user playlists', p);
        this.playlists = p;
      },
      error: e => console.error(e)
    })
  }

  public createPlaylist(): void {
    const { name } = this.form.value;
    console.log('Create playlist', name);

    this.actionSub = this.spotifyApi.createPlaylist(name, '', true).subscribe({
      next: p => {
        console.log('Created playlist', p);
        this.getPlaylists();
        this.form.reset();
      },
      error: e => console.error('Create playlist failed', e)
    });
  }

  public selectionChange(playlist: Playlist): void {
    console.log('Playlist selection changed', playlist);
    this.selection = playlist;
    this.tracks = [];

    this.getPlaylistTracks(playlist.id);
  }

  public clearSelection(): void {
    console.log('Clear playlist selection');
    this.selection = null;
  }

  private getPlaylistTracks(playlistId: string): void {
    this.actionSub?.unsubscribe();
    this.actionSub = this.spotifyApi.getPlaylistTracks(playlistId).subscribe({
      next: t => {
        console.log('Got playlist tracks', t);
        this.tracks = t;
      },
      error: e => console.error('Could not get playlist tracks', e)
    });
  }

  public addTracks(ids: string[]): void {
    if (this.selection == null) {
      console.error('No playlist selected');
      return;
    }

    this.actionSub?.unsubscribe();
    this.actionSub = this.spotifyApi.addTracksToPlaylist(this.selection.id, ids).subscribe({
      next: () => {
        console.log('Added tracks');
        this.getPlaylistTracks(this.selection.id);
      },
      error: e => console.error('Could not add tracks', e)
    });
  }

}
