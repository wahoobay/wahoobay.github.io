(this.webpackJsonpwhaoobay=this.webpackJsonpwhaoobay||[]).push([[108],{125:function(e,t,r){"use strict";r(0);var c=r(148),n=r(74),a=r(154),i=r(1);t.a=function(e){return Object(i.jsx)(c.a,{children:Object(i.jsx)(n.a,{children:Object(i.jsxs)("div",{className:"page-title-box",children:[Object(i.jsx)("div",{className:"page-title-right",children:Object(i.jsxs)(a.a,{listProps:{className:"m-0"},children:[Object(i.jsx)(a.a.Item,{href:"/",children:"Home"}),e.breadCrumbItems.map((function(e,t){return e.active?Object(i.jsx)(a.a.Item,{active:!0,children:e.label},t):Object(i.jsx)(a.a.Item,{href:e.path,children:e.label},t)}))]})}),Object(i.jsx)("h4",{className:"page-title",children:e.title})]})})})}},132:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var c=r(42);var n=r(37);function a(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},154:function(e,t,r){"use strict";var c=r(3),n=r(11),a=r(12),i=r.n(a),s=r(0),l=r(13),d=r(130),o=r(1),b=s.forwardRef((function(e,t){var r=e.bsPrefix,a=e.active,s=e.children,b=e.className,j=e.as,u=void 0===j?"li":j,f=e.linkAs,h=void 0===f?d.a:f,O=e.linkProps,m=e.href,p=e.title,x=e.target,v=Object(n.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),y=Object(l.b)(r,"breadcrumb-item");return Object(o.jsx)(u,Object(c.a)(Object(c.a)({ref:t},v),{},{className:i()(y,b,{active:a}),"aria-current":a?"page":void 0,children:a?s:Object(o.jsx)(h,Object(c.a)(Object(c.a)({},O),{},{href:m,title:p,target:x,children:s}))}))}));b.displayName="BreadcrumbItem",b.defaultProps={active:!1,linkProps:{}};var j=b,u=s.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,s=e.listProps,d=e.children,b=e.label,j=e.as,u=void 0===j?"nav":j,f=Object(n.a)(e,["bsPrefix","className","listProps","children","label","as"]),h=Object(l.b)(r,"breadcrumb");return Object(o.jsx)(u,Object(c.a)(Object(c.a)({"aria-label":b,className:a,ref:t},f),{},{children:Object(o.jsx)("ol",Object(c.a)(Object(c.a)({},s),{},{className:i()(h,null==s?void 0:s.className),children:d}))}))}));u.displayName="Breadcrumb",u.defaultProps={label:"breadcrumb",listProps:{}};t.a=Object.assign(u,{Item:j})},196:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var c=r(0),n=r(189),a=Object(c.createContext)(n.a?window:void 0);a.Provider;function i(){return Object(c.useContext)(a)}},237:function(e,t,r){"use strict";function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e)?e:Object.keys(e).map((function(t){return e[t].name=t,e[t]}))}function n(e){var t,r,n,a,i=e.enabled,s=e.enableEvents,l=e.placement,d=e.flip,o=e.offset,b=e.fixed,j=e.containerPadding,u=e.arrowElement,f=e.popperConfig,h=void 0===f?{}:f,O=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(h.modifiers);return Object.assign({},h,{placement:l,enabled:i,strategy:b?"fixed":h.strategy,modifiers:c(Object.assign({},O,{eventListeners:{enabled:s},preventOverflow:Object.assign({},O.preventOverflow,{options:j?Object.assign({padding:j},null==(t=O.preventOverflow)?void 0:t.options):null==(r=O.preventOverflow)?void 0:r.options}),offset:{options:Object.assign({offset:o},null==(n=O.offset)?void 0:n.options)},arrow:Object.assign({},O.arrow,{enabled:!!u,options:Object.assign({},null==(a=O.arrow)?void 0:a.options,{element:u})}),flip:Object.assign({enabled:!!d},O.flip)}))})}r.d(t,"a",(function(){return n}))},238:function(e,t,r){"use strict";r.d(t,"b",(function(){return u}));var c=r(295),n=r(225),a=r(167),i=r(0),s=r(122),l=r(50),d=r.n(l),o=function(){};function b(e){return 0===e.button}function j(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var u=function(e){return e&&("current"in e?e.current:e)};t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=r.disabled,f=r.clickTrigger,h=void 0===f?"click":f,O=Object(i.useRef)(!1),m=Object(i.useCallback)((function(t){var r=u(e);d()(!!r,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),O.current=!r||j(t)||!b(t)||!!Object(c.a)(r,t.target)}),[e]),p=Object(s.a)((function(e){O.current||t(e)}));Object(i.useEffect)((function(){if(!l&&null!=e){var t=Object(a.a)(u(e)),r=(t.defaultView||window).event,c=Object(n.a)(t,h,m,!0),i=Object(n.a)(t,h,(function(e){e!==r?p(e):r=void 0})),s=[];return"ontouchstart"in t.documentElement&&(s=[].slice.call(t.body.children).map((function(e){return Object(n.a)(e,"mousemove",o)}))),function(){c(),i(),s.forEach((function(e){return e()}))}}}),[e,l,h,m,p])}},243:function(e,t,r){"use strict";var c=r(132),n=r(16),a=r(0),i=r(36),s=Object.prototype.hasOwnProperty;function l(e,t,r){var c,n=Object(i.a)(e.keys());try{for(n.s();!(c=n.n()).done;)if(d(r=c.value,t))return r}catch(a){n.e(a)}finally{n.f()}}function d(e,t){var r,c,n;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((c=e.length)===t.length)for(;c--&&d(e[c],t[c]););return-1===c}if(r===Set){if(e.size!==t.size)return!1;var a,o=Object(i.a)(e);try{for(o.s();!(a=o.n()).done;){if((n=c=a.value)&&"object"===typeof n&&!(n=l(t,n)))return!1;if(!t.has(n))return!1}}catch(u){o.e(u)}finally{o.f()}return!0}if(r===Map){if(e.size!==t.size)return!1;var b,j=Object(i.a)(e);try{for(j.s();!(b=j.n()).done;){if((n=(c=b.value)[0])&&"object"===typeof n&&!(n=l(t,n)))return!1;if(!d(c[1],t.get(n)))return!1}}catch(u){j.e(u)}finally{j.f()}return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((c=e.byteLength)===t.byteLength)for(;c--&&e.getInt8(c)===t.getInt8(c););return-1===c}if(ArrayBuffer.isView(e)){if((c=e.byteLength)===t.byteLength)for(;c--&&e[c]===t[c];);return-1===c}if(!r||"object"===typeof e){for(r in c=0,e){if(s.call(e,r)&&++c&&!s.call(t,r))return!1;if(!(r in t)||!d(e[r],t[r]))return!1}return Object.keys(t).length===c}}return e!==e&&t!==t}var o=r(128);var b=function(e){var t=Object(o.a)();return[e[0],Object(a.useCallback)((function(r){if(t())return e[1](r)}),[t,e[1]])]},j=r(369),u=r(367),f=r(365),h=r(374),O=r(370),m=r(368),p=r(366),x=r(378),v=r(567),y=Object(v.a)({defaultModifiers:[O.a,p.a,u.a,f.a,m.a,h.a,x.a,j.a]}),g=["enabled","placement","strategy","modifiers"];function N(e,t){if(null==e)return{};var r,c,n={},a=Object.keys(e);for(c=0;c<a.length;c++)r=a[c],t.indexOf(r)>=0||(n[r]=e[r]);return n}var w={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:function(){}},P={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,r=e.reference,c=e.popper;if("removeAttribute"in r){var n=(r.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==c.id}));n.length?r.setAttribute("aria-describedby",n.join(",")):r.removeAttribute("aria-describedby")}}},fn:function(e){var t,r=e.state.elements,c=r.popper,n=r.reference,a=null==(t=c.getAttribute("role"))?void 0:t.toLowerCase();if(c.id&&"tooltip"===a&&"setAttribute"in n){var i=n.getAttribute("aria-describedby");if(i&&-1!==i.split(",").indexOf(c.id))return;n.setAttribute("aria-describedby",i?"".concat(i,",").concat(c.id):c.id)}}},A=[];t.a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.enabled,s=void 0===i||i,l=r.placement,o=void 0===l?"bottom":l,j=r.strategy,u=void 0===j?"absolute":j,f=r.modifiers,h=void 0===f?A:f,O=N(r,g),m=Object(a.useRef)(h),p=Object(a.useRef)(),x=Object(a.useCallback)((function(){var e;null==(e=p.current)||e.update()}),[]),v=Object(a.useCallback)((function(){var e;null==(e=p.current)||e.forceUpdate()}),[]),k=b(Object(a.useState)({placement:o,update:x,forceUpdate:v,attributes:{},styles:{popper:{},arrow:{}}})),C=Object(n.a)(k,2),S=C[0],B=C[1],I=Object(a.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,r={},c={};Object.keys(t.elements).forEach((function(e){r[e]=t.styles[e],c[e]=t.attributes[e]})),B({state:t,styles:r,attributes:c,update:x,forceUpdate:v,placement:t.placement})}}}),[x,v,B]),M=Object(a.useMemo)((function(){return d(m.current,h)||(m.current=h),m.current}),[h]);return Object(a.useEffect)((function(){p.current&&s&&p.current.setOptions({placement:o,strategy:u,modifiers:[].concat(Object(c.a)(M),[I,w])})}),[u,o,I,s,M]),Object(a.useEffect)((function(){if(s&&null!=e&&null!=t)return p.current=y(e,t,Object.assign({},O,{placement:o,strategy:u,modifiers:[].concat(Object(c.a)(M),[P,I])})),function(){null!=p.current&&(p.current.destroy(),p.current=void 0,B((function(e){return Object.assign({},e,{attributes:{},styles:{popper:{}}})})))}}),[s,e,t]),S}},616:function(e,t,r){"use strict";var c=r(3),n=r(16),a=r(11),i=r(12),s=r.n(i),l=r(0),d=r(13),o=r(227),b=r(1),j=l.forwardRef((function(e,t){var r=e.bsPrefix,i=e.placement,l=e.className,j=e.style,u=e.children,f=e.arrowProps,h=(e.popper,e.show,Object(a.a)(e,["bsPrefix","placement","className","style","children","arrowProps","popper","show"]));r=Object(d.b)(r,"tooltip");var O=Object(d.c)(),m=(null==i?void 0:i.split("-"))||[],p=Object(n.a)(m,1)[0],x=Object(o.a)(p,O);return Object(b.jsxs)("div",Object(c.a)(Object(c.a)({ref:t,style:j,role:"tooltip","x-placement":p,className:s()(l,r,"bs-tooltip-".concat(x))},h),{},{children:[Object(b.jsx)("div",Object(c.a)({className:"tooltip-arrow"},f)),Object(b.jsx)("div",{className:"".concat(r,"-inner"),children:u})]}))}));j.defaultProps={placement:"right"},j.displayName="Tooltip",t.a=j},983:function(e,t,r){"use strict";r.r(t);r(0);var c=r(148),n=r(74),a=r(646),i=r(616),s=r(194),l=r(125),d=r(1),o=function(e){var t=e.items||[];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"table-responsive",children:Object(d.jsxs)("table",{className:"table mb-0",children:[Object(d.jsx)("thead",{className:"table-light",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Item"}),Object(d.jsx)("th",{children:"Quantity"}),Object(d.jsx)("th",{children:"Price"}),Object(d.jsx)("th",{children:"Total"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.quantity}),Object(d.jsx)("td",{children:e.price}),Object(d.jsx)("td",{children:e.total})]},t)}))})]})})})},b=function(e){var t=e.summary||{};return Object(d.jsx)("div",{className:"table-responsive",children:Object(d.jsxs)("table",{className:"table mb-0",children:[Object(d.jsx)("thead",{className:"table-light",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Description"}),Object(d.jsx)("th",{children:"Price"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Grand Total :"}),Object(d.jsx)("td",{children:t.gross_total})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Shipping Charge :"}),Object(d.jsx)("td",{children:t.shipping_charge})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Estimated Tax : "}),Object(d.jsx)("td",{children:t.tax})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Total :"}),Object(d.jsx)("td",{children:t.net_total})]})]})]})})},j=function(e){var t=e.details||{};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h5",{children:t.provider}),Object(d.jsxs)("address",{className:"mb-0 font-14 address-lg",children:[t.address_1,Object(d.jsx)("br",{}),t.address_2,Object(d.jsx)("br",{}),Object(d.jsx)("abbr",{title:"Phone",children:"P:"})," ",t.phone," ",Object(d.jsx)("br",{}),Object(d.jsx)("abbr",{title:"Mobile",children:"M:"})," ",t.mobile]})]})},u=function(e){var t=e.details||{};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{className:"list-unstyled mb-0",children:Object(d.jsxs)("li",{children:[Object(d.jsxs)("p",{className:"mb-2",children:[Object(d.jsx)("span",{className:"fw-bold me-2",children:"Payment Type:"})," ",t.type]}),Object(d.jsxs)("p",{className:"mb-2",children:[Object(d.jsx)("span",{className:"fw-bold me-2",children:"Provider:"})," ",t.provider]}),Object(d.jsxs)("p",{className:"mb-2",children:[Object(d.jsx)("span",{className:"fw-bold me-2",children:"Valid Date:"})," ",t.valid]}),Object(d.jsxs)("p",{className:"mb-0",children:[Object(d.jsx)("span",{className:"fw-bold me-2",children:"CVV:"})," xxx"]})]})})})},f=function(e){var t=e.details||{};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("i",{className:"mdi mdi-truck-fast h2 text-muted"}),Object(d.jsx)("h5",{children:Object(d.jsx)("b",{children:t.provider})}),Object(d.jsxs)("p",{className:"mb-1",children:[Object(d.jsx)("b",{children:"Order ID :"})," ",t.order_id]}),Object(d.jsxs)("p",{className:"mb-0",children:[Object(d.jsx)("b",{children:"Payment Mode :"})," ",t.payment_mode]})]})})};t.default=function(){var e={id:"#BM31",order_status:"Packed",items:[{id:1,name:"The Military Duffle Bag",quantity:3,price:"$128",total:"$384"},{id:2,name:"Mountain Basket Ball",quantity:1,price:"$199",total:"$199"},{id:3,name:"Wavex Canvas Messenger Bag",quantity:5,price:"$180",total:"$900"},{id:4,name:"The Utility Shirt",quantity:2,price:"$79",total:"$158"}],gross_total:"$1641",shipping_charge:"$23",tax:"$19.22",net_total:"$1683.22",shipping:{provider:"Stanley Jones",address_1:"795 Folsom Ave, Suite 600",address_2:"San Francisco, CA 94107",phone:"(123) 456-7890 ",mobile:"(+01) 12345 67890"},billing:{type:"Credit Card",provider:"Visa ending in 2851",valid:"02/2020"},delivery:{provider:"UPS Delivery",order_id:"#BM31",payment_mode:"COD"}};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{breadCrumbItems:[{label:"eCommerce",path:"/apps/ecommerce/order/details"},{label:"Order Details",path:"/apps/ecommerce/order/details",active:!0}],title:"Order Details"}),Object(d.jsx)(c.a,{children:Object(d.jsxs)(n.a,{children:[Object(d.jsx)(c.a,{className:"justify-content-center",children:Object(d.jsx)(n.a,{lg:7,md:10,sm:11,children:Object(d.jsxs)("div",{className:"horizontal-steps mt-4 mb-4 pb-5",children:[Object(d.jsxs)("div",{className:"horizontal-steps-content",children:[Object(d.jsx)("div",{className:"step-item",children:Object(d.jsx)(a.a,{placement:"bottom",overlay:Object(d.jsx)(i.a,{children:"20/08/2018 07:24 PM"}),children:Object(d.jsx)("span",{children:" Order Placed"})})}),Object(d.jsx)("div",{className:"step-item current",children:Object(d.jsx)(a.a,{placement:"bottom",overlay:Object(d.jsx)(i.a,{children:"21/08/2018 11:32 AM"}),children:Object(d.jsx)("span",{children:" Packed"})})}),Object(d.jsx)("div",{className:"step-item",children:Object(d.jsx)("span",{children:"Shipped"})}),Object(d.jsx)("div",{className:"step-item",children:Object(d.jsx)("span",{children:"Delivered"})})]}),Object(d.jsx)("div",{className:"process-line",style:{width:"33%"}})]})})}),Object(d.jsxs)(c.a,{children:[Object(d.jsx)(n.a,{lg:8,children:Object(d.jsx)(s.a,{children:Object(d.jsxs)(s.a.Body,{children:[Object(d.jsxs)("h4",{className:"header-title mb-3",children:["Items from Order ",e.id]}),Object(d.jsx)(o,{items:e.items})]})})}),Object(d.jsx)(n.a,{lg:4,children:Object(d.jsx)(s.a,{children:Object(d.jsxs)(s.a.Body,{children:[Object(d.jsx)("h4",{className:"header-title mb-3",children:"Order Summary"}),Object(d.jsx)(b,{summary:e})]})})})]}),Object(d.jsxs)(c.a,{children:[Object(d.jsx)(n.a,{lg:4,children:Object(d.jsx)(s.a,{children:Object(d.jsxs)(s.a.Body,{children:[Object(d.jsx)("h4",{className:"header-title mb-3",children:"Shipping Information"}),Object(d.jsx)(j,{details:e.shipping})]})})}),Object(d.jsx)(n.a,{lg:4,children:Object(d.jsx)(s.a,{children:Object(d.jsxs)(s.a.Body,{children:[Object(d.jsx)("h4",{className:"header-title mb-3",children:"Billing Information"}),Object(d.jsx)(u,{details:e.billing})]})})}),Object(d.jsx)(n.a,{lg:4,children:Object(d.jsx)(s.a,{children:Object(d.jsxs)(s.a.Body,{children:[Object(d.jsx)("h4",{className:"header-title mb-3",children:"Delivery Info"}),Object(d.jsx)(f,{details:e.delivery})]})})})]})]})})]})}}}]);
//# sourceMappingURL=108.ae493b1e.chunk.js.map