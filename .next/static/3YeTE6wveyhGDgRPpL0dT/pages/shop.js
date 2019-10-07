(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"8DS0":function(e,t,n){"use strict";var r=n("vpQ4"),a=n("wx14"),o=n("Ff2n"),c=n("1OyB"),i=n("vuIU"),s=n("md7G"),u=n("foSv"),l=n("Ji7U"),d=n("rePB"),m=n("q1tI"),p=n.n(m),f=n("TSYQ"),h=n.n(f),g=n("17x9"),b=n.n(g),y=n("FJL0"),j=n("9/s7"),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,n=e.theme,r=e.className,c=e.color,i=e.isInteractive,s=e.isSolid,u=Object(o.a)(e,["theme","className","color","isInteractive","isSolid"]),l=n.getBadgeProps({color:c,isSolid:s}),d=l.color,m=l.backgroundColor,f=i?"interactive":"default",g=h()(r,n.getBadgeClassName(f));return p.a.createElement(y.a,Object(a.a)({size:300},t.styles,{color:d,backgroundColor:m},u,{className:g}))}}]),t}(m.PureComponent);v.displayName="Badge",Object(d.a)(v,"propTypes",Object(r.a)({},y.a.propTypes,{color:b.a.string.isRequired,isInteractive:b.a.bool,theme:b.a.object.isRequired})),Object(d.a)(v,"defaultProps",{color:"neutral",isInteractive:!1,isSolid:!1}),Object(d.a)(v,"styles",{display:"inline-block",boxSizing:"border-box",height:16,paddingTop:0,paddingRight:6,paddingBottom:0,paddingLeft:6,borderRadius:2,textAlign:"center",textDecoration:"none",textTransform:"uppercase"}),t.a=Object(j.a)(v)},FJL0:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n("vpQ4"),a=n("wx14"),o=n("1OyB"),c=n("vuIU"),i=n("md7G"),s=n("foSv"),u=n("Ji7U"),l=n("rePB"),d=n("q1tI"),m=n.n(d),p=n("raqX"),f=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement(p.a,Object(a.a)({is:"strong",fontWeight:600},this.props))}}]),t}(d.PureComponent);f.displayName="Strong",Object(l.a)(f,"propTypes",Object(r.a)({},p.a.propTypes))},Xyu5:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Ar1z"),c=n("rt45"),i=n("4KRT"),s=n("lTCR"),u=n.n(s),l=n("eqHG"),d=n("obyI"),m=n("0iUn"),p=n("sLSF"),f=n("MI3g"),h=n("a7VT"),g=n("AT/M"),b=n("Tit0"),y=n("vYYK"),j=function(e){function t(){var e;return Object(m.default)(this,t),e=Object(f.default)(this,Object(h.default)(t).call(this)),Object(y.a)(Object(g.default)(e),"componentWillReceiveProps",function(t){e.URL.current.contentWindow.m.handleChangeEndpoint("".concat(d.b,"/").concat(t.accessToken,"/graphql"))}),e.state={renderElements:!0},e.URL=a.a.createRef(),e}return Object(b.default)(t,e),Object(p.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.shop,r=t.url;t.accessToken;return this.state.renderElements&&a.a.createElement("iframe",{src:"".concat(d.b,"/playgrounds"),title:"".concat(n," playground"),width:"100%",height:"1000px",id:"myId",className:"\ud83d\udce6b-btm-wdt_0 \ud83d\udce6b-lft-wdt_0 \ud83d\udce6b-rgt-wdt_0 \ud83d\udce6b-top-wdt_0",ref:this.URL,onLoad:function(){return e.URL.current.contentWindow.m.handleChangeEndpoint(r)}})}}]),t}(a.a.Component),v=n("doui"),O=n("9Jkg"),E=n.n(O),w=n("zgjP"),T=n.n(w),k=n("IZhw"),S=n("uu8G"),x=n("8DS0"),q=n("raqX"),R=n("4qaV");var C=function(e){var t=e.url,n=Object(r.useState)(""),c=Object(v.default)(n,2),i=c[0],s=c[1],u=Object(r.useState)(""),d=Object(v.default)(u,2),m=d[0],p=d[1],f=Object(r.useState)(!1),h=Object(v.default)(f,2),g=h[0],b=h[1];return a.a.createElement(o.a,{elevation:1,borderRadius:"5px",padding:15,background:"#fff"},a.a.createElement(l.a,{size:400,marginBottom:10},"Fetch Tracking"),a.a.createElement(o.a,{display:"flex",marginBottom:15},a.a.createElement(k.a,{onChange:function(e){return p(e.target.value)},value:m,height:24,className:"clean-input",backgroundColor:"#F5F6F7 !important",placeholder:"e.g. order number, customer email, name, address, etc."}),a.a.createElement(R.a,{intent:"success",height:24,fontSize:"13px",marginLeft:10,onClick:function(){return function(e,t,n,r){r(!0),n(""),T()(e,{method:"POST",headers:{"Content-Type":"application/json"},body:E()({query:'\n{\n  orders(\n    first: 1\n    query: "'.concat(t,'"\n  ) {\n    edges {\n      node {\n        fulfillments(first: 25) {\n          trackingInfo {\n            company\n            number\n            url\n          }\n        }\n      }\n    }\n  }\n}\n    ')})}).then(function(e){return e.json()}).then(function(e){e.data.orders.edges.length?n(e.data.orders.edges[0].node.fulfillments[0].trackingInfo[0]):n({error:"No orders found matching ".concat(t)}),r(!1)})}(t,m,s,b)}},"Get Tracking")),g&&a.a.createElement(S.a,{size:24}),i&&a.a.createElement(o.a,{display:"flex",alignItems:"center"},i.company&&a.a.createElement(x.a,{color:"blue",marginRight:8},i.company),a.a.createElement("a",{href:i.url,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(q.a,null,i.number)),i.error&&a.a.createElement(x.a,{color:"red",marginRight:8},i.error)))};function I(){var e=Object(c.a)(["\n  query($domain: String!) {\n    shop(domain: $domain) {\n      name\n      accessToken\n      settings\n      user {\n        id\n      }\n    }\n  }\n"]);return I=function(){return e},e}var P=u()(I());function L(e){var t=e.shop;return a.a.createElement(i.Query,{query:P,variables:{domain:t}},function(e){var n=e.data,r=e.error;if(e.loading)return a.a.createElement("p",null,"Loading...");if(!n)return a.a.createElement("h1",null,"This shop is not added to your account.");if(r||!n.shop)return a.a.createElement("h1",null,"Error loading shops: ",r);var c=n.shop,i=c.name,s=c.accessToken;return a.a.createElement(o.a,{width:"100%",marginBottom:"-2em",borderWidth:"0"},a.a.createElement(o.a,{paddingY:16,paddingX:"2rem"},a.a.createElement(o.a,{alignItems:"center",display:"flex",marginBottom:15},a.a.createElement(l.a,{size:700},i)),a.a.createElement(l.a,{size:500,marginBottom:15},"Apps"),a.a.createElement(o.a,{display:"flex"},a.a.createElement(C,{url:"".concat(d.b,"/").concat(s,"/graphql")})),a.a.createElement(l.a,{size:500,marginTop:25},"Playground")),a.a.createElement(j,{accessToken:s,shop:t,url:"".concat(d.b,"/").concat(s,"/graphql")}))})}t.default=function(e){var t=e.query;return a.a.createElement(o.a,{marginX:"-2em",height:"100%"},a.a.createElement(L,{shop:t.shop}))}},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var a=new XMLHttpRequest,o=[],c=[],i={},s=function(){return{ok:2==(a.status/100|0),statusText:a.statusText,status:a.status,url:a.responseURL,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(JSON.parse(a.responseText))},blob:function(){return Promise.resolve(new Blob([a.response]))},clone:s,headers:{keys:function(){return o},entries:function(){return c},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var u in a.open(t.method||"get",e,!0),a.onload=function(){a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){o.push(t=t.toLowerCase()),c.push([t,n]),i[t]=i[t]?i[t]+","+n:n}),n(s())},a.onerror=r,a.withCredentials="include"==t.credentials,t.headers)a.setRequestHeader(u,t.headers[u]);a.send(t.body||null)})}},o96S:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop",function(){var e=n("Xyu5");return{page:e.default||e}}])},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["o96S",1,0]]]);