import { Component, Input, OnInit } from '@angular/core';
import { Student } from '@app/shared/models/student.mode';
import { CcService } from '@app/shared/services/cc.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-srd',
  templateUrl: './srd.component.html',
  styleUrls: ['./srd.component.scss']
})
export class SrdComponent implements OnInit {
  Cc$!: Observable<Student[]>;
  @Input() id: any;
  @Input() cn: any;

  constructor(private strresult:CcService) { }

  ngOnInit(): void {
    this.Cc$ = this.strresult.getStr(this.cn);
  }

}
