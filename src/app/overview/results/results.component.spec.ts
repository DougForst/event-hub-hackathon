import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsOverviewComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsOverviewComponent;
  let fixture: ComponentFixture<ResultsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
