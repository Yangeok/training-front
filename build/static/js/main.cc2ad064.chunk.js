(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(e,t,n){e.exports=n(343)},343:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(24),c=n.n(r),o=n(16),u=n(17),i=n(19),s=n(18),m=n(20),p=n(347),b=n(346),h=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Home"))},E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"About"),l.a.createElement("div",null,"\uc6b4\ub3d9\ube14\ub85c\uadf8, \uc720\ud29c\ube0c\ub97c \ubaa8\uc544\uc11c \ud3ec\uc2a4\ud305\uc774\ub098 \uc601\uc0c1\uc744 \ud55c\ub370 \ubaa8\uc73c\ub294 \uad6c\ub3c5\uc11c\ube44\uc2a4\ub97c \ub9cc\ub4e4 \uc608\uc815\uc785\ub2c8\ub2e4."))}}]),t}(a.Component),f=n(30),d=n(49),g=n.n(d),O=[{path:"/",page:h},{path:"/about",page:E},{path:"/blog",page:function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){g.a.get("blog").then(function(e){r(e.data.parseYaml.parseBlog)})},[]),l.a.createElement("div",null,l.a.createElement("h1",null,"BlogList"),l.a.createElement(U,{people:n}))}},{path:"/blog/post",page:function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"BlogPost"))}}]),t}(a.Component)},{path:"/youtube",page:function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={people:[],completed:0},n.progress=function(){var e=n.state.completed;n.setState({completed:e>=100?0:e+1})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(this.progress(),20),g.a.get("/youtube").then(function(t){var n=t.data.parseYaml.parseYoutube;e.setState({people:n})})}},{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",null,l.a.createElement("h1",null,"YoutubeList"),l.a.createElement(U,{people:this.state.people,progress:e,completed:this.state.completed}))}}]),t}(a.Component)},{path:"/youtube/post",page:function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"YoutubePost"))}}]),t}(a.Component)},{path:"/test",page:function(){var e=Object(a.useState)(42),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){document.title="You clicked ".concat(n," times")}),l.a.createElement("div",null,l.a.createElement("p",null,"You clicked ",n," times"),l.a.createElement("button",{onClick:function(){return r(n+1)}},"Click me"))}}],j=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,null),l.a.createElement(p.a,null,O.map(function(e){var t=e.path,n=e.page;return l.a.createElement(b.a,{exact:!0,path:t,component:n})})),l.a.createElement(F,null))}}]),t}(a.Component),v=n(344),y=n(43),k=n.n(y),w=n(44),C=n.n(w),Y=n(45),S=n.n(Y),B=n(25),P=n(46),A=n.n(P),I=n(47),N=n.n(I),x=n(48),D=n.n(x),M=n(116),T=n.n(M),H=[l.a.createElement(v.a,{to:"/"},"Home"),l.a.createElement(v.a,{to:"/about"},"About"),l.a.createElement(v.a,{to:"/blog"},"Blog"),l.a.createElement(v.a,{to:"/youtube"},"Youtube"),l.a.createElement(v.a,{to:"/blog/post"},"BlogPost"),l.a.createElement(v.a,{to:"/youtube/post"},"YoutubePost"),l.a.createElement(v.a,{to:"/test"},"Test")],L=Object(B.withStyles)(function(e){return{root:{width:"100%"},title:{textAlign:"right"}}})(function(e){var t=e.classes,n=l.a.useState(null),a=Object(f.a)(n,2),r=a[0],c=a[1],o=Boolean(r);function u(){c(null)}return l.a.createElement("div",{className:t.root},l.a.createElement(k.a,{position:"static",color:"default"},l.a.createElement(C.a,null,l.a.createElement(S.a,{variant:"h6",color:"inherit"},l.a.createElement(A.a,{"aria-label":"More","aria-owns":o?"long-menu":void 0,"aria-haspopup":"true",onClick:function(e){c(e.currentTarget)}},l.a.createElement(T.a,null)),l.a.createElement(N.a,{id:"long-menu",anchorEl:r,open:o,onClose:u,PaperProps:{style:{maxHeight:216,width:200}}},H.map(function(e){return l.a.createElement(D.a,{key:e,selected:null===e,onClick:u},e)}))))))}),F=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null)," \xa9 ",(new Date).getFullYear(),", Built by ","",l.a.createElement("a",{href:"https://yangeok.github.io/"},"Yangeok"))}}]),t}(a.Component),J=n(21),R=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={completed:0},n.progress=function(){var e=n.state.completed;n.setState({completed:e>=100?0:e+1})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.progress,20)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.people,n=e.classes;return l.a.createElement("div",{className:n.root},l.a.createElement(J.b,null,l.a.createElement(J.e,null,l.a.createElement(J.d,null,"NAME"),l.a.createElement(J.d,null,"DESCRIPTION"),l.a.createElement(J.d,null,"URL")),l.a.createElement(J.c,null,t?t.map(function(e){return l.a.createElement(J.f,null,l.a.createElement(J.d,{key:e.id},e.name),l.a.createElement(J.d,null,e.desc),l.a.createElement(J.d,null,l.a.createElement("a",{href:e.url},e.url)))}):l.a.createElement(J.f,null,l.a.createElement(J.d,null,l.a.createElement(J.a,{className:n.progress}))))))}}]),t}(a.Component),U=Object(B.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},progress:{margin:2*e.spacing.unit}}})(R),W=n(345);c.a.render(l.a.createElement(W.a,null,l.a.createElement(j,null)),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.cc2ad064.chunk.js.map