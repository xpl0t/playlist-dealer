import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistBrowserComponent } from './playlist-browser.component';

describe('PlaylistBrowserComponent', () => {
  let component: PlaylistBrowserComponent;
  let fixture: ComponentFixture<PlaylistBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistBrowserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
