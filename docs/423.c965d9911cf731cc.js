"use strict";(self.webpackChunkzodlap_fe=self.webpackChunkzodlap_fe||[]).push([[423],{7423:(Y,f,i)=>{i.r(f),i.d(f,{PrExOfModule:()=>M});var c=i(6019),k=i(3503),x=i(1850),d=i(5695),h=i(4753),t=i(3668),g=i(5885),p=i(4986),Z=i(6676),s=i(888),l=i(1408),S=i(2092);function y(n,o){1&n&&(t._uU(0),t.ALo(1,"date")),2&n&&t.hij(" ",t.xi3(1,1,o.value,"dd-MM-yyyy")," ")}function b(n,o){if(1&n&&(t.TgZ(0,"mat-card",5),t.TgZ(1,"mat-card-content"),t.TgZ(2,"ngx-datatable",6),t._UZ(3,"ngx-datatable-column",7),t._UZ(4,"ngx-datatable-column",8),t._UZ(5,"ngx-datatable-column",9),t.TgZ(6,"ngx-datatable-column",10),t.YNc(7,y,2,4,"ng-template",11),t.qZA(),t._UZ(8,"ngx-datatable-column",12),t._UZ(9,"ngx-datatable-column",13),t.qZA(),t.qZA(),t.qZA()),2&n){const a=t.oxw().ngIf;t.xp6(2),t.Q6J("rows",a.data)("headerHeight",40)("columnMode","force")("footerHeight",40),t.xp6(3),t.Q6J("maxWidth",120),t.xp6(1),t.Q6J("maxWidth",130),t.xp6(2),t.Q6J("maxWidth",130),t.xp6(1),t.Q6J("maxWidth",100)}}function B(n,o){1&n&&t._UZ(0,"loading-spinner")}function A(n,o){if(1&n&&(t.ynx(0,2),t.YNc(1,b,10,8,"mat-card",3),t.YNc(2,B,1,0,"loading-spinner",4),t.BQk()),2&n){const a=o.ngIf,e=t.oxw();t.Q6J("ngSwitch",a.dataState),t.xp6(1),t.Q6J("ngSwitchCase",e.DataState.LOADED),t.xp6(1),t.Q6J("ngSwitchCase",e.DataState.LOADING)}}let T=(()=>{class n{constructor(a,e){this.practicalServices=a,this.snackbar=e,this.DataState=d.a,this.ids=1,this.students$=this.practicalServices.getStudentBook().pipe((0,h.U)(r=>({dataState:d.a.LOADED,data:r})))}ngOnInit(){}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(g.c),t.Y36(p.o))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-booking"]],decls:3,vars:3,consts:[["title","All Students Booking"],[3,"ngSwitch",4,"ngIf"],[3,"ngSwitch"],["style","margin-top: 10px; margin-bottom: 30px; padding: 10px",4,"ngSwitchCase"],[4,"ngSwitchCase"],[2,"margin-top","10px","margin-bottom","30px","padding","10px"],["rowHeight","auto",1,"material",3,"rows","headerHeight","columnMode","footerHeight"],["name","Name"],["name","School Name"],["name","Class Name",3,"maxWidth"],["name","Booked Date",3,"maxWidth"],["ngx-datatable-cell-template",""],["name","Practical Day",3,"maxWidth"],["name","Status",3,"maxWidth"]],template:function(a,e){1&a&&(t._UZ(0,"header-card",0),t.YNc(1,A,3,3,"ng-container",1),t.ALo(2,"async")),2&a&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.students$)))},directives:[Z.I,c.O5,c.RF,c.n9,s.a8,s.dn,l.nE,l.UC,l.vq,S.g],pipes:[c.Ov,c.uU],styles:[""]}),n})();var m=i(9133),u=i(5243),_=i(8167),U=i(138),v=i(86),J=i(9112);let D=(()=>{class n{constructor(a,e,r){this.fb=a,this.practicalServices=e,this.snackbar=r}ngOnInit(){this.form=this.fb.group({id:["",m.kI.required],practicalDate:["",m.kI.required]})}onSave(){this.form.patchValue({id:this.id,practicalDate:this.form.value.practicalDate}),this.practicalServices.confirm(Object.assign({},this.form.value)).subscribe(()=>this.snackbar.create("Exam Result has been saved."))}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(m.qu),t.Y36(g.c),t.Y36(p.o))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-booking-form"]],inputs:{id:"id",name:"name"},decls:16,vars:2,consts:[[1,"space-b"],["autocomplete","off","fxLayout","row wrap","fxLayoutAlign","space-between center",3,"formGroup"],["fxFlex","25"],["matInput","","readonly","true",3,"value"],["matInput","","type","date","max","100","min","0","formControlName","practicalDate"],["fxFlex","20","fxLayoutAlign","end"],["mat-flat-button","","type","button","color","primary",3,"click"]],template:function(a,e){1&a&&(t.TgZ(0,"mat-card",0),t.TgZ(1,"mat-card-content"),t.TgZ(2,"form",1),t.TgZ(3,"mat-form-field",2),t.TgZ(4,"mat-label"),t._uU(5,"Student Name"),t.qZA(),t._UZ(6,"input",3),t.qZA(),t.TgZ(7,"mat-form-field",2),t.TgZ(8,"mat-label"),t._uU(9,"Exam Practical Date"),t.qZA(),t._UZ(10,"input",4),t.qZA(),t.TgZ(11,"div",5),t.TgZ(12,"button",6),t.NdJ("click",function(){return e.onSave()}),t.TgZ(13,"mat-icon"),t._uU(14,"save"),t.qZA(),t._uU(15," Save "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(2),t.Q6J("formGroup",e.form),t.xp6(4),t.s9C("value",e.name))},directives:[s.a8,s.dn,m._Y,m.JL,u.xw,u.Wh,m.sg,_.KE,u.yH,_.hX,U.Nt,m.Fj,m.JJ,m.u,v.lW,J.Hw],styles:[""]}),n})();function O(n,o){1&n&&(t._uU(0),t.ALo(1,"date")),2&n&&t.hij(" ",t.xi3(1,1,o.value,"dd-MM-yyyy")," ")}function N(n,o){if(1&n){const a=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){const C=t.CHM(a).row;return t.oxw(3).onConfirm(C.id,C.name)}),t._uU(1," Confirm Boking "),t.qZA()}}function Q(n,o){if(1&n&&(t.TgZ(0,"mat-card",6),t.TgZ(1,"mat-card-content"),t.TgZ(2,"ngx-datatable",7),t._UZ(3,"ngx-datatable-column",8),t._UZ(4,"ngx-datatable-column",9),t._UZ(5,"ngx-datatable-column",10),t.TgZ(6,"ngx-datatable-column",11),t.YNc(7,O,2,4,"ng-template",12),t.qZA(),t._UZ(8,"ngx-datatable-column",13),t._UZ(9,"ngx-datatable-column",14),t.TgZ(10,"ngx-datatable-column",15),t.YNc(11,N,2,0,"ng-template",12),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const a=t.oxw().ngIf;t.xp6(2),t.Q6J("rows",a.data)("headerHeight",40)("columnMode","force")("footerHeight",40),t.xp6(3),t.Q6J("maxWidth",120),t.xp6(1),t.Q6J("maxWidth",130),t.xp6(2),t.Q6J("maxWidth",130),t.xp6(1),t.Q6J("maxWidth",100)}}function w(n,o){1&n&&t._UZ(0,"loading-spinner")}function I(n,o){if(1&n&&(t.ynx(0,3),t.YNc(1,Q,12,8,"mat-card",4),t.YNc(2,w,1,0,"loading-spinner",5),t.BQk()),2&n){const a=o.ngIf,e=t.oxw();t.Q6J("ngSwitch",a.dataState),t.xp6(1),t.Q6J("ngSwitchCase",e.DataState.LOADED),t.xp6(1),t.Q6J("ngSwitchCase",e.DataState.LOADING)}}const W=[{path:"schools-booked",component:T},{path:"students-booked",component:(()=>{class n{constructor(a,e){this.practicalServices=a,this.snackbar=e,this.DataState=d.a,this.ids=1,this.students$=this.practicalServices.getStudentBook().pipe((0,h.U)(r=>({dataState:d.a.LOADED,data:r})))}ngOnInit(){}onConfirm(a,e){this.id=a,this.name=e,console.log(a)}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(g.c),t.Y36(p.o))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-students-booking"]],decls:4,vars:5,consts:[["title","Student Booking & Confirmation"],[3,"id","name"],[3,"ngSwitch",4,"ngIf"],[3,"ngSwitch"],["style","margin-top: 10px; margin-bottom: 30px; padding: 10px",4,"ngSwitchCase"],[4,"ngSwitchCase"],[2,"margin-top","10px","margin-bottom","30px","padding","10px"],["rowHeight","auto",1,"material",3,"rows","headerHeight","columnMode","footerHeight"],["name","Name"],["name","School Name"],["name","Class Name",3,"maxWidth"],["name","Booked Date",3,"maxWidth"],["ngx-datatable-cell-template",""],["name","Practical Day",3,"maxWidth"],["name","Status",3,"maxWidth"],["name","Action"],["mat-raised-button","","color","primary",2,"margin-left","15px",3,"click"]],template:function(a,e){1&a&&(t._UZ(0,"header-card",0),t._UZ(1,"app-booking-form",1),t.YNc(2,I,3,3,"ng-container",2),t.ALo(3,"async")),2&a&&(t.xp6(1),t.s9C("id",e.id),t.s9C("name",e.name),t.xp6(1),t.Q6J("ngIf",t.lcZ(3,3,e.students$)))},directives:[Z.I,D,c.O5,c.RF,c.n9,s.a8,s.dn,l.nE,l.UC,l.vq,v.lW,S.g],pipes:[c.Ov,c.uU],styles:[".mat-button-toggle[_ngcontent-%COMP%]{background-color:#1d9dc48a;color:#fff}.mat-button-toggle[_ngcontent-%COMP%]:hover{background-color:transparent;color:#10f!important}"]}),n})()}];let E=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.ez,x.Bz.forChild(W)],x.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.ez,E,k.m]]}),n})()}}]);