import { Component, OnInit } from '@angular/core';
import { DataState } from '@app/shared/enums/dataState';
import { ManagerService } from '@app/shared/services';
import { map } from 'rxjs';

@Component({
  selector: 'app-assigned-students',
  templateUrl: './assigned-students.component.html',
  styleUrls: ['./assigned-students.component.scss']
})
export class AssignedStudentsComponent implements OnInit {

  DataState = DataState;

  constructor(private managerService: ManagerService) { }

  students$ = this.managerService
    .getManagerStudents()
    .pipe(map((response) => ({ dataState: DataState.LOADED, data: response })));

  ngOnInit(): void {
    this.students$.subscribe()
  }

  confirm(id: number) {
    this.managerService.confirmStudent(id).subscribe();
  }

}
