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
    const newReq = request.clone();
    
    if (this.authSv.isAuth && request.url.startsWith('https://api.spotify.com/')) {
      newReq.headers.append('Authorization', `Bearer ${this.authSv.token}`);
    }

    return next.handle(newReq).pipe(
      tap({
        error: e => {
          console.log('401 detected, signing out...');
          this.authSv.signOut();
        }
      })
    );
  }
}
