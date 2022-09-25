import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { DealerRoutingModule } from './dealer-routing.module';
import { DealerComponent } from './dealer.component';
import { JoinPipe } from './join.pipe';
import { PlaylistBrowserComponent } from './playlist-browser/playlist-browser.component';

@NgModule({
  declarations: [
    DealerComponent,
    JoinPipe,
    PlaylistBrowserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DealerRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    MatTableModule,
    MatCheckboxModule,
    MatListModule,
    ScrollingModule
  ]
})
export class DealerModule { }
