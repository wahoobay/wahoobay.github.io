(this.webpackJsonpwahoobay=this.webpackJsonpwahoobay||[]).push([[103],{125:function(e,t,a){"use strict";a(0);var c=a(148),s=a(74),n=a(154),r=a(1);t.a=function(e){return Object(r.jsx)(c.a,{children:Object(r.jsx)(s.a,{children:Object(r.jsxs)("div",{className:"page-title-box",children:[Object(r.jsx)("div",{className:"page-title-right",children:Object(r.jsxs)(n.a,{listProps:{className:"m-0"},children:[Object(r.jsx)(n.a.Item,{href:"/",children:"Home"}),e.breadCrumbItems.map((function(e,t){return e.active?Object(r.jsx)(n.a.Item,{active:!0,children:e.label},t):Object(r.jsx)(n.a.Item,{href:e.path,children:e.label},t)}))]})}),Object(r.jsx)("h4",{className:"page-title",children:e.title})]})})})}},132:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a(42);var s=a(37);function n(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(s.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},148:function(e,t,a){"use strict";var c=a(3),s=a(11),n=a(12),r=a.n(n),i=a(0),l=a(13),o=a(1),j=i.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.as,j=void 0===i?"div":i,b=Object(s.a)(e,["bsPrefix","className","as"]),d=Object(l.b)(a,"row"),h=Object(l.a)(),u="".concat(d,"-cols"),O=[];return h.forEach((function(e){var t,a=b[e];delete b[e],t=null!=a&&"object"===typeof a?a.cols:a;var c="xs"!==e?"-".concat(e):"";null!=t&&O.push("".concat(u).concat(c,"-").concat(t))})),Object(o.jsx)(j,Object(c.a)(Object(c.a)({ref:t},b),{},{className:r.a.apply(void 0,[n,d].concat(O))}))}));j.displayName="Row",t.a=j},154:function(e,t,a){"use strict";var c=a(3),s=a(11),n=a(12),r=a.n(n),i=a(0),l=a(13),o=a(130),j=a(1),b=i.forwardRef((function(e,t){var a=e.bsPrefix,n=e.active,i=e.children,b=e.className,d=e.as,h=void 0===d?"li":d,u=e.linkAs,O=void 0===u?o.a:u,m=e.linkProps,f=e.href,x=e.title,p=e.target,v=Object(s.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),g=Object(l.b)(a,"breadcrumb-item");return Object(j.jsx)(h,Object(c.a)(Object(c.a)({ref:t},v),{},{className:r()(g,b,{active:n}),"aria-current":n?"page":void 0,children:n?i:Object(j.jsx)(O,Object(c.a)(Object(c.a)({},m),{},{href:f,title:x,target:p,children:i}))}))}));b.displayName="BreadcrumbItem",b.defaultProps={active:!1,linkProps:{}};var d=b,h=i.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.listProps,o=e.children,b=e.label,d=e.as,h=void 0===d?"nav":d,u=Object(s.a)(e,["bsPrefix","className","listProps","children","label","as"]),O=Object(l.b)(a,"breadcrumb");return Object(j.jsx)(h,Object(c.a)(Object(c.a)({"aria-label":b,className:n,ref:t},u),{},{children:Object(j.jsx)("ol",Object(c.a)(Object(c.a)({},i),{},{className:r()(O,null==i?void 0:i.className),children:o}))}))}));h.displayName="Breadcrumb",h.defaultProps={label:"breadcrumb",listProps:{}};t.a=Object.assign(h,{Item:d})},155:function(e,t,a){"use strict";var c,s=a(3),n=a(11),r=a(31),i=a(12),l=a.n(i),o=a(0),j=a(223),b=a(219),d=a(228),h=a(218),u=a(1),O=(c={},Object(r.a)(c,j.b,"show"),Object(r.a)(c,j.a,"show"),c),m=o.forwardRef((function(e,t){var a=e.className,c=e.children,r=e.transitionClasses,i=void 0===r?{}:r,j=Object(n.a)(e,["className","children","transitionClasses"]),m=Object(o.useCallback)((function(e,t){Object(d.a)(e),null==j.onEnter||j.onEnter(e,t)}),[j]);return Object(u.jsx)(h.a,Object(s.a)(Object(s.a)({ref:t,addEndListener:b.a},j),{},{onEnter:m,childRef:c.ref,children:function(e,t){return o.cloneElement(c,Object(s.a)(Object(s.a)({},t),{},{className:l()("fade",a,c.props.className,O[e],i[e])}))}}))}));m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},m.displayName="Fade",t.a=m},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a(0),s=a(184);function n(e){var t=Object(s.a)(e);return Object(c.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},184:function(e,t,a){"use strict";var c=a(0);t.a=function(e){var t=Object(c.useRef)(e);return Object(c.useEffect)((function(){t.current=e}),[e]),t}},199:function(e,t,a){"use strict";var c=a(3),s=a(16),n=a(11),r=a(12),i=a.n(r),l=a(0),o=a(133),j=a(13),b=a(1),d=l.forwardRef((function(e,t){var a=e.as,r=e.bsPrefix,l=e.variant,d=e.size,h=e.active,u=e.className,O=Object(n.a)(e,["as","bsPrefix","variant","size","active","className"]),m=Object(j.b)(r,"btn"),f=Object(o.b)(Object(c.a)({tagName:a},O)),x=Object(s.a)(f,2),p=x[0],v=x[1].tagName;return Object(b.jsx)(v,Object(c.a)(Object(c.a)(Object(c.a)({},p),O),{},{ref:t,className:i()(u,m,h&&"active",l&&"".concat(m,"-").concat(l),d&&"".concat(m,"-").concat(d),O.href&&O.disabled&&"disabled")}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=d},231:function(e,t,a){"use strict";var c=a(3),s=a(11),n=a(28),r=a.n(n),i=a(0),l=a(12),o=a.n(l),j=a(1),b={"aria-label":r.a.string,onClick:r.a.func,variant:r.a.oneOf(["white"])},d=i.forwardRef((function(e,t){var a=e.className,n=e.variant,r=Object(s.a)(e,["className","variant"]);return Object(j.jsx)("button",Object(c.a)({ref:t,type:"button",className:o()("btn-close",n&&"btn-close-".concat(n),a)},r))}));d.displayName="CloseButton",d.propTypes=b,d.defaultProps={"aria-label":"Close"},t.a=d},651:function(e,t,a){"use strict";var c=a(3),s=a(11),n=a(12),r=a.n(n),i=a(0),l=a(168),o=a(157),j=a(130),b=a(13),d=a(155),h=a(231),u=a(138),O=a(49),m=a(1),f=Object(u.a)("h4");f.displayName="DivStyledAsH4";var x=Object(O.a)("alert-heading",{Component:f}),p=Object(O.a)("alert-link",{Component:j.a}),v={variant:"primary",show:!0,transition:d.a,closeLabel:"Close alert"},g=i.forwardRef((function(e,t){var a=Object(l.a)(e,{show:"onClose"}),n=a.bsPrefix,i=a.show,j=a.closeLabel,u=a.closeVariant,O=a.className,f=a.children,x=a.variant,p=a.onClose,v=a.dismissible,g=a.transition,N=Object(s.a)(a,["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"]),y=Object(b.b)(n,"alert"),w=Object(o.a)((function(e){p&&p(!1,e)})),k=!0===g?d.a:g,P=Object(m.jsxs)("div",Object(c.a)(Object(c.a)({role:"alert"},k?void 0:N),{},{ref:t,className:r()(O,y,x&&"".concat(y,"-").concat(x),v&&"".concat(y,"-dismissible")),children:[v&&Object(m.jsx)(h.a,{onClick:w,"aria-label":j,variant:u}),f]}));return k?Object(m.jsx)(k,Object(c.a)(Object(c.a)({unmountOnExit:!0},N),{},{ref:void 0,in:i,children:P})):i?P:null}));g.displayName="Alert",g.defaultProps=v,t.a=Object.assign(g,{Link:p,Heading:x})},992:function(e,t,a){"use strict";a.r(t);var c=a(132),s=a(16),n=a(0),r=a(194),i=a(651),l=a(199),o=a(148),j=a(74),b=a(27),d=a(12),h=a.n(d),u=a(125),O=a(1),m=["primary","secondary","success","danger","warning","info","light","dark"],f=function(){return Object(O.jsx)(r.a,{children:Object(O.jsxs)(r.a.Body,{children:[Object(O.jsx)("h4",{className:"header-title",children:"Default Alert"}),Object(O.jsx)("p",{className:"text-muted font-14 mb-3",children:"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. Alerts are available for any length of text, as well as an optional dismiss button."}),Object(O.jsxs)("p",{children:["For proper styling, use one of the eight",Object(O.jsx)("strong",{children:"required"})," contextual classes (e.g.,",Object(O.jsx)("code",{children:".alert-success"}),"). For background color use class",Object(O.jsx)("code",{children:".bg-* "}),", ",Object(O.jsx)("code",{children:".text-white "})]}),m.map((function(e,t){return Object(O.jsxs)(i.a,{variant:e,className:h()("light"===e?"text-dark":"text-"+e),children:[Object(O.jsxs)("strong",{children:[e," - "]})," A simple ",e," alert\u2014check it out!"]},t)}))]})})},x=function(){var e=Object(n.useState)(["primary","secondary","success","danger","warning","info","light","dark"]),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(O.jsx)(r.a,{children:Object(O.jsxs)(r.a.Body,{children:[Object(O.jsx)("h4",{className:"header-title",children:"Dismissing Alerts"}),Object(O.jsxs)("p",{className:"text-muted font-14 mb-3",children:["Add a dismiss button and the ",Object(O.jsx)("code",{children:".alert-dismissible"})," class, which adds extra padding to the right of the alert and positions the ",Object(O.jsx)("code",{children:".btn-close"})," button."]}),a.map((function(e,t){return Object(O.jsxs)(i.a,{variant:"",className:h()("bg-"+e,"light"===e?"text-dark":"text-white",{"text-light":["dark","secondary"].includes(e)}),onClose:function(){return function(e){var t=Object(c.a)(a);t.splice(e,1),l(t)}(t)},dismissible:!0,children:[Object(O.jsxs)("strong",{children:[e," - "]})," A simple ",e," alert\u2014check it out!"]},t)}))]})})},p=function(){var e=Object(n.useState)(["success","danger","warning","info"]),t=Object(s.a)(e,1)[0],a=["dripicons-checkmark","dripicons-wrong","dripicons-warning","dripicons-information"];return Object(O.jsx)(r.a,{children:Object(O.jsxs)(r.a.Body,{children:[Object(O.jsx)("h4",{className:"header-title",children:"Icons with Alerts"}),Object(O.jsx)("p",{className:"text-muted font-14",children:"You can also include additional elements like icons, heading, etc along side the actual message."}),t.map((function(e,t){return Object(O.jsxs)(i.a,{variant:e,children:[Object(O.jsx)("i",{className:h()(a[t],"me-2")}),"This is a",Object(O.jsx)("strong",{children:e})," alert - check it out!"]},t)}))]})})},v=function(){return Object(O.jsx)(r.a,{children:Object(O.jsxs)(r.a.Body,{children:[Object(O.jsx)("h4",{className:"header-title",children:"Additional content"}),Object(O.jsx)("p",{className:"text-muted font-14",children:"Alerts can also contain additional HTML elements like headings, paragraphs and dividers."}),Object(O.jsxs)(i.a,{variant:"success",children:[Object(O.jsx)("h4",{className:"alert-heading",children:"Well done!"}),Object(O.jsx)("p",{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{className:"mb-0",children:"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."})]})]})})},g=function(){return Object(O.jsx)(r.a,{children:Object(O.jsxs)(r.a.Body,{children:[Object(O.jsx)("h4",{className:"header-title",children:"Custom Alerts"}),Object(O.jsxs)("p",{className:"text-muted font-14",children:["Display alert with transparent background and with contextual text color. Use classes"," ",Object(O.jsx)("code",{children:".bg-white"}),", and ",Object(O.jsx)("code",{children:".text-*"}),". E.g. ",Object(O.jsx)("code",{children:"bg-white text-primary"}),"."]}),m.map((function(e,t){return Object(O.jsxs)(i.a,{variant:e,className:h()("bg-white","text-"+e),children:["This is a ",Object(O.jsx)("strong",{children:e})," alert\u2014check it out!"]},t)}))]})})},N=function(){return Object(O.jsx)(r.a,{children:Object(O.jsxs)(r.a.Body,{children:[Object(O.jsx)("h4",{className:"header-title",children:"Link Color"}),Object(O.jsxs)("p",{className:"text-muted font-14",children:["Use the ",Object(O.jsx)("code",{children:".alert-link"})," utility class to quickly provide matching colored links within any alert."]}),m.map((function(e,t){return Object(O.jsxs)(i.a,{variant:e,children:["A simple ",e," alert with"," ",Object(O.jsx)(b.b,{to:"#",className:"alert-link",children:"an example link"}),". Give it a click if you like."]},t)}))]})})},y=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(O.jsx)(r.a,{children:Object(O.jsxs)(r.a.Body,{children:[Object(O.jsx)("h4",{className:"header-title",children:"Alert Live example"}),Object(O.jsx)("p",{className:"sub-header",children:"Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button."}),(a||[]).map((function(e,t){return Object(O.jsx)(i.a,{onClose:function(){return function(e){var t=Object(c.a)(a);t.splice(e,1),o(t)}(t)},dismissible:!0,children:"Nice, you triggered this alert message!"},t.toString())})),Object(O.jsx)(l.a,{onClick:function(){return o((function(e){return[].concat(Object(c.a)(e),[e.length])}))},children:"Show live alert"})]})})};t.default=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(u.a,{breadCrumbItems:[{label:"Base UI",path:"/ui/alerts"},{label:"Alerts",path:"/ui/alerts",active:!0}],title:"Alerts"}),Object(O.jsxs)(o.a,{children:[Object(O.jsx)(j.a,{lg:6,children:Object(O.jsx)(f,{})}),Object(O.jsx)(j.a,{lg:6,children:Object(O.jsx)(x,{})})]}),Object(O.jsxs)(o.a,{children:[Object(O.jsx)(j.a,{lg:6,children:Object(O.jsx)(g,{})}),Object(O.jsx)(j.a,{lg:6,children:Object(O.jsx)(N,{})})]}),Object(O.jsxs)(o.a,{children:[Object(O.jsx)(j.a,{children:Object(O.jsx)(p,{})}),Object(O.jsx)(j.a,{children:Object(O.jsx)(v,{})})]}),Object(O.jsx)(o.a,{children:Object(O.jsx)(j.a,{lg:6,children:Object(O.jsx)(y,{})})})]})}}}]);
//# sourceMappingURL=103.5dc4410e.chunk.js.map