import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
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
    private authSv: AuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/github.svg')
    );
  }

  public signOut(): void {
    this.authSv.signOut();
  }

  public navigateToRepo(): void {
    window.open('https://github.com/xpl0t/playlist-dealer', '_blank');
  }

}
