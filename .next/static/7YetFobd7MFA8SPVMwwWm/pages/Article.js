(window.webpackJsonp=window.webpackJsonp||[]).push([["68ff"],{"53eK":function(e,t,a){"use strict";var n=a("0iUn"),r=a("sLSF"),c=a("MI3g"),s=a("a7VT"),l=a("AT/M"),i=a("Tit0"),o=a("vYYK"),u=a("q1tI"),d=a.n(u),m=a("TSYQ"),f=a.n(m),p=a("t3zA"),b=a.n(p),h={EXACT:"exact",FIT:"fit",COVER:"cover"},y=function(e){function t(e){var a;return Object(n.default)(this,t),a=Object(c.default)(this,Object(s.default)(t).call(this,e)),Object(o.a)(Object(l.default)(a),"handleImageLoad",function(){a.setState({loaded:!0})}),a.state={loaded:!1,src:a.props.src},a}return Object(i.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,n=e.alt,r=e.aspect_ratio,c=e.fill_mode,s=e.forwarded_ref,l=this.state,i=l.src,o=l.loaded,u=r?{height:0,paddingBottom:"".concat(1/r*100,"%")}:void 0;return d.a.createElement("div",{className:t,style:a,ref:s},d.a.createElement("div",{className:b.a["size-container"]},d.a.createElement("div",{className:f()(b.a["image-container"],b.a.placeholder,r&&b.a["lock-ratio"],o&&b.a.loaded),style:u},i&&d.a.createElement("img",{key:i,className:f()(b.a.image,b.a[c]),src:i,alt:n,title:n,onLoad:this.handleImageLoad}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.src!==t.src?{src:e.src,loaded:!1}:null}}]),t}(u.PureComponent);Object(o.a)(y,"defaultProps",{fill_mode:h.EXACT}),Object(o.a)(y,"FillMode",h);var O=y;a.d(t,"a",function(){return O})},Hl0e:function(e,t,a){"use strict";var n=a("0iUn"),r=a("sLSF"),c=a("MI3g"),s=a("a7VT"),l=a("AT/M"),i=a("Tit0"),o=a("vYYK"),u=a("q1tI"),d=a.n(u),m=a("TSYQ"),f=a.n(m),p=a("53eK"),b=a("MPzT"),h=a.n(b),y=function(e){function t(){var e,a;Object(n.default)(this,t);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return a=Object(c.default)(this,(e=Object(s.default)(t)).call.apply(e,[this].concat(i))),Object(o.a)(Object(l.default)(a),"renderSubHeader",function(e){return d.a.createElement("h3",{className:h()("subheader")},e.text)}),Object(o.a)(Object(l.default)(a),"renderParagraph",function(e){return d.a.createElement("p",{className:h()("paragraph")},e.text)}),Object(o.a)(Object(l.default)(a),"renderList",function(e){return d.a.createElement("ul",{className:h()("list",e.list_type)},e.items&&e.items.map(a.renderListItem))}),Object(o.a)(Object(l.default)(a),"renderListItem",function(e,t){return d.a.createElement("li",{key:"".concat(e.text,"-").concat(t)},e.url?d.a.createElement("a",{href:e.url},e.text):e.text)}),Object(o.a)(Object(l.default)(a),"renderImage",function(e){var t=e.size,a=e.alignment,n=h()("image-container","".concat(t),"".concat(a));return d.a.createElement("div",{className:h()(n)},d.a.createElement(p.a,{style:{width:"100%"},fill_mode:p.a.FillMode.COVER,src:e.src,alt:e.caption}))}),Object(o.a)(Object(l.default)(a),"renderItems",function(e,t){switch(e.type){case"paragraph":return d.a.createElement("div",{key:"".concat(e.type,"-").concat(t)},a.renderParagraph(e.content));case"subheader":return d.a.createElement("div",{key:"".concat(e.type,"-").concat(t)},a.renderSubHeader(e.content));case"list":return d.a.createElement("div",{key:"".concat(e.type,"-").concat(t)},a.renderList(e.content));case"image":return d.a.createElement("div",{key:"".concat(e.type,"-").concat(t)},a.renderImage(e.content));default:return d.a.createElement("div",null)}}),a}return Object(i.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.items;return d.a.createElement("div",{className:f()(h()("container"),t)},a.map(this.renderItems))}}]),t}(u.PureComponent);a.d(t,"a",function(){return y})},OQ1I:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Article",function(){var e=a("bzpj");return{page:e.default||e}}])},bzpj:function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),r=a.n(n),c=(a("ls82"),a("O40h")),s=a("0iUn"),l=a("sLSF"),i=a("MI3g"),o=a("a7VT"),u=a("Tit0"),d=a("vYYK"),m=a("q1tI"),f=a.n(m),p=(a("/MKj"),a("nOHt")),b=(a("x91w"),a("zgjP")),h=a.n(b),y=a("QyV/"),O=(a("Q00c"),a("okHz")),j=(a("eOmP"),a("f3/d"),a("AT/M")),v=a("TSYQ"),g=a.n(v),E=a("53eK"),w=a("LpD0"),N=a.n(w),k=function(e){function t(){var e,a;Object(s.default)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=Object(i.default)(this,(e=Object(o.default)(t)).call.apply(e,[this].concat(r))),Object(d.a)(Object(j.default)(a),"renderByline",function(e){return f.a.createElement("span",{className:N()("byline")},e.image&&e.url?f.a.createElement("a",{href:e.url},f.a.createElement("div",{className:N()("image"),style:{backgroundImage:"url(".concat(e.image,")")}})):f.a.createElement("div",{className:N()("image"),style:{backgroundImage:"url(".concat(e.image,")")}}),f.a.createElement("span",{className:N()("name")},e.url?f.a.createElement("a",{href:e.url},e.name):e.name))}),Object(d.a)(Object(j.default)(a),"renderPrimaryAsset",function(e){e.type;var t=e.content;switch(e.type){case"image":return f.a.createElement(E.a,{style:{width:"100%"},fill_mode:E.a.FillMode.COVER,src:t.src,alt:t.caption,aspect_ratio:16/9});default:return f.a.createElement("div",null)}}),a}return Object(u.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.title,n=e.byline,r=e.primary_asset;return console.log(r,"byline"),f.a.createElement("div",{className:g()(N()("container"),t)},a&&f.a.createElement("h1",{className:N()("title")},a),n&&this.renderByline(n),r&&f.a.createElement("div",{className:N()("primary-asset")},this.renderPrimaryAsset(r)))}}]),t}(m.PureComponent),T=a("Hl0e"),P=a("1sYE"),I=a.n(P),x=function(e){function t(){return Object(s.default)(this,t),Object(i.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.router,a=e.article,n=a.header,r=a.body;return console.log("article",a),f.a.createElement(f.a.Fragment,null,f.a.createElement(y.a,{router:t}),f.a.createElement(O.a,{className:I()("container")},n&&f.a.createElement(k,{className:I()("article-header"),title:n.title,byline:n.byline,primary_asset:n.primary_asset}),r&&f.a.createElement(T.a,{className:I()("article-body"),items:r.items})))}}],[{key:"getInitialProps",value:function(){var e=Object(c.default)(r.a.mark(function e(t){var a,n,c,s,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.store,a=t.req,t.res,n=t.query,!!a,c=n.slug,"undefinded"==typeof h.a){e.next=12;break}return e.next=6,h()("https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/articles/".concat(c,"/article-data.json"));case 6:return s=e.sent,e.next=9,s.json();case 9:if(!(l=e.sent)){e.next=12;break}return e.abrupt("return",{article:l.article});case 12:return e.abrupt("return",{});case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(m.Component);Object(d.a)(x,"defaultProps",{article:{}});t.default=Object(p.withRouter)(x)},"m/Gl":function(e,t,a){"use strict";a.r(t),t.default=function(e,t){return t=t||{},new Promise(function(a,n){var r=new XMLHttpRequest,c=[],s=[],l={},i=function(){return{ok:2==(r.status/100|0),statusText:r.statusText,status:r.status,url:r.responseURL,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(JSON.parse(r.responseText))},blob:function(){return Promise.resolve(new Blob([r.response]))},clone:i,headers:{keys:function(){return c},entries:function(){return s},get:function(e){return l[e.toLowerCase()]},has:function(e){return e.toLowerCase()in l}}}};for(var o in r.open(t.method||"get",e,!0),r.onload=function(){r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,a){c.push(t=t.toLowerCase()),s.push([t,a]),l[t]=l[t]?l[t]+","+a:a}),a(i())},r.onerror=n,r.withCredentials="include"==t.credentials,t.headers)r.setRequestHeader(o,t.headers[o]);r.send(t.body||null)})}},x91w:function(e,t,a){"use strict";console.log("actions loaded")},zgjP:function(e,t,a){e.exports=window.fetch||(window.fetch=a("m/Gl").default||a("m/Gl"))}},[["OQ1I","5d41","9da1","ad9d"]]]);