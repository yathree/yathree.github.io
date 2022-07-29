import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySessionComponent } from './day-session.component';

describe('DaySessionComponent', () => {
  let component: DaySessionComponent;
  let fixture: ComponentFixture<DaySessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaySessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
