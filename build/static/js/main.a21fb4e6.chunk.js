(this.webpackJsonpformdesign=this.webpackJsonpformdesign||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),s=(a(14),a(2)),u=a(3),m=a(5),o=a(4),c=a(1),h=a(6),d=(a(15),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).resetForm=function(){a.setState(a.baseState)},a.state={name:"",age:"",gender:"",email:"",number:"",userform:[],usercount:0},a.validate=a.validate.bind(Object(c.a)(a)),a.onSubmit=a.onSubmit.bind(Object(c.a)(a)),a.baseState=a.state,a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"validate",value:function(){this.state.name.length>3?this.state.age.length>1?this.state.gender.length>2?this.state.email.length>8?this.state.number.length>9?this.state.userform.length>0?this.state.number!==this.state.userform[this.state.userform.length-1].number&&this.state.email!==this.state.userform[this.state.userform.length-1].email?10===this.state.number.length?new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.state.email)?parseInt(this.state.age)>=18?this.onSubmit():alert("You are not an adult"):alert("Email is not valid"):alert("Enter a valid 10 digits number"):alert("Number or email already exists"):10===this.state.number.length?new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.state.email)?(console.log(parseInt(this.state.age)>=18),parseInt(this.state.age)>=18?this.onSubmit():alert("You are not an adult")):alert("Email is not valid"):alert("Enter a valid 10 digits number"):alert("Number required!"):alert("Email required!"):alert("Gender required!"):alert("Age required!"):alert("Name required!")}},{key:"onSubmit",value:function(){this.state.userform.push({name:this.state.name,age:this.state.age,gender:this.state.gender,email:this.state.email,number:this.state.number}),this.setState({usercount:this.state.usercount+1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",{style:{textAlign:"center"}},"User Form Registration"),r.a.createElement("p",{style:{textAlign:"right",margin:20,textDecoration:"underline"}},"Total Registered User:",r.a.createElement(g,{usercount:this.state.usercount})),r.a.createElement("div",{className:"form",id:"firstdiv"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",value:this.state.name,placeholder:"Enter your name",onChange:function(t){return e.setState({name:t.target.value})}}),r.a.createElement("label",null,"Age"),r.a.createElement("input",{type:"number",value:this.state.age,placeholder:"Enter your age",onChange:function(t){return e.setState({age:t.target.value})}}),r.a.createElement("label",null,"Gender"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"gender",value:"Male",onChange:function(t){return e.setState({gender:t.target.value})}}),"Male",r.a.createElement("input",{type:"radio",name:"gender",value:"Female",onChange:function(t){return e.setState({gender:t.target.value})}}),"Female",r.a.createElement("br",null),r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",value:this.state.email,placeholder:"Enter your mail id",onChange:function(t){return e.setState({email:t.target.value})}}),r.a.createElement("label",null,"Number"),r.a.createElement("input",{type:"number",value:this.state.number,placeholder:"Enter your mobile number",onChange:function(t){return e.setState({number:t.target.value})}}),r.a.createElement("div",{id:"btn"},r.a.createElement("input",{type:"submit",value:"Submit",onClick:function(){return e.validate()}}))),r.a.createElement("div",{id:"seconddiv"},r.a.createElement(b,{userdata:this.state.userform,usercount:this.state.usercount})))}}]),t}(r.a.Component)),g=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("b",null,this.props.usercount)}}]),t}(r.a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",{style:{textAlign:"center"}},"User List"),this.props.usercount>0?r.a.createElement("table",{style:{display:"inline-block"},id:"users"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"S No"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Gender"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Number"))),r.a.createElement("tbody",null,this.props.userdata.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.age),r.a.createElement("td",null,e.gender),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.number))})))):[])}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.a21fb4e6.chunk.js.map