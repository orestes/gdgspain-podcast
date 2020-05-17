import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDetailsPageComponent } from './episode-details-page.component';

describe('EpisodeDetailsPageComponent', () => {
  let component: EpisodeDetailsPageComponent;
  let fixture: ComponentFixture<EpisodeDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
