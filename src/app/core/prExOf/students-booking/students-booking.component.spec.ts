import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsBookingComponent } from './students-booking.component';

describe('StudentsBookingComponent', () => {
  let component: StudentsBookingComponent;
  let fixture: ComponentFixture<StudentsBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
