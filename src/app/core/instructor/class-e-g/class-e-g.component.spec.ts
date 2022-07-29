import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEGComponent } from './class-e-g.component';

describe('ClassEGComponent', () => {
  let component: ClassEGComponent;
  let fixture: ComponentFixture<ClassEGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassEGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassEGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
