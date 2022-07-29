import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practical-result',
  templateUrl: './practical-result.component.html',
  styleUrls: ['./practical-result.component.scss']
})
export class PracticalResultComponent implements OnInit {

  pre = true;
  yard = false;
  road = false;

  name!:any;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(data:any){
    if (data=="pre"){
      this.pre = true;
      this.yard = false;
      this.road = false;
    }else if (data=="yard"){
      this.yard = true;
      this.pre = false;
      this.road = false;
    }else if (data=="road"){
      this.road = true;
      this.pre = false;
      this.yard = false;
    }
  }

  onSave(){

  }

}
