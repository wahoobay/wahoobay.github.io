(this.webpackJsonpwahoobay=this.webpackJsonpwahoobay||[]).push([[105],{125:function(e,t,a){"use strict";a(0);var c=a(148),n=a(74),s=a(154),r=a(1);t.a=function(e){return Object(r.jsx)(c.a,{children:Object(r.jsx)(n.a,{children:Object(r.jsxs)("div",{className:"page-title-box",children:[Object(r.jsx)("div",{className:"page-title-right",children:Object(r.jsxs)(s.a,{listProps:{className:"m-0"},children:[Object(r.jsx)(s.a.Item,{href:"/",children:"Home"}),e.breadCrumbItems.map((function(e,t){return e.active?Object(r.jsx)(s.a.Item,{active:!0,children:e.label},t):Object(r.jsx)(s.a.Item,{href:e.path,children:e.label},t)}))]})}),Object(r.jsx)("h4",{className:"page-title",children:e.title})]})})})}},132:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(42);var n=a(37);function s(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},148:function(e,t,a){"use strict";var c=a(3),n=a(11),s=a(12),r=a.n(s),i=a(0),l=a(13),j=a(1),d=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,i=e.as,d=void 0===i?"div":i,o=Object(n.a)(e,["bsPrefix","className","as"]),b=Object(l.b)(a,"row"),h=Object(l.a)(),u="".concat(b,"-cols"),O=[];return h.forEach((function(e){var t,a=o[e];delete o[e],t=null!=a&&"object"===typeof a?a.cols:a;var c="xs"!==e?"-".concat(e):"";null!=t&&O.push("".concat(u).concat(c,"-").concat(t))})),Object(j.jsx)(d,Object(c.a)(Object(c.a)({ref:t},o),{},{className:r.a.apply(void 0,[s,b].concat(O))}))}));d.displayName="Row",t.a=d},154:function(e,t,a){"use strict";var c=a(3),n=a(11),s=a(12),r=a.n(s),i=a(0),l=a(13),j=a(130),d=a(1),o=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.active,i=e.children,o=e.className,b=e.as,h=void 0===b?"li":b,u=e.linkAs,O=void 0===u?j.a:u,x=e.linkProps,m=e.href,f=e.title,v=e.target,p=Object(n.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),N=Object(l.b)(a,"breadcrumb-item");return Object(d.jsx)(h,Object(c.a)(Object(c.a)({ref:t},p),{},{className:r()(N,o,{active:s}),"aria-current":s?"page":void 0,children:s?i:Object(d.jsx)(O,Object(c.a)(Object(c.a)({},x),{},{href:m,title:f,target:v,children:i}))}))}));o.displayName="BreadcrumbItem",o.defaultProps={active:!1,linkProps:{}};var b=o,h=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,i=e.listProps,j=e.children,o=e.label,b=e.as,h=void 0===b?"nav":b,u=Object(n.a)(e,["bsPrefix","className","listProps","children","label","as"]),O=Object(l.b)(a,"breadcrumb");return Object(d.jsx)(h,Object(c.a)(Object(c.a)({"aria-label":o,className:s,ref:t},u),{},{children:Object(d.jsx)("ol",Object(c.a)(Object(c.a)({},i),{},{className:r()(O,null==i?void 0:i.className),children:j}))}))}));h.displayName="Breadcrumb",h.defaultProps={label:"breadcrumb",listProps:{}};t.a=Object.assign(h,{Item:b})},156:function(e,t,a){"use strict";var c=a(0),n=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(c.useMemo)((function(){return function(e,t){var a=n(e),c=n(t);return function(e){a&&a(e),c&&c(e)}}(e,t)}),[e,t])}},197:function(e,t,a){"use strict";var c=a(0),n=c.createContext(null);n.displayName="InputGroupContext",t.a=n},352:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(28),n=a.n(c),s=n.a.oneOf(["start","end"]),r=n.a.oneOfType([s,n.a.shape({sm:s}),n.a.shape({md:s}),n.a.shape({lg:s}),n.a.shape({xl:s}),n.a.shape({xxl:s}),n.a.object])},712:function(e,t,a){"use strict";var c=a(3),n=a(11),s=a(12),r=a.n(s),i=a(0),l=a(13),j=a(1),d=i.forwardRef((function(e,t){var a=e.bsPrefix,s=e.size,i=e.vertical,d=e.className,o=e.as,b=void 0===o?"div":o,h=Object(n.a)(e,["bsPrefix","size","vertical","className","as"]),u=Object(l.b)(a,"btn-group"),O=u;return i&&(O="".concat(u,"-vertical")),Object(j.jsx)(b,Object(c.a)(Object(c.a)({},h),{},{ref:t,className:r()(d,O,s&&"".concat(u,"-").concat(s))}))}));d.displayName="ButtonGroup",d.defaultProps={vertical:!1,role:"group"},t.a=d},900:function(e,t,a){"use strict";var c=a(3),n=a(11),s=a(0),r=a(28),i=a.n(r),l=a(647),j=a(484),d=a(483),o=a(352),b=a(1),h={id:i.a.string,href:i.a.string,onClick:i.a.func,title:i.a.node.isRequired,disabled:i.a.bool,align:o.a,menuRole:i.a.string,renderMenuOnMount:i.a.bool,rootCloseEvent:i.a.string,menuVariant:i.a.oneOf(["dark"]),bsPrefix:i.a.string,variant:i.a.string,size:i.a.string},u=s.forwardRef((function(e,t){var a=e.title,s=e.children,r=e.bsPrefix,i=e.rootCloseEvent,o=e.variant,h=e.size,u=e.menuRole,O=e.renderMenuOnMount,x=e.disabled,m=e.href,f=e.id,v=e.menuVariant,p=Object(n.a)(e,["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id","menuVariant"]);return Object(b.jsxs)(l.a,Object(c.a)(Object(c.a)({ref:t},p),{},{children:[Object(b.jsx)(j.a,{id:f,href:m,size:h,variant:o,disabled:x,childBsPrefix:r,children:a}),Object(b.jsx)(d.a,{role:u,renderOnMount:O,rootCloseEvent:i,variant:v,children:s})]}))}));u.displayName="DropdownButton",u.propTypes=h,t.a=u},996:function(e,t,a){"use strict";a.r(t);a(0);var c=a(194),n=a(199),s=a(712),r=a(900),i=a(647),l=a(148),j=a(74),d=a(12),o=a.n(d),b=a(125),h=a(1),u=[{name:"Primary",color:"primary"},{name:"Secondary",color:"secondary"},{name:"Success",color:"success"},{name:"Danger",color:"danger"},{name:"Warning",color:"warning"},{name:"Info",color:"info"},{name:"Light",color:"light"},{name:"Dark",color:"dark"}],O=function(){return Object(h.jsx)(c.a,{children:Object(h.jsxs)(c.a.Body,{children:[Object(h.jsx)("h4",{className:"header-title",children:"Default Buttons"}),Object(h.jsxs)("p",{className:"text-muted font-14",children:["Use the button classes on an ",Object(h.jsx)("code",{children:"<a>"}),", ",Object(h.jsx)("code",{children:"<button>"}),", or"," ",Object(h.jsx)("code",{children:"<input>"})," element."]}),Object(h.jsxs)("div",{className:"button-list",children:[u.map((function(e,t){return Object(h.jsx)(n.a,{variant:e.color,children:e.name},t)})),Object(h.jsx)(n.a,{variant:"link",children:"Link"})]})]})})},x=function(){return Object(h.jsx)(c.a,{children:Object(h.jsxs)(c.a.Body,{children:[Object(h.jsx)("h4",{className:"header-title",children:"Button Outline"}),Object(h.jsxs)("p",{className:"text-muted font-14",children:["Use a classes ",Object(h.jsx)("code",{children:".btn-outline-**"})," to quickly create a bordered buttons."]}),Object(h.jsx)("div",{className:"button-list",children:u.map((function(e,t){return Object(h.jsx)(n.a,{variant:"outline-"+e.color,children:e.name},t)}))})]})})},m=function(){return Object(h.jsx)(c.a,{children:Object(h.jsxs)(c.a.Body,{children:[Object(h.jsx)("h4",{className:"header-title",children:"Button-Rounded"}),Object(h.jsxs)("p",{className:"text-muted font-14",children:["Add ",Object(h.jsx)("code",{children:".btn-rounded"})," to default button to get rounded corners."]}),Object(h.jsxs)("div",{className:"button-list",children:[u.map((function(e,t){return Object(h.jsx)(n.a,{variant:e.color,className:"btn-rounded",children:e.name},t)})),Object(h.jsx)(n.a,{variant:"link",className:"btn-rounded",children:"Link"})]})]})})},f=function(){return Object(h.jsx)(c.a,{children:Object(h.jsxs)(c.a.Body,{children:[Object(h.jsx)("h4",{className:"header-title",children:"Button Outline Rounded"}),Object(h.jsxs)("p",{className:"text-muted font-14",children:["Use a classes ",Object(h.jsx)("code",{children:".btn-outline-**"})," to quickly create a bordered buttons."]}),Object(h.jsx)("div",{className:"button-list",children:u.map((function(e,t){return Object(h.jsx)(n.a,{variant:"outline-"+e.color,className:"btn-rounded",children:e.name},t)}))})]})})},v=function(){return Object(h.jsx)(c.a,{children:Object(h.jsxs)(c.a.Body,{children:[Object(h.jsx)("h4",{className:"header-title",children:"Button-Sizes"}),Object(h.jsxs)("p",{className:"text-muted font-14",children:["Add ",Object(h.jsx)("code",{children:".btn-lg"}),", ",Object(h.jsx)("code",{children:".btn-sm"})," for additional sizes."]}),Object(h.jsxs)("div",{className:"button-list",children:[Object(h.jsx)(n.a,{size:"lg",variant:"primary",children:"Large"}),Object(h.jsx)(n.a,{variant:"info",children:"Normal"}),Object(h.jsx)(n.a,{size:"sm",variant:"success",children:"Small"})]})]})})},p=function(){return Object(h.jsx)(c.a,{children:Object(h.jsxs)(c.a.Body,{children:[Object(h.jsx)("h4",{className:"header-title",children:"Button-Disabled"}),Object(h.jsxs)("p",{className:"text-muted font-14",children:["Add the ",Object(h.jsx)("code",{children:"disabled"})," attribute to ",Object(h.jsx)("code",{children:"<button>"})," buttons."]}),Object(h.jsxs)("div",{className:"button-list",children:[Object(h.jsx)(n.a,{disabled:!0,variant:"info",children:"Info"}),Object(h.jsx)(n.a,{disabled:!0,variant:"success",children:"Success"}),Object(h.jsx)(n.a,{disabled:!0,variant:"danger",children:"Danger"}),Object(h.jsx)(n.a,{disabled:!0,variant:"dark",children:"Dark"})]})]})})},N=function(){return Object(h.jsx)(c.a,{children:Object(h.jsxs)(c.a.Body,{children:[Object(h.jsx)("h4",{className:"header-title",children:"Block Level Buttons"}),Object(h.jsxs)("p",{className:"text-muted font-14",children:["Create block level buttons by adding class ",Object(h.jsx)("code",{children:".d-grid"})," to parent div."]}),Object(h.jsx)("div",{className:"button-list",children:Object(h.jsxs)("div",{className:"d-grid",children:[Object(h.jsx)(n.a,{variant:"primary",children:"Block Button"}),Object(h.jsx)(n.a,{variant:"info",children:"Block Button"}),Object(h.jsx)(n.a,{variant:"success",children:"Block Button"})]})})]})})},g=function(){var e=["mdi-heart-outline","mdi-window-close","mdi-music","mdi-star","mdi mdi-thumb-up-outline","mdi mdi-keyboard","mdi mdi-wrench","mdi-star-outline","mdi-heart"];return Object(h.jsx)(c.a,{children:Object(h.jsxs)(c.a.Body,{children:[Object(h.jsx)("h4",{className:"header-title",children:"Icon Button"}),Object(h.jsx)("p",{className:"text-muted font-14",children:"Icon only button."}),Object(h.jsxs)("div",{className:"button-list",children:[u.map((function(t,a){return Object(h.jsx)(n.a,{variant:t.color,className:"btn-icon",children:Object(h.jsx)("i",{className:o()("mdi",e[a],"ms-1","me-1")})},a)})),Object(h.jsx)("br",{}),Object(h.jsxs)(n.a,{type:"button",variant:"light",children:[Object(h.jsx)("i",{className:"mdi mdi-heart me-1"})," ",Object(h.jsx)("span",{children:"Like"})]}),Object(h.jsxs)(n.a,{type:"button",variant:"warning",children:[Object(h.jsx)("i",{className:"mdi mdi-rocket me-1"})," ",Object(h.jsx)("span",{children:"Launch"})]}),Object(h.jsxs)(n.a,{type:"button",variant:"info",children:[Object(h.jsx)("i",{className:"mdi mdi-cloud me-1"})," ",Object(h.jsx)("span",{children:"Cloud Hosting"})]}),Object(h.jsx)("br",{}),Object(h.jsxs)(n.a,{type:"button",variant:"outline-success",children:[Object(h.jsx)("i",{className:"uil-money-withdrawal"})," Money"]}),Object(h.jsxs)(n.a,{type:"button",variant:"outline-primary",children:[Object(h.jsx)("i",{className:"uil-paypal"})," PayPal"]}),Object(h.jsxs)(n.a,{type:"button",variant:"outline-danger",children:[Object(h.jsx)("i",{className:"uil-cog"})," Settings"]})]})]})})},y=function(){return Object(h.jsx)(c.a,{children:Object(h.jsxs)(c.a.Body,{children:[Object(h.jsx)("h4",{className:"header-title",children:"Button Group"}),Object(h.jsxs)("p",{className:"text-muted font-14",children:["Wrap a series of buttons with ",Object(h.jsx)("code",{children:".btn"})," in ",Object(h.jsx)("code",{children:".btn-group"}),"."]}),Object(h.jsxs)(s.a,{className:"mb-2",children:[Object(h.jsx)(n.a,{variant:"light",children:"Left"}),Object(h.jsx)(n.a,{variant:"light",children:"Middle"}),Object(h.jsx)(n.a,{variant:"light",children:"Right"})]}),Object(h.jsx)("br",{}),Object(h.jsxs)(s.a,{className:"mb-2 me-1",children:[Object(h.jsx)(n.a,{variant:"light",children:"1"}),Object(h.jsx)(n.a,{variant:"light",children:"2"}),Object(h.jsx)(n.a,{variant:"light",children:"3"}),Object(h.jsx)(n.a,{variant:"light",children:"4"})]}),Object(h.jsxs)(s.a,{className:"mb-2 me-1",children:[Object(h.jsx)(n.a,{variant:"light",children:"5"}),Object(h.jsx)(n.a,{variant:"light",children:"6"}),Object(h.jsx)(n.a,{variant:"light",children:"7"})]}),Object(h.jsx)(s.a,{className:"mb-2",children:Object(h.jsx)(n.a,{variant:"light",children:"8"})}),Object(h.jsx)("br",{}),Object(h.jsxs)(s.a,{className:"mb-2",children:[Object(h.jsx)(n.a,{variant:"light",children:"1"}),Object(h.jsx)(n.a,{variant:"primary",children:"2"}),Object(h.jsx)(n.a,{variant:"light",children:"3"}),Object(h.jsxs)(r.a,{as:s.a,title:"Dropdown",variant:"light",children:[Object(h.jsx)(i.a.Item,{eventKey:"1",children:"Dropdown link"}),Object(h.jsx)(i.a.Item,{eventKey:"2",children:"Dropdown link"})]})]}),Object(h.jsxs)(l.a,{children:[Object(h.jsx)(j.a,{md:3,children:Object(h.jsxs)(s.a,{vertical:!0,children:[Object(h.jsx)(n.a,{variant:"light",children:"Top"}),Object(h.jsx)(n.a,{variant:"light",children:"Middle"}),Object(h.jsx)(n.a,{variant:"light",children:"Bottom"})]})}),Object(h.jsx)(j.a,{md:3,children:Object(h.jsxs)(s.a,{vertical:!0,children:[Object(h.jsx)(n.a,{variant:"light",children:"Button 1"}),Object(h.jsx)(n.a,{variant:"light",children:"Button 2"}),Object(h.jsxs)(r.a,{as:s.a,title:"Button 3",variant:"light",children:[Object(h.jsx)(i.a.Item,{eventKey:"1",children:"Dropdown link"}),Object(h.jsx)(i.a.Item,{eventKey:"2",children:"Dropdown link"})]})]})})]})]})})};t.default=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b.a,{breadCrumbItems:[{label:"Base UI",path:"/ui/buttons"},{label:"Buttons",path:"/ui/buttons",active:!0}],title:"Buttons"}),Object(h.jsxs)(l.a,{children:[Object(h.jsx)(j.a,{xl:6,children:Object(h.jsx)(O,{})}),Object(h.jsx)(j.a,{xl:6,children:Object(h.jsx)(m,{})}),Object(h.jsx)(j.a,{xl:6,children:Object(h.jsx)(x,{})}),Object(h.jsx)(j.a,{xl:6,children:Object(h.jsx)(f,{})}),Object(h.jsx)(j.a,{xl:6,children:Object(h.jsx)(v,{})}),Object(h.jsx)(j.a,{xl:6,children:Object(h.jsx)(p,{})}),Object(h.jsx)(j.a,{xl:6,children:Object(h.jsx)(g,{})}),Object(h.jsx)(j.a,{xl:6,children:Object(h.jsx)(N,{})}),Object(h.jsx)(j.a,{xl:6,children:Object(h.jsx)(y,{})})]})]})}}}]);
//# sourceMappingURL=105.57ffa1d7.chunk.js.map