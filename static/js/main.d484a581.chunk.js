(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){},28:function(e,t,a){e.exports=a(39)},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c);a(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(4),s=a(11),i=a(12),u=a(14),p=a(13),m=a(15),g=a(6),h=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),f=Object(g.f)(h),E=a(20),b=a(7),P=a.n(b),d=a(16),v=a(10),k=(a(24),function(){var e=Object(v.a)(P.a.mark(function e(t){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(t)).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),w=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement(o.b,{className:"HeadButton",to:"/"},"\u0414\u043e\u043c\u043e\u0439"),r.a.createElement(o.b,{className:"HeadButton",to:"/Bash/perPage=5&page=1"},"\u0427\u0438\u0442\u0430\u0442\u044c \u0448\u0443\u0442\u043a\u0438 \u044e\u043c\u043e\u0440\u0430"),r.a.createElement(o.b,{className:"HeadButton",to:"/Zadolbali/perPage=2&page=1"},"\u0412\u0441\u0435 \u0437\u0430\u0434\u043e\u043b\u0431\u0430\u043b\u0438 :("))},j=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"This is Homepage"))},x=Object(g.f)(function(e){var t=e.page,a=e.perPage,n=e.totalPosts,c=e.history;return r.a.createElement("div",{className:"postsInfo"},r.a.createElement("div",null,"\u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0441 ",Math.ceil(a*(t-1)+1)," \u043f\u043e"," ",Math.min(Math.ceil(a*t),n)," \u0438\u0437 ",n," "),r.a.createElement("div",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u043e:"," ",r.a.createElement("select",{value:a,onChange:function(e){e.preventDefault();var t=e.target.value;c.push("./perPage=".concat(t,"&page=1"))}},r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"15"},"15"))," ","\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"))}),O=function(e){var t=e.linkElement,a=e.currentPage,n=e.perPage,c=e.toPage,l=e.linkText;return+t&&+t!==+a?r.a.createElement(o.b,{className:"button",to:"./perPage=".concat(n,"&page=").concat(c)},l):+t!==+a||+t!==+c?r.a.createElement("span",{className:"fictiveLink button"},l):r.a.createElement("span",{className:"activeLink button"},l)},D=function(e){var t=e.page,a=e.perPage,n=e.totalPages;return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(O,{linkElement:1,currentPage:t,perPage:a,toPage:t-1,linkText:"Prev"}),function(e,t,a){if(a<7){for(var n=[],c=1;c<a+1;c++)n.push(c);return n.map(function(a){return r.a.createElement(O,{linkElement:a,currentPage:e,perPage:t,toPage:a,linkText:a})})}if(e<4){for(var l=[],o=1;o<5;o++)l.push(o);return l.push("..","..",a),l.map(function(a){return r.a.createElement(O,{linkElement:a,currentPage:e,perPage:t,toPage:a,linkText:a})})}if(e>a-3){for(var s=[1,"..",".."],i=a-3;i<a+1;i++)s.push(i);return s.map(function(a){return r.a.createElement(O,{linkElement:a,currentPage:e,perPage:t,toPage:a,linkText:a})})}return[1,"..",e-1,e,+e+1,"..",a].map(function(a){return r.a.createElement(O,{linkElement:a,currentPage:e,perPage:t,toPage:a,linkText:a})})}(t,a,n),r.a.createElement(O,{linkElement:n,currentPage:t,perPage:a,toPage:+t+1,linkText:"Next"})))},N=function(e){var t=e.props,a=e.posts,n=t.match.params,c=n.page,l=n.perPage,o=a.slice(l*(c-1),l*c),s=Math.ceil(a.length/l);return a.length?r.a.createElement("div",{className:"App"},r.a.createElement(D,{page:c,perPage:l,totalPages:s}),r.a.createElement(x,{page:c,perPage:l,totalPosts:a.length}),o.map(function(e){return r.a.createElement("div",{className:"post",dangerouslySetInnerHTML:{__html:e.elementPureHtml}})}),r.a.createElement(x,{page:c,perPage:l,totalPosts:a.length}),r.a.createElement(D,{page:c,perPage:l,totalPages:s})):r.a.createElement("div",{className:"loader"})},B="https://umorili.herokuapp.com/api/get?site=bash.im&name=bash",T="https://umorili.herokuapp.com/api/get?site=bash.im&name=abyss",y="https://umorili.herokuapp.com/api/get?site=zadolba.li&name=zadolbali",z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).setBashDate=Object(v.a)(P.a.mark(function e(){var t,n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.state.bashDate.length){e.next=16;break}return e.t0=[],e.t1=d.a,e.next=5,k(B);case 5:return e.t2=e.sent,e.t3=(0,e.t1)(e.t2),e.t4=d.a,e.next=10,k(T);case 10:e.t5=e.sent,e.t6=(0,e.t4)(e.t5),t=e.t0.concat.call(e.t0,e.t3,e.t6),n=t.slice(1),console.log("Init Bash"),a.setState({bashDate:n});case 16:case"end":return e.stop()}},e)})),a.setZadolbaliDate=Object(v.a)(P.a.mark(function e(){var t;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.state.zadolbaliDate.length){e.next=8;break}return e.t0=d.a,e.next=4,k(y);case 4:e.t1=e.sent,t=(0,e.t0)(e.t1),console.log("Init Zadolbali ".concat(t.length)),a.setState({zadolbaliDate:t});case 8:case"end":return e.stop()}},e)})),a.state={bashDate:[],zadolbaliDate:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(w,{perPage:this.state.perPage}),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:j}),r.a.createElement(g.a,{path:"/Bash/perPage=:perPage&page=:page",component:function(t){return e.setBashDate(),r.a.createElement(N,{props:Object(E.a)({},t),posts:e.state.bashDate})}}),r.a.createElement(g.a,{path:"/Zadolbali/perPage=:perPage&page=:page",component:function(t){return e.setZadolbaliDate(),r.a.createElement(N,{props:Object(E.a)({},t),posts:e.state.zadolbaliDate})}})))}}]),t}(r.a.Component);l.a.render(r.a.createElement(o.a,null,r.a.createElement(f,null,r.a.createElement(z,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.d484a581.chunk.js.map