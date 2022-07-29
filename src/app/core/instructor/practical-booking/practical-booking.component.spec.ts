import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalBookingComponent } from './practical-booking.component';

describe('PracticalBookingComponent', () => {
  let component: PracticalBookingComponent;
  let fixture: ComponentFixture<PracticalBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticalBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
