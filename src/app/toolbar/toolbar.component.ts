import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {

  public get isAuth$(): Observable<boolean> {
    return this.authSv.isAuth$;
  }

  public constructor(
    private authSv: AuthService
  ) { }

  public signOut(): void {
    this.authSv.signOut();
  }

}
