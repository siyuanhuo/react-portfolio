(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":1,"name":"Code Quiz","image":"./image/code_quiz.png","link":"https://github.com/siyuanhuo/codequiz.git","discription":"Take a quiz!"},{"id":2,"name":"Password Generator","image":"./image/psw_generator.png","link":"https://github.com/siyuanhuo/pswgenerator.git","discription":"Allow user to generate a secure password"},{"id":3,"name":"Weather Dashboard","image":"./image/weather_dashboard.png","link":"https://github.com/siyuanhuo/weatherdashbord.git","discription":"Need a weather forcast? No Problem?"},{"id":4,"name":"Event Notifier","image":"./image/notifier.png","link":"https://github.com/cycy6/Event-notification.git","discription":"Time to take the pill!"},{"id":5,"name":"Workday Scheduler","image":"./image/workday_scheduler.png","link":"https://github.com/siyuanhuo/workdayscheduler.git","discription":"Have a plan today?"}]')},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),s=t(18),i=t.n(s),r=(t(27),t(21)),l=t(2),o=(t(28),t(29),t(0));var d=function(){return Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsxs)("article",{className:"col-9",children:[Object(o.jsx)("h1",{children:"About Me"}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:"https://echeck.org/wp-content/uploads/2017/02/Dog-in-a-Suit.jpg",alt:"dog-with-suit",style:{float:"left",width:"300px",margin:"10px 10px"}}),Object(o.jsx)("p",{children:"My name is Siyuan Huo, or you can call me George. After earning my Batchelor of Science degree in Computer Science in 2020, I entered the IT world to explore my passion for developing and researching."}),Object(o.jsx)("p",{children:"As a graduate from University of Toronto with a B.Sc. degree in Computer Science and Mathematics, my academic experience in software development life cycle (SDLC), Algorithm Design have given me a solid base upon which I plan to build my career."})]})})},m=t(9),h=t(10),j=t(12),b=t(11),u=(t(31),t(19)),p=function(e){Object(j.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={projectList:u},e}return Object(h.a)(t,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"row justify-content-center",children:this.state.projectList.map((function(e){return Object(o.jsx)("div",{className:"col-4",children:Object(o.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(o.jsx)("img",{src:e.image,className:"card-img-top",alt:e.name}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:e.name}),Object(o.jsx)("p",{className:"card-text",children:e.discription}),Object(o.jsx)("a",{href:e.link,className:"btn btn-dark",children:"Go to repo"})]})]})},e.id)}))})}}]),t}(n.Component),g=t(20),x=(t(32),function(e){Object(j.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={name:"",email:"",message:""},e.handleSubmit=function(a){a.preventDefault();var t=e.state,n=t.name,c=t.email,s=t.message;""===n?alert("You need to enter your name"):""===c?alert("You need to enter your email"):""===s?alert("Please leave a message"):alert("Dear ".concat(e.state.name,":\nYour message has been sent")),e.setState({name:"",email:"",message:""})},e.handleInputChange=function(a){var t=a.target,n=t.name,c=t.value;e.setState(Object(g.a)({},n,c))},e}return Object(h.a)(t,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsxs)("div",{className:"col-7",children:[Object(o.jsx)("h1",{children:"Contact"}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"nameInput",className:"form-label",children:"Name"}),Object(o.jsx)("input",{value:this.state.name,onChange:this.handleInputChange,type:"email",className:"form-control",id:"nameInput",name:"name"})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"emailInput",className:"form-label",children:"Email"}),Object(o.jsx)("input",{value:this.state.email,onChange:this.handleInputChange,type:"email",className:"form-control",id:"emailInput",name:"email"})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"messageInput",className:"form-label",children:"Message"}),Object(o.jsx)("textarea",{onChange:this.handleInputChange,className:"form-control",id:"messageInput",name:"message",rows:"3"})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-dark mb-3",onClick:this.handleSubmit,children:"Submit"})]})})}}]),t}(n.Component));var O=function(){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:"SiyuanHuo"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(o.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#contact",children:"Contact"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#portfolio",children:"Portfolio"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"About"})})]})})]})})};t(33);var v=function(){return Object(o.jsx)("footer",{className:"footer mt-auto py-3 bg-dark",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)("div",{className:"col-1",children:Object(o.jsx)("a",{href:"https://github.com/siyuanhuo",children:"GitHub"})}),Object(o.jsx)("div",{className:"col-1",children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/siyuanhuo/",children:"LikedIn"})}),Object(o.jsx)("div",{className:"col-1",children:Object(o.jsx)("a",{href:"./resume.docx",download:!0,children:"Resume"})})]})})})};var f=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(O,{}),Object(o.jsx)("div",{className:"container-lg",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",children:Object(o.jsx)(d,{})}),Object(o.jsx)(l.a,{path:"/portfolio",children:Object(o.jsx)(p,{})}),Object(o.jsx)(l.a,{path:"/contact",children:Object(o.jsx)(x,{})})]})}),Object(o.jsx)(v,{})]})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),N()}},[[39,1,2]]]);
//# sourceMappingURL=main.769f120a.chunk.js.map