(window.webpackJsonp=window.webpackJsonp||[]).push([["ec87"],{"53eK":function(e,t,a){"use strict";var n=a("0iUn"),r=a("sLSF"),o=a("MI3g"),i=a("a7VT"),s=a("AT/M"),c=a("Tit0"),l=a("vYYK"),u=a("q1tI"),d=a.n(u),f=a("TSYQ"),h=a.n(f),m=a("t3zA"),g=a.n(m),p={EXACT:"exact",FIT:"fit",COVER:"cover"},b=function(e){function t(e){var a;return Object(n.default)(this,t),a=Object(o.default)(this,Object(i.default)(t).call(this,e)),Object(l.a)(Object(s.default)(a),"handleImageLoad",function(){a.setState({loaded:!0})}),a.state={loaded:!1,src:a.props.src},a}return Object(c.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,n=e.alt,r=e.aspect_ratio,o=e.fill_mode,i=e.forwarded_ref,s=this.state,c=s.src,l=s.loaded,u=r?{height:0,paddingBottom:"".concat(1/r*100,"%")}:void 0;return d.a.createElement("div",{className:t,style:a,ref:i},d.a.createElement("div",{className:g.a["size-container"]},d.a.createElement("div",{className:h()(g.a["image-container"],g.a.placeholder,r&&g.a["lock-ratio"],l&&g.a.loaded),style:u},c&&d.a.createElement("img",{key:c,className:h()(g.a.image,g.a[o]),src:c,alt:n,title:n,onLoad:this.handleImageLoad}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.src!==t.src?{src:e.src,loaded:!1}:null}}]),t}(u.PureComponent);Object(l.a)(b,"defaultProps",{fill_mode:p.EXACT}),Object(l.a)(b,"FillMode",p);var y=b;a.d(t,"a",function(){return y})},Hl0e:function(e,t,a){"use strict";var n=a("0iUn"),r=a("sLSF"),o=a("MI3g"),i=a("a7VT"),s=a("AT/M"),c=a("Tit0"),l=a("vYYK"),u=a("q1tI"),d=a.n(u),f=a("TSYQ"),h=a.n(f),m=a("53eK"),g=a("MPzT"),p=a.n(g),b=function(e){function t(){var e,a;Object(n.default)(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return a=Object(o.default)(this,(e=Object(i.default)(t)).call.apply(e,[this].concat(c))),Object(l.a)(Object(s.default)(a),"renderSubHeader",function(e){return d.a.createElement("h3",{className:p()("subheader")},e.text)}),Object(l.a)(Object(s.default)(a),"renderParagraph",function(e){return d.a.createElement("p",{className:p()("paragraph")},e.text)}),Object(l.a)(Object(s.default)(a),"renderList",function(e){return d.a.createElement("ul",{className:p()("list",e.list_type)},e.items&&e.items.map(a.renderListItem))}),Object(l.a)(Object(s.default)(a),"renderListItem",function(e,t){return d.a.createElement("li",{key:"".concat(e.text,"-").concat(t)},e.url?d.a.createElement("a",{href:e.url},e.text):e.text)}),Object(l.a)(Object(s.default)(a),"renderImage",function(e){var t=e.size,a=e.alignment,n=p()("image-container","".concat(t),"".concat(a));return d.a.createElement("div",{className:p()(n)},d.a.createElement(m.a,{style:{width:"100%"},fill_mode:m.a.FillMode.COVER,src:e.src,alt:e.caption}))}),Object(l.a)(Object(s.default)(a),"renderItems",function(e,t){switch(e.type){case"paragraph":return d.a.createElement("div",{key:"".concat(e.type,"-").concat(t)},a.renderParagraph(e.content));case"subheader":return d.a.createElement("div",{key:"".concat(e.type,"-").concat(t)},a.renderSubHeader(e.content));case"list":return d.a.createElement("div",{key:"".concat(e.type,"-").concat(t)},a.renderList(e.content));case"image":return d.a.createElement("div",{key:"".concat(e.type,"-").concat(t)},a.renderImage(e.content));default:return d.a.createElement("div",null)}}),a}return Object(c.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.items;return d.a.createElement("div",{className:h()(p()("container"),t)},a.map(this.renderItems))}}]),t}(u.PureComponent);a.d(t,"a",function(){return b})},"Isl+":function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),r=a("sLSF"),o=a("MI3g"),i=a("a7VT"),s=a("Tit0"),c=a("q1tI"),l=a.n(c),u=(a("/MKj"),a("nOHt")),d=a("QyV/"),f=a("Q00c"),h=a("okHz"),m=a("eOmP"),g=a("Hl0e"),p=a("KDxW"),b=a("cmpI"),y=a.n(b),O=function(e){function t(){return Object(n.default)(this,t),Object(o.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this.props.router;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{router:e}),l.a.createElement(f.a,{className:y()("herobanner"),title:"About",text_position:f.a.TextPosition.BOTTOM,background_image:"https://biggica-sites.s3.amazonaws.com/fongs-hung-ga/fongs-doyers-pose.jpg",background_position:f.a.BackgroundPosition.CENTER,hero_height:f.a.HeroHeight.THREE_QUATER,gradient:f.a.Gradient.BOTTOM}),l.a.createElement(h.a,{padding:!0},l.a.createElement(m.a,{className:y()("page-header"),title:"Who We Are"}),l.a.createElement(g.a,{className:y()("article"),items:p.items})))}}],[{key:"getInitialProps",value:function(e){e.reduxStore,e.req;return{}}}]),t}(c.Component);t.default=Object(u.withRouter)(O)},KDxW:function(e){e.exports={items:[{type:"paragraph",content:{text:"Fong’s Hung Ga Kung Fu Association based out of New York City is dedicated to teach and present only the purest, most traditional Chinese Hung Ga Kung Fu in the United States. We offer classes for kids, teens and adults, from beginner to advanced levels."}},{type:"subheader",content:{text:"What is Hung Ga Kung Fu?"}},{type:"paragraph",content:{text:"Hung Ga is one of the most popular kung-fu systems to originate from Kwang Tung (Canton), China. It is one of the five family systems passed down from the teachings of the Siu Lum Monk, Gee Shim, who taught five disciples surnamed Hung, Choy, Lay, Lau, and Mok. Hung- Ga, named after Hung Hei Guen, is a powerful style which encompasses the hard, long range offense of the Fu Ying (tiger form) and the soft, short range fluid defense of the Hok Ying (crane form), the evasiveness of the Lung (dragon), the precision of the Sae (snake), the swiftness of the Pao, (leopard) and the application of the Ng Hang Kuen (five element fist)."}},{type:"paragraph",content:{text:"Additional information on the history of Hung Ga and Shaolin can be found here:"}},{type:"list",content:{items:[{text:"History of Hung Ga",url:"/article/history-of-hung-kuen"},{text:"History of Northern Shaolin",url:"/article/history-of-northern-shaolin"},{text:"History of Southern Shaolin",url:"/article/history-of-southern-shaolin"},{text:"Our Forms",url:"/article/forms"},{text:"Past Grand Masters",url:"/article/grandmasters"}]}}]}},nOgb:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/About",function(){var e=a("Isl+");return{page:e.default||e}}])}},[["nOgb","5d41","9da1","ad9d"]]]);