"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=o.createContext({}),m=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=m(n),c=l,f=s["".concat(u,".").concat(c)]||s[c]||d[c]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var m=2;m<r;m++)a[m]=n[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=n(7462),l=(n(7294),n(3905));const r={sidebar_position:1},a="JS Module",i={unversionedId:"g-fe/js/js-part1/modules-injs-01",id:"g-fe/js/js-part1/modules-injs-01",title:"JS Module",description:"ToC",source:"@site/docs/g-fe/1-js/1-js-part1/modules-injs-01.md",sourceDirName:"g-fe/1-js/1-js-part1",slug:"/g-fe/js/js-part1/modules-injs-01",permalink:"/docs/g-fe/js/js-part1/modules-injs-01",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-fe/1-js/1-js-part1/modules-injs-01.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"frontEnd",previous:{title:"\ucf54\uc5b4 JS",permalink:"/docs/category/\ucf54\uc5b4-js"},next:{title:"TBD",permalink:"/docs/g-fe/js/js-part1/modules-injs-02"}},u={},m=[{value:"ToC",id:"toc",level:2},{value:"Goal",id:"goal",level:2},{value:"CJS (CommonJS)",id:"cjs-commonjs",level:2},{value:"\ucf54\ub4dc \uc608\uc81c",id:"\ucf54\ub4dc-\uc608\uc81c",level:3},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",level:3},{value:"AMD (Asynchronous Module Definition)",id:"amd-asynchronous-module-definition",level:2},{value:"\ucf54\ub4dc \uc608\uc81c",id:"\ucf54\ub4dc-\uc608\uc81c-1",level:3},{value:"\ud2b9\uc9d5: \ube44\ub3d9\uae30",id:"\ud2b9\uc9d5-\ube44\ub3d9\uae30",level:3},{value:"UMD (Universal Module Definition)",id:"umd-universal-module-definition",level:2},{value:"\ucf54\ub4dc \uc608\uc81c",id:"\ucf54\ub4dc-\uc608\uc81c-2",level:3},{value:"\ud2b9\uc9d5: \uc5ec\ub7ec \ubaa8\ub4c8 \ub85c\ub354\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5",id:"\ud2b9\uc9d5-\uc5ec\ub7ec-\ubaa8\ub4c8-\ub85c\ub354\uc5d0\uc11c-\uc0ac\uc6a9-\uac00\ub2a5",level:3},{value:"ESM (ECMAScript Module)",id:"esm-ecmascript-module",level:2},{value:"\ucf54\ub4dc \uc608\uc81c",id:"\ucf54\ub4dc-\uc608\uc81c-3",level:3},{value:"\ubd80\ub85d: <code>&lt;script type=&quot;module&quot; src=&quot;index.mjs&quot;&gt;</code>",id:"\ubd80\ub85d-script-typemodule-srcindexmjs",level:3},{value:"\uc694\uc57d",id:"\uc694\uc57d",level:3}],p={toc:m},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"js-module"},"JS Module"),(0,l.kt)("h2",{id:"toc"},"ToC"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#js-module"},"JS Module"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toc"},"ToC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#goal"},"Goal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cjs-commonjs"},"CJS (CommonJS)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%EC%BD%94%EB%93%9C-%EC%98%88%EC%A0%9C"},"\ucf54\ub4dc \uc608\uc81c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%ED%8A%B9%EC%A7%95"},"\ud2b9\uc9d5")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#amd-asynchronous-module-definition"},"AMD (Asynchronous Module Definition)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%EC%BD%94%EB%93%9C-%EC%98%88%EC%A0%9C-1"},"\ucf54\ub4dc \uc608\uc81c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%ED%8A%B9%EC%A7%95-%EB%B9%84%EB%8F%99%EA%B8%B0"},"\ud2b9\uc9d5: \ube44\ub3d9\uae30")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#umd-universal-module-definition"},"UMD (Universal Module Definition)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%EC%BD%94%EB%93%9C-%EC%98%88%EC%A0%9C-2"},"\ucf54\ub4dc \uc608\uc81c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%ED%8A%B9%EC%A7%95-%EC%97%AC%EB%9F%AC-%EB%AA%A8%EB%93%88-%EB%A1%9C%EB%8D%94%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9-%EA%B0%80%EB%8A%A5"},"\ud2b9\uc9d5: \uc5ec\ub7ec \ubaa8\ub4c8 \ub85c\ub354\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#esm-ecmascript-module"},"ESM (ECMAScript Module)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%EC%BD%94%EB%93%9C-%EC%98%88%EC%A0%9C-3"},"\ucf54\ub4dc \uc608\uc81c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%EB%B6%80%EB%A1%9D-script-typemodule-srcindexmjs"},"\ubd80\ub85d: ",(0,l.kt)("inlineCode",{parentName:"a"},'<script type="module" src="index.mjs">'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%EC%9A%94%EC%95%BD"},"\uc694\uc57d"))))))),(0,l.kt)("h2",{id:"goal"},"Goal"),(0,l.kt)("p",null,"\ucc98\uc74c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ubaa8\ub4c8\uc744 \uac00\uc838\uc624\uac70\ub098 \ub0b4\ubcf4\ub0b4\ub294 \ubc29\ubc95\uc774 \uc5c6\uc5b4, \ud558\ub098\uc758 \ud30c\uc77c\uc5d0 \uc791\uc131"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CJS, AMD, UMD, ESM\uc774 \ub4f1\uc7a5 \ud6c4\uc5d0\ub294 \ubaa8\ub4c8\ub85c \uac1c\ubc1c \ubc0f \ubc30\ud3ec")),(0,l.kt)("h2",{id:"cjs-commonjs"},"CJS (CommonJS)"),(0,l.kt)("p",null,"CommonJS(",(0,l.kt)("a",{parentName:"p",href:"http://www.commonjs.org/)%EB%8A%94"},"http://www.commonjs.org/)\ub294")," \uc774\ub984\uc758 'Common'\uc5d0\uc11c \uc54c \uc218 \uc788\ub4ef\uc774-"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JavaScript\ub97c \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c\ubfd0\ub9cc \uc544\ub2c8\ub77c \ubc94\uc6a9 \uc5b8\uc5b4\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\uaca0\ub2e4\ub294 \uc758\uc9c0\ub97c \uac00\uc9c4 \uc6cc\ud0b9 \uadf8\ub8f9\uc785\ub2c8\ub2e4.CJS (CommonJS)")),(0,l.kt)("h3",{id:"\ucf54\ub4dc-\uc608\uc81c"},"\ucf54\ub4dc \uc608\uc81c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \uc544\ub798\uc640 \uac19\uc774 require\uc744 \ud1b5\ud574 package/lib \ubaa8\ub4c8\uc744 \ubcc0\uc218\uc5d0 \ub2f4\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nvar lib = require('package/lib');\n\n// \uac00\uc838\uc628 \ubaa8\ub4c8\uc744 \uc544\ub798\uc640 \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nfunction foo () {\n  lib.log('hello world!');\n}\n\n// foo \ud568\uc218\ub97c \ub2e4\ub978 \ud30c\uc77c\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d, \ub2e4\ub978 \ubaa8\ub4c8\ub85c \ucd94\ucd9c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nexports.foobar = foo;\n")),(0,l.kt)("h3",{id:"\ud2b9\uc9d5"},"\ud2b9\uc9d5"),(0,l.kt)("p",null,"CommonJS\ub294 \uc544\ub798 \ucf54\ub4dc\uc640 \uac19\uc774 \ub3d9\uae30\ub85c \ub3d9\uc791\ud558\ub294 \ud2b9\uc9d5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var foo = require('foo');\nvar bar = require('bar');\n\nfoo.log('It is foo');\nbar.log('It is bar');\n")),(0,l.kt)("p",null,"CommonJS\ub294 \ub3d9\uae30\uc801\uc778 \ud2b9\uc9d5\uc73c\ub85c \uc11c\ubc84\uc0ac\uc774\ub4dc\uc5d0 \uc0ac\uc6a9\ud558\uae30 \uc6a9\uc774\ud569\ub2c8\ub2e4. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(CommonJS\uc758 \uccab \uc774\ub984\uc740 ServerJS \uc600\ub2e4\uace0 \ud569\ub2c8\ub2e4.) Node.js\uac00 CommonJS\ub97c \ucc44\ud0dd\ud558\uc5ec \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub300\ud45c\uc801\uc73c\ub85c Node.js(",(0,l.kt)("a",{parentName:"li",href:"http://nodejs.org"},"http://nodejs.org"),")")),(0,l.kt)("h2",{id:"amd-asynchronous-module-definition"},"AMD (Asynchronous Module Definition)"),(0,l.kt)("p",null,"CommonJS\ub294 \ubaa8\ub4e0 \ud30c\uc77c\uc774 \ub85c\uceec \ub514\uc2a4\ud06c\uc5d0 \uc788\uc5b4 \ud544\uc694\ud560 \ub54c \ubc14\ub85c \ubd88\ub7ec\uc62c \uc218 \uc788\ub294 \uc0c1\ud669\uc744 \uc804\uc81c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc989 \ub3d9\uae30\uc801\uc778 \ub3d9\uc791\uc774 \uac00\ub2a5\ud55c \uc11c\ubc84\uc0ac\uc774\ub4dc \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud658\uacbd\uc744 \uc804\uc81c"),(0,l.kt)("li",{parentName:"ul"},"\ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc774\ub7f0 \ubc29\uc2dd\uc740 \ud544\uc694\ud55c \ubaa8\ub4c8\uc774 \ubaa8\ub450 \ub2e4\uc6b4\ub85c\ub4dc\ud560 \ub54c\uae4c\uc9c0 \uc544\ubb34\uac83\ub3c4 \ud560 \uc218 \uc5c6\ub294 \uc0c1\ud0dc\uac00 \ub418\uc5b4 \uce58\uba85\uc801\uc778 \ub2e8\uc810\uc774 \ub429\ub2c8\ub2e4.")),(0,l.kt)("p",null,"AMD \uadf8\ub8f9\uc740 \ube44\ub3d9\uae30 \uc0c1\ud669\uc5d0\uc11c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubaa8\ub4c8\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 CommonJS\uc5d0\uc11c \ud568\uaed8 \ub17c\uc758\ud558\ub2e4 \ud569\uc758\uc810\uc744 \uc774\ub8e8\uc9c0 \ubabb\ud558\uace0 \ub3c5\ub9bd\ud55c \uadf8\ub8f9\uc785\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CommonJS\uac00 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ube0c\ub77c\uc6b0\uc800 \ubc16\uc73c\ub85c \uaebc\ub0b4\uae30 \uc704\ud574 \ud0c4\uc0dd\ub41c \uadf8\ub8f9\uc774\uace0, AMD\ub294 \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc911\uc810\uc744 \ub454 \uadf8\ub8f9\uc785\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\ucf54\ub4dc-\uc608\uc81c-1"},"\ucf54\ub4dc \uc608\uc81c"),(0,l.kt)("p",null,"\uc544\ub798 \ucf54\ub4dc\ub294 AMD\uc5d0\uc11c \ubaa8\ub4c8\ub85c \ucd94\ucd9c\ud558\ub294 \ucf54\ub4dc\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \uc885\uc18d\uc131\uc744 \uac16\ub294 \ubaa8\ub4c8\uc778 'package/lib'\ub97c \ubaa8\ub4c8 \uc120\uc5b8\ubd80\uc758 \uccab \ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\uc5d0 \ub123\uc73c\uba74,\n// 'package/lib'\uc740 \ucf5c\ubc31 \ud568\uc218\uc758 lib \ud30c\ub77c\ubbf8\ud130 \uc548\uc5d0 \ub2f4\uae41\ub2c8\ub2e4.\ndefine(['package/lib'], function (lib) {\n\n  // \ub85c\ub4dc\ub41c \uc885\uc18d \ubaa8\ub4c8\uc744 \uc544\ub798\uc640 \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n  function foo () {\n    lib.log('hello world!');\n  }\n\n  // \uc0dd\uc131\ub41c foo \ud568\uc218\ub294 \ub9ac\ud134\uc744 \ud1b5\ud574 foobar\ub77c\ub294 \uc774\ub984\uc758 \ub2e4\ub978 \ubaa8\ub4c8\ub85c \ucd94\ucd9c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n  return {\n    foobar: foo\n  };\n});\n---\n\uc120\uc5b8\ub41c \ubaa8\ub4c8\ub4e4\uc744 \uc544\ub798\uc640 \uac19\uc774 require\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\nrequire(['package/myModule'], function (myModule) {\n  myModule.foobar();\n});\n")),(0,l.kt)("h3",{id:"\ud2b9\uc9d5-\ube44\ub3d9\uae30"},"\ud2b9\uc9d5: \ube44\ub3d9\uae30"),(0,l.kt)("p",null,"\ube0c\ub77c\uc6b0\uc800\ub294 \ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud574 \ubaa8\ub4c8\ub4e4\uc744 \ub0b4\ub824\ubc1b\uae30 \ub54c\ubb38\uc5d0 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \ub3d9\uc791\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"AMD \uc774\ub984\uc758 'Asynchronous'\uc5d0\uc11c \uc54c \uc218 \uc788\ub4ef\uc774 AMD\ub294 \ube44\ub3d9\uae30 \ubaa8\ub4c8\uc5d0 \ub300\ud55c \ud45c\uc900\uc548\uc744 \ub2e4\ub8e8\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"AMD\ub294 \ube44\ub3d9\uae30\uc801\uc778 \ud2b9\uc9d5\uc73c\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc774\ub4dc \uac1c\ubc1c\uc5d0 \uc801\ud569\ud569\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"umd-universal-module-definition"},"UMD (Universal Module Definition)"),(0,l.kt)("p",null,"AMD\uc640 CommonJS \ub450 \uadf8\ub8f9\uc73c\ub85c \ub098\ub204\uc5b4\uc9c0\ub2e4 \ubcf4\ub2c8 \uc11c\ub85c \ud638\ud658\ub418\uc9c0 \uc54a\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774\uac83\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub098\uc628 \uac83\uc774 UMD\uc785\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"UMD\ub294 \ub514\uc790\uc778 \ud328\ud134\uc5d0 \ub354 \uac00\uae5d\uc2b5\ub2c8\ub2e4. AMD\uc640 CommonJS, window\uc5d0 \ucd94\uac00\ud558\ub294 \ubc29\uc2dd\uae4c\uc9c0 \ubaa8\ub450 \uac00\ub2a5\ud55c \ubaa8\ub4c8\uc744 \uc791\uc131\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\ucf54\ub4dc-\uc608\uc81c-2"},"\ucf54\ub4dc \uc608\uc81c"),(0,l.kt)("p",null,"AMD\ub294 define\uc744 \uc0ac\uc6a9\ud558\uace0, CommonJS\ub294 module.exports\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774 \ucc28\uc774\ub97c \uc774\uc6a9\ud558\uc5ec UMD\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. UMD\ub294 \ub450 \ubd80\ubd84\uc73c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub4c8 \ub85c\ub354\ub97c \ud655\uc778\ud558\ub294 \uc989\uc2dc \uc2e4\ud589 \ud568\uc218(IIFE): \uc774 \ud568\uc218\ub294 root(\uc804\uc5ed \ubc94\uc704)\uc640 factory(\ubaa8\ub4c8\uc744 \uc120\uc5b8\ud558\ub294 \ud568\uc218) 2\uac1c\uc758 \ud30c\ub77c\ubbf8\ud130\ub97c \uac00\uc9d1\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub4c8\uc744 \uc0dd\uc131\ud558\ub294 \uc775\uba85 \ud568\uc218: \uc774 \ud568\uc218\uac00 \uc989\uc2dc \uc2e4\ud589 \ud568\uc218\uc758 2\ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\ub85c \uc804\ub2ec\ub429\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"(function (root, factory) {\n  if (typeof define === 'function' && define.amd) {\n    // AMD\n    define(['exports', 'b'], factory);\n  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {\n    // CommonJS\n    factory(exports, require('b'));\n  } else {\n    // Browser globals\n    factory((root.commonJsStrict = {}), root.b);\n  }\n}(this, function (exports, b) {\n  //use b in some fashion.\n\n  // attach properties to the exports object to define\n  // the exported module properties.\n  exports.action = function () {};\n}));\n")),(0,l.kt)("p",null,"\uc704\uc758 \ucf54\ub4dc\ub97c \ubcf4\uba74, exports\uc640 module\uc774 \uc874\uc7ac\ud558\uba74 CommonJS \ubc29\uc2dd\uc73c\ub85c, define\uc774 \ud568\uc218\uc774\uace0 define.amd\uac00 \uc874\uc7ac\ud560 \uacbd\uc6b0 AMD \ubc29\uc2dd\uc73c\ub85c \uadf8\uac83\ub3c4 \uc544\ub2c8\ub77c\uba74 window \uac1d\uccb4\uc5d0 \ubaa8\ub4c8\uc744 \ub0b4\ubcf4\ub0c5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\ud2b9\uc9d5-\uc5ec\ub7ec-\ubaa8\ub4c8-\ub85c\ub354\uc5d0\uc11c-\uc0ac\uc6a9-\uac00\ub2a5"},"\ud2b9\uc9d5: \uc5ec\ub7ec \ubaa8\ub4c8 \ub85c\ub354\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5"),(0,l.kt)("p",null,"UMD\uc758 \ud2b9\uc9d5\uc740 \uc704\uc5d0\uc11c \ub9d0\ud588\ub358 \uac83\ucc98\ub7fc AMD\uc640 CommonJS \ubaa8\ub450 \uc0ac\uc6a9 \uac00\ub2a5\ud558\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. AMD\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc774\ub4dc\uc5d0\uc11c \ub9ce\uc774 \uc0ac\uc6a9\ub418\uace0, CommonJS\ub294 \uc11c\ubc84 \uc0ac\uc774\ub4dc\uc5d0\uc11c \ub9ce\uc774 \uc0ac\uc6a9\ub418\uae30 \ub54c\ubb38\uc5d0, UMD\ub97c \uc0ac\uc6a9\ud558\uba74 \ub450 \uac1c\uc758 \ubaa8\ub4c8\uc744 \ub530\ub85c \ub9cc\ub4e4 \ud544\uc694\uac00 \uc5c6\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"esm-ecmascript-module"},"ESM (ECMAScript Module)"),(0,l.kt)("p",null,"ES6\uc5d0 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubaa8\ub4c8 \uae30\ub2a5\uc774 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\ucf54\ub4dc-\uc608\uc81c-3"},"\ucf54\ub4dc \uc608\uc81c"),(0,l.kt)("p",null,"\uc544\ub798 \ucf54\ub4dc\uc640 \uac19\uc774 ESM\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"import lib from 'package/lib';\n\nfunction foo () {\n  lib.log('hello world!');\n}\n\nexport {\n  foobar: foo\n};\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud2b9\uc9d5: \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc790\uccb4 \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c"),(0,l.kt)("li",{parentName:"ul"},"ESM\uc740 ECMAScript\uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uacf5\uc2dd \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4. \uc544\uc9c1 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c import\uc640 export\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc544 \ubc88\ub4e4\ub7ec\ub97c \ud568\uaed8 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\ubd80\ub85d-script-typemodule-srcindexmjs"},"\ubd80\ub85d: ",(0,l.kt)("inlineCode",{parentName:"h3"},'<script type="module" src="index.mjs">')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<script> \ud0dc\uadf8\uc5d0 type="module"\uc744 \uc120\uc5b8\ud558\uba74 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c\uc740 \ubaa8\ub4c8\ub85c \ub3d9\uc791\n- \uc774\ub54c \ubaa8\ub4c8\uc774\ub77c\ub294 \uac83\uc744 \uba85\ud655\ud788 \uc54c\uae30 \uc704\ud574\uc11c mjs \ud655\uc7a5\uc790\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uad8c\uc7a5\ud569\ub2c8\ub2e4.\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<!DOCTYPE html>\n<html>\n<body>\n  <script type=\"module\" src=\"foo.mjs\"><\/script>\n  <script type=\"module\" src=\"bar.mjs\"><\/script>\n</body>\n</html>\n\n---\n\n// foo.mjs\nvar x = 'foo';\nconsole.log(x); // foo\n// \ubcc0\uc218 x\ub294 \uc804\uc5ed \ubcc0\uc218\uac00 \uc544\ub2c8\uba70 window \uac1d\uccb4\uc758 \ud504\ub85c\ud37c\ud2f0\ub3c4 \uc544\ub2c8\ub2e4.\nconsole.log(window.x); // undefined\n\n---\n\n// module.mjs\nconst test = 'hello world!';\n// export \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.\nexport default test;\n\n---\n// bar.mjs\n// import \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.\nimport test from './module.mjs';\nconsole.log(test);\n// \ubcc0\uc218 x\ub294 foo.mjs\uc5d0\uc11c \uc120\uc5b8\ud55c \ubcc0\uc218 x\uc640 \uc2a4\ucf54\ud504\uac00 \ub2e4\ub978 \ubcc0\uc218\uc774\ub2e4.\nvar x = 'bar';\nconsole.log(x); // bar\n// \ubcc0\uc218 x\ub294 \uc804\uc5ed \ubcc0\uc218\uac00 \uc544\ub2c8\uba70 window \uac1d\uccb4\uc758 \ud504\ub85c\ud37c\ud2f0\ub3c4 \uc544\ub2c8\ub2e4.\nconsole.log(window.x); // undefined\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'type="module"\ub294 \uc544\uc9c1 \ub9ce\uc740 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 webpack\uc774\ub098 rollup \ub4f1\uc758 \ubc88\ub4e4\ub7ec\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.')),(0,l.kt)("h3",{id:"\uc694\uc57d"},"\uc694\uc57d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CJS(CommonJS): \ub3d9\uae30\uc801\uc778 \ud2b9\uc9d5\uc73c\ub85c \uc11c\ubc84 \uc0ac\uc774\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc6a9\uc774\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"AMD(Asynchronous Module Definition): \ube44\ub3d9\uae30\uc801\uc778 \ud2b9\uc9d5\uc73c\ub85c \ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc774\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc6a9\uae30\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"UMD(Universal Module Definition): CJS\uc640 AMD \ubaa8\ub450 \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ubaa8\ub4c8\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"ESM(ECMAScript Module): \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uacf5\uc2dd \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'<script type="module" src="index.mjs">'),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c\ub3c4 \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,l.kt)("p",null,"\ucc38\uace0) ",(0,l.kt)("a",{parentName:"p",href:"https://beomy.github.io/tech/javascript/cjs-amd-umd-esm/#umd-universal-module-definition"},"https://beomy.github.io/tech/javascript/cjs-amd-umd-esm/#umd-universal-module-definition")))}d.isMDXComponent=!0}}]);