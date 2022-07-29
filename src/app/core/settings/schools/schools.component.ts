import { Component, OnInit } from '@angular/core';
import { School } from '@shared/models/school.model';
import { DataState } from '@app/shared/enums/dataState';
import { Store } from '@ngrx/store';
import { schoolSelector } from './state/school.selectors';
import { selectSchool } from './state/school.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent implements OnInit {
  schoolState$ = this.store.select(schoolSelector);
  DataState = DataState;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  onUpdateClicked(school: School) {
    this.store.dispatch(selectSchool({ school }));
  }

  navigateToStudents(school: School) {
    this.router.navigate(['/school-students', school.id]);
  }
}
