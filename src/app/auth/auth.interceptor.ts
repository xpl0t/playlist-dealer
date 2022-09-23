import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authSv: AuthService
  ) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newReq = this.authSv.isAuth && request.url.startsWith('https://api.spotify.com/')
      ? request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authSv.token}`
        }
      })
      : request;

    return next.handle(newReq).pipe(
      tap({
        error: e => {
          console.warn(e);
          if (e.status !== 401) {
            return;
          }

          console.log('401 detected, signing out...');
          this.authSv.signOut();
        }
      })
    );
  }
}
