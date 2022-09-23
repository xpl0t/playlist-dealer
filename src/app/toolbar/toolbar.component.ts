import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public get isAuth$(): Observable<boolean> {
    return this.authSv.isAuth$;
  }

  public constructor(
    private authSv: AuthService
  ) { }

  public ngOnInit(): void {
  }

  public signOut(): void {
    this.authSv.signOut();
  }

}
