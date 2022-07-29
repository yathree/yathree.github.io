import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCheckResultComponent } from './pre-check-result.component';

describe('PreCheckResultComponent', () => {
  let component: PreCheckResultComponent;
  let fixture: ComponentFixture<PreCheckResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreCheckResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCheckResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
