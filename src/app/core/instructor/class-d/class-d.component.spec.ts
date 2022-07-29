import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDComponent } from './class-d.component';

describe('ClassDComponent', () => {
  let component: ClassDComponent;
  let fixture: ComponentFixture<ClassDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
