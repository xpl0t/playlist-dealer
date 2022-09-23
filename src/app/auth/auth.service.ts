import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, Observable } from 'rxjs';

@Injectable()
export class AuthService {

  private isAuthSubject = new BehaviorSubject<boolean>(null);
  private _token: string;

  public get isAuth$(): Observable<boolean> {
    return this.isAuthSubject.pipe(
      filter(isAuth => isAuth != null)
    );
  }

  public get isAuth(): boolean {
    return this.isAuthSubject.value ?? false;
  }

  public get token(): string {
    return this._token;
  }

  public constructor(
    private router: Router
  ) {}

  public init(): void {
    const hash = window.location.hash;
    if (hash.includes('access_token=')) {
        this._token = hash.split('=')[1].split('&')[0];
        console.log('Authenticated', true, this.token);
        this.isAuthSubject.next(true);
        sessionStorage.setItem('token', this.token);
        return;
    }

    const token = sessionStorage.getItem('token');
    if (token != null) {
      console.log('Authenticated (restored token)', true, token);
      this._token = token;
      this.isAuthSubject.next(true);
      return;
    }

    console.log('Authenticated', false);
    this.isAuthSubject.next(false);
    sessionStorage.removeItem('token');
  }

  public signIn(): void {
    const client_id = 'ab1a19f2e6234e9e92c21650c3b784a7';
    const redirect_uri = window.location.origin;

    const state = '1234567890abcdf'; // generateRandomString(16);

    // localStorage.setItem(stateKey, state);
    const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    window.location.href = url;
  }

  public signOut(): void {
    this._token = null;
    this.isAuthSubject.next(false);
    sessionStorage.removeItem('token');

    this.router.navigate([ '/sign-in' ]);
  }

}
