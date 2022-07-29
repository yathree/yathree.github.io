import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLicenseComponent } from './student-license.component';

describe('StudentLicenseComponent', () => {
  let component: StudentLicenseComponent;
  let fixture: ComponentFixture<StudentLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLicenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
