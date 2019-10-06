import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanApplicationsComponent } from './artisan-applications.component';

describe('ArtisanApplicationsComponent', () => {
  let component: ArtisanApplicationsComponent;
  let fixture: ComponentFixture<ArtisanApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
