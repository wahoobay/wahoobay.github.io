(this.webpackJsonpwhaoobay=this.webpackJsonpwhaoobay||[]).push([[110],{125:function(e,t,c){"use strict";c(0);var s=c(148),a=c(74),n=c(154),r=c(1);t.a=function(e){return Object(r.jsx)(s.a,{children:Object(r.jsx)(a.a,{children:Object(r.jsxs)("div",{className:"page-title-box",children:[Object(r.jsx)("div",{className:"page-title-right",children:Object(r.jsxs)(n.a,{listProps:{className:"m-0"},children:[Object(r.jsx)(n.a.Item,{href:"/",children:"Home"}),e.breadCrumbItems.map((function(e,t){return e.active?Object(r.jsx)(n.a.Item,{active:!0,children:e.label},t):Object(r.jsx)(n.a.Item,{href:e.path,children:e.label},t)}))]})}),Object(r.jsx)("h4",{className:"page-title",children:e.title})]})})})}},148:function(e,t,c){"use strict";var s=c(3),a=c(11),n=c(12),r=c.n(n),i=c(0),l=c(13),o=c(1),u=i.forwardRef((function(e,t){var c=e.bsPrefix,n=e.className,i=e.as,u=void 0===i?"div":i,d=Object(a.a)(e,["bsPrefix","className","as"]),j=Object(l.b)(c,"row"),b=Object(l.a)(),h="".concat(j,"-cols"),O=[];return b.forEach((function(e){var t,c=d[e];delete d[e],t=null!=c&&"object"===typeof c?c.cols:c;var s="xs"!==e?"-".concat(e):"";null!=t&&O.push("".concat(h).concat(s,"-").concat(t))})),Object(o.jsx)(u,Object(s.a)(Object(s.a)({ref:t},d),{},{className:r.a.apply(void 0,[n,j].concat(O))}))}));u.displayName="Row",t.a=u},154:function(e,t,c){"use strict";var s=c(3),a=c(11),n=c(12),r=c.n(n),i=c(0),l=c(13),o=c(130),u=c(1),d=i.forwardRef((function(e,t){var c=e.bsPrefix,n=e.active,i=e.children,d=e.className,j=e.as,b=void 0===j?"li":j,h=e.linkAs,O=void 0===h?o.a:h,m=e.linkProps,x=e.href,f=e.title,p=e.target,v=Object(a.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),N=Object(l.b)(c,"breadcrumb-item");return Object(u.jsx)(b,Object(s.a)(Object(s.a)({ref:t},v),{},{className:r()(N,d,{active:n}),"aria-current":n?"page":void 0,children:n?i:Object(u.jsx)(O,Object(s.a)(Object(s.a)({},m),{},{href:x,title:f,target:p,children:i}))}))}));d.displayName="BreadcrumbItem",d.defaultProps={active:!1,linkProps:{}};var j=d,b=i.forwardRef((function(e,t){var c=e.bsPrefix,n=e.className,i=e.listProps,o=e.children,d=e.label,j=e.as,b=void 0===j?"nav":j,h=Object(a.a)(e,["bsPrefix","className","listProps","children","label","as"]),O=Object(l.b)(c,"breadcrumb");return Object(u.jsx)(b,Object(s.a)(Object(s.a)({"aria-label":d,className:n,ref:t},h),{},{children:Object(u.jsx)("ol",Object(s.a)(Object(s.a)({},i),{},{className:r()(O,null==i?void 0:i.className),children:o}))}))}));b.displayName="Breadcrumb",b.defaultProps={label:"breadcrumb",listProps:{}};t.a=Object.assign(b,{Item:j})},157:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var s=c(0),a=c(184);function n(e){var t=Object(a.a)(e);return Object(s.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},184:function(e,t,c){"use strict";var s=c(0);t.a=function(e){var t=Object(s.useRef)(e);return Object(s.useEffect)((function(){t.current=e}),[e]),t}},224:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var s=c(0);function a(e){var t=function(e){var t=Object(s.useRef)(e);return t.current=e,t}(e);Object(s.useEffect)((function(){return function(){return t.current()}}),[])}},286:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var s=c(0);var a=c(224),n=Math.pow(2,31)-1;function r(e,t,c){var s=c-Date.now();e.current=s<=n?setTimeout(t,s):setTimeout((function(){return r(e,t,c)}),n)}function i(){var e=function(){var e=Object(s.useRef)(!0),t=Object(s.useRef)((function(){return e.current}));return Object(s.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=Object(s.useRef)();return Object(a.a)((function(){return clearTimeout(t.current)})),Object(s.useMemo)((function(){var c=function(){return clearTimeout(t.current)};return{set:function(s,a){void 0===a&&(a=0),e()&&(c(),a<=n?t.current=setTimeout(s,a):r(t,s,Date.now()+a))},clear:c}}),[])}},962:function(e,t,c){"use strict";var s=c(3),a=c(16),n=c(11),r=c(157),i=c(0);var l=function(e,t){var c=Object(i.useRef)(!0);Object(i.useEffect)((function(){if(!c.current)return e();c.current=!1}),t)},o=c(184),u=c(286),d=c(130),j=c(12),b=c.n(j),h=c(168),O=c(49),m=Object(O.a)("carousel-caption"),x=c(13),f=c(1),p=i.forwardRef((function(e,t){var c=e.as,a=void 0===c?"div":c,r=e.bsPrefix,i=e.className,l=Object(n.a)(e,["as","bsPrefix","className"]),o=b()(i,Object(x.b)(r,"carousel-item"));return Object(f.jsx)(a,Object(s.a)(Object(s.a)({ref:t},l),{},{className:o}))}));p.displayName="CarouselItem";var v=p,N=c(51),g=c(219),w=c(228),y=c(218),k={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:Object(f.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:Object(f.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var I=i.forwardRef((function(e,t){var c=Object(h.a)(e,{activeIndex:"onSelect"}),j=c.as,O=void 0===j?"div":j,m=c.bsPrefix,p=c.slide,v=c.fade,k=c.controls,I=c.indicators,S=c.indicatorLabels,C=c.activeIndex,P=c.onSelect,T=c.onSlide,R=c.onSlid,E=c.interval,L=c.keyboard,M=c.onKeyDown,A=c.pause,B=c.onMouseOver,F=c.onMouseOut,D=c.wrap,H=c.touch,K=c.onTouchStart,W=c.onTouchMove,J=c.onTouchEnd,X=c.prevIcon,U=c.prevLabel,Y=c.nextIcon,q=c.nextLabel,z=c.variant,G=c.className,Q=c.children,V=Object(n.a)(c,["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"]),Z=Object(x.b)(m,"carousel"),$=Object(x.c)(),_=Object(i.useRef)(null),ee=Object(i.useState)("next"),te=Object(a.a)(ee,2),ce=te[0],se=te[1],ae=Object(i.useState)(!1),ne=Object(a.a)(ae,2),re=ne[0],ie=ne[1],le=Object(i.useState)(!1),oe=Object(a.a)(le,2),ue=oe[0],de=oe[1],je=Object(i.useState)(C||0),be=Object(a.a)(je,2),he=be[0],Oe=be[1];ue||C===he||(_.current?se(_.current):se((C||0)>he?"next":"prev"),p&&de(!0),Oe(C||0)),Object(i.useEffect)((function(){_.current&&(_.current=null)}));var me,xe=0;Object(N.a)(Q,(function(e,t){++xe,t===C&&(me=e.props.interval)}));var fe=Object(o.a)(me),pe=Object(i.useCallback)((function(e){if(!ue){var t=he-1;if(t<0){if(!D)return;t=xe-1}_.current="prev",null==P||P(t,e)}}),[ue,he,P,D,xe]),ve=Object(r.a)((function(e){if(!ue){var t=he+1;if(t>=xe){if(!D)return;t=0}_.current="next",null==P||P(t,e)}})),Ne=Object(i.useRef)();Object(i.useImperativeHandle)(t,(function(){return{element:Ne.current,prev:pe,next:ve}}));var ge=Object(r.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(Ne.current)&&($?pe():ve())})),we="next"===ce?"start":"end";l((function(){p||(null==T||T(he,we),null==R||R(he,we))}),[he]);var ye="".concat(Z,"-item-").concat(ce),ke="".concat(Z,"-item-").concat(we),Ie=Object(i.useCallback)((function(e){Object(w.a)(e),null==T||T(he,we)}),[T,he,we]),Se=Object(i.useCallback)((function(){de(!1),null==R||R(he,we)}),[R,he,we]),Ce=Object(i.useCallback)((function(e){if(L&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void($?ve(e):pe(e));case"ArrowRight":return e.preventDefault(),void($?pe(e):ve(e))}null==M||M(e)}),[L,M,pe,ve,$]),Pe=Object(i.useCallback)((function(e){"hover"===A&&ie(!0),null==B||B(e)}),[A,B]),Te=Object(i.useCallback)((function(e){ie(!1),null==F||F(e)}),[F]),Re=Object(i.useRef)(0),Ee=Object(i.useRef)(0),Le=Object(u.a)(),Me=Object(i.useCallback)((function(e){Re.current=e.touches[0].clientX,Ee.current=0,"hover"===A&&ie(!0),null==K||K(e)}),[A,K]),Ae=Object(i.useCallback)((function(e){e.touches&&e.touches.length>1?Ee.current=0:Ee.current=e.touches[0].clientX-Re.current,null==W||W(e)}),[W]),Be=Object(i.useCallback)((function(e){if(H){var t=Ee.current;Math.abs(t)>40&&(t>0?pe(e):ve(e))}"hover"===A&&Le.set((function(){ie(!1)}),E||void 0),null==J||J(e)}),[H,A,pe,ve,Le,E,J]),Fe=null!=E&&!re&&!ue,De=Object(i.useRef)();Object(i.useEffect)((function(){var e,t;if(Fe){var c=$?pe:ve;return De.current=window.setInterval(document.visibilityState?ge:c,null!=(e=null!=(t=fe.current)?t:E)?e:void 0),function(){null!==De.current&&clearInterval(De.current)}}}),[Fe,pe,ve,fe,E,ge,$]);var He=Object(i.useMemo)((function(){return I&&Array.from({length:xe},(function(e,t){return function(e){null==P||P(t,e)}}))}),[I,xe,P]);return Object(f.jsxs)(O,Object(s.a)(Object(s.a)({ref:Ne},V),{},{onKeyDown:Ce,onMouseOver:Pe,onMouseOut:Te,onTouchStart:Me,onTouchMove:Ae,onTouchEnd:Be,className:b()(G,Z,p&&"slide",v&&"".concat(Z,"-fade"),z&&"".concat(Z,"-").concat(z)),children:[I&&Object(f.jsx)("div",{className:"".concat(Z,"-indicators"),children:Object(N.c)(Q,(function(e,t){return Object(f.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=S&&S.length?S[t]:"Slide ".concat(t+1),className:t===he?"active":void 0,onClick:He?He[t]:void 0,"aria-current":t===he},t)}))}),Object(f.jsx)("div",{className:"".concat(Z,"-inner"),children:Object(N.c)(Q,(function(e,t){var c=t===he;return p?Object(f.jsx)(y.a,{in:c,onEnter:c?Ie:void 0,onEntered:c?Se:void 0,addEndListener:g.a,children:function(t,a){return i.cloneElement(e,Object(s.a)(Object(s.a)({},a),{},{className:b()(e.props.className,c&&"entered"!==t&&ye,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&ke)}))}}):i.cloneElement(e,{className:b()(e.props.className,c&&"active")})}))}),k&&Object(f.jsxs)(f.Fragment,{children:[(D||0!==C)&&Object(f.jsxs)(d.a,{className:"".concat(Z,"-control-prev"),onClick:pe,children:[X,U&&Object(f.jsx)("span",{className:"visually-hidden",children:U})]}),(D||C!==xe-1)&&Object(f.jsxs)(d.a,{className:"".concat(Z,"-control-next"),onClick:ve,children:[Y,q&&Object(f.jsx)("span",{className:"visually-hidden",children:q})]})]})]}))}));I.displayName="Carousel",I.defaultProps=k;t.a=Object.assign(I,{Caption:m,Item:v})},997:function(e,t,c){"use strict";c.r(t);var s=c(16),a=c(0),n=c(194),r=c(962),i=c(148),l=c(74),o=c(125),u=c(1),d=function(){return Object(u.jsx)(n.a,{children:Object(u.jsxs)(n.a.Body,{children:[Object(u.jsx)("h4",{className:"header-title",children:"Slides only"}),Object(u.jsxs)("p",{className:"text-muted font-14",children:["Here\u2019s a carousel with slides only. Note the presence of the ",Object(u.jsx)("code",{children:".d-block"}),"and ",Object(u.jsx)("code",{children:".img-fluid"})," on carousel images to prevent browser default image alignment."]}),Object(u.jsxs)(r.a,{indicators:!1,controls:!1,children:[Object(u.jsx)(r.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?sea",alt:"First slide"})}),Object(u.jsx)(r.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?nature",alt:"Second slide"})}),Object(u.jsx)(r.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?island",alt:"Third slide"})})]})]})})},j=function(){return Object(u.jsx)(n.a,{children:Object(u.jsxs)(n.a.Body,{children:[Object(u.jsx)("h4",{className:"header-title",children:"With controls"}),Object(u.jsx)("p",{className:"text-muted font-14",children:"Adding in the previous and next controls:"}),Object(u.jsxs)(r.a,{indicators:!1,children:[Object(u.jsx)(r.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?sea",alt:"First slide"})}),Object(u.jsx)(r.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?nature",alt:"Second slide"})}),Object(u.jsx)(r.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?island",alt:"Third slide"})})]})]})})},b=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(u.jsx)(n.a,{children:Object(u.jsxs)(n.a.Body,{children:[Object(u.jsx)("h4",{className:"header-title",children:"With indicators"}),Object(u.jsx)("p",{className:"text-muted font-14",children:"You can also add the indicators to the carousel, alongside the controls, too."}),Object(u.jsxs)(r.a,{activeIndex:c,onSelect:function(e,t){i(e)},children:[Object(u.jsx)(r.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?sea",alt:"First slide"})}),Object(u.jsx)(r.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?nature",alt:"Second slide"})}),Object(u.jsx)(r.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?island",alt:"Third slide"})})]})]})})},h=function(){return Object(u.jsx)(n.a,{children:Object(u.jsxs)(n.a.Body,{children:[Object(u.jsx)("h4",{className:"header-title",children:"With captions"}),Object(u.jsxs)("p",{className:"text-muted font-14",children:["Add captions to your slides easily with the ",Object(u.jsx)("code",{children:".carousel-caption"})," element within any"," ",Object(u.jsx)("code",{children:".carousel-item"}),"."]}),Object(u.jsxs)(r.a,{indicators:!1,children:[Object(u.jsxs)(r.a.Item,{children:[Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?sea",alt:"First slide"}),Object(u.jsxs)(r.a.Caption,{children:[Object(u.jsx)("h3",{children:"First slide label"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(u.jsxs)(r.a.Item,{children:[Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?nature",alt:"Second slide"}),Object(u.jsxs)(r.a.Caption,{children:[Object(u.jsx)("h3",{children:"Second slide label"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(u.jsxs)(r.a.Item,{children:[Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?island",alt:"Third slide"}),Object(u.jsxs)(r.a.Caption,{children:[Object(u.jsx)("h3",{children:"Third slide label"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})]})]})})},O=function(){return Object(u.jsx)(n.a,{children:Object(u.jsxs)(n.a.Body,{children:[Object(u.jsx)("h4",{className:"header-title",children:"Crossfade"}),Object(u.jsxs)("p",{className:"text-muted font-14",children:["Add ",Object(u.jsx)("code",{children:".carousel-fade"})," to your carousel to animate slides with a fade transition instead of a slide."]}),Object(u.jsxs)(r.a,{fade:!0,indicators:!1,children:[Object(u.jsx)(r.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?sea",alt:"First slide"})}),Object(u.jsx)(r.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?nature",alt:"Second slide"})}),Object(u.jsx)(r.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?island",alt:"Third slide"})})]})]})})},m=function(){return Object(u.jsx)(n.a,{children:Object(u.jsxs)(n.a.Body,{children:[Object(u.jsx)("h4",{className:"header-title",children:"Individual interval"}),Object(u.jsxs)("p",{className:"text-muted font-14",children:["Add ",Object(u.jsx)("code",{children:'data-bs-interval=""'})," to a ",Object(u.jsx)("code",{children:".carousel-item"})," to change the amount of time to delay between automatically cycling to the next item."]}),Object(u.jsxs)(r.a,{fade:!0,indicators:!1,children:[Object(u.jsx)(r.a.Item,{interval:1e3,children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?sea",alt:"First slide"})}),Object(u.jsx)(r.a.Item,{interval:2e3,children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?nature",alt:"Second slide"})}),Object(u.jsx)(r.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?island",alt:"Third slide"})})]})]})})};t.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.a,{breadCrumbItems:[{label:"Base UI",path:"/ui/carousel"},{label:"Carousel",path:"/ui/carousel",active:!0}],title:"Carousel"}),Object(u.jsxs)(i.a,{children:[Object(u.jsx)(l.a,{lg:6,children:Object(u.jsx)(d,{})}),Object(u.jsx)(l.a,{lg:6,children:Object(u.jsx)(j,{})})]}),Object(u.jsxs)(i.a,{children:[Object(u.jsx)(l.a,{lg:6,children:Object(u.jsx)(b,{})}),Object(u.jsx)(l.a,{lg:6,children:Object(u.jsx)(h,{})})]}),Object(u.jsxs)(i.a,{children:[Object(u.jsx)(l.a,{lg:6,children:Object(u.jsx)(O,{})}),Object(u.jsx)(l.a,{lg:6,children:Object(u.jsx)(m,{})})]})]})}}}]);
//# sourceMappingURL=110.d25b8303.chunk.js.map