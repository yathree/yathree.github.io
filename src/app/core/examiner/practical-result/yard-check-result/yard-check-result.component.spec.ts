import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardCheckResultComponent } from './yard-check-result.component';

describe('YardCheckResultComponent', () => {
  let component: YardCheckResultComponent;
  let fixture: ComponentFixture<YardCheckResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardCheckResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YardCheckResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
