import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/dealer', pathMatch: 'full' },
  { path: 'dealer', loadChildren: () => import('./dealer/dealer.module').then(m => m.DealerModule) },
  { path: 'sign-in', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
