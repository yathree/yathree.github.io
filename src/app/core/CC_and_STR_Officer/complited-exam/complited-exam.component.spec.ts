import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplitedExamComponent } from './complited-exam.component';

describe('ComplitedExamComponent', () => {
  let component: ComplitedExamComponent;
  let fixture: ComponentFixture<ComplitedExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplitedExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplitedExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
