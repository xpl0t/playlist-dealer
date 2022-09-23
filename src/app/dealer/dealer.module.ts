import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerComponent } from './dealer.component';
import { DealerRoutingModule } from './dealer-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { GenrePipe } from './genre.pipe';
import { PlaylistBrowserComponent } from './playlist-browser/playlist-browser.component';

@NgModule({
  declarations: [
    DealerComponent,
    GenrePipe,
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
