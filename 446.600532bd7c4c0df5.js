"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[446],{446:(F,d,c)=>{c.r(d),c.d(d,{ManageUsersModule:()=>Q});var u=c(8628),_=c(2164),C=c(9027),h=c(6895),g=c(4333),t=c(4650),f=c(1433),b=c(7185),M=c(1817),p=c(9549),x=c(4144),O=c(4859),r=c(671),P=c(3081);function U(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"table.no")," "))}function Z(e,o){if(1&e&&(t.TgZ(0,"td",19),t.ALo(1,"translate"),t._uU(2),t.qZA()),2&e){const n=o.index;t.uIk("data-label",t.lcZ(1,2,"table.no")),t.xp6(2),t.hij(" ",n+1," ")}}function T(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"table.user"),""))}function A(e,o){if(1&e&&(t.TgZ(0,"td",19),t.ALo(1,"translate"),t._uU(2),t.qZA()),2&e){const n=o.$implicit;t.uIk("data-label",t.lcZ(1,2,"table.user")),t.xp6(2),t.hij(" ",n.username," ")}}function k(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"table.email")))}function v(e,o){if(1&e&&(t.TgZ(0,"td",19),t.ALo(1,"translate"),t._uU(2),t.qZA()),2&e){const n=o.$implicit;t.uIk("data-label",t.lcZ(1,2,"table.email")),t.xp6(2),t.hij(" ",n.email," ")}}function y(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"table.taskassign")))}function N(e,o){if(1&e&&(t.TgZ(0,"td",19),t.ALo(1,"translate"),t._uU(2),t.qZA()),2&e){const n=o.$implicit;t.uIk("data-label",t.lcZ(1,2,"table.taskassign")),t.xp6(2),t.hij(" ",n.assignedTasks," ")}}function S(e,o){1&e&&(t.TgZ(0,"th",20),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"table.action")," "))}function w(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(n);const s=t.oxw(),l=s.$implicit,i=s.index,m=t.oxw();return t.KtG(m.changeStatus(l.status,l._id,i))}),t._uU(1,"In-Active"),t.qZA()}}function D(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(n);const s=t.oxw(),l=s.$implicit,i=s.index,m=t.oxw();return t.KtG(m.changeStatus(l.status,l._id,i))}),t._uU(1,"Active"),t.qZA()}}function Y(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"td",19),t.ALo(1,"translate"),t.YNc(2,w,2,0,"button",21),t.YNc(3,D,2,0,"button",22),t.TgZ(4,"button",23),t.NdJ("click",function(){const s=t.CHM(n),l=s.$implicit,i=s.index,m=t.oxw();return t.KtG(m.deleteUser(l._id,i))}),t._uU(5),t.ALo(6,"translate"),t.qZA()()}if(2&e){const n=o.$implicit;t.uIk("data-label",t.lcZ(1,4,"table.action")),t.xp6(2),t.Q6J("ngIf","Active"==n.status),t.xp6(1),t.Q6J("ngIf","Active"!==n.status),t.xp6(2),t.Oqu(t.lcZ(6,6,"table.delete"))}}function L(e,o){1&e&&t._UZ(0,"tr",26)}function I(e,o){1&e&&t._UZ(0,"tr",27)}const j=function(e,o){return{id:"tasks",itemsPerPage:10,currentPage:e,totalItems:o}},B=[{path:"",component:(()=>{class e{constructor(n,a,s){this.service=n,this.toaster=a,this.sharedService=s,this.page=1,this.displayedColumns=["position","name","email","taskAssigned","actions"],this.storedTheme=localStorage.getItem("theme-color"),this.getDataFromSubject()}ngOnInit(){this.selectThemeColor(),this.getuser()}getuser(){this.service.getuserData({page:this.page,limit:10,name:""})}getDataFromSubject(){this.service.userData?.subscribe(n=>{this.dataSource=n?.data,this.total=n?.totalItem})}search(n){let a=this.dataSource.filter(s=>s.username.toLowerCase().includes(n.value.toLowerCase()));n.value?this.dataSource=a:this.getuser()}deleteUser(n,a){this.dataSource[a].assignedTasks>0?this.toaster.error("You can't delete this user untile complete his tasks"):this.service.deleteUser(n).subscribe(s=>{this.toaster.success("delete user successfully","success"),this.getuser()})}changeStatus(n,a,s){const l={id:a,status:n};this.dataSource[s].assignedTasks>0?this.toaster.error("You can't change status of\n       this user untile complete his tasks"):this.service.changeStatus(l).subscribe(i=>{this.toaster.success("change user  status successfully","success"),this.getuser()})}changePage(n){this.page=n,this.getuser()}selectThemeColor(){this.sharedService.getTheme().subscribe(n=>{this.storedTheme=n})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.f),t.Y36(b._W),t.Y36(M.F))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-users"]],decls:30,vars:15,consts:[[1,"row","pt-4"],[1,"col-md-3"],["appearance","outline",1,"w-100"],["matInput","","type","text",3,"keyup"],[1,"pt-2"],["mat-table","",1,"mat-elevation-z8","table-striped",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","email"],["matColumnDef","taskAssigned"],["matColumnDef","actions"],["mat-header-cell","","class","w-25 text-center",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"d-flex","justify-content-center","pt-4"],["id","tasks",1,"my-pagination",3,"pageChange"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"w-25","text-center"],["class","btn btn-secondary mx-2",3,"click",4,"ngIf"],["class","btn btn-success mx-2",3,"click",4,"ngIf"],["mat-raised-button","","color","warn",1,"",3,"click"],[1,"btn","btn-secondary","mx-2",3,"click"],[1,"btn","btn-success","mx-2",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"input",3),t.NdJ("keyup",function(l){return a.search(l.target)}),t.qZA()()()(),t.TgZ(7,"div")(8,"div",4)(9,"table",5),t.ynx(10,6),t.YNc(11,U,3,3,"th",7),t.YNc(12,Z,3,4,"td",8),t.BQk(),t.ynx(13,9),t.YNc(14,T,3,3,"th",7),t.YNc(15,A,3,4,"td",8),t.BQk(),t.ynx(16,10),t.YNc(17,k,3,3,"th",7),t.YNc(18,v,3,4,"td",8),t.BQk(),t.ynx(19,11),t.YNc(20,y,3,3,"th",7),t.YNc(21,N,3,4,"td",8),t.BQk(),t.ynx(22,12),t.YNc(23,S,3,3,"th",13),t.YNc(24,Y,7,8,"td",8),t.BQk(),t.YNc(25,L,1,0,"tr",14),t.YNc(26,I,1,0,"tr",15),t.ALo(27,"paginate"),t.qZA()(),t.TgZ(28,"div",16)(29,"pagination-controls",17),t.NdJ("pageChange",function(l){return a.changePage(l)}),t.qZA()()()),2&n&&(t.xp6(4),t.Oqu(t.lcZ(5,7,"users.search")),t.xp6(3),t.Gre("content-theme ",a.storedTheme,""),t.xp6(2),t.Q6J("dataSource",a.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",t.xi3(27,9,a.displayedColumns,t.WLB(12,j,a.page,a.total))))},dependencies:[h.O5,p.KE,p.hX,x.Nt,O.lW,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,g.LS,P.X$,g._s],styles:["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{text-align:initial}table[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{color:#f0f8ff;font-size:15px;font-weight:500}.content-theme.theme-red[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{background:#C62232}.content-theme.theme-red[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{color:#c62232}.content-theme.theme-red[_ngcontent-%COMP%]   .my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background-color:#c62232}.content-theme.theme-green[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{background:#208637}.content-theme.theme-green[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{color:#208637}.content-theme.theme-green[_ngcontent-%COMP%]   .my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background-color:#208637}.content-theme.theme-blue[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{background:#025BDF}.content-theme.theme-blue[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{color:#025bdf}.content-theme.theme-blue[_ngcontent-%COMP%]   .my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background-color:#025bdf}.content-theme.theme-purple[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{background:purple}.content-theme.theme-purple[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{color:purple}.content-theme.theme-purple[_ngcontent-%COMP%]   .my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background-color:purple}.content-theme.theme-orange[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{background:#E76B03}.content-theme.theme-orange[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{color:#e76b03}.content-theme.theme-orange[_ngcontent-%COMP%]   .my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background-color:#e76b03}@media (max-width: 900px){.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:last-child{border-bottom:0}.mat-table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:first-child{margin-top:5%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{display:none}table[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]{padding:0 2rem}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:flex!important;justify-content:space-between!important;display:block;width:100%;margin-bottom:13px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);font-weight:700;color:#333!important}}"]}),e})()}];let J=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(B),u.Bz]}),e})(),Q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.ez,J,C.m,_.q,u.Bz,g.JX]}),e})()}}]);