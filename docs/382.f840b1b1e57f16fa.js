"use strict";(self.webpackChunkzodlap_fe=self.webpackChunkzodlap_fe||[]).push([[382],{2382:(E,d,o)=>{o.r(d),o.d(d,{DemeritModule:()=>N});var c=o(6019),h=o(3503),l=o(1850),m=o(5695),r=o(4753),t=o(3668),u=o(8260),p=o(2835),f=o(4970),S=o(4522);let v=(()=>{class e{constructor(n){this.http=n,this.apiUrl=u.N.baseUrl+"/instructors"}save(n){return this.http.post(this.apiUrl,n).pipe((0,r.U)(i=>i.data),(0,p.K)(this.handleError))}getAllStudents(){return this.http.get(`${u.N.baseUrl}/driving-license`).pipe((0,r.U)(n=>n.data),(0,p.K)(this.handleError),(0,f.d)(1))}handleError(){throw new Error("Something went wrong.")}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(S.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var x=o(6676),g=o(888),s=o(1408),y=o(2092);function D(e,a){1&e&&(t._uU(0),t.ALo(1,"date")),2&e&&t.hij(" ",t.xi3(1,1,a.value,"dd-MM-yyyy")," ")}function C(e,a){1&e&&(t._uU(0),t.ALo(1,"date")),2&e&&t.hij(" ",t.xi3(1,1,a.value,"dd-MM-yyyy")," ")}function L(e,a){1&e&&(t._uU(0),t.ALo(1,"date")),2&e&&t.hij(" ",t.xi3(1,1,a.value,"dd-MM-yyyy")," ")}function Z(e,a){if(1&e&&(t.TgZ(0,"mat-card",5),t.TgZ(1,"mat-card-content"),t.TgZ(2,"ngx-datatable",6),t._UZ(3,"ngx-datatable-column",7),t.TgZ(4,"ngx-datatable-column",8),t.YNc(5,D,2,4,"ng-template",9),t.qZA(),t._UZ(6,"ngx-datatable-column",10),t.TgZ(7,"ngx-datatable-column",11),t.YNc(8,C,2,4,"ng-template",9),t.qZA(),t.TgZ(9,"ngx-datatable-column",12),t.YNc(10,L,2,4,"ng-template",9),t.qZA(),t._UZ(11,"ngx-datatable-column",13),t.qZA(),t.qZA(),t.qZA()),2&e){const n=t.oxw().ngIf;t.xp6(2),t.Q6J("rows",n.data)("headerHeight",40)("columnMode","force")("footerHeight",40)}}function A(e,a){1&e&&t._UZ(0,"loading-spinner")}function U(e,a){if(1&e&&(t.ynx(0,2),t.YNc(1,Z,12,4,"mat-card",3),t.YNc(2,A,1,0,"loading-spinner",4),t.BQk()),2&e){const n=a.ngIf,i=t.oxw();t.Q6J("ngSwitch",n.dataState),t.xp6(1),t.Q6J("ngSwitchCase",i.DataState.LOADED),t.xp6(1),t.Q6J("ngSwitchCase",i.DataState.LOADING)}}const M=[{path:"complete-licence",component:(()=>{class e{constructor(n){this.licences=n,this.DataState=m.a,this.students$=this.licences.getAllStudents().pipe((0,r.U)(i=>({dataState:m.a.LOADED,data:i})))}ngOnInit(){this.students$.subscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(v))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-student-license"]],decls:3,vars:3,consts:[["title","My Students & License"],[3,"ngSwitch",4,"ngIf"],[3,"ngSwitch"],["style","margin-top: 10px; margin-bottom: 30px; padding: 10px",4,"ngSwitchCase"],[4,"ngSwitchCase"],[2,"margin-top","10px","margin-bottom","30px","padding","10px"],["rowHeight","auto",1,"material",3,"rows","headerHeight","columnMode","footerHeight"],["name","Name"],["name","DOB"],["ngx-datatable-cell-template",""],["name","Class Name"],["name","Issue Date"],["name","Expiry Date"],["name","Status"]],template:function(n,i){1&n&&(t._UZ(0,"header-card",0),t.YNc(1,U,3,3,"ng-container",1),t.ALo(2,"async")),2&n&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,i.students$)))},directives:[x.I,c.O5,c.RF,c.n9,g.a8,g.dn,s.nE,s.UC,s.vq,y.g],pipes:[c.Ov,c.uU],styles:[""]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,l.Bz.forChild(M)],l.Bz]}),e})(),N=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,T,h.m]]}),e})()}}]);