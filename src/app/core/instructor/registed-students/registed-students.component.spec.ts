import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistedStudentsComponent } from './registed-students.component';

describe('RegistedStudentsComponent', () => {
  let component: RegistedStudentsComponent;
  let fixture: ComponentFixture<RegistedStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistedStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
