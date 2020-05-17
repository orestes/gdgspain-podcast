import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeGuestComponent } from './episode-guest.component';

describe('EpisodeGuestComponent', () => {
  let component: EpisodeGuestComponent;
  let fixture: ComponentFixture<EpisodeGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
