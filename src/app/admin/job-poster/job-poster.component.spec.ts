import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPosterComponent } from './job-poster.component';

describe('JobPosterComponent', () => {
  let component: JobPosterComponent;
  let fixture: ComponentFixture<JobPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
