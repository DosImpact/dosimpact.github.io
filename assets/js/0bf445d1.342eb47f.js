"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[4576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,m=u["".concat(i,".").concat(y)]||u[y]||f[y]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},l="TS 1",s={unversionedId:"g-fe/ts/typescript/ts01",id:"g-fe/ts/typescript/ts01",title:"TS 1",description:"any vs unknown",source:"@site/docs/g-fe/2-ts/0-typescript/ts01.md",sourceDirName:"g-fe/2-ts/0-typescript",slug:"/g-fe/ts/typescript/ts01",permalink:"/docs/g-fe/ts/typescript/ts01",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-fe/2-ts/0-typescript/ts01.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"frontEnd",previous:{title:"Typescript",permalink:"/docs/category/typescript"},next:{title:"TS 2",permalink:"/docs/g-fe/ts/typescript/ts02"}},i={},p=[{value:"any vs unknown",id:"any-vs-unknown",level:2},{value:"any",id:"any",level:4},{value:"unknown",id:"unknown",level:4}],c={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ts-1"},"TS 1"),(0,a.kt)("h2",{id:"any-vs-unknown"},"any vs unknown"),(0,a.kt)("h4",{id:"any"},"any"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ud0c0\uc785\uc744 \ud5c8\uc6a9\ud558\ub294 \ud0c0\uc785\uc774\ub2e4.  "),(0,a.kt)("li",{parentName:"ul"},"\ud0c0\uc785 \uac80\uc0ac\ub098 \uc624\ub958\ub97c \ubb34\uc2dc \ud55c\ub2e4. \uadf8\ub798\uc11c \ucf54\ub4dc \uc548\uc815\uc131\uc774 \ub5a8\uc5b4\uc9c8 \uc218 \uc788\ub2e4. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let value: any;\nvalue = 5;\nvalue = "hello";\nvalue = { name: "John" };\n\n// \ubaa8\ub4e0 \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\uc5d0 \uc811\uadfc \uac00\ub2a5, \ucef4\ud30c\uc77c\ub7ec\uac00 \uc624\ub958\ub97c \uc7a1\uc544\ub0b4\uc9c0 \uc54a\uc74c\nvalue.foo(); // \ucef4\ud30c\uc77c \uc624\ub958 \uc5c6\uc74c\n')),(0,a.kt)("h4",{id:"unknown"},"unknown"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ud0c0\uc785\uc744 \ud5c8\uc6a9\ud558\ub294 \ud0c0\uc785\uc774\ub2e4.  "),(0,a.kt)("li",{parentName:"ul"},"\ud0c0\uc785 \uac80\uc0ac\ub97c \uc694\uad6c\ud55c\ub2e4. \uadf8\ub798\uc11c \ud574\ub2f9 \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ud0c0\uc785\uac80\uc0ac\uac00 \ud544\uc694\ud558\ub2e4.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"asserts")," \uc744 \uc774\uc6a9\ud574\uc11c \ud0c0\uc785\uc744 \uc881\ud790 \uc218 \uc788\ub2e4.   ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let value: unknown;\nvalue = 5;\nvalue = "hello";\nvalue = { name: "John" };\n\n// \ubc14\ub85c \uc811\uadfc\ud560 \uc218 \uc5c6\uc74c, \ud0c0\uc785 \uac80\uc0ac \ud544\uc694\nif (typeof value === \'string\') {\n  console.log(value.toUpperCase()); // \ud0c0\uc785 \uac80\uc0ac \ud6c4 \uc548\uc804\ud558\uac8c \uc0ac\uc6a9 \uac00\ub2a5\n}\n\n// \ud0c0\uc785 \ub2e8\uc5b8\uc744 \ud1b5\ud574 \uc0ac\uc6a9 \uac00\ub2a5\n(value as { name: string }).name;\n')))}f.isMDXComponent=!0}}]);