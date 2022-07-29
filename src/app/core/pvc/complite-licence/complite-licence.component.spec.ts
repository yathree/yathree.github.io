import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliteLicenceComponent } from './complite-licence.component';

describe('CompliteLicenceComponent', () => {
  let component: CompliteLicenceComponent;
  let fixture: ComponentFixture<CompliteLicenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompliteLicenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompliteLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
