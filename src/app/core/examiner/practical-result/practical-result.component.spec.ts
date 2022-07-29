import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalResultComponent } from './practical-result.component';

describe('PracticalResultComponent', () => {
  let component: PracticalResultComponent;
  let fixture: ComponentFixture<PracticalResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticalResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
