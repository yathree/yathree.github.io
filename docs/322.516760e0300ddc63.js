"use strict";(self.webpackChunkzodlap_fe=self.webpackChunkzodlap_fe||[]).push([[322],{8322:(z,Z,i)=>{i.r(Z),i.d(Z,{CC_STRModule:()=>D});var c=i(6019),T=i(3503),g=i(1850),h=i(5695),r=i(4753),t=i(3668),f=i(8260),s=i(2835),d=i(4970),_=i(4522);let m=(()=>{class e{constructor(n){this.http=n,this.apiUrl=f.N.baseUrl+"/"}confirm(n){return this.http.post(this.apiUrl+"confirm-result",n).pipe((0,r.U)(a=>a.data),(0,s.K)(this.handleError))}getAllStudents(){return this.http.get(`${this.apiUrl}pass-practical`).pipe((0,r.U)(n=>n.data),(0,s.K)(this.handleError),(0,d.d)(1))}getCc(n){return this.http.get(this.apiUrl+"cc-info/"+n).pipe((0,r.U)(a=>a.data),(0,s.K)(this.handleError),(0,d.d)(1))}getStr(n){return this.http.get(this.apiUrl+"str-info/"+n).pipe((0,r.U)(a=>a.data),(0,s.K)(this.handleError),(0,d.d)(1))}handleError(){throw new Error("Something went wrong.")}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(_.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var A=i(6676),l=i(888),u=i(1408),x=i(86),U=i(2092);function O(e,o){if(1&e&&(t.TgZ(0,"a",16),t._uU(1,"Print Certificates"),t.qZA()),2&e){const n=o.row;t.Q6J("routerLink",n.classId+" "+n.cn)}}function q(e,o){if(1&e&&(t.TgZ(0,"mat-card",5),t.TgZ(1,"mat-card-content"),t.TgZ(2,"ngx-datatable",6),t._UZ(3,"ngx-datatable-column",7),t._UZ(4,"ngx-datatable-column",8),t._UZ(5,"ngx-datatable-column",9),t._UZ(6,"ngx-datatable-column",10),t._UZ(7,"ngx-datatable-column",11),t._UZ(8,"ngx-datatable-column",12),t._UZ(9,"ngx-datatable-column",13),t.TgZ(10,"ngx-datatable-column",14),t.YNc(11,O,2,1,"ng-template",15),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const n=t.oxw().ngIf;t.xp6(2),t.Q6J("rows",n.data)("headerHeight",40)("columnMode","force")("footerHeight",40)}}function M(e,o){1&e&&t._UZ(0,"loading-spinner")}function P(e,o){if(1&e&&(t.ynx(0,2),t.YNc(1,q,12,4,"mat-card",3),t.YNc(2,M,1,0,"loading-spinner",4),t.BQk()),2&e){const n=o.ngIf,a=t.oxw();t.Q6J("ngSwitch",n.dataState),t.xp6(1),t.Q6J("ngSwitchCase",a.DataState.LOADED),t.xp6(1),t.Q6J("ngSwitchCase",a.DataState.LOADING)}}let v=(()=>{class e{constructor(n){this.licences=n,this.DataState=h.a,this.students$=this.licences.getAllStudents().pipe((0,r.U)(a=>({dataState:h.a.LOADED,data:a})))}ngOnInit(){this.students$.subscribe()}confirm(n,a){this.id=n,this.name=a}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-complited-exam"]],decls:3,vars:3,consts:[["title","Complite Exam Students"],[3,"ngSwitch",4,"ngIf"],[3,"ngSwitch"],["style","margin-top: 10px; margin-bottom: 30px; padding: 10px",4,"ngSwitchCase"],[4,"ngSwitchCase"],[2,"margin-top","10px","margin-bottom","30px","padding","10px"],["rowHeight","auto",1,"material",3,"rows","headerHeight","columnMode","footerHeight"],["name","Name"],["name","Phone"],["name","ID Number"],["name","Class Name"],["name","Pre Marks"],["name","Yard Marks"],["name","Road Marks"],["name","Action"],["ngx-datatable-cell-template",""],["mat-raised-button","","color","primary",3,"routerLink"]],template:function(n,a){1&n&&(t._UZ(0,"header-card",0),t.YNc(1,P,3,3,"ng-container",1),t.ALo(2,"async")),2&n&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,a.students$)))},directives:[A.I,c.O5,c.RF,c.n9,l.a8,l.dn,u.nE,u.UC,u.vq,x.zs,g.yS,U.g],pipes:[c.Ov],styles:["img[_ngcontent-%COMP%]{width:80px}.student-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;border-bottom:1px dotted #999}.middle[_ngcontent-%COMP%]{margin-left:3rem}.student-info[_ngcontent-%COMP%]{padding:0 .75rem;margin-top:1.5rem}.circle[_ngcontent-%COMP%]{width:60px;height:50px;text-align:center;border:1px solid #999;margin-left:auto;border-radius:50%;font-size:10px;box-sizing:border-box;line-height:10px;display:flex;justify-content:center;align-items:center;margin-top:2rem}.imageDp[_ngcontent-%COMP%]{width:100px;height:120px;margin:0 auto;border:1px solid #777}h5[_ngcontent-%COMP%]{text-align:center;font-weight:bold;margin-top:5px;color:#c93328}.conditions[_ngcontent-%COMP%]{padding:0 .75rem}.conditions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10px;text-align:center;font-style:italic;line-height:10px}ol[_ngcontent-%COMP%]{padding:0}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:10px;line-height:15px;padding-left:0}"]}),e})();var C=i(7348),p=i(5243);function S(e,o){if(1&e&&(t.TgZ(0,"mat-card",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"strong",4),t._uU(4),t.qZA(),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"h2"),t._uU(8,"ZANZIBAR ROAD TRANSPORT AND SAFETY AUTHORITY"),t.qZA(),t.TgZ(9,"h3"),t._uU(10,"THE ROAD TRANSPORT ACT 2003"),t.qZA(),t.TgZ(11,"h4"),t._uU(12,"(Under Section 95, 113 and Regulation 9(1))"),t.qZA(),t.TgZ(13,"h2"),t._uU(14,"STATEMENT OF RESULT OF DRIVING TEST"),t.qZA(),t.TgZ(15,"p"),t._uU(16,"this certify that Mr / Mrs / Miss "),t.TgZ(17,"strong"),t._uU(18),t.qZA(),t._uU(19," holder of linner drivers license number "),t.TgZ(20,"strong"),t._uU(21),t.qZA(),t._uU(22," has undergone a driving test of class "),t.TgZ(23,"strong"),t._uU(24),t.qZA(),t._uU(25," vehicle on ........................ and attaining the following perfomance:-"),t.qZA(),t.TgZ(26,"div"),t.TgZ(27,"p"),t._uU(28,"RENEWALS"),t.qZA(),t.TgZ(29,"table",7),t.TgZ(30,"tr"),t.TgZ(31,"th"),t._uU(32,"ACTIVITY"),t.qZA(),t.TgZ(33,"th"),t._uU(34,"MARKS"),t.qZA(),t.qZA(),t.TgZ(35,"tr"),t.TgZ(36,"td"),t.TgZ(37,"strong"),t._uU(38,"Theory :"),t.qZA(),t.TgZ(39,"ul"),t.TgZ(40,"li"),t._uU(41,"Road Sign"),t.qZA(),t.TgZ(42,"li"),t._uU(43,"Traffic Laws"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"td"),t.TgZ(45,"p"),t._uU(46),t.qZA(),t.TgZ(47,"p"),t._uU(48),t.qZA(),t.qZA(),t.qZA(),t.TgZ(49,"tr"),t.TgZ(50,"td"),t.TgZ(51,"strong"),t._uU(52,"Practical :"),t.qZA(),t.TgZ(53,"ul"),t.TgZ(54,"li"),t._uU(55,"Pre-trip inspection"),t.qZA(),t.TgZ(56,"li"),t._uU(57,"Yard test"),t.qZA(),t.TgZ(58,"li"),t._uU(59,"Road test"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(60,"td"),t.TgZ(61,"p"),t._uU(62),t.qZA(),t.TgZ(63,"p"),t._uU(64),t.qZA(),t.TgZ(65,"p"),t._uU(66),t.qZA(),t.qZA(),t.qZA(),t.TgZ(67,"tr"),t.TgZ(68,"th"),t._uU(69,"Total"),t.qZA(),t._UZ(70,"td"),t.qZA(),t.TgZ(71,"tr"),t.TgZ(72,"th"),t._uU(73,"Grade"),t.qZA(),t._UZ(74,"td"),t.qZA(),t.qZA(),t.qZA(),t._UZ(75,"br"),t.TgZ(76,"p"),t._uU(77,"..............................................."),t.qZA(),t.TgZ(78,"p"),t.TgZ(79,"strong"),t._uU(80,"Certifying Officer"),t.qZA(),t.qZA(),t.TgZ(81,"p"),t.TgZ(82,"span"),t._uU(83,"................................................."),t.qZA(),t.qZA(),t.TgZ(84,"p"),t.TgZ(85,"strong"),t._uU(86,"Date"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const n=o.$implicit;t.xp6(4),t.hij("No: ",n.cn,""),t.xp6(14),t.hij("",n.name," "),t.xp6(3),t.hij("",n.learnerNo," "),t.xp6(3),t.Oqu(n.className),t.xp6(22),t.Oqu(n.theoryMarks1),t.xp6(2),t.Oqu(n.theoryMarks2),t.xp6(14),t.Oqu(n.preMarks),t.xp6(2),t.Oqu(n.yardMarks),t.xp6(2),t.Oqu(n.roadMarks)}}let y=(()=>{class e{constructor(n){this.strresult=n}ngOnInit(){this.Cc$=this.strresult.getStr(this.cn)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-srd"]],inputs:{id:"id",cn:"cn"},decls:2,vars:3,consts:[["fxLayoutGap","0.5rem","fxFlex","50",4,"ngFor","ngForOf"],["fxLayoutGap","0.5rem","fxFlex","50"],[1,"students"],[1,"student-info","container"],[2,"color","red"],[1,"logo"],["src","assets/images/smz_logo.png","alt",""],["border","2","width","100%"]],template:function(n,a){1&n&&(t.YNc(0,S,87,9,"mat-card",0),t.ALo(1,"async")),2&n&&t.Q6J("ngForOf",t.lcZ(1,1,a.Cc$))},directives:[c.sg,l.a8,p.SQ,p.yH],pipes:[c.Ov],styles:[".student-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;margin-top:10px}.students[_ngcontent-%COMP%]{margin-right:auto;margin-left:auto}h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{text-align:center;font-weight:bold}.conditions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10px;text-align:center;font-style:italic;line-height:10px}.logo[_ngcontent-%COMP%]{margin:0 auto;width:80px}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]{border:1px solid #999;border-collapse:collapse}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;font-size:15px;line-height:12px;text-align:center;margin-top:10px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px;font-size:15px;line-height:12px;text-align:left;margin-top:10px}li[_ngcontent-%COMP%]{margin-top:10px}"]}),e})();function R(e,o){if(1&e&&(t.TgZ(0,"mat-card",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"strong",4),t._uU(4),t.qZA(),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"h2"),t._uU(8,"ZANZIBAR ROAD TRANSPORT AND SAFETY AUTHORITY"),t.qZA(),t.TgZ(9,"h3"),t._uU(10,"THE ROAD TRANSPORT ACT 2003"),t.qZA(),t.TgZ(11,"h4"),t._uU(12,"(Under Section 95, 113 and Regulation 9(1))"),t.qZA(),t.TgZ(13,"h2"),t._uU(14,"CERTIFICATE OF COMPETENCY TO DRIVE A MOTOR VEHICLE"),t.qZA(),t.TgZ(15,"p"),t._uU(16,"I here by certify that I have tested Mr / Mrs / Miss "),t.TgZ(17,"strong"),t._uU(18),t.qZA(),t._uU(19," of (address) "),t.TgZ(20,"strong"),t._uU(21),t.qZA(),t.qZA(),t.TgZ(22,"p"),t._uU(23,"On motor vehicle with registration number "),t.TgZ(24,"strong"),t._uU(25,". . . . . . . . . . . . . . . . . . . . ."),t.qZA(),t._uU(26," and find him"),t.qZA(),t.TgZ(27,"p"),t._uU(28,"compitent to drive motor vehicle of class "),t.TgZ(29,"strong"),t._uU(30),t.qZA(),t._uU(31," under the following conditions (if any)."),t._UZ(32,"strong"),t.qZA(),t.TgZ(33,"p"),t._UZ(34,"br"),t.qZA(),t.TgZ(35,"p"),t._uU(36,"BloodGroup "),t.TgZ(37,"strong"),t._uU(38),t.qZA(),t.qZA(),t.TgZ(39,"p"),t._uU(40,"..............................................."),t.qZA(),t.TgZ(41,"p"),t.TgZ(42,"strong"),t._uU(43,"Singnature"),t.qZA(),t.qZA(),t.TgZ(44,"p"),t.TgZ(45,"span"),t._uU(46,"................................................."),t.qZA(),t.qZA(),t.TgZ(47,"p"),t.TgZ(48,"strong"),t._uU(49,"Date"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const n=o.$implicit;t.xp6(4),t.hij("No: ",n.cn,""),t.xp6(14),t.hij("",n.name," "),t.xp6(3),t.Oqu(n.address),t.xp6(9),t.Oqu(n.className),t.xp6(8),t.Oqu(n.bloodGroup)}}let b=(()=>{class e{constructor(n){this.ccresult=n}ngOnInit(){this.Cc$=this.ccresult.getCc(this.cn)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ccd"]],inputs:{id:"id",cn:"cn"},decls:2,vars:3,consts:[["fxLayoutGap","0.5rem","fxFlex","50",4,"ngFor","ngForOf"],["fxLayoutGap","0.5rem","fxFlex","50"],[1,"students"],[1,"student-info","container"],[2,"color","red"],[1,"logo"],["src","assets/images/smz_logo.png","alt",""]],template:function(n,a){1&n&&(t.YNc(0,R,50,5,"mat-card",0),t.ALo(1,"async")),2&n&&t.Q6J("ngForOf",t.lcZ(1,1,a.Cc$))},directives:[c.sg,l.a8,p.SQ,p.yH],pipes:[c.Ov],styles:[".student-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;margin-top:10px}.students[_ngcontent-%COMP%]{margin-right:auto;margin-left:auto}h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{text-align:center;font-weight:bold}.conditions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10px;text-align:center;font-style:italic;line-height:10px}.logo[_ngcontent-%COMP%]{margin:0 auto;width:80px}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}"]}),e})();function E(e,o){if(1&e&&t._UZ(0,"app-srd",3),2&e){const n=t.oxw();t.s9C("id",n.id),t.s9C("cn",n.cn)}}function N(e,o){if(1&e&&t._UZ(0,"app-ccd",3),2&e){const n=t.oxw();t.s9C("id",n.id),t.s9C("cn",n.cn)}}const I=[{path:"exam-complit",component:v},{path:"exam-complit/:data",component:(()=>{class e{constructor(n){this.route=n,this.data=this.route.snapshot.params.data,this.cc=!0,this.srd=!1}ngOnInit(){let n=this.data.split(" ");this.id=n[0],this.cn=n[1]}onClass(n){"S R D T"==n?(this.cc=!0,this.srd=!1):"C C D M V"==n&&(this.cc=!1,this.srd=!0)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cc-pvc"]],decls:7,vars:2,consts:[["color","primary"],[3,"click"],["class","card",3,"id","cn",4,"ngIf"],[1,"card",3,"id","cn"]],template:function(n,a){1&n&&(t.TgZ(0,"mat-button-toggle-group",0),t.TgZ(1,"mat-button-toggle",1),t.NdJ("click",function(){return a.onClass("S R D T")}),t._uU(2,"S R D T"),t.qZA(),t.TgZ(3,"mat-button-toggle",1),t.NdJ("click",function(){return a.onClass("C C D M V")}),t._uU(4,"C C D M V"),t.qZA(),t.qZA(),t.YNc(5,E,1,2,"app-srd",2),t.YNc(6,N,1,2,"app-ccd",2)),2&n&&(t.xp6(5),t.Q6J("ngIf",a.srd),t.xp6(1),t.Q6J("ngIf",a.cc))},directives:[C.A9,C.Yi,c.O5,y,b],styles:[".mat-button-toggle[_ngcontent-%COMP%]{background-color:#1d9dc48a;color:#fff}.mat-button-toggle[_ngcontent-%COMP%]:hover{background-color:transparent;color:#10f!important}.card[_ngcontent-%COMP%]{margin-top:20px}"]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,g.Bz.forChild(I)],g.Bz]}),e})(),D=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,w,T.m]]}),e})()}}]);