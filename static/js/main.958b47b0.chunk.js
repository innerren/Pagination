(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},28:function(e,t,a){e.exports=a(39)},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c);a(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(5),s=a(15),i=a(7),u=a.n(i),p=a(11),m=a(10),g=a(21),h=a(22),E=a(26),f=a(23),b=a(27),P=(a(18),a(6)),d=function(){var e=Object(m.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(t)).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),v=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement(o.b,{className:"HeadButton",to:"/"},"\u0414\u043e\u043c\u043e\u0439"),r.a.createElement(o.b,{className:"HeadButton",to:"/Bash/perPage=5&page=1"},"\u0427\u0438\u0442\u0430\u0442\u044c \u0448\u0443\u0442\u043a\u0438 \u044e\u043c\u043e\u0440\u0430"),r.a.createElement(o.b,{className:"HeadButton",to:"/Zadolbali/perPage=2&page=1"},"\u0412\u0441\u0435 \u0437\u0430\u0434\u043e\u043b\u0431\u0430\u043b\u0438 :("))},k=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"This is Homepage"))},w=Object(P.f)(function(e){var t=e.perPage,a=e.history;return r.a.createElement("div",null,r.a.createElement("select",{value:t,onChange:function(e){e.preventDefault();var t=e.target.value;console.log(t),console.log(a),a.push("./perPage=".concat(t,"&page=1"))}},r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"15"},"15")))}),x=function(e){var t=e.linkElement,a=e.currentPage,n=e.perPage,c=e.toPage,l=e.linkText;return+t&&+t!==+a?r.a.createElement(o.b,{className:"button",to:"./perPage=".concat(n,"&page=").concat(c)},l):+t!==+a||+t!==+c?r.a.createElement("span",{className:"fictiveLink button"},l):r.a.createElement("span",{className:"activeLink button"},l)},D=function(e){var t=e.page,a=e.perPage,n=e.totalPages;return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(x,{linkElement:1,currentPage:t,perPage:a,toPage:t-1,linkText:"Prev"}),function(e,t,a){if(a<7){for(var n=[],c=1;c<a+1;c++)n.push(c);return n.map(function(a){return r.a.createElement(x,{linkElement:a,currentPage:e,perPage:t,toPage:a,linkText:a})})}if(e<4){for(var l=[],o=1;o<5;o++)l.push(o);return l.push("..","..",a),l.map(function(a){return r.a.createElement(x,{linkElement:a,currentPage:e,perPage:t,toPage:a,linkText:a})})}if(e>a-3){for(var s=[1,"..",".."],i=a-3;i<a+1;i++)s.push(i);return s.map(function(a){return r.a.createElement(x,{linkElement:a,currentPage:e,perPage:t,toPage:a,linkText:a})})}return[1,"..",e-1,e,+e+1,"..",a].map(function(a){return r.a.createElement(x,{linkElement:a,currentPage:e,perPage:t,toPage:a,linkText:a})})}(t,a,n),r.a.createElement(x,{linkElement:n,currentPage:t,perPage:a,toPage:+t+1,linkText:"Next"})))},j=function(e){var t=e.props,a=e.posts,n=t.match.params,c=n.page,l=n.perPage,o=a.slice(l*(c-1),l*c),s=Math.ceil(a.length/l);return a.length?r.a.createElement("div",{className:"App"},r.a.createElement(D,{page:c,perPage:l,totalPages:s}),o.map(function(e){return r.a.createElement("div",{className:"post",dangerouslySetInnerHTML:{__html:e.elementPureHtml}})}),r.a.createElement(D,{page:c,perPage:l,totalPages:s}),r.a.createElement(w,{perPage:l})):r.a.createElement("div",{className:"loader"})},N="https://umorili.herokuapp.com/api/get?site=bash.im&name=bash",O="https://umorili.herokuapp.com/api/get?site=bash.im&name=abyss",B="https://umorili.herokuapp.com/api/get?site=zadolba.li&name=zadolbali",T=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(E.a)(this,Object(f.a)(t).call(this,e))).setBashDate=Object(m.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.state.bashDate.length){e.next=16;break}return e.t0=[],e.t1=p.a,e.next=5,d(N);case 5:return e.t2=e.sent,e.t3=(0,e.t1)(e.t2),e.t4=p.a,e.next=10,d(O);case 10:e.t5=e.sent,e.t6=(0,e.t4)(e.t5),t=e.t0.concat.call(e.t0,e.t3,e.t6),n=t.slice(1),console.log("Init Bash"),a.setState({bashDate:n});case 16:case"end":return e.stop()}},e)})),a.setZadolbaliDate=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.state.zadolbaliDate.length){e.next=8;break}return e.t0=p.a,e.next=4,d(B);case 4:e.t1=e.sent,t=(0,e.t0)(e.t1),console.log("Init Zadolbali ".concat(t.length)),a.setState({zadolbaliDate:t});case 8:case"end":return e.stop()}},e)})),a.state={bashDate:[],zadolbaliDate:[]},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(v,{perPage:this.state.perPage}),r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,path:"/",component:k}),r.a.createElement(P.a,{path:"/Bash/perPage=:perPage&page=:page",component:function(t){return e.setBashDate(),r.a.createElement(j,{props:Object(s.a)({},t),posts:e.state.bashDate})}}),r.a.createElement(P.a,{path:"/Zadolbali/perPage=:perPage&page=:page",component:function(t){return e.setZadolbaliDate(),r.a.createElement(j,{props:Object(s.a)({},t),posts:e.state.zadolbaliDate})}})))}}]),t}(r.a.Component);l.a.render(r.a.createElement(o.a,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.958b47b0.chunk.js.map