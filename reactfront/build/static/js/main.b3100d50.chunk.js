(this.webpackJsonpreactfront=this.webpackJsonpreactfront||[]).push([[0],{65:function(e,t,n){},87:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),i=n(27),r=n.n(i),s=n(43),l=n(8),j=n(7),d=n.n(j),o=n(10),u=n(17),p=n(13),b=n(9),h=n(100),x=n(99),O=n(93),m=n(98),f=(n(46),n(65),n(12)),v=n.n(f);var y=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),s=Object(b.a)(r,2),l=s[0],j=s[1],f=Object(c.useState)({uid:"",pwd:""}),y=Object(b.a)(f,2),g=y[0],w=y[1],C=function(e){var t=e.target,n=t.name,a=t.value;w(Object(p.a)(Object(p.a)({},g),{},Object(u.a)({},n,a)))},S=Object(c.useState)("*"),k=Object(b.a)(S,2),N=k[0];function B(){return(B=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/react/usersignup/signup",e.next=3,v.a.post("/api/react/usersignup/signup",g);case 3:return t=e.sent,e.next=6,alert(JSON.stringify(t.data));case 6:w({uid:"",pwd:""});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(o.a)(d.a.mark((function e(){var t,n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/react/usersignup/login",e.next=3,v.a.post("/api/react/usersignup/login",g);case 3:t=e.sent,n=JSON.stringify(t.data.msg),a=n.length,"login successfull"==n.substring(1,a-1)&&(c={uidd:g.uid},window.localStorage.setItem("user",JSON.stringify(c)),window.location.href="/dashboard",w({uid:"",pwd:""}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return k[1],Object(a.jsxs)("div",{children:[Object(a.jsxs)(h.a,{style:{background:"#515AE0"},expand:"xl",children:[Object(a.jsx)(h.a.Brand,{style:{color:"white"},href:"#home",children:"BootStrap"}),Object(a.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsxs)(h.a.Collapse,{id:"basic-navbar-nav",children:[Object(a.jsx)(x.a,{className:"mr-auto",children:Object(a.jsx)(x.a.Link,{href:"/",exact:!0,style:{color:"white"},children:"Home"})}),Object(a.jsx)(O.a,{onClick:function(){return i(!0)},children:"Signup"}),Object(a.jsx)(O.a,{onClick:function(){return j(!0)},children:"Login"})]})]}),Object(a.jsxs)(m.a,{show:n,onHide:function(){return i(!1)},children:[Object(a.jsx)(m.a.Header,{style:{background:"#515AE0"},closeButton:!0,children:Object(a.jsx)(m.a.Title,{children:Object(a.jsx)("h2",{className:"title mt-1",children:"Sign up"})})}),Object(a.jsxs)(m.a.Body,{children:[Object(a.jsx)("center",{children:Object(a.jsx)("img",{src:"imgs/register.svg",height:"100px",width:"100px"})}),Object(a.jsxs)("form",{action:"#",className:"sign-up-form",children:[Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{type:"text",name:"uid",value:g.uid,onChange:C,placeholder:"Username"})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{type:"text",name:"pwd",value:g.pwd,onChange:C,placeholder:"Password"})})]})]}),Object(a.jsx)(m.a.Footer,{children:Object(a.jsx)("input",{type:"button",className:"btn",onClick:function(){return B.apply(this,arguments)},value:"Sign up"})})]}),Object(a.jsxs)(m.a,{show:l,onHide:function(){return j(!1)},children:[Object(a.jsx)(m.a.Header,{style:{background:"#515AE0"},closeButton:!0,children:Object(a.jsx)(m.a.Title,{children:Object(a.jsx)("h2",{className:"title mt-1",children:"Login"})})}),Object(a.jsxs)(m.a.Body,{children:[Object(a.jsx)("center",{children:Object(a.jsx)("img",{src:"imgs/log.svg",height:"100px",width:"100px"})}),Object(a.jsxs)("form",{action:"#",className:"sign-up-form",children:[Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{type:"text",name:"uid",value:g.uid,onChange:C,placeholder:"Username"})}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{type:"text",name:"pwd",value:g.pwd,onChange:C,placeholder:"Password"})})]})]}),Object(a.jsxs)(m.a.Footer,{children:[N,Object(a.jsx)("input",{type:"button",className:"btn",onClick:function(){return T.apply(this,arguments)},value:"Login"})]})]})]})};var g=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(y,{}),"WELCOME"]})},w=n(94),C=n(95),S=n(96),k=n(101),N=n(97);var B=function(){var e=JSON.parse(window.localStorage.getItem("user")),t=Object(c.useState)([{uid:"Aman"}]),n=Object(b.a)(t,2),i=n[0],r=n[1];function s(){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/api/react/medicine/fetch-all",t.next=3,v.a.post("/api/react/medicine/fetch-all",e);case 3:n=t.sent,r(n.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return(j=Object(o.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/api/react/medicine/delete?_id="+t,e.next=3,v.a.get(n);case 3:e.sent,s();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var u=Object(c.useState)(!1),p=Object(b.a)(u,2),h=p[0],x=p[1];return Object(c.useEffect)((function(){null==window.localStorage.getItem("user")&&(window.location.href="/home")}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:Object(a.jsxs)(w.a,{className:"mt-3",children:[Object(a.jsxs)(C.a,{className:"mt-2",children:[Object(a.jsx)(S.a,{className:"cd",md:3,style:{margin:"auto"},children:Object(a.jsxs)(k.a,{style:{width:"16rem"},children:[Object(a.jsx)(k.a.Img,{variant:"top",className:"mt-1",src:"imgs/avatar.svg",height:"200px",width:"16rem"}),Object(a.jsxs)(k.a.Body,{children:[Object(a.jsx)(k.a.Title,{children:"Profile Form"}),Object(a.jsx)(k.a.Text,{children:"Save and Update your profile"}),Object(a.jsx)("center",{children:Object(a.jsx)(O.a,{variant:"primary",onClick:function(){window.location.href="/profile-form"},children:"Profile"})})]})]})}),Object(a.jsx)(S.a,{className:"cd",md:3,style:{margin:"auto"},children:Object(a.jsxs)(k.a,{style:{width:"16rem"},children:[Object(a.jsx)(k.a.Img,{variant:"top",className:"mt-1",src:"imgs/post-med.svg",height:"200px",width:"16rem"}),Object(a.jsxs)(k.a.Body,{children:[Object(a.jsx)(k.a.Title,{children:"Donate Medicine"}),Object(a.jsx)(k.a.Text,{children:"Donate unused and extra Medicines"}),Object(a.jsx)("center",{children:Object(a.jsx)(O.a,{variant:"primary",onClick:function(){window.location.href="/post-med"},children:"Donate"})})]})]})}),Object(a.jsx)(S.a,{className:"cd",md:3,style:{margin:"auto"},children:Object(a.jsxs)(k.a,{style:{width:"16rem"},children:[Object(a.jsx)(k.a.Img,{variant:"top",className:"mt-1",src:"imgs/get-med.svg",height:"200px",width:"16rem"}),Object(a.jsxs)(k.a.Body,{children:[Object(a.jsx)(k.a.Title,{children:"Search"}),Object(a.jsx)(k.a.Text,{children:"Search for Medicines for your need"}),Object(a.jsx)("center",{children:Object(a.jsx)(O.a,{variant:"primary",onClick:function(){window.location.href="/searchmed"},children:"Search"})})]})]})}),Object(a.jsx)(S.a,{className:"cd",md:3,style:{margin:"auto"},children:Object(a.jsxs)(k.a,{style:{width:"16rem"},children:[Object(a.jsx)(k.a.Img,{variant:"top",className:"mt-1",src:"imgs/manager.svg",height:"200px",width:"16rem"}),Object(a.jsxs)(k.a.Body,{children:[Object(a.jsx)(k.a.Title,{children:"Medicine Manager"}),Object(a.jsx)(k.a.Text,{children:"Manage your donated medicines"}),Object(a.jsx)("center",{children:Object(a.jsx)(O.a,{variant:"primary",onClick:function(){s(),x(!0)},children:"Manage"})})]})]})})]}),Object(a.jsx)(C.a,{className:"mt-2",children:Object(a.jsx)(S.a,{className:"cd",md:3,style:{margin:"auto"},children:Object(a.jsxs)(k.a,{style:{width:"16rem"},children:[Object(a.jsx)(k.a.Img,{variant:"top",className:"mt-1",src:"imgs/logout.svg",height:"200px",width:"16rem"}),Object(a.jsxs)(k.a.Body,{children:[Object(a.jsx)(k.a.Title,{children:"Logout"}),Object(a.jsx)(k.a.Text,{}),Object(a.jsx)("center",{children:Object(a.jsx)(O.a,{variant:"primary",onClick:function(){window.localStorage.href="/home",window.localStorage.clear()},children:"Logout"})})]})]})})})]})}),Object(a.jsxs)(m.a,{show:h,onHide:function(){return x(!1)},children:[Object(a.jsx)(m.a.Header,{closeButton:!0,children:Object(a.jsx)(m.a.Title,{children:"Medicines"})}),Object(a.jsx)(m.a.Body,{children:Object(a.jsxs)(N.a,{striped:!0,bordered:!0,size:"sm",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{style:{background:"#1f2027",color:"white"},children:[Object(a.jsx)("th",{children:"Medicine"}),Object(a.jsx)("th",{children:"Company"}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:i.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.company}),Object(a.jsx)("td",{children:Object(a.jsx)("center",{children:Object(a.jsx)(O.a,{onClick:function(){return function(e){return j.apply(this,arguments)}(e._id)},children:"Delete"})})})]})}))})]})})]})]})};n(87);function T(){window.location.href="/dashboard"}function I(){window.localStorage.clear(),window.location.href="/"}var M=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(h.a,{style:{background:"#515AE0"},expand:"xl",children:[Object(a.jsx)(h.a.Brand,{style:{color:"white"},href:"#home",children:"BootStrap"}),Object(a.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)("div",{className:"dash",children:[Object(a.jsx)(O.a,{onClick:T,children:"DashBoard"}),Object(a.jsx)(O.a,{onClick:I,children:"Logout"})]})})]})})};var E=function(){var e=JSON.parse(window.localStorage.getItem("user")),t=Object(c.useState)("Aadhaar.png"),n=Object(b.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)({uid:e.uidd,name:"",mobile:"",address:"",city:"",file:null}),l=Object(b.a)(s,2),j=l[0],h=l[1],x=function(e){var t=e.target,n=t.name,a=t.value;h(Object(p.a)(Object(p.a)({},j),{},Object(u.a)({},n,a)))};function O(){return(O=Object(o.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(Object(p.a)(Object(p.a)({},j),{},Object(u.a)({},"file",t.target.files[0])));case 2:r(URL.createObjectURL(t.target.files[0]));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(o.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in"/api/react/profile/save",t=new FormData,j)t.append(n,j[n]);return e.next=5,v.a.post("/api/react/profile/save",t,{headers:{"Content-Type":"multipart/form-data"}});case 5:return a=e.sent,e.next=8,alert(JSON.stringify(a.data.msg));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(o.a)(d.a.mark((function e(){var t,n,a,c,i,s,l,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/react/profile/fetch",e.next=3,v.a.post("/api/react/profile/fetch",j);case 3:if(0!=(t=e.sent).data.length){e.next=7;break}return alert("no data found"),e.abrupt("return");case 7:n=t.data[0],a=n.uid,c=n.name,i=n.mobile,s=n.address,l=n.city,o=n.idpic,h({uid:a,name:c,mobile:i,address:s,city:l,file:null}),r("uploads/".concat(o));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(o.a)(d.a.mark((function e(){var t,n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=j.file){e.next=8;break}return"/api/react/profile/update",e.next=4,v.a.post("/api/react/profile/update",j);case 4:t=e.sent,alert(JSON.stringify(t.data)),e.next=16;break;case 8:for(a in"http://localhost:8000/profile/update-img",n=new FormData,j)n.append(a,j[a]);return e.next=13,v.a.post("http://localhost:8000/profile/update-img",n,{headers:{"Content-Type":"multipart/form-data"}});case 13:return c=e.sent,e.next=16,alert(JSON.stringify(c.data));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(M,{}),Object(a.jsxs)("div",{class:"wrapper",children:[Object(a.jsx)("div",{class:"title",children:"Profile Form"}),Object(a.jsxs)("div",{class:"form",children:[Object(a.jsxs)("div",{class:"inputfield",children:[Object(a.jsx)("label",{children:"User Id"}),Object(a.jsx)("input",{type:"text",name:"uid",value:j.uid,readOnly:!0,class:"input input-uid"}),Object(a.jsx)("input",{type:"button",onClick:function(){return f.apply(this,arguments)},value:"Fetch",class:"btn btn-fetch"})]}),Object(a.jsxs)("div",{class:"inputfield",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",value:j.name,onChange:x,class:"input"})]}),Object(a.jsxs)("div",{class:"inputfield",children:[Object(a.jsx)("label",{children:"Mobile"}),Object(a.jsx)("input",{type:"text",name:"mobile",value:j.mobile,onChange:x,class:"input"})]}),Object(a.jsxs)("div",{class:"inputfield",children:[Object(a.jsx)("label",{children:"Address"}),Object(a.jsx)("textarea",{class:"textarea",name:"address",value:j.address,onChange:x})]}),Object(a.jsxs)("div",{class:"inputfield",children:[Object(a.jsx)("label",{children:"City"}),Object(a.jsx)("input",{type:"text",name:"city",value:j.city,onChange:x,class:"input"})]}),Object(a.jsxs)("div",{class:"inputfield",children:[Object(a.jsx)("label",{children:"Identification Proof"}),Object(a.jsx)("input",{type:"file",name:"file",onChange:function(e){return O.apply(this,arguments)}})]}),Object(a.jsx)("div",{class:"inputfield",children:Object(a.jsx)("img",{src:i,height:"150px",width:"200px"})}),Object(a.jsxs)("div",{class:"inputfield",children:[Object(a.jsx)("input",{type:"button",onClick:function(){return m.apply(this,arguments)},value:"Save",class:"btn"}),Object(a.jsx)("input",{type:"button",value:"Update",onClick:function(){return y.apply(this,arguments)},class:"btn"})]})]})]})]})};var F=function(){Object(c.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]);var e=JSON.parse(window.localStorage.getItem("user")),t=Object(c.useState)("medicine.svg"),n=Object(b.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)({uid:e.uidd,name:"",date:"",company:"",city:"",qty:"",units:"",file:null}),l=Object(b.a)(s,2),j=l[0],h=l[1],x=function(e){var t=e.target,n=t.name,a=t.value;h(Object(p.a)(Object(p.a)({},j),{},Object(u.a)({},n,a)))};function O(){return(O=Object(o.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(Object(p.a)(Object(p.a)({},j),{},Object(u.a)({},"file",t.target.files[0])));case 2:r(URL.createObjectURL(t.target.files[0]));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(o.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in"/api/react/medicine/save",t=new FormData,j)t.append(n,j[n]);return e.next=5,v.a.post("/api/react/medicine/save",t,{headers:{"Content-Type":"multipart/form-data"}});case 5:return a=e.sent,e.next=8,alert(JSON.stringify(a.data.msg));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(o.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/react/profile/fetch",e.next=3,v.a.post("/api/react/profile/fetch",j);case 3:if(0!=(t=e.sent).data.length){e.next=7;break}return alert("Profile data not found"),e.abrupt("return");case 7:return n=t.data[0].city,e.next=10,h(Object(p.a)(Object(p.a)({},j),{},Object(u.a)({},"city",n)));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(M,{}),Object(a.jsxs)("div",{class:"wrapper",children:[Object(a.jsx)("div",{class:"title",children:"Post Medicine"}),Object(a.jsxs)("div",{class:"form",children:[Object(a.jsxs)("div",{class:"inputfield",children:[Object(a.jsx)("label",{children:"User Id"}),Object(a.jsx)("input",{type:"text",name:"uid",value:j.uid,readOnly:!0,class:"input"})]}),Object(a.jsxs)("div",{class:"inputfield",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",value:j.name,onChange:x,class:"input"})]}),Object(a.jsxs)("div",{class:"inputfield",children:[Object(a.jsx)("label",{children:"Company"}),Object(a.jsx)("input",{type:"text",name:"company",value:j.company,onChange:x,class:"input"})]}),Object(a.jsxs)("div",{class:"inputfield",children:[Object(a.jsx)("label",{children:"Quantity"}),Object(a.jsx)("input",{type:"text",name:"qty",value:j.qty,onChange:x,class:"input"})]}),Object(a.jsxs)("div",{class:"inputfield",children:[Object(a.jsx)("label",{children:"Units"}),Object(a.jsx)("input",{type:"text",name:"units",value:j.units,onChange:x,class:"input"})]}),Object(a.jsxs)("div",{class:"inputfield",children:[Object(a.jsx)("label",{children:"Expiry Date"}),Object(a.jsx)("input",{type:"date",name:"date",value:j.date,onChange:x})]}),Object(a.jsxs)("div",{class:"inputfield",children:[Object(a.jsx)("label",{children:"Identification Proof"}),Object(a.jsx)("input",{type:"file",name:"file",onChange:function(e){return O.apply(this,arguments)}})]}),Object(a.jsx)("div",{class:"inputfield",children:Object(a.jsx)("img",{src:i,height:"150px",width:"200px"})}),Object(a.jsx)("div",{class:"inputfield",children:Object(a.jsx)("input",{type:"button",value:"Save",onClick:function(){return m.apply(this,arguments)},class:"btn"})})]})]})]})};var J=function(){var e,t=Object(c.useState)([]),n=Object(b.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)([]),l=Object(b.a)(s,2),j=l[0],h=l[1],x=Object(c.useState)([]),f=Object(b.a)(x,2),y=f[0],g=f[1],B=Object(c.useState)([]),T=Object(b.a)(B,2),I=T[0],E=T[1],F=Object(c.useState)({city:"",medicine:""}),J=Object(b.a)(F,2),L=J[0],D=J[1],U=Object(c.useState)(!1),P=Object(b.a)(U,2),H=P[0],A=P[1];function q(e){!function(e){R.apply(this,arguments)}(e),A(!0)}function R(){return(R=Object(o.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/api/react/profile/fetch-details?uid="+t,e.next=3,v.a.get(n);case 3:a=e.sent,E(a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){return(Q=Object(o.a)(d.a.mark((function e(){var t,n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("city").value,n=document.getElementById("medicine").value,a="/api/react/medicine/fetchPeople/?city="+t+"&name="+n,e.next=5,v.a.get(a);case 5:c=e.sent,g(c.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/react/medicine/fetchCity",e.next=3,v.a.post("/api/react/medicine/fetchCity");case 3:t=e.sent,r(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(o.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("city").value,n="/api/react/medicine/fetchMed/?city="+t,e.next=4,v.a.get(n);case 4:a=e.sent,h(a.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(e){var t=e.target,n=t.name,a=t.value;D(Object(p.a)(Object(p.a)({},L),{},Object(u.a)({},n,a))),"city"==n&&function(){z.apply(this,arguments)}()};return Object(c.useEffect)((function(){!function(){_.apply(this,arguments)}()}),[]),Object(a.jsxs)("center",{children:[Object(a.jsx)(M,{}),Object(a.jsx)("br",{}),"City",Object(a.jsxs)("select",{id:"city",name:"city",value:L.city,onChange:W,children:[Object(a.jsx)("option",{value:"none",children:"--Select City--"}),i.map((function(e){return Object(a.jsx)("option",{value:e,children:e})}))]}),"Medicines",Object(a.jsxs)("select",{id:"medicine",name:"medicine",onChange:W,value:L.medicine,children:[Object(a.jsx)("option",{children:"--Medicines--"}),j.map((function(e){return Object(a.jsx)("option",{value:e.name,children:e.name})}))]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"button",value:"Fetch Medicines",className:"btn",style:{width:"230px"},onClick:function(){return Q.apply(this,arguments)}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(w.a,{className:"mt-5",children:Object(a.jsx)(C.a,{children:y.map((function(t){return Object(a.jsx)(S.a,{md:3,children:Object(a.jsx)(k.a,{children:Object(a.jsxs)(k.a.Body,{children:[Object(a.jsx)("noscript",{children:e="/uploads/"+t.pic}),Object(a.jsx)(k.a.Img,{variant:"top",className:"mt-1",src:e,height:"200px",width:"16rem"}),Object(a.jsxs)(k.a.Title,{children:["Name : ",t.name]}),Object(a.jsxs)(k.a.Text,{children:[Object(a.jsxs)("p",{children:["Company : ",t.company]}),Object(a.jsxs)("p",{children:["Quantity : ",t.qty]})]}),Object(a.jsx)(O.a,{variant:"primary",onClick:function(){return q(t.uid)},children:"Details"})]})})})}))})}),Object(a.jsxs)(m.a,{show:H,onHide:function(){return A(!1)},children:[Object(a.jsx)(m.a.Header,{closeButton:!0,children:Object(a.jsx)(m.a.Title,{children:"Details"})}),Object(a.jsx)(m.a.Body,{children:Object(a.jsx)(N.a,{children:Object(a.jsx)("tbody",{children:I.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.mobile})]})}))})})})]})]})};var L=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/",exact:!0,component:g}),Object(a.jsx)(l.a,{path:"/home",exact:!0,component:g}),Object(a.jsx)(l.a,{path:"/searchmed",exact:!0,component:J}),Object(a.jsx)(l.a,{path:"/dashboard",exact:!0,component:B}),Object(a.jsx)(l.a,{path:"/profile-form",exact:!0,component:E}),Object(a.jsx)(l.a,{path:"/post-med",exact:!0,component:F})]})})};r.a.render(Object(a.jsx)(s.a,{children:Object(a.jsx)(L,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.b3100d50.chunk.js.map