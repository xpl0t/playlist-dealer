import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerComponent } from './dealer.component';

@NgModule({
  declarations: [
    DealerComponent
  ],
  exports: [
    DealerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DealerModule { }
