(this.webpackJsonpwhaoobay=this.webpackJsonpwhaoobay||[]).push([[115],{1072:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),i=t(3),r=t(132),s=t(16),l=t(27),o=t(7),u=t(12),d=t.n(u),b=t(855),m=t(1),j=function e(n){var t=n.item,i=n.tag,r=n.linkClassName,o=n.className,u=n.subMenuClassNames,b=n.activeMenuItems,j=n.toggleMenu,f=i,O=Object(a.useState)(b.includes(t.key)),h=Object(s.a)(O,2),v=h[0],g=h[1],y=window.screen.width<=768&&v;Object(a.useEffect)((function(){g(b.includes(t.key))}),[b,t]);return Object(m.jsxs)(f,{className:d()("dropdown",o,b.includes(t.key)?"active":""),children:[Object(m.jsxs)(l.b,{to:"/#",onClick:function(e){e.preventDefault();var n=!v;return g(n),j&&j(t,n),!1},"data-menu-key":t.key,className:d()("dropdown-toggle","arrow-none",r),id:t.key,role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":v,children:[t.icon&&Object(m.jsx)("i",{className:t.icon}),Object(m.jsxs)("span",{children:[" ",t.label," "]}),Object(m.jsx)("div",{className:"arrow-down"})]}),t.children?Object(m.jsx)("div",{className:d()(u,{show:y}),"aria-labelledby":t.key,children:t.children.map((function(n,t){return Object(m.jsx)(c.a.Fragment,{children:n.children?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(e,{item:n,tag:"div",linkClassName:d()("dropdown-item",b.includes(n.key)?"active":""),activeMenuItems:b,className:"",subMenuClassNames:"dropdown-menu",toggleMenu:j})}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(p,{item:n,className:d()("dropdown-item",{active:b.includes(n.key)})})})},t)}))}):null]})},f=function(e){var n=e.item,t=e.className,a=e.linkClassName;return Object(m.jsx)("li",{className:d()("nav-item",t),children:Object(m.jsx)(p,{item:n,className:a})})},p=function(e){var n=e.item,t=e.className;return Object(m.jsxs)(l.b,{to:n.url,target:n.target,className:d()(t),"data-menu-key":n.key,children:[n.icon&&Object(m.jsx)("i",{className:n.icon}),Object(m.jsxs)("span",{children:[" ",n.label," "]})]})},O=function(e){var n=e.menuItems,t=Object(a.useRef)(null),l=Object(o.e)(),u=Object(a.useState)([]),d=Object(s.a)(u,2),p=d[0],O=d[1],h=Object(a.useState)([]),v=Object(s.a)(h,2),g=v[0],y=v[1],x=function(e,n){n&&y([e.key].concat(Object(r.a)(Object(b.a)(p,e))))},k=Object(a.useCallback)((function(){var e=document.getElementById("main-side-menu"),n=null;if(e){for(var t=e.getElementsByTagName("a"),a=0;a<t.length;++a)if(l.pathname===t[a].pathname){n=t[a];break}if(n){var c=n.getAttribute("data-menu-key"),i=Object(b.b)(p,c);i&&y([i.key].concat(Object(r.a)(Object(b.a)(p,i))))}}}),[l.pathname,p]);return Object(a.useEffect)((function(){var e=n?n.filter((function(e){return e.isTitle?null:e})):[],t=window.screen.width>1366?7:5;if(e.length>t){var a=e.slice(0,t),c=e.slice(t,n.length).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{parentKey:"more"})})),s={id:e.length+1,path:"/",label:"More",icon:"uil-ellipsis-h",key:"more",children:c};e=[].concat(Object(r.a)(a),[s]),O(e)}else O(e)}),[n]),Object(a.useEffect)((function(){p&&p.length>0&&k()}),[k,p]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{className:"navbar-nav",ref:t,id:"main-side-menu",children:(p||[]).map((function(e,n){return Object(m.jsx)(c.a.Fragment,{children:e.children?Object(m.jsx)(j,{item:e,tag:"li",className:"nav-item",subMenuClassNames:"dropdown-menu",activeMenuItems:g,linkClassName:"nav-link",toggleMenu:x}):Object(m.jsx)(f,{item:e,linkClassName:"nav-link dropdown-toggle arrow-none",className:{active:g.includes(e.key)}})},n)}))})})},h=t(728);n.default=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"topnav shadow-sm",children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("nav",{className:d()("navbar","navbar-expand-lg","topnav-menu","navbar-light"),children:Object(m.jsx)(h.a,{in:e.isMenuOpened,className:"navbar-collapse",id:"topnav-menu-content",children:Object(m.jsx)("div",{children:Object(m.jsx)(O,{menuItems:Object(b.c)()})})})})})})})}},132:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(42);var c=t(37);function i(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},728:function(e,n,t){"use strict";var a=t(3),c=t(11),i=t(31),r=t(12),s=t.n(r),l=t(551),o=t(0),u=t.n(o),d=t(223),b=t(219);var m,j=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];e.apply(this,a),n.apply(this,a)}}),null)},f=t(228),p=t(218),O=t(1),h={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function v(e,n){var t=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],a=h[e];return t+parseInt(Object(l.a)(n,a[0]),10)+parseInt(Object(l.a)(n,a[1]),10)}var g=(m={},Object(i.a)(m,d.c,"collapse"),Object(i.a)(m,d.d,"collapsing"),Object(i.a)(m,d.b,"collapsing"),Object(i.a)(m,d.a,"collapse show"),m),y={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:v},x=u.a.forwardRef((function(e,n){var t=e.onEnter,i=e.onEntering,r=e.onEntered,l=e.onExit,d=e.onExiting,m=e.className,h=e.children,y=e.dimension,x=void 0===y?"height":y,k=e.getDimensionValue,N=void 0===k?v:k,w=Object(c.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),E="function"===typeof x?x():x,M=Object(o.useMemo)((function(){return j((function(e){e.style[E]="0"}),t)}),[E,t]),C=Object(o.useMemo)((function(){return j((function(e){var n="scroll".concat(E[0].toUpperCase()).concat(E.slice(1));e.style[E]="".concat(e[n],"px")}),i)}),[E,i]),I=Object(o.useMemo)((function(){return j((function(e){e.style[E]=null}),r)}),[E,r]),T=Object(o.useMemo)((function(){return j((function(e){e.style[E]="".concat(N(E,e),"px"),Object(f.a)(e)}),l)}),[l,N,E]),A=Object(o.useMemo)((function(){return j((function(e){e.style[E]=null}),d)}),[E,d]);return Object(O.jsx)(p.a,Object(a.a)(Object(a.a)({ref:n,addEndListener:b.a},w),{},{"aria-expanded":w.role?w.in:null,onEnter:M,onEntering:C,onEntered:I,onExit:T,onExiting:A,childRef:h.ref,children:function(e,n){return u.a.cloneElement(h,Object(a.a)(Object(a.a)({},n),{},{className:s()(m,h.props.className,g[e],"width"===E&&"collapse-horizontal")}))}}))}));x.defaultProps=y;n.a=x},855:function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return s}));var a=t(132),c=[{key:"navigation",label:"Navigation",isTitle:!0},{key:"dashboards",label:"Dashboard",isTitle:!1,icon:"uil-home-alt",url:"/pages/starter"},{key:"apps",label:"Apps",isTitle:!0},{key:"apps-calendar",label:"Events",isTitle:!1,icon:"uil-calender",url:"#"},{key:"apps-chat",label:"Education",isTitle:!1,icon:"uil-book-open",url:"#"}],i=function(){return c},r=function e(n,t){var c=[],i=s(n,t.parentKey);return i&&(c.push(i.key),i.parentKey&&(c=[].concat(Object(a.a)(c),Object(a.a)(e(n,i))))),c},s=function e(n,t){if(n&&t)for(var a=0;a<n.length;a++){if(n[a].key===t)return n[a];var c=e(n[a].children,t);if(c)return c}return null}}}]);
//# sourceMappingURL=115.c6d97427.chunk.js.map