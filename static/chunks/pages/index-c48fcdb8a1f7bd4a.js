(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5075)}])},8045:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,a=void 0!==n&&n,c=e.priority,l=void 0!==c&&c,d=e.loading,m=e.lazyRoot,y=void 0===m?null:m,v=e.lazyBoundary,w=void 0===v?"200px":v,j=e.className,x=e.quality,A=e.width,S=e.height,z=e.objectFit,_=e.objectPosition,I=e.onLoadingComplete,N=e.loader,P=void 0===N?k:N,R=e.placeholder,q=void 0===R?"empty":R,D=e.blurDataURL,L=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),M=u.useRef(null),C=L,T=r?"responsive":"intrinsic";"layout"in C&&(C.layout&&(T=C.layout),delete C.layout);var W="";if(function(e){return"object"===typeof e&&(b(e)||function(e){return void 0!==e.src}(e))}(t)){var U=b(t)?t.default:t;if(!U.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(D=D||U.blurDataURL,W=U.src,(!T||"fill"!==T)&&(S=S||U.height,A=A||U.width,!U.height||!U.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)))}t="string"===typeof t?t:W;var B=E(A),H=E(S),F=E(x),V=!l&&("lazy"===d||"undefined"===typeof d);(t.startsWith("data:")||t.startsWith("blob:"))&&(a=!0,V=!1);h.has(t)&&(V=!1);0;var J,X=o(f.useIntersection({rootRef:y,rootMargin:w,disabled:!V}),2),$=X[0],G=X[1],Q=!V||G,K={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Z=!1,ee={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:z,objectPosition:_},te="blur"===q?{filter:"blur(20px)",backgroundSize:z||"cover",backgroundImage:'url("'.concat(D,'")'),backgroundPosition:_||"0% 0%"}:{};if("fill"===T)K.display="block",K.position="absolute",K.top=0,K.left=0,K.bottom=0,K.right=0;else if("undefined"!==typeof B&&"undefined"!==typeof H){var re=H/B,ne=isNaN(re)?"100%":"".concat(100*re,"%");"responsive"===T?(K.display="block",K.position="relative",Z=!0,Y.paddingTop=ne):"intrinsic"===T?(K.display="inline-block",K.position="relative",K.maxWidth="100%",Z=!0,Y.maxWidth="100%",J="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(B,"%27%20height=%27").concat(H,"%27/%3e")):"fixed"===T&&(K.display="inline-block",K.position="relative",K.width=B,K.height=H)}else 0;var ie={src:p,srcSet:void 0,sizes:void 0};Q&&(ie=O({src:t,unoptimized:a,layout:T,width:B,quality:F,sizes:r,loader:P}));var oe=t;0;var ae;0;var ce=(i(ae={},"imagesrcset",ie.srcSet),i(ae,"imagesizes",ie.sizes),ae),le=u.default.useLayoutEffect,ue=u.useRef(I);return u.useEffect((function(){ue.current=I}),[I]),le((function(){$(M.current)}),[$]),u.useEffect((function(){!function(e,t,r,n,i){var o=function(){var r=e.current;r&&(r.src!==p&&("decode"in r?r.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(h.add(t),"blur"===n&&(r.style.filter="",r.style.backgroundSize="",r.style.backgroundImage="",r.style.backgroundPosition=""),i.current)){var o=r.naturalWidth,a=r.naturalHeight;i.current({naturalWidth:o,naturalHeight:a})}})))};e.current&&(e.current.complete?o():e.current.onload=o)}(M,oe,0,q,ue)}),[oe,T,q,Q]),u.default.createElement("span",{style:K},Z?u.default.createElement("span",{style:Y},J?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:J}):null):null,u.default.createElement("img",Object.assign({},C,ie,{decoding:"async","data-nimg":T,className:j,ref:M,style:g({},ee,te)})),V&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},C,O({src:t,unoptimized:a,layout:T,width:B,quality:F,sizes:r,loader:P}),{decoding:"async","data-nimg":T,style:ee,className:j,loading:d||"lazy"}))),l?u.default.createElement(s.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ie.src+ie.srcSet+ie.sizes,rel:"preload",as:"image",href:ie.srcSet?void 0:ie.src},ce))):null)};var l,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),s=(l=r(5443))&&l.__esModule?l:{default:l},d=r(5809),f=r(7190);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){m(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var h=new Set,p=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var y=new Map([["default",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality,o=new URL("".concat(t).concat(z(r))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(z(r))}],["akamai",function(e){var t=e.root,r=e.src,n=e.width;return"".concat(t).concat(z(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||d.imageConfigDefault,w=v.deviceSizes,j=v.imageSizes,x=v.loader,A=v.path,S=(v.domains,a(w).concat(a(j)));function O(e){var t=e.src,r=e.unoptimized,n=e.layout,i=e.width,o=e.quality,c=e.sizes,l=e.loader;if(r)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,r){if(r&&("fill"===t||"responsive"===t)){for(var n,i=/(^|\s)(1?\d?\d)vw/g,o=[];n=i.exec(r);n)o.push(parseInt(n[2]));if(o.length){var c,l=.01*(c=Math).min.apply(c,a(o));return{widths:S.filter((function(e){return e>=w[0]*l})),kind:"w"}}return{widths:S,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:w,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return S.find((function(t){return t>=e}))||S[S.length-1]})))),kind:"x"}}(i,n,c),s=u.widths,d=u.kind,f=s.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:s.map((function(e,r){return"".concat(l({src:t,quality:o,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:l({src:t,quality:o,width:s[f]})}}function E(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t=y.get(x);if(t)return t(g({root:A},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(x))}function z(e){return"/"===e[0]?e.slice(1):e}w.sort((function(e,t){return e-t})),S.sort((function(e,t){return e-t}))},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,u=o.useRef(),s=i(o.useState(!1),2),d=s[0],f=s[1],m=i(o.useState(t?t.current:null),2),g=m[0],h=m[1],p=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),l.delete(i))}}(e,(function(e){return e&&f(e)}),{root:g,rootMargin:r}))}),[n,g,r,d]);return o.useEffect((function(){if(!c&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&h(t.current)}),[t]),[p,d]};var o=r(7294),a=r(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map},5075:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(5675);t.default=function(){return(0,n.jsx)("div",{className:"min-h-screen py-6 flex flex-col justify-center relative overflow-hidden ",children:(0,n.jsxs)("div",{className:"card relative w-96 px-6 py-6 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg",children:[(0,n.jsxs)("div",{className:"img-nft",children:[(0,n.jsx)(i.default,{src:"/images/image-equilibrium.jpg",alt:"Equilibrium",height:1e3,width:1e3,className:"image"}),(0,n.jsx)("div",{className:"img-nft-hover",children:(0,n.jsx)("img",{src:"/icons/icon-view.svg",alt:"eye"})})]}),(0,n.jsx)("div",{className:"card-h1",children:"Equilibrium #3429"}),(0,n.jsx)("div",{className:"card-p",children:"Our Equilibrium collection promotes balance and calm."}),(0,n.jsxs)("div",{className:"card-info",children:[(0,n.jsxs)("div",{className:"card-info-bitcoin",children:[(0,n.jsx)("img",{src:"/icons/icon-ethereum.svg",alt:"eth"}),(0,n.jsx)("p",{children:" 0.041 ETH"})]}),(0,n.jsxs)("div",{className:"card-info-time",children:[(0,n.jsx)("img",{src:"/icons/icon-clock.svg",alt:"eth"}),(0,n.jsx)("p",{children:"3 days left"})]})]})]})})}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(e,t,r){e.exports=r(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);