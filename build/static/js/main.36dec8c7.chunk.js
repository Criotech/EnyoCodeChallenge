(this.webpackJsonpenye=this.webpackJsonpenye||[]).push([[0],{149:function(e,t,a){e.exports=a(300)},154:function(e,t,a){},299:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),i=a.n(r);a(154);var s=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"header"},"USERS MANAGER APP"))},o=a(135),c=a(71),h=a(72),d=a(78),u=a(73),m=a(79),b=a(303),y=a(302),E=b.a.Column,p=b.a.ColumnGroup,f=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"EditUserData",value:function(e){this.props.showModal(),this.props.editUser(e)}},{key:"deleteUser",value:function(e){this.props.deleteUser(e)}},{key:"render",value:function(){var e,t=this;return this.props.entries?e=this.props.entries:console.log("no entries"),l.a.createElement("div",null,l.a.createElement(b.a,{dataSource:e},l.a.createElement(p,{title:"Name"},l.a.createElement(E,{title:"First Name",dataIndex:"firstName",key:"firstName"}),l.a.createElement(E,{title:"Last Name",dataIndex:"lastName",key:"lastName"})),l.a.createElement(E,{title:"Age",dataIndex:"age",key:"age"}),l.a.createElement(E,{title:"Birthday",dataIndex:"birthday",key:"birthday"}),l.a.createElement(E,{title:"Hobby",dataIndex:"hobby",key:"hobby"}),l.a.createElement(E,{title:"Action",key:"action",render:function(e,a){return l.a.createElement("span",null,l.a.createElement("span",{style:{color:"#3AA5FF",cursor:"pointer"},onClick:t.EditUserData.bind(t,a)},"Edit "),l.a.createElement(y.a,{type:"vertical"}),l.a.createElement("span",{onClick:t.deleteUser.bind(t,a.key),style:{color:"#3AA5FF",cursor:"pointer"}},"Delete"))}})))}}]),t}(n.Component),v=a(23),k=a(304),g=a(305),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!1,visible:!1,firstName:"",lastName:"",age:"",birthday:"",hobby:"",key:0,edit:!1,userData:[]},a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(){a.setState({loading:!0}),setTimeout((function(){a.setState({loading:!1,visible:!1})}),3e3)},a.handleCancel=function(){a.setState({visible:!1})},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(o.a)({},a,n))}},{key:"deleteUser",value:function(e){var t=this.state.userData.filter((function(t){return t.key!==e}));this.setState({userData:t})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.state.edit&&this.deleteUser(this.state.key),this.setState((function(e){return{key:e.key+1}}));var t=this.state,a={key:t.key,firstName:t.firstName,lastName:t.lastName,age:t.age,birthday:t.birthday,hobby:t.hobby};this.setState((function(e){return{userData:e.userData.concat(a),firstName:"",lastName:"",age:"",birthday:"",hobby:"",edit:!1}})),this.handleCancel()}},{key:"editUser",value:function(e){this.setState({key:e.key,firstName:e.firstName,lastName:e.lastName,age:e.age,birthday:e.birthday,hobby:e.hobby,edit:!0})}},{key:"render",value:function(){var e=this.state,t=e.visible,a=e.firstName,n=e.lastName,r=e.age,i=e.birthday,s=e.hobby,o=e.edit;return l.a.createElement("div",null,l.a.createElement(f,{showModal:this.showModal.bind(this),editUser:this.editUser.bind(this),deleteUser:this.deleteUser.bind(this),entries:this.state.userData}),l.a.createElement("div",null,l.a.createElement(v.a,{className:"toggleForm",onClick:this.showModal},l.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})),l.a.createElement(k.a,{visible:t,title:"User Data Form",onOk:this.handleOk,onCancel:this.handleCancel,footer:[l.a.createElement(v.a,{key:"back",onClick:this.handleCancel},"Return")]},l.a.createElement("form",null,l.a.createElement(g.a,{type:"text",name:"firstName",value:a,onChange:this.handleChange.bind(this),placeholder:"firt name"})," ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(g.a,{type:"text",name:"lastName",value:n,onChange:this.handleChange.bind(this),placeholder:"last name"})," ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(g.a,{type:"number",name:"age",value:r,onChange:this.handleChange.bind(this),placeholder:"age"})," ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(g.a,{type:"date",name:"birthday",value:i,onChange:this.handleChange.bind(this),placeholder:"birthday"})," ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(g.a,{name:"hobby",value:s,onChange:this.handleChange.bind(this),type:"text",placeholder:"Hobby"})," ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(g.a,{type:"submit",className:"inputButton",onClick:this.onSubmit.bind(this),value:!1===o?"Add":"Edit"})))))}}]),t}(n.Component);a(298),a(299);var C=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s,null),l.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[149,1,2]]]);
//# sourceMappingURL=main.36dec8c7.chunk.js.map