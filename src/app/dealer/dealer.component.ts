import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Artist } from '../spotify-api/models/artist.model';
import { SpotifyApiService } from '../spotify-api/spotify-api.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss']
})
export class DealerComponent implements OnInit {

  private searchSub: Subscription;
  public artists: Artist[] = [];

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

}
