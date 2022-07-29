import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookeStudentComponent } from './booke-student.component';

describe('BookeStudentComponent', () => {
  let component: BookeStudentComponent;
  let fixture: ComponentFixture<BookeStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookeStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
