(this.webpackJsonpenye=this.webpackJsonpenye||[]).push([[0],{153:function(e,t,a){e.exports=a(306)},158:function(e,t,a){},305:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),o=a.n(l);a(158);var c=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},"USERS MANAGER APP"))},i=a(309),u=a(308),s=i.a.Column,m=i.a.ColumnGroup;var d=function(e){var t;return e.entries?t=e.entries:console.log("no entries"),r.a.createElement("div",null,r.a.createElement(i.a,{rowKey:function(e){return e.id},dataSource:t},r.a.createElement(m,{title:"Name"},r.a.createElement(s,{title:"First Name",dataIndex:"firstName",key:"firstName"}),r.a.createElement(s,{title:"Last Name",dataIndex:"lastName",key:"lastName"})),r.a.createElement(s,{title:"Age",dataIndex:"age",key:"age"}),r.a.createElement(s,{title:"Birthday",dataIndex:"birthday",key:"birthday"}),r.a.createElement(s,{title:"Hobby",dataIndex:"hobby",key:"hobby"}),r.a.createElement(s,{title:"Action",key:"action",render:function(t,a){return r.a.createElement("span",null,r.a.createElement("span",{style:{color:"#3AA5FF",cursor:"pointer"},onClick:function(){return function(t){e.showModal(),e.editUser(t)}(a)}},"Edit "),r.a.createElement(u.a,{type:"vertical"}),r.a.createElement("span",{onClick:function(){return function(t){e.deleteUser(t)}(a.id)},style:{color:"#3AA5FF",cursor:"pointer"}},"Delete"))}})))},p=a(23),b=a(310),y=a(311),f=a(61),E=function(){return{type:"toggle_modal"}},h=function(e){return{type:"user_form",payload:{prop:e.prop,value:e.value}}},v=function(e){return{type:"user_submit",payload:e}},g=function(e){return{type:"delete_user",payload:e}},O=function(e){return console.log(e),{type:"edit_user",payload:e}};var N=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.user})),a=t.firstName,n=t.lastName,l=t.age,o=t.birthday,c=t.hobby,i=t.id,u=t.userData,s=t.edit,m=t.visible,N=function(t){e(E())},j=function(t){e(E())},k=function(t){var a=t.target,n=a.name,r=a.value;console.log(n,r),e(h({prop:n,value:r}))},w=function(t){e(g(t))};return r.a.createElement("div",null,r.a.createElement(d,{showModal:N,editUser:function(t){e(O(t))},deleteUser:w,entries:u}),r.a.createElement("div",null,r.a.createElement(p.a,{className:"toggleForm",onClick:N},r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})),r.a.createElement(b.a,{visible:m,title:"User Data Form",onCancel:j,footer:[r.a.createElement(p.a,{key:"back",onClick:j},"Return")]},r.a.createElement("form",null,r.a.createElement(y.a,{type:"text",name:"firstName",value:a,onChange:k,placeholder:"first name"})," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(y.a,{type:"text",name:"lastName",value:n,onChange:k,placeholder:"last name"})," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(y.a,{type:"number",name:"age",value:l,onChange:k,placeholder:"age"})," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(y.a,{type:"date",name:"birthday",value:o,onChange:k,placeholder:"birthday"})," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(y.a,{name:"hobby",value:c,onChange:k,type:"text",placeholder:"Hobby"})," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(y.a,{type:"submit",className:"inputButton",onClick:function(t){t.preventDefault(),!0===s&&w(i),e(v({id:i,firstName:a,lastName:n,age:l,birthday:o,hobby:c}))},value:!1===s?"Add":"Edit"})))))};a(304),a(305);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c,null),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(149),w=a(44),D=a(108),C=a(106);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(C.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _={visible:!1,firstName:"",lastName:"",age:"",birthday:"",hobby:"",id:0,userData:[],edit:!1},x=Object(w.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"toggle_modal":return P({},e,{visible:!e.visible});case"user_form":return P({},e,Object(C.a)({},t.payload.prop,t.payload.value));case"user_submit":return P({},e,{},_,{id:e.id+1,userData:[].concat(Object(D.a)(e.userData),[t.payload])});case"delete_user":return P({},e,{userData:Object(D.a)(e.userData.filter((function(e){return e.id!==t.payload})))});case"edit_user":return P({},e,{edit:!0},t.payload);default:return e}}}),F=Object(w.createStore)(x,Object(k.composeWithDevTools)());o.a.render(r.a.createElement(f.a,{store:F},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[153,1,2]]]);
//# sourceMappingURL=main.f9f02e94.chunk.js.map