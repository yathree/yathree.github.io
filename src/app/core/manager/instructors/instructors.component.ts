import { Component, OnInit } from '@angular/core';
import { Instructor } from '@app/shared/models';
import { ManagerService } from '@app/shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'manager-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss'],
})
export class InstructorsComponent implements OnInit {
  instructors$!: Observable<Instructor[]>;

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    this.instructors$ = this.managerService.getManagerInstructors();
  }
}
