(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{204:function(e,t,n){e.exports=n(358)},358:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(23),c=n.n(l),u=n(361),o=n(7),i=n(8),s=n(10),m=n(9),p=n(11),b=n(363),h=n(362),E=n(117),f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Home"))},g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About"),r.a.createElement("div",null,"\uc6b4\ub3d9\ube14\ub85c\uadf8, \uc720\ud29c\ube0c\ub97c \ubaa8\uc544\uc11c \ud3ec\uc2a4\ud305\uc774\ub098 \uc601\uc0c1\uc744 \ud55c\ub370 \ubaa8\uc73c\ub294 \uad6c\ub3c5\uc11c\ube44\uc2a4\ub97c \ub9cc\ub4e4 \uc608\uc815\uc785\ub2c8\ub2e4."))}}]),t}(a.Component),O=n(30),j=n.n(O),d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"BlogList"),r.a.createElement(x,{url:"blog"}))},v=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={url:"/blog/feed"},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"BlogPost"),r.a.createElement(I,{url:this.state.url}))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={url:"/youtube"},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"YoutubeList"),r.a.createElement(x,{url:this.state.url}))}}]),t}(a.Component),k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={url:"/youtube/feed"},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"YoutubePost"),r.a.createElement(I,{url:this.state.url}))}}]),t}(a.Component),w=n(31),C=n.n(w),A=n(51),F=n(6),T=n(25),S=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={people:[],completed:0},n.progress=function(){var e=n.state.completed;n.setState({completed:e>=100?0:e+1})},n.callApi=Object(A.a)(C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(n.props.url).then(function(e){var t=e.data;n.setState({people:t})});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)})),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.progress,20),this.callApi()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.people,a=t.completed;return r.a.createElement(F.b,{className:e.root},r.a.createElement("div",null,"state ",a),r.a.createElement(F.c,null,r.a.createElement(F.f,null,r.a.createElement(F.e,null,"NAME"),r.a.createElement(F.e,null,"DESCRIPTION"),r.a.createElement(F.e,null,"URL")),r.a.createElement(F.d,null,n?n.map(function(e){return r.a.createElement(F.g,null,r.a.createElement(F.e,{key:e.id},e.name),r.a.createElement(F.e,null,e.desc),r.a.createElement(F.e,null,r.a.createElement("a",{href:e.url},e.url)))}):r.a.createElement(F.g,null,r.a.createElement(F.e,{align:"center"},r.a.createElement(F.a,{className:e.progress,variant:"determinate",value:a}))))))}}]),t}(a.Component),x=Object(T.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},progress:{margin:2*e.spacing.unit}}})(S),B=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={feeds:[],completed:0},n.progress=function(){var e=n.state.completed;n.setState({completed:e>=100?0:e+1})},n.callApi=Object(A.a)(C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(n.props.url).then(function(e){var t=e.data.data.docs;n.setState({feeds:t})});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)})),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.progress,20),this.callApi()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.feeds,a=t.completed;return r.a.createElement(F.b,{className:e.root},r.a.createElement("div",null,"state ",a),r.a.createElement(F.c,null,r.a.createElement(F.f,null,r.a.createElement(F.e,null,"AUTHOR"),r.a.createElement(F.e,null,"TITLE"),r.a.createElement(F.e,null,"PUBDATE")),r.a.createElement(F.d,null,n?n.map(function(e){return r.a.createElement(F.g,null,r.a.createElement(F.e,{key:e.id},e.creator),r.a.createElement(F.e,null,r.a.createElement("a",{href:e.link},e.title),r.a.createElement("div",null,e.contentSnippet)),r.a.createElement(F.e,null,e.pubDate.replace("T"," ").replace(".000Z","")))}):r.a.createElement(F.g,null,r.a.createElement(F.e,{align:"center"},r.a.createElement(F.a,{className:e.progress,variant:"determinate",value:a}))))))}}]),t}(a.Component),I=Object(T.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},progress:{margin:2*e.spacing.unit}}})(B),P=[{path:"/",page:function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null))}}]),t}(a.Component)},{path:"/about",page:function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null))}}]),t}(a.Component)},{path:"/blog",page:function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null))}}]),t}(a.Component)},{path:"/blog/post",page:function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null))}}]),t}(a.Component)},{path:"/youtube",page:function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null))}}]),t}(a.Component)},{path:"/youtube/post",page:function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null))}}]),t}(a.Component)}],D=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.Helmet,null,r.a.createElement("title",null,"Training-log"),r.a.createElement("meta",{name:"description",content:"Trainging blog & youtube"})),r.a.createElement($,null),r.a.createElement(b.a,null,P.map(function(e){var t=e.path,n=e.page;return r.a.createElement(h.a,{exact:!0,path:t,component:n})})),r.a.createElement(_,null))}}]),t}(a.Component),N=n(122),Y=n(360),H=n(45),M=n.n(H),U=n(46),L=n.n(U),R=n(47),J=n.n(R),W=n(48),X=n.n(W),Z=n(49),q=n.n(Z),z=n(50),G=n.n(z),K=n(120),Q=n.n(K),V=[r.a.createElement(Y.a,{to:"/"},"Home"),r.a.createElement(Y.a,{to:"/about"},"About"),r.a.createElement(Y.a,{to:"/blog"},"Blog"),r.a.createElement(Y.a,{to:"/youtube"},"Youtube"),r.a.createElement(Y.a,{to:"/blog/post"},"BlogPost"),r.a.createElement(Y.a,{to:"/youtube/post"},"YoutubePost")],$=Object(T.withStyles)(function(e){return{root:{width:"100%"},title:{textAlign:"right"},progress:{margin:2*e.spacing.unit}}})(function(e){var t=e.classes,n=r.a.useState(null),a=Object(N.a)(n,2),l=a[0],c=a[1],u=Boolean(l);function o(){c(null)}return r.a.createElement("div",{className:t.root},r.a.createElement(M.a,{position:"static",color:"default"},r.a.createElement(L.a,null,r.a.createElement(J.a,{variant:"h6",color:"inherit"},r.a.createElement(X.a,{"aria-label":"More","aria-owns":u?"long-menu":void 0,"aria-haspopup":"true",onClick:function(e){c(e.currentTarget)}},r.a.createElement(Q.a,null)),r.a.createElement(q.a,{id:"long-menu",anchorEl:l,open:u,onClose:o,PaperProps:{style:{maxHeight:216,width:200}}},V.map(function(e){return r.a.createElement(G.a,{key:e,selected:null===e,onClick:o},e)}))))))}),_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null)," \xa9 ",(new Date).getFullYear(),", Built by ","",r.a.createElement("a",{href:"https://yangeok.github.io/"},"Yangeok"))}}]),t}(a.Component);n(359);c.a.render(r.a.createElement(u.a,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[204,1,2]]]);
//# sourceMappingURL=main.82f94c25.chunk.js.map