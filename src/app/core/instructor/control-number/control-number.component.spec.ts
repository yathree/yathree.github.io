import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlNumberComponent } from './control-number.component';

describe('ControlNumberComponent', () => {
  let component: ControlNumberComponent;
  let fixture: ComponentFixture<ControlNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
