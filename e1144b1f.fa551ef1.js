(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{158:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return d}));var n=t(1),o=t(9),a=(t(0),t(164)),i={id:"api-errors",title:"@build-tracker/api-errors",sidebar_label:"@build-tracker/api-errors"},c={id:"packages/api-errors",title:"@build-tracker/api-errors",description:"This is a shared package for creating and comparing API errors returned from the Build Tracker server's API.",source:"@site/docs/packages/api-errors.md",permalink:"/docs/packages/api-errors",editUrl:"https://github.com/paularmstrong/build-tracker/edit/next/docs/docs/packages/api-errors.md",sidebar_label:"@build-tracker/api-errors",sidebar:"docs",previous:{title:"@build-tracker/api-client",permalink:"/docs/packages/api-client"},next:{title:"@build-tracker/app",permalink:"/docs/packages/app"}},u=[{value:"400 <code>ValidationError</code>",id:"400-validationerror",children:[]},{value:"401 <code>AuthError</code>",id:"401-autherror",children:[]},{value:"404 <code>NotFoundError</code>",id:"404-notfounderror",children:[]},{value:"501 <code>UnimplementedError</code>",id:"501-unimplementederror",children:[]}],l={rightToc:u};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is a shared package for creating and comparing API errors returned from the Build Tracker server's API."),Object(a.b)("h2",{id:"400-validationerror"},"400 ",Object(a.b)("inlineCode",{parentName:"h2"},"ValidationError")),Object(a.b)("p",null,"The build that you are trying to insert into the database does not meet requirements. See the specific error message for more information."),Object(a.b)("h2",{id:"401-autherror"},"401 ",Object(a.b)("inlineCode",{parentName:"h2"},"AuthError")),Object(a.b)("p",null,"If your server's API is protected with an API key and you do not provide it with requests requiring authentication, a 401 unauthorized response will be returned."),Object(a.b)("h2",{id:"404-notfounderror"},"404 ",Object(a.b)("inlineCode",{parentName:"h2"},"NotFoundError")),Object(a.b)("p",null,"When querying one or more builds, you may find that they do not exist. This will result in a 404 not found error."),Object(a.b)("h2",{id:"501-unimplementederror"},"501 ",Object(a.b)("inlineCode",{parentName:"h2"},"UnimplementedError")),Object(a.b)("p",null,"If your API or API plugin does not support a method, a 501 unimplemented error will be returned."))}d.isMDXComponent=!0},164:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},p=function(e){var r=d(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=d(t),b=n,m=p["".concat(i,".").concat(b)]||p[b]||s[b]||a;return t?o.a.createElement(m,c({ref:r},l,{components:t})):o.a.createElement(m,c({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);