(window.webpackJsonp=window.webpackJsonp||[]).push([["1f2e"],{GG90:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/LionDance",function(){var t=a("trC3");return{page:t.default||t}}])},Q00c:function(t,e,a){"use strict";var n=a("0iUn"),r=a("sLSF"),o=a("MI3g"),c=a("a7VT"),i=a("AT/M"),u=a("Tit0"),l=a("vYYK"),s=a("q1tI"),d=a.n(s),m=a("TSYQ"),b=a.n(m),f=a("q+Sz"),g=a.n(f),O={FULL:"full",THREE_QUATER:"three-quater",HALF:"half",AUTO:"auto"},h={ROW:"row",COLUMN:"column"},p=function(t){function e(){var t,a;Object(n.default)(this,e);for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];return a=Object(o.default)(this,(t=Object(c.default)(e)).call.apply(t,[this].concat(u))),Object(l.a)(Object(i.default)(a),"getBackground",function(t,e){switch(e){case"top":return"linear-gradient(rgba(0, 0, 0, 0.7) 75%, rgba(0, 0, 0, 0)), url(".concat(t,")");case"bottom":return"linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 75%), url(".concat(t,")");default:return"url(".concat(t,")")}}),Object(l.a)(Object(i.default)(a),"renderButton",function(t,e){var n=g()("button-container",{border:a.props.button_border,column:"column"===a.props.button_direction,row:"row"===a.props.button_direction}),r=g()("button",{border:a.props.button_border});return d.a.createElement("li",{className:n},t.label&&d.a.createElement("span",{className:g()("label")},t.label),d.a.createElement("div",{className:r},d.a.createElement("a",{href:t.url,target:t.target,onClick:t.onClick},t.text)))}),a}return Object(u.default)(e,t),Object(r.default)(e,[{key:"render",value:function(){var t=this.props,e=t.className,a=(t.title,t.title_border),n=t.text_position,r=t.buttons,o=(t.button_border,t.image),c=t.background_image,i=t.background_position,u=t.hero_height,l=t.gradient,s=g()("container",{"justify-top":"top"===n,"justify-bottom":"bottom"===n,full:"full"===u,"three-quater":"three-quater"===u,half:"half"===u,auto:"auto"===u}),m={backgroundImage:c&&this.getBackground(c,l),backgroundPosition:i&&i},f=g()("text-container",{border:a});return d.a.createElement("div",{className:b()(s,e),style:m},d.a.createElement("div",{className:f},d.a.createElement("h1",{className:g()("title")},this.props.title)),r&&d.a.createElement("ul",{className:g()("buttons-container")},r.map(this.renderButton)),o&&d.a.createElement("div",{className:g()("image-container"),onClick:o.onClick},d.a.createElement("img",{className:g()("image"),src:o.src})))}}]),e}(s.PureComponent);Object(l.a)(p,"defaultProps",{button_direction:h.ROW,hero_height:O.FULL}),Object(l.a)(p,"HeroHeight",O),Object(l.a)(p,"TextPosition",{TOP:"top",BOTTOM:"bottom",CENTER:"center"}),Object(l.a)(p,"ButtonDirection",h),Object(l.a)(p,"BackgroundPosition",{TOP:"top",BOTTOM:"bottom",CENTER:"center"}),Object(l.a)(p,"Gradient",{TOP:"top",BOTTOM:"bottom"});var T=p;a.d(e,"a",function(){return T})},trC3:function(t,e,a){"use strict";a.r(e);var n=a("0iUn"),r=a("sLSF"),o=a("MI3g"),c=a("a7VT"),i=a("Tit0"),u=a("q1tI"),l=a.n(u),s=(a("/MKj"),a("nOHt")),d=a("QyV/"),m=a("Q00c"),b=a("okHz"),f=a("eOmP"),g=a("pAMz"),O=a.n(g),h=function(t){function e(){return Object(n.default)(this,e),Object(o.default)(this,Object(c.default)(e).apply(this,arguments))}return Object(i.default)(e,t),Object(r.default)(e,[{key:"render",value:function(){var t=this.props.router;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{router:t}),l.a.createElement(m.a,{className:O()("herobanner"),title:"Lion Dance",text_position:m.a.TextPosition.BOTTOM,background_image:"https://lh3.googleusercontent.com/wsyy5L7WLY3sOBCfhB3Zogr4n8nuPNFYnVz-YXn_-5ARJJoOAfpqVkBM-MfL5mzN7zHDu0Yrh69zhOnd9ii3BuT7kg9ICxvwfr3m0eame9le2Gll4JMKnhJ1rR4lK5ya-4qmrjkwm0t8TwYwdofSSf4kPjuBfHTYgugWOYG9x1HJZ7aBV71mIPNFuZnYted6jtmKFUd3pD7m6AVmYRWc9KT73DSUMn7fEqq_sqFPZQytpkBcjaZ_dkmwD2l91EMWJZxt972m49nuLN2YEV8ePF6HYKyAegqPJeTZYmg29GsLc-G9zYeQiSkGtvZew0FGEzs5MfiEw5F_ZWX5t9olmfSZviyv9hZw8eMEIlQxzKt3tgvAbM7cCTwozY4l2LC2RTS56o0khCKk7PTCugACU2ly-BBUThSihx1fOeyicYMPojT_HU6Mtr8WjU94VeOnaADhOJCdDvp7WCs4CiQ6MJAK1FCRljsFpiTwJI1zxElGo-RBZEJL8ftHiARGOC6CGTE1nu-9I6iC31zB8Bno3Y74tNez2y5fGnz90jetAKL63XnLLO1EoIRCFq5iGBQkBFHQvXBApSVhoHeWJF8lpd2w2eMIcGkOstL3C07fsy990fS9klnoIEWQbjabxCdZgjv9lLmKOcU1w92-qmw5mURk9cRhkqXaTPKrJfdM4ukHufac3KmUx3k=w1024-h768-no",background_position:m.a.BackgroundPosition.CENTER,hero_height:m.a.HeroHeight.HALF,gradient:m.a.Gradient.BOTTOM}),l.a.createElement(b.a,null,l.a.createElement(f.a,{title:"Lion Dance"}),l.a.createElement("div",{className:O()("content")})))}}],[{key:"getInitialProps",value:function(t){t.reduxStore,t.req;return{}}}]),e}(u.Component);e.default=Object(s.withRouter)(h)}},[["GG90","5d41","9da1","ad9d"]]]);