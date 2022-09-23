import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Artist } from '../spotify-api/models/artist.model';
import { Track } from '../spotify-api/models/track.model';
import { SpotifyApiService } from '../spotify-api/spotify-api.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss']
})
export class DealerComponent implements OnInit {

  private searchSub: Subscription;
  private tracksSub: Subscription;
  public artists: Artist[] = [];
  public tracks: Track[] = [];

  displayedColumns: string[] = [ 'select', 'name' ];
  selection = new SelectionModel<Track>(true, []);

  public form = new FormGroup({
    genre: new FormControl(null, Validators.required)
  });

  constructor(
    private spotifyApi: SpotifyApiService
  ) { }

  ngOnInit(): void {
  }

  public search() {
    if (this.searchSub?.closed === false) {
      return;
    }

    const { genre } = this.form.value;
    this.searchSub = this.spotifyApi.search(`genre="${genre}"`, 'artist').subscribe({
      next: res => {
        console.log('Got artists', res);
        this.artists = res.artists.items;
      },
      error: e => {
        console.error('Search artists failed', e);
      }
    })
  }

  public resetTracks(): void {
    console.log('Reset tracks & selection');

    this.tracks = [];
    this.selection.clear();
  }

  public loadTracks(artist: Artist): void {
    console.log('Load tracks for artist', artist);

    this.tracksSub?.unsubscribe();
    this.tracksSub = this.spotifyApi.getTopTracks(artist.id).subscribe({
      next: tracks => {
        console.log('Got popular tracks', tracks);
        this.tracks = tracks;
      },
      error: e => {
        console.error('Get tracks failed', e);
      }
    })
  }

  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tracks.length;
    return numSelected === numRows;
  }

  public toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.tracks);
  }

}
