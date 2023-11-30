"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[9993],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=c(a),d=r,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return a?n.createElement(k,i(i({ref:t},o),{},{components:a})):n.createElement(k,i({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3081:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:33},i="Cloud SW \uc544\ud0a4\ud14d\ucc98 \ud328\ud134:Extensibility Patterns",p={unversionedId:"g-be/common/co033-cc4",id:"g-be/common/co033-cc4",title:"Cloud SW \uc544\ud0a4\ud14d\ucc98 \ud328\ud134:Extensibility Patterns",description:"- Cloud SW \uc544\ud0a4\ud14d\ucc98 \ud328\ud134:Extensibility Patterns",source:"@site/docs/g-be/0-common/co033-cc4.md",sourceDirName:"g-be/0-common",slug:"/g-be/common/co033-cc4",permalink:"/docs/g-be/common/co033-cc4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-be/0-common/co033-cc4.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_position:33},sidebar:"backEnd",previous:{title:"Cloud SW \uc544\ud0a4\ud14d\ucc98 \ud328\ud134:Performance Patterns",permalink:"/docs/g-be/common/co032-cc3"},next:{title:"Node.js",permalink:"/docs/category/nodejs"}},u={},c=[{value:"Extensibility Patterns",id:"extensibility-patterns",level:2},{value:"Sidecar Pattern",id:"sidecar-pattern",level:2},{value:"\ud574\uacb0\ud574\uc57c\ud560 \ubb38\uc81c",id:"\ud574\uacb0\ud574\uc57c\ud560-\ubb38\uc81c",level:3},{value:"\uc194\ub8e8\uc158:Sidecar Pattern",id:"\uc194\ub8e8\uc158sidecar-pattern",level:3},{value:"Ambassador Pattern",id:"ambassador-pattern",level:3},{value:"Anti-Corruption Adapter Pattern",id:"anti-corruption-adapter-pattern",level:2},{value:"\ubb38\uc81c\uc8101 \ubc0f \ud574\uacb0",id:"\ubb38\uc81c\uc8101-\ubc0f-\ud574\uacb0",level:3},{value:"\ubb38\uc81c\uc8102 \ubc0f \ud574\uacb0",id:"\ubb38\uc81c\uc8102-\ubc0f-\ud574\uacb0",level:3},{value:"\uace0\ub824\uc810",id:"\uace0\ub824\uc810",level:3},{value:"BFFs Pattern",id:"bffs-pattern",level:2},{value:"\ubb38\uc81c\uc810",id:"\ubb38\uc81c\uc810",level:3},{value:"\uc194\ub8e8\uc158",id:"\uc194\ub8e8\uc158",level:3}],o={toc:c},s="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,n.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cloud-sw-\uc544\ud0a4\ud14d\ucc98-\ud328\ud134extensibility-patterns"},"Cloud SW \uc544\ud0a4\ud14d\ucc98 \ud328\ud134:Extensibility Patterns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cloud-sw-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%ED%8C%A8%ED%84%B4extensibility-patterns"},"Cloud SW \uc544\ud0a4\ud14d\ucc98 \ud328\ud134:Extensibility Patterns"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#extensibility-patterns"},"Extensibility Patterns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sidecar-pattern"},"Sidecar Pattern"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%ED%95%B4%EA%B2%B0%ED%95%B4%EC%95%BC%ED%95%A0-%EB%AC%B8%EC%A0%9C"},"\ud574\uacb0\ud574\uc57c\ud560 \ubb38\uc81c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EC%86%94%EB%A3%A8%EC%85%98sidecar-pattern"},"\uc194\ub8e8\uc158:Sidecar Pattern")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ambassador-pattern"},"Ambassador Pattern")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#anti-corruption-adapter-pattern"},"Anti-Corruption Adapter Pattern"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EB%AC%B8%EC%A0%9C%EC%A0%901-%EB%B0%8F-%ED%95%B4%EA%B2%B0"},"\ubb38\uc81c\uc8101 \ubc0f \ud574\uacb0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EB%AC%B8%EC%A0%9C%EC%A0%902-%EB%B0%8F-%ED%95%B4%EA%B2%B0"},"\ubb38\uc81c\uc8102 \ubc0f \ud574\uacb0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EA%B3%A0%EB%A0%A4%EC%A0%90"},"\uace0\ub824\uc810")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#bffs-pattern"},"BFFs Pattern"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EB%AC%B8%EC%A0%9C%EC%A0%90"},"\ubb38\uc81c\uc810")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EC%86%94%EB%A3%A8%EC%85%98"},"\uc194\ub8e8\uc158"))))))),(0,r.kt)("h2",{id:"extensibility-patterns"},"Extensibility Patterns"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\uae30\ub2a5 \ud655\uc7a5\uc131 \uc544\ud0a4\ud14d\ucc98 \ud328\ud134\uc744 \ub3c4\uc785\uc73c\ub85c \uc5bb\ub294 \uc774\uc810\uc740 \ubb34\uc5c7\uc77c\uae4c?  "),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"sidecar-pattern"},"Sidecar Pattern"),(0,r.kt)("h3",{id:"\ud574\uacb0\ud574\uc57c\ud560-\ubb38\uc81c"},"\ud574\uacb0\ud574\uc57c\ud560 \ubb38\uc81c"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4931).Z,width:"1540",height:"782"})),(0,r.kt)("p",null,"\uc704 \uadf8\ub9bc\ucc98\ub7fc 3\uac1c\uc758 \uc11c\ube44\uc2a4\uac00 \uc788\ub2e4.   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac01 \uc11c\ube44\uc2a4\ub4e4\uc758 \ud575\uc2ec\uae30\ub2a5\ub4e4\uc774 \uc874\uc7ac \ud55c\ub2e4. \uadf8 \uc678\uc5d0\ub3c4 \uacf5\ud1b5\uc801\uc73c\ub85c \ub4e4\uc5b4\uac00\ub294 \ubd80\uac00 \uae30\ub2a5\ub4e4\uc774 \uc788\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4 \uba54\ud2b8\ub9ad \uc815\ubcf4 \uc218\uc9d1, \ub85c\uadf8 \uc778\ubca4\ud2b8 \uc815\ubcf4 \uc218\uc9d1, \ud0c0 \uc11c\ube44\uc2a4 endpoint \uc815\ubcf4\ub4e4\uc774 \ub2f4\uae34 registry \uc815\ubcf4, \ud658\uacbd\uad6c\uc131\ud30c\uc77c \uac00\uc838\uc624\uae30 \ub4f1  "),(0,r.kt)("li",{parentName:"ul"},"\uac01 \uc11c\ube44\uc2a4\ub4e4\uc740 java, python, go \uc5b8\uc5b4\ub85c \uc11c\ub85c\ub2e4\ub978 \uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc5b4\uc11c, \ubd80\uac00\uae30\ub2a5\uc744 \uac01\uc790 \ud658\uacbd\uc5d0 \ub9de\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc4f8 \uc218 \uc788\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub7f0 \uacbd\uc6b0\ub294 \uc7ac\uc0ac\uc6a9\uc131\uacfc \uc624\ub958\ub4f1\uc758 \ubb38\uc81c\uc810\uc774 \ub0b4\ud3ec\ub418\uc5b4 \uc788\ub2e4.   ")),(0,r.kt)("h3",{id:"\uc194\ub8e8\uc158sidecar-pattern"},"\uc194\ub8e8\uc158:Sidecar Pattern"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7133).Z,width:"1272",height:"808"})),(0,r.kt)("p",null,"\uc0ac\uc774\ub4dc\uce74 \ud328\ud134\uc73c\ub85c \ud574\uacb0\uc774 \uac00\ub2a5\ud558\ub2e4.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc0ac\uc774\ud2b8\uce74\ub294 \ucc28\ub7c9\uc758 \uc678\ubd80\uc5d0 \ubd99\uc5b4\uc788\ub294 \ubcf4\uc870\uc11d \uc774\ub2e4.   "),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub7f0 \uc0c1\ud669\ucc98\ub7fc, \uba54\uc778\uc571 \uc606\uc5d0 \ubcc4\ub3c4\uc758 \ud504\ub85c\uc138\uc2a4\ub098 \ucee8\ud14c\uc774\ub108\ub85c \uc0ac\uc774\ub4dc\uce74\ub97c \ub6f0\uc6b4\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\uc0ac\uc774\ub4dc\uce74\ub294 \uba54\uc778\uc571\uc774 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 cpu,memory,disk\uc5d0 \uc811\uadfc\uc774 \uac00\ub2a5\ud558\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\uba54\uc778 \uc571 \ub300\uc2e0 \ub9ac\uc18c\uc2a4 \uc0ac\uc6a9\ub7c9\uc744 \ubaa8\ub2c8\ud130\ub9c1\ud560 \uc218 \uc788\uace0, "),(0,r.kt)("li",{parentName:"ul"},"\uba54\uc778 \uc571 \ub300\uc2e0 \ub85c\uadf8\ud30c\uc77c\uc744 \uc218\uc9d1\ud560 \uc218 \uc788\uace0,"),(0,r.kt)("li",{parentName:"ul"},"\uba54\uc778 \uc571 \ub300\uc2e0 \ud658\uacbd\uad6c\uc131 \ud30c\uc77c\ub4f1\uc744 \uac00\uc838\uc640\uc11c \ub514\uc2a4\ud06c\uc5d0 \ub123\uc5b4\uc904 \uc218 \uc788\ub2e4.  ")),(0,r.kt)("p",null,"\uc5ec\ub7ec\uac00\uc9c0 \uc7a5\uc810\ub4e4\uc774 \uc874\uc7ac\ud558\ub294\ub370 "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774\ub7f0 \uc0ac\uc774\ub4dc\uce74\ub294 \uba54\uc778\uc571\uc758 \uc5b8\uc5b4\uc5d0 \uc0c1\uad00\uc5c6\uc774 \uad6c\ud604\uc774 \uac00\ub2a5\ud558\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\uc0ac\uc774\ub4dc\uce74\ub9cc \ub530\ub85c \ubc84\uc804\uc5c5\ub370\uc774\ud2b8\ub97c \uc2dc\ucf1c\uc904 \uc218 \uc788\ub2e4.   ")),(0,r.kt)("h3",{id:"ambassador-pattern"},"Ambassador Pattern"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5346).Z,width:"1396",height:"814"})),(0,r.kt)("p",null,"\uc0ac\uc774\ub4dc\uce74\uc758 \ud55c \uac00\uc9c0 \ud2b9\uc815 \uc720\ud615\uc774 ambassador \ud328\ud134\uc774\ub2e4.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uba54\uc778 \uc571\uc744 \ub300\uc2e0\ud574\uc11c \ubaa8\ub4e0 \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \uc804\uc1a1\ud55c\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\ud504\ub85d\uc2dc\uc640 \ube44\uc2b7\ud558\uc9c0\ub9cc \ub354 \ub9ce\uc740 \uae30\ub2a5\uc744 \uac00\uc9c0\uace0 \uc788\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"Retires, Disconnections, Authentication, Routes...")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(814).Z,width:"1858",height:"906"})),(0,r.kt)("p",null,"\uc7a5\uc810\uc740 \ubd84\uc0b0\ud658\uacbd\uc5d0\uc11c \ub124\ud2b8\uc6cc\ud06c \ucd94\uc801\uc774 \uc6a9\uc774\ud574\uc9c4\ub2e4.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub124\ud2b8\uc6cc\ud06c \uc804\uccb4 \ud50c\ub85c\uc6b0\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc73c\uba70, \ud2b9\uc815 \ub124\ud2b8\uc6cc\ud06c\ub97c \ucc28\ub2e8\ud560\uc218\ub3c4 \uc788\ub2e4.  ")),(0,r.kt)("h2",{id:"anti-corruption-adapter-pattern"},"Anti-Corruption Adapter Pattern"),(0,r.kt)("p",null,"\uc190\uc0c1 \ubc29\uc9c0\ub97c \uc704\ud55c \uc5b4\ub311\ud130 \ud328\ud134  "),(0,r.kt)("h3",{id:"\ubb38\uc81c\uc8101-\ubc0f-\ud574\uacb0"},"\ubb38\uc81c\uc8101 \ubc0f \ud574\uacb0"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(519).Z,width:"1536",height:"926"})),(0,r.kt)("p",null,"1.\ubaa8\ub180\ub9ac\ud2f1 > MSA \ub9c8\uc774\uadf8\ub808\uc774\uc158 \uc774\uc288    "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uad49\uc7a5\ud788 \uc624\ub798 \uc720\uc9c0\ubcf4\uc218\ub418\uc5b4 \ucf54\ub4dc\ubca0\uc774\uc2a4\ub3c4 \uac70\ub300\ud574\uc9c0\uace0 \ud300\ub3c4 \ub9ce\uc544\uc9c4 \uc11c\ube44\uc2a4  "),(0,r.kt)("li",{parentName:"ul"},"MSA\ub85c \uc804\ud658\ud558\uae30 \uc704\ud55c \ubbf8\uc158\uc774 \uc788\ub2e4.   "),(0,r.kt)("li",{parentName:"ul"},"\uac1c\ubc1c\uc744 \uc911\ub2e8\ud558\uace0 \ud55c\ubc88\uc5d0 \uc774\ub3d9\uc2dc\ud0a4\ub294\uac83\uc774 \uc544\ub2c8\ub77c \uc11c\ube44\uc2a4\ub97c \ud558\ub098\uc529 \ubd84\ub9ac\ud558\ub294 \uacfc\uc815\uc744 \uc5ec\ub7ec\ubc88 \ubc18\ubcf5\ud55c\ub2e4. ")),(0,r.kt)("p",null,"\uc774 \uacfc\uc815\uc5d0\uc11c \ubd84\ub9ac\ub41c MicoService 1\ubc88\uc774 \uae30\uc874\uc758 \ubaa8\ub180\ub9ac\ud2f1 \uc11c\ube44\uc2a4\uc640 \uc5ec\uc804\ud788 \ud1b5\uc2e0\ud574\uc57c \ud55c\ub2e4.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud504\ub85c\ud1a0\ucf5c\uc774\ub098, API\ubc84\uc804\uc774\ub4e0 \ub808\uac70\uc2dc \ud56d\ubaa9\uacfc \uc720\uc9c0\ud574\uc57c \ud55c\ub2e4.  ")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5065).Z,width:"1880",height:"904"}),"\n\uc774\ub97c \ud574\uacb0\ud558\ub294 \ubc29\ubc95\uc740 \uc911\uac04\uc5d0 \uc5b4\ub311\ud130 \ub808\uc774\uc5b4\ub97c \ub450\ub294\uac83\uc774\ub2e4.   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MSA\ub294 \ub9c8\uce58 \uc0c8\ub85c\uc6b4 \uc11c\ube44\uc2a4\ucc98\ub7fc \ud574\ub2f9 \uc11c\ube44\uc2a4\ub97c \ubc14\ub77c\ubcf4\uba74\uc11c \ub370\uc774\ud130\ub97c \uc694\uccad\ud55c\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\uc0c8\ub85c\uc6b4 \uc2dc\uc2a4\ud15c\uc740 \uc0c8\ub85c\uc6b4 \ubaa8\ub378\uacfc API\ub85c \uc5b4\ub311\ud130 \uc11c\ube44\uc2a4\uc5d0 \uc5f0\uacb0\ub418\uace0, \uae30\uc874 \uc2dc\uc2a4\ud15c\uc740 \uad6c \ubaa8\ub378\uc744 \uac00\uc9c0\uace0 \ud1b5\uc2e0\ud55c\ub2e4.  ")),(0,r.kt)("h3",{id:"\ubb38\uc81c\uc8102-\ubc0f-\ud574\uacb0"},"\ubb38\uc81c\uc8102 \ubc0f \ud574\uacb0"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2151).Z,width:"1870",height:"900"})),(0,r.kt)("p",null,"2.\uc77c\ubd80\uc2dc\uc2a4\ud15c\uc774 \uc5ec\uc804\ud788 \ub0a8\uc544\uc788\ub294 \uacbd\uc6b0  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc0c8\ub85c\uc6b4 \uc2dc\uc2a4\ud15c\uc73c\ub85c \uc774\uc804\ud574\uc57c\ud558\uc9c0\ub9cc, \ub808\uac70\uc2dc \uc11c\ube44\uc2a4\uac00 \uad49\uc7a5\ud788 \uad6c\ud604\ud558\uae30 \uc5b4\ub835\uace0, \uc0c8\ub85c \uad6c\ud604\ud558\uae30\uc5d0 \ub9ac\uc18c\uc2a4\uac00 \ubd80\uc871\ud55c \uc0c1\ud669\uc774\ub2e4.   "),(0,r.kt)("li",{parentName:"ul"},"\uc608\ub97c\ub4e4\uc5b4 \uae30\uc5c5\ud615\uc740\ud589\uc5d0\uc11c B2C \ube44\uc988\ub2c8\uc2a4 \ud655\uc7a5\uc73c\ub85c \uc774\uc5b4\uc9c0\ub294\ub370 B2B \uae30\uc874 \ub808\uac70\uc2dc\ub97c \uc774\uc6a9\ud574\uc57c\ud558\ub294 \uacbd\uc6b0\uc774\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\uc0c8\ub85c\uc6b4 B2C \ube44\uc988\ub2c8\uc2a4\uc640 \ub808\uac70\uc2dc B2B \uc11c\ube44\uc2a4 \uc0ac\uc774\uc5d0 \ub808\uc774\uc5b4 \uc11c\ube44\uc2a4\ub97c \ud558\ub098 \ub450\uace0 \ud1b5\uc2e0\ud558\ub3c4\ub85d \uc2dc\uc2a4\ud15c\uc744 \ub514\uc790\uc778\ud55c\ub2e4.  ")),(0,r.kt)("h3",{id:"\uace0\ub824\uc810"},"\uace0\ub824\uc810"),(0,r.kt)("p",null,"anti-corruption \ub808\uc774\uc5b4/\uc5b4\ub311\ud130 \uc11c\ube44\uc2a4\ub3c4 \uac1c\ubc1c \uacf5\uc218\uac00 \ub9ce\uc774 \ub4e4\uc5b4\uac04\ub2e4.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud2b8\ub808\uc774\ub4dc \uc624\ud504\ub97c \uc798 \uc0dd\uac01\ud574\uc57c\ud55c\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\uac1c\ubc1c, \ud14c\uc2a4\ud2b8, \ubc30\ud3ec, \ud655\uc7a5\uc131 \ubaa8\ub450 \ud544\uc694\ud55c \uc5b4\ub311\ud130 \uc11c\ube44\uc2a4 \uc774\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\ube44\uc6a9\uc744 \uc904\uc774\uae30 \uc704\ud574\uc11c, \uc5b4\ub311\ud130\ub97c cloud fun\uc73c\ub85c \ub3c4\uc785\ud574\ubcfc \uc218 \uc788\ub2e4.  ")),(0,r.kt)("h2",{id:"bffs-pattern"},"BFFs Pattern"),(0,r.kt)("h3",{id:"\ubb38\uc81c\uc810"},"\ubb38\uc81c\uc810"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5916).Z,width:"1672",height:"924"}),"\n\uc6f9 \ud504\ub860\ud2b8\uc640 \ud1b5\uc2e0\ud558\uace0 \uc788\ub294 \ubc31\uc564\ub4dc\uc11c\ubc84\uac00 \uc788\ub294\ub370, \uc11c\ube44\uc2a4\uc758 \ud655\uc7a5\uc73c\ub85c \ubaa8\ubc14\uc77c \uc571\uc774 \ub4e4\uc5b4\uc654\ub2e4.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubca0\ud130\ub9ac\uc758 \uc0c1\ud669, \uc704\uce58\uc815\ubcf4 \ub4f1 \ud2b9\uc218\ud55c \ube44\uc988\ub2c8\uc2a4\ub85c\uc9c1\uc744 \uc218\ud589\ud574\uc57c \ud55c\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\uc6f9\uc5d0\ub9cc \ucd5c\uc801\ud654\ub41c API\ub85c \ubaa8\ubc14\uc77cAPI\ub97c \ucc98\ub9ac\ud558\ub824\uba74 \uc5ec\ub7ec \uc774\uc288\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4.   "),(0,r.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4\uc758 \ubcf5\uc7a1\ub3c4\uac00 \uc62c\ub77c\uac00\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud55c\ub2e4.  ")),(0,r.kt)("h3",{id:"\uc194\ub8e8\uc158"},"\uc194\ub8e8\uc158"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8199).Z,width:"1698",height:"912"}),"\n\uac01 \uc11c\ube44\uc2a4\uc5d0 \ucd5c\uc801\ud654\ub41c BFF\uc11c\ubc84\ub97c \ub458 \uc218 \uc788\ub2e4.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc \uc5b4\ub290\uc815\ub3c4 \uacf5\ud1b5\ub41c \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud55c\ub2e4\uba74 shared service\ub97c \ud558\ub098 \ub450\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\ud639\uc740 \uc6f9/\ubaa8\ubc14\uc77c\ub85c 2\uac1c\uc758 BFF\uc11c\ubc84\ub97c \ub450\ub294 \ubc29\uc2dd\ub3c4 \uace0\ub824\ud560 \uc218 \uc788\ub2e4.  ")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(34).Z,width:"1590",height:"936"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc55e\ub2e8\uc5d0 \ub85c\ub4dc\ubc38\ub7ec\uc11c\ub97c \ub450\uace0 \uac01 user-agent\ub9c8\ub2e4 \uc11c\ub85c \ub2e4\ub978 \ubd84\uae30\ub97c \uce60\uc218\ub3c4 \uc788\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ubc14\uc77c \uc11c\ube44\uc2a4\uac00 \ub85c\ub4dc\uac00 \uac00\uc911\ub418\uba74, mobile service \ub9cc \uc2a4\ucf00\uc77c\uc5c5\uc744 \uc720\uc5f0\ud558\uac8c \ud560 \uc218 \uc788\ub2e4.")))}m.isMDXComponent=!0},4931:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/co18-f17d66815217135ddc2068e7e78cba7f.png"},7133:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/co19-74ccad4e0643c96a95ee791a26cfaa3f.png"},5346:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/co20-53bb1baf8f1ad593ee68cd443f67fbfb.png"},814:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/co21-7d339b5dc6c0c5cab6c9a8fe378fac32.png"},519:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/co22-37502d0e7677e39e689101eeef75ddb9.png"},5065:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/co23-98bb888b63036388d4e015f66c40bd0b.png"},2151:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/co24-a80f4fcd3179dda573467e59ee15b5cb.png"},5916:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/co25-2e4b5ef45031172a7f0d97fbff8ffb88.png"},8199:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/co26-e5dc6129db9ecfbd2c7576c3c2ce6b1f.png"},34:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/co27-e2a8745a5e3cb50ae6d420b9b3360742.png"}}]);