import { Component, Input, OnInit } from '@angular/core';
import { Student } from '@app/shared/models/student.mode';
import { CcService } from '@app/shared/services/cc.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ccd',
  templateUrl: './ccd.component.html',
  styleUrls: ['./ccd.component.scss']
})
export class CcdComponent implements OnInit {
  Cc$!: Observable<Student[]>;
  @Input() id: any;
  @Input() cn: any;

  constructor(private ccresult:CcService) { }

  ngOnInit(): void {
    this.Cc$ = this.ccresult.getCc(this.cn);
  }



}
