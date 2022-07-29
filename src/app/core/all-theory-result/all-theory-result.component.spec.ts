import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTheoryResultComponent } from './all-theory-result.component';

describe('AllTheoryResultComponent', () => {
  let component: AllTheoryResultComponent;
  let fixture: ComponentFixture<AllTheoryResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTheoryResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTheoryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
