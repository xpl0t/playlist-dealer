import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DealerComponent } from './dealer.component';

const routes: Route[] = [
  { path: '', component: DealerComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DealerRoutingModule { }
