import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public constructor(
    private authSv: AuthService
  ) { }

  public ngOnInit(): void {
  }

  public signIn(): void {
    this.authSv.signIn();
  }

}
