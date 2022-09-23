import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    SignInComponent
  ],
  exports: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthInterceptor
  ]
})
export class AuthModule { }
