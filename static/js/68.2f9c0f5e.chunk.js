(this.webpackJsonpwhaoobay=this.webpackJsonpwhaoobay||[]).push([[68],{1021:function(e,t,a){"use strict";a.r(t);a(0);var r=a(148),n=a(74),c=a(194),i=a(125),s=a(747),o=a(1);t.default=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.a,{breadCrumbItems:[{label:"Forms",path:"/forms/upload"},{label:"Form Upload",path:"/forms/upload",active:!0}],title:"Form Upload"}),Object(o.jsx)(r.a,{children:Object(o.jsx)(n.a,{children:Object(o.jsx)(c.a,{children:Object(o.jsxs)(c.a.Body,{children:[Object(o.jsx)("h4",{className:"header-title mb-3",children:"Dropzone File Upload"}),Object(o.jsx)("p",{className:"text-muted font-13 m-b-30",children:"DropzoneJS is an open source library that provides drag\u2019n\u2019drop file uploads with image previews."}),Object(o.jsx)(s.a,{onFileUpload:function(e){console.log(e)}})]})})})})]})}},120:function(e,t,a){"use strict";var r=a(0);t.a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t}},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a(120);function c(e){var t=Object(n.a)(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a(122);function c(e,t,a,c){void 0===c&&(c=!1);var i=Object(n.a)(a);Object(r.useEffect)((function(){var a="function"===typeof e?e():e;return a.addEventListener(t,i,c),function(){return a.removeEventListener(t,i,c)}}),[e])}},125:function(e,t,a){"use strict";a(0);var r=a(148),n=a(74),c=a(154),i=a(1);t.a=function(e){return Object(i.jsx)(r.a,{children:Object(i.jsx)(n.a,{children:Object(i.jsxs)("div",{className:"page-title-box",children:[Object(i.jsx)("div",{className:"page-title-right",children:Object(i.jsxs)(c.a,{listProps:{className:"m-0"},children:[Object(i.jsx)(c.a.Item,{href:"/",children:"Home"}),e.breadCrumbItems.map((function(e,t){return e.active?Object(i.jsx)(c.a.Item,{active:!0,children:e.label},t):Object(i.jsx)(c.a.Item,{href:e.path,children:e.label},t)}))]})}),Object(i.jsx)("h4",{className:"page-title",children:e.title})]})})})}},126:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(r){"object"===typeof window&&(a=window)}e.exports=a},127:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(){return Object(r.useState)(null)}},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},129:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){t.current=e})),t.current}},130:function(e,t,a){"use strict";var r=a(16),n=a(0),c=(a(127),a(120),a(122));a(123);a(128),a(129);a(151),new WeakMap;var i=a(133),s=a(1),o=["onKeyDown"];var u=n.forwardRef((function(e,t){var a,n=e.onKeyDown,u=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o),l=Object(i.b)(Object.assign({tagName:"a"},u)),d=Object(r.a)(l,1)[0],b=Object(c.a)((function(e){d.onKeyDown(e),null==n||n(e)}));return((a=u.href)&&"#"!==a.trim()||u.role)&&"button"!==u.role?Object(s.jsx)("a",Object.assign({ref:t},u,{onKeyDown:n})):Object(s.jsx)("a",Object.assign({ref:t},u,d,{onKeyDown:b}))}));u.displayName="Anchor";t.a=u},132:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(42);var n=a(37);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},133:function(e,t,a){"use strict";a.d(t,"b",(function(){return s}));var r=a(16),n=a(0),c=a(1),i=["as","disabled"];function s(e){var t=e.tagName,a=e.disabled,r=e.href,n=e.target,c=e.rel,i=e.onClick,s=e.tabIndex,o=void 0===s?0:s,u=e.type;t||(t=null!=r||null!=n||null!=c?"a":"button");var l={tagName:t};if("button"===t)return[{type:u||"button",disabled:a},l];var d=function(e){(a||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),a?e.stopPropagation():null==i||i(e)};return"a"===t&&(r||(r="#"),a&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:a?void 0:o,href:r,target:"a"===t?n:void 0,"aria-disabled":a||void 0,rel:"a"===t?c:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},l]}var o=n.forwardRef((function(e,t){var a=e.as,n=e.disabled,o=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,i),u=s(Object.assign({tagName:a,disabled:n},o)),l=Object(r.a)(u,2),d=l[0],b=l[1].tagName;return Object(c.jsx)(b,Object.assign({},o,d,{ref:t}))}));o.displayName="Button",t.a=o},138:function(e,t,a){"use strict";var r=a(3),n=a(0),c=a(12),i=a.n(c),s=a(1);t.a=function(e){return n.forwardRef((function(t,a){return Object(s.jsx)("div",Object(r.a)(Object(r.a)({},t),{},{ref:a,className:i()(t.className,e)}))}))}},142:function(e,t,a){"use strict";var r=a(0),n=r.createContext(null);n.displayName="CardHeaderContext",t.a=n},151:function(e,t,a){"use strict";(function(e){var r=a(0),n="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,c="undefined"!==typeof document;t.a=c||n?r.useLayoutEffect:r.useEffect}).call(this,a(126))},194:function(e,t,a){"use strict";var r=a(3),n=a(11),c=a(12),i=a.n(c),s=a(0),o=a(13),u=a(49),l=a(138),d=a(1),b=s.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.variant,u=e.as,l=void 0===u?"img":u,b=Object(n.a)(e,["bsPrefix","className","variant","as"]),j=Object(o.b)(a,"card-img");return Object(d.jsx)(l,Object(r.a)({ref:t,className:i()(s?"".concat(j,"-").concat(s):j,c)},b))}));b.displayName="CardImg";var j=b,f=a(142),O=s.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,u=e.as,l=void 0===u?"div":u,b=Object(n.a)(e,["bsPrefix","className","as"]),j=Object(o.b)(a,"card-header"),O=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:j}}),[j]);return Object(d.jsx)(f.a.Provider,{value:O,children:Object(d.jsx)(l,Object(r.a)(Object(r.a)({ref:t},b),{},{className:i()(c,j)}))})}));O.displayName="CardHeader";var m=O,p=Object(l.a)("h5"),v=Object(l.a)("h6"),h=Object(u.a)("card-body"),x=Object(u.a)("card-title",{Component:p}),g=Object(u.a)("card-subtitle",{Component:v}),y=Object(u.a)("card-link",{Component:"a"}),N=Object(u.a)("card-text",{Component:"p"}),w=Object(u.a)("card-footer"),P=Object(u.a)("card-img-overlay"),C=s.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.bg,u=e.text,l=e.border,b=e.body,j=e.children,f=e.as,O=void 0===f?"div":f,m=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),p=Object(o.b)(a,"card");return Object(d.jsx)(O,Object(r.a)(Object(r.a)({ref:t},m),{},{className:i()(c,p,s&&"bg-".concat(s),u&&"text-".concat(u),l&&"border-".concat(l)),children:b?Object(d.jsx)(h,{children:j}):j}))}));C.displayName="Card",C.defaultProps={body:!1};t.a=Object.assign(C,{Img:j,Title:x,Subtitle:g,Body:h,Link:y,Text:N,Header:m,Footer:w,ImgOverlay:P})},747:function(e,t,a){"use strict";var r=a(3),n=a(132),c=a(16),i=a(0),s=a(27),o=a(194),u=a(148),l=a(74),d=a(862),b=a(1),j=function(e){var t=Object(i.useState)([]),a=Object(c.a)(t,2),j=a[0],f=a[1],O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=1024,r=t<0?0:t,n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],c=Math.floor(Math.log(e)/Math.log(a));return parseFloat((e/Math.pow(a,c)).toFixed(r))+" "+n[c]};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,Object(r.a)(Object(r.a)({},e),{},{onDrop:function(t){return function(t){var a,r=t;e.showPreview&&(t.map((function(e){return Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:O(e.size)})})),(a=r=Object(n.a)(j)).push.apply(a,Object(n.a)(t)),f(r)),e.onFileUpload&&e.onFileUpload(r)}(t)},children:function(e){var t=e.getRootProps,a=e.getInputProps;return Object(b.jsx)("div",{className:"dropzone",children:Object(b.jsxs)("div",Object(r.a)(Object(r.a)({className:"dz-message needsclick"},t()),{},{children:[Object(b.jsx)("input",Object(r.a)({},a())),Object(b.jsx)("i",{className:"h3 text-muted dripicons-cloud-upload"}),Object(b.jsx)("h5",{children:"Drop files here or click to upload."}),Object(b.jsxs)("span",{className:"text-muted font-13",children:["(This is just a demo dropzone. Selected files are ",Object(b.jsx)("strong",{children:"not"})," actually uploaded.)"]})]}))})}})),e.showPreview&&j.length>0&&Object(b.jsx)("div",{className:"dropzone-previews mt-3",id:"uploadPreviewTemplate",children:(j||[]).map((function(e,t){return Object(b.jsx)(o.a,{className:"mt-1 mb-0 shadow-none border",children:Object(b.jsx)("div",{className:"p-2",children:Object(b.jsxs)(u.a,{className:"align-items-center",children:[e.preview&&Object(b.jsx)(l.a,{className:"col-auto",children:Object(b.jsx)("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:e.name,src:e.preview})}),!e.preview&&Object(b.jsx)(l.a,{className:"col-auto",children:Object(b.jsx)("div",{className:"avatar-sm",children:Object(b.jsx)("span",{className:"avatar-title bg-primary rounded",children:e.type.split("/")[0]})})}),Object(b.jsxs)(l.a,{className:"ps-0",children:[Object(b.jsx)(s.b,{to:"#",className:"text-muted fw-bold",children:e.name}),Object(b.jsx)("p",{className:"mb-0",children:Object(b.jsx)("strong",{children:e.formattedSize})})]}),Object(b.jsx)(l.a,{className:"text-end",children:Object(b.jsx)(s.b,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:Object(b.jsx)("i",{className:"dripicons-cross",onClick:function(){return function(e){var t=Object(n.a)(j);t.splice(t.indexOf(e),1),f(t)}(t)}})})})]})})},t+"-file")}))})]})};j.defaultProps={showPreview:!0},t.a=j}}]);
//# sourceMappingURL=68.2f9c0f5e.chunk.js.map