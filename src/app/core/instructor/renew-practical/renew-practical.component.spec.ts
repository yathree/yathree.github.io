import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewPracticalComponent } from './renew-practical.component';

describe('RenewPracticalComponent', () => {
  let component: RenewPracticalComponent;
  let fixture: ComponentFixture<RenewPracticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewPracticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewPracticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
