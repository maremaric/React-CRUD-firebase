(this["webpackJsonpreact-crud"]=this["webpackJsonpreact-crud"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c(6),n=c.n(s),r=c(15),l=c.n(r),i=(c(22),c(23),c(8)),o=c(10),d=c(11),j=function(e){var t={fullName:"",mobile:"",email:"",address:""},c=Object(s.useState)(t),n=Object(o.a)(c,2),r=n[0],l=n[1];Object(s.useEffect)((function(){""==e.currentId?l(Object(i.a)({},t)):l(Object(i.a)({},e.contactObjects[e.currentId]))}),[e.currentId,e.contactObjects]);var j=function(e){var t=e.target,c=t.name,a=t.value;l(Object(i.a)(Object(i.a)({},r),{},Object(d.a)({},c,a)))};return Object(a.jsxs)("form",{autoComplete:"off",onSubmit:function(t){t.preventDefault(),e.addOrEdit(r)},children:[Object(a.jsxs)("div",{className:"form-group input-group",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text",children:Object(a.jsx)("i",{className:"fas fa-user"})})}),Object(a.jsx)("input",{className:"form-control",placeholder:"Full Name",name:"fullName",value:r.fullName,onChange:j,required:!0})]}),Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsxs)("div",{className:"form-group input-group col-md-6",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text",children:Object(a.jsx)("i",{className:"fas fa-mobile-alt"})})}),Object(a.jsx)("input",{className:"form-control",placeholder:"Mobile",name:"mobile",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{3,4}",type:"tel",value:r.mobile,onChange:j,required:!0})]}),Object(a.jsxs)("div",{className:"form-group input-group col-md-6",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text",children:Object(a.jsx)("i",{className:"fas fa-envelope"})})}),Object(a.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",value:r.email,onChange:j,required:!0})]})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("textarea",{className:"form-control",placeholder:"Address",name:"address",value:r.address,onChange:j,required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:""==e.currentId?"Save":"Update",className:"btn btn-primary btn-block"})})]})},b=c(16).a.initializeApp({apiKey:"AIzaSyDBQe-MlPwKbYH7CpPUdFrv7-NN7ylV3FY",authDomain:"react-crud-f6b09.firebaseapp.com",databaseURL:"https://react-crud-f6b09.firebaseio.com",projectId:"react-crud-f6b09",storageBucket:"react-crud-f6b09.appspot.com",messagingSenderId:"989349353713",appId:"1:989349353713:web:75b189ab9ea58391123150"}).database().ref(),u=function(){var e=Object(s.useState)({}),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),l=Object(o.a)(r,2),d=l[0],u=l[1];Object(s.useEffect)((function(){b.child("contacts").on("value",(function(e){null!=e.val()?n(Object(i.a)({},e.val())):n({})}))}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{class:"jumbotron jumbotron-fluid",children:Object(a.jsxs)("div",{class:"container",children:[Object(a.jsx)("h1",{class:"display-4 text-center",children:"React CRUD"}),Object(a.jsx)("p",{class:"lead text-center",children:"Operation CRUD with firebase (exercise)"})]})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-5",children:Object(a.jsx)(j,Object(i.a)({},{addOrEdit:function(e){""==d?b.child("contacts").push(e,(function(e){e?console.log(e):u("")})):b.child("contacts/".concat(d)).set(e,(function(e){e?console.log(e):u("")}))},currentId:d,contactObjects:c}))}),Object(a.jsx)("div",{className:"col-md-7",children:Object(a.jsxs)("table",{className:"table table-borderless table-stripped",children:[Object(a.jsx)("thead",{className:"thead-light",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Full Name"}),Object(a.jsx)("th",{children:"Mobile"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"Action"})]})}),Object(a.jsx)("tbody",{children:Object.keys(c).map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:c[e].fullName}),Object(a.jsx)("td",{children:c[e].mobile}),Object(a.jsx)("td",{children:c[e].email}),Object(a.jsxs)("td",{children:[Object(a.jsx)("a",{className:"btn text-primary",onClick:function(){u(e)},children:Object(a.jsx)("i",{className:"fas fa-pencil-alt"})}),Object(a.jsx)("a",{className:"btn text-danger",children:Object(a.jsx)("i",{className:"fas fa-trash-alt",onClick:function(){var t;t=e,window.confirm("Are you sure to delete this user?")&&b.child("contacts/".concat(t)).remove((function(e){e?console.log(e):u("")}))}})})]})]},e)}))})]})})]})]})};var m=function(){return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(a.jsx)(u,{})})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};l.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),O()}},[[28,1,2]]]);
//# sourceMappingURL=main.e9a9883e.chunk.js.map