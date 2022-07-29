import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrdComponent } from './srd.component';

describe('SrdComponent', () => {
  let component: SrdComponent;
  let fixture: ComponentFixture<SrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
