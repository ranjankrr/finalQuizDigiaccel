(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(9),a=c.n(s),r=(c(73),c(42)),i=c.n(r),o=c(55),l=c(14),u=c(56),j=c.n(u),d=c(61),b=c(8),h=(c(93),c(141)),O=c(142),m=c(139),v=c(4),f=function(e){var t=e.children;return Object(v.jsx)("div",{style:{width:"100%",padding:10,marginBottom:10,borderRadius:4,backgroundColor:"orangered",textAlign:"center",color:"white",textTransform:"capitalize"},children:t})},x=[{category:"General Knowledge",value:9},{category:"Science and Nature",value:17},{category:"Computer",value:18},{category:"Mathematics",value:19}],p=(c(95),function(e){var t=e.name,c=e.setName,s=e.fetchQuestions,a=Object(n.useState)(""),r=Object(l.a)(a,2),i=r[0],o=r[1],u=Object(n.useState)(""),j=Object(l.a)(u,2),d=j[0],p=j[1],g=Object(n.useState)(!1),y=Object(l.a)(g,2),S=y[0],N=y[1],Q=Object(b.f)();return Object(v.jsx)("div",{className:"content",children:Object(v.jsxs)("div",{className:"settings",children:[Object(v.jsx)("span",{style:{fontSize:30},children:"Let's Start"}),Object(v.jsxs)("div",{className:"settings__select",children:[S&&Object(v.jsx)(f,{children:"Please Fill all the feilds"}),Object(v.jsx)(h.a,{style:{marginBottom:25},label:"Enter Your Name",variant:"outlined",onChange:function(e){return c(e.target.value)}}),Object(v.jsx)(h.a,{select:!0,label:"Select Topics",value:i,onChange:function(e){return o(e.target.value)},variant:"outlined",style:{marginBottom:30},children:x.map((function(e){return Object(v.jsx)(O.a,{value:e.value,children:e.category},e.category)}))}),Object(v.jsxs)(h.a,{select:!0,label:"Select Difficulty",value:d,onChange:function(e){return p(e.target.value)},variant:"outlined",style:{marginBottom:30},children:[Object(v.jsx)(O.a,{value:"easy",children:"Easy"},"Easy"),Object(v.jsx)(O.a,{value:"medium",children:"Medium"},"Medium"),Object(v.jsx)(O.a,{value:"hard",children:"Hard"},"Hard")]}),Object(v.jsx)(m.a,{variant:"contained",color:"primary",size:"large",onClick:function(){i&&d&&t?(N(!1),s(i,d),Q.push("/quiz")):N(!0)},children:"Start"})]})]})})}),g=c(62),y=c(140),S=(c(105),function(e){var t=e.currQues,c=e.setCurrQues,s=e.questions,a=e.options,r=e.correct,i=e.setScore,o=e.score,u=e.setQuestions,j=Object(n.useState)(),d=Object(l.a)(j,2),h=d[0],O=d[1],x=Object(n.useState)(!1),p=Object(l.a)(x,2),g=p[0],y=p[1],S=Object(b.f)(),N=function(e){return h===e&&h===r?"select":h===e&&h!==r?"wrong":e===r?"select":void 0};return Object(v.jsxs)("div",{className:"question",children:[Object(v.jsxs)("h1",{children:["Question ",t+1," :"]}),Object(v.jsxs)("div",{className:"singleQuestion",children:[Object(v.jsx)("h2",{children:s[t].question}),Object(v.jsxs)("div",{className:"options",children:[g&&Object(v.jsx)(f,{children:g}),a&&a.map((function(e){return Object(v.jsx)("button",{className:"singleOption  ".concat(h&&N(e)),onClick:function(){return function(e){O(e),e===r&&i(o+1),y(!1)}(e)},disabled:h,children:e},e)}))]}),Object(v.jsxs)("div",{className:"controls",children:[Object(v.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",style:{width:185},href:"/",onClick:function(){return c(0),void u()},children:"Quit"}),Object(v.jsx)(m.a,{variant:"contained",color:"primary",size:"large",style:{width:185},onClick:function(){t>8?S.push("/result"):h?(c(t+1),O()):y("Please select an option first")},children:t>20?"Submit":"Next Question"})]})]})]})}),N=(c(106),function(e){var t,c=e.name,s=e.questions,a=e.score,r=e.setScore,i=e.setQuestions,o=Object(n.useState)(),u=Object(l.a)(o,2),j=u[0],d=u[1],b=Object(n.useState)(0),h=Object(l.a)(b,2),O=h[0],m=h[1];Object(n.useEffect)((function(){var e,t;d(s&&f([null===(e=s[O])||void 0===e?void 0:e.correct_answer].concat(Object(g.a)(null===(t=s[O])||void 0===t?void 0:t.incorrect_answers))))}),[O,s]),console.log(s);var f=function(e){return e.sort((function(){return Math.random()-.5}))};return Object(v.jsxs)("div",{className:"quiz",children:[Object(v.jsxs)("span",{className:"subtitle",children:["Welcome, ",c]}),s?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"quizInfo",children:[Object(v.jsx)("span",{children:s[O].category}),Object(v.jsxs)("span",{children:["Score : ",a]})]}),Object(v.jsx)(S,{currQues:O,setCurrQues:m,questions:s,options:j,correct:null===(t=s[O])||void 0===t?void 0:t.correct_answer,score:a,setScore:r,setQuestions:i})]}):Object(v.jsx)(y.a,{style:{margin:100},color:"inherit",size:150,thickness:1})]})}),Q=(c(107),function(e){var t=e.name,c=e.score,s=Object(b.f)();return Object(n.useEffect)((function(){t||s.push("/")}),[t,s]),Object(v.jsxs)("div",{className:"result",children:[Object(v.jsxs)("span",{className:"title",children:["Final Score : ",c]}),Object(v.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",style:{alignSelf:"center",marginTop:20},href:"/",children:"Go to homepage"})]})});var w=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(),r=Object(l.a)(a,2),u=r[0],h=r[1],O=Object(n.useState)(0),m=Object(l.a)(O,2),f=m[0],x=m[1],g=function(){var e=Object(o.a)(i.a.mark((function e(){var t,c,n,a,r=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",c=r.length>1&&void 0!==r[1]?r[1]:"",e.next=4,j.a.get("https://opentdb.com/api.php?amount=10".concat(t&&"&category=".concat(t)).concat(c&&"&difficulty=".concat(c),"&type=multiple"));case 4:n=e.sent,a=n.data,s(a.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)(d.a,{children:Object(v.jsx)("div",{className:"app",children:Object(v.jsxs)(b.c,{children:[Object(v.jsx)(b.a,{path:"/",exact:!0,children:Object(v.jsx)(p,{name:u,setName:h,fetchQuestions:g})}),Object(v.jsx)(b.a,{path:"/quiz",children:Object(v.jsx)(N,{name:u,questions:c,score:f,setScore:x,setQuestions:s})}),Object(v.jsx)(b.a,{path:"/result",children:Object(v.jsx)(Q,{name:u,score:f})})]})})})};a.a.render(Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(w,{})}),document.getElementById("root"))},73:function(e,t,c){},93:function(e,t,c){},95:function(e,t,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.8928ea7a.chunk.js.map