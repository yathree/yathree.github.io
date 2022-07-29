import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcPvcComponent } from './cc-pvc.component';

describe('CcPvcComponent', () => {
  let component: CcPvcComponent;
  let fixture: ComponentFixture<CcPvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcPvcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcPvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
