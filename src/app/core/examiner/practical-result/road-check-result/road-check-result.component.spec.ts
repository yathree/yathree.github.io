import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadCheckResultComponent } from './road-check-result.component';

describe('RoadCheckResultComponent', () => {
  let component: RoadCheckResultComponent;
  let fixture: ComponentFixture<RoadCheckResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadCheckResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadCheckResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
