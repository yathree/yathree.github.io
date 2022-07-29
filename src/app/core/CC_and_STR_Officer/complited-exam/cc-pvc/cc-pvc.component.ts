import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cc-pvc',
  templateUrl: './cc-pvc.component.html',
  styleUrls: ['./cc-pvc.component.scss']
})
export class CcPvcComponent implements OnInit {

  data = this.route.snapshot.params['data'];
  id!:any;
  cn!:any;

  cc = true;
  srd = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let datas = this.data.split(' ');

    this.id = datas[0];
    this.cn = datas[1];
  }

  onClass(status:any){

    if (status=="S R D T"){
      this.cc = true;
      this.srd = false;
    }else if (status=="C C D M V"){
      this.cc = false;
      this.srd = true;
    }
  }
}
