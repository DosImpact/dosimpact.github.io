"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[2930],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>s});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),u=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},N=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),m=u(a),N=n,s=m["".concat(o,".").concat(N)]||m[N]||c[N]||r;return a?l.createElement(s,i(i({ref:t},k),{},{components:a})):l.createElement(s,i({ref:t},k))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}N.displayName="MDXCreateElement"},54294:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=a(87462),n=(a(67294),a(3905));const r={sidebar_position:2},i="DeepDive\xa0ErrorBoundary vs try-catch",p={unversionedId:"g-fe/common/deepdive/de02",id:"g-fe/common/deepdive/de02",title:"DeepDive\xa0ErrorBoundary vs try-catch",description:"- DeepDive\xa0ErrorBoundary vs try-catch",source:"@site/docs/g-fe/0-common/1-deepdive/de02.md",sourceDirName:"g-fe/0-common/1-deepdive",slug:"/g-fe/common/deepdive/de02",permalink:"/docs/g-fe/common/deepdive/de02",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-fe/0-common/1-deepdive/de02.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"frontEnd",previous:{title:"DeepDive \ube0c\ub77c\uc6b0\uc800, \ub9ac\uc561\ud2b8, \uc11c\ubc84 \ub80c\ub354\ub9c1 - 2\ud3b8",permalink:"/docs/g-fe/common/deepdive/de01-2"},next:{title:"DeepDive\xa0JS\uc2e4\ud589\uc2a4\ucf54\ud504",permalink:"/docs/g-fe/common/deepdive/de03"}},o={},u=[{value:"V8, EventLoop, CallStack",id:"v8-eventloop-callstack",level:2},{value:"\ub3d9\uae30\uc801 \ucc98\ub9ac vs \ube44\ub3d9\uae30\uc801 \ucc98\ub9ac",id:"\ub3d9\uae30\uc801-\ucc98\ub9ac-vs-\ube44\ub3d9\uae30\uc801-\ucc98\ub9ac",level:3},{value:"V8 \uc5d4\uc9c4",id:"v8-\uc5d4\uc9c4",level:3},{value:"\uc774\ubca4\ud2b8 \ub8e8\ud504(Event Loop)",id:"\uc774\ubca4\ud2b8-\ub8e8\ud504event-loop",level:3},{value:"Call Stack",id:"call-stack",level:3},{value:"\uc2f1\uae00\uc2a4\ub808\ub4dc vs \uba40\ud2f0\uc2a4\ub808\ub4dc vs \uba40\ud2f0\ud504\ub85c\uc138\uc2a4",id:"\uc2f1\uae00\uc2a4\ub808\ub4dc-vs-\uba40\ud2f0\uc2a4\ub808\ub4dc-vs-\uba40\ud2f0\ud504\ub85c\uc138\uc2a4",level:2},{value:"React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub420 \ub54c V8 \uc5d4\uc9c4\uacfc \uc774\ubca4\ud2b8 \ub8e8\ud504\uac00 \ucc98\ub9ac\ud558\ub294 \uc791\uc5c5",id:"react-\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774-\uc2e4\ud589\ub420-\ub54c-v8-\uc5d4\uc9c4\uacfc-\uc774\ubca4\ud2b8-\ub8e8\ud504\uac00-\ucc98\ub9ac\ud558\ub294-\uc791\uc5c5",level:2},{value:"V8 \uc5d4\uc9c4\uc774 \ucc98\ub9ac\ud558\ub294 \uac83",id:"v8-\uc5d4\uc9c4\uc774-\ucc98\ub9ac\ud558\ub294-\uac83",level:3},{value:"\uc774\ubca4\ud2b8 \ub8e8\ud504\uac00 \ucc98\ub9ac\ud558\ub294 \uac83",id:"\uc774\ubca4\ud2b8-\ub8e8\ud504\uac00-\ucc98\ub9ac\ud558\ub294-\uac83",level:3},{value:"ErrorBoundary\uc758 \ucc98\ub9ac\ud558\ub294 \uc560\ub7ec",id:"errorboundary\uc758-\ucc98\ub9ac\ud558\ub294-\uc560\ub7ec",level:2}],k={toc:u},m="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deepdiveerrorboundary-vs-try-catch"},"DeepDive\xa0ErrorBoundary vs try-catch"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#deepdiveerrorboundary-vs-try-catch"},"DeepDive\xa0ErrorBoundary vs try-catch"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#v8-eventloop-callstack"},"V8, EventLoop, CallStack"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%EB%8F%99%EA%B8%B0%EC%A0%81-%EC%B2%98%EB%A6%AC-vs-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%A0%81-%EC%B2%98%EB%A6%AC"},"\ub3d9\uae30\uc801 \ucc98\ub9ac vs \ube44\ub3d9\uae30\uc801 \ucc98\ub9ac")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#v8-%EC%97%94%EC%A7%84"},"V8 \uc5d4\uc9c4")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84event-loop"},"\uc774\ubca4\ud2b8 \ub8e8\ud504(Event Loop)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#call-stack"},"Call Stack")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%EC%8B%B1%EA%B8%80%EC%8A%A4%EB%A0%88%EB%93%9C-vs-%EB%A9%80%ED%8B%B0%EC%8A%A4%EB%A0%88%EB%93%9C-vs-%EB%A9%80%ED%8B%B0%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4"},"\uc2f1\uae00\uc2a4\ub808\ub4dc vs \uba40\ud2f0\uc2a4\ub808\ub4dc vs \uba40\ud2f0\ud504\ub85c\uc138\uc2a4")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#react-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98%EC%9D%B4-%EC%8B%A4%ED%96%89%EB%90%A0-%EB%95%8C-v8-%EC%97%94%EC%A7%84%EA%B3%BC-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84%EA%B0%80-%EC%B2%98%EB%A6%AC%ED%95%98%EB%8A%94-%EC%9E%91%EC%97%85"},"React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub420 \ub54c V8 \uc5d4\uc9c4\uacfc \uc774\ubca4\ud2b8 \ub8e8\ud504\uac00 \ucc98\ub9ac\ud558\ub294 \uc791\uc5c5"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#v8-%EC%97%94%EC%A7%84%EC%9D%B4-%EC%B2%98%EB%A6%AC%ED%95%98%EB%8A%94-%EA%B2%83"},"V8 \uc5d4\uc9c4\uc774 \ucc98\ub9ac\ud558\ub294 \uac83")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84%EA%B0%80-%EC%B2%98%EB%A6%AC%ED%95%98%EB%8A%94-%EA%B2%83"},"\uc774\ubca4\ud2b8 \ub8e8\ud504\uac00 \ucc98\ub9ac\ud558\ub294 \uac83")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#errorboundary%EC%9D%98-%EC%B2%98%EB%A6%AC%ED%95%98%EB%8A%94-%EC%95%A0%EB%9F%AC"},"ErrorBoundary\uc758 \ucc98\ub9ac\ud558\ub294 \uc560\ub7ec"))))),(0,n.kt)("h2",{id:"v8-eventloop-callstack"},"V8, EventLoop, CallStack"),(0,n.kt)("h3",{id:"\ub3d9\uae30\uc801-\ucc98\ub9ac-vs-\ube44\ub3d9\uae30\uc801-\ucc98\ub9ac"},"\ub3d9\uae30\uc801 \ucc98\ub9ac vs \ube44\ub3d9\uae30\uc801 \ucc98\ub9ac"),(0,n.kt)("p",null,"1.JS\ucf54\ub4dc\uc758 \ucef4\ud30c\uc77c\uc740 V8 \uc5d4\uc9c4\uc774 \ucc98\ub9ac\ud55c\ub2e4.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ub418\ub4e0 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \ucc98\ub9ac\ub418\ub4e0 \uac04\uc5d0 V8 \uc5d4\uc9c4\uc740 \uba3c\uc800 \ud574\ub2f9 \ucf54\ub4dc\ub97c \ucef4\ud30c\uc77c\ud569\ub2c8\ub2e4. "),(0,n.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c \ub2e8\uacc4\uc5d0\uc11c \ucf5c\uc2a4\ud0dd\uc744 \uc0ac\uc6a9\ud558\uc9c0\ub294 \uc54a\ub294\ub2e4. "),(0,n.kt)("li",{parentName:"ul"},"\uadf8 \uc774\ud6c4 (\ube44)\ub3d9\uae30\uc801\ucc98\ub9ac \ud55c\ub2e4.",(0,n.kt)("br",{parentName:"li"}),"2.\ub3d9\uae30\uc801\uc73c\ub85c \ucc98\ub9ac : Call Stack \ub123\uc5b4 \uc2e4\ud589\ud55c\ub2e4.",(0,n.kt)("br",{parentName:"li"}),"3.\ube44\ub3d9\uae30\uc801 \ucc98\ub9ac : TaskQueue\uc5d0 \ub123\uace0 \uc774\ubca4\ud2b8\ub8e8\ud504\uc5d0 \uc758\ud574 CallStack\uc73c\ub85c \uc774\ub3d9\ud55c\ub2e4.   ")),(0,n.kt)("h3",{id:"v8-\uc5d4\uc9c4"},"V8 \uc5d4\uc9c4"),(0,n.kt)("p",null,"1.V8 \uc5d4\uc9c4\uc740 Google\uc774 \uac1c\ubc1c\ud55c \uc624\ud508 \uc18c\uc2a4 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc774 \uc5d4\uc9c4\uc740 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\ub97c ",(0,n.kt)("strong",{parentName:"li"},"\ud574\uc11d"),"\ud558\uace0 ",(0,n.kt)("strong",{parentName:"li"},"\uc2e4\ud589"),"\ud558\ub294 \uc5ed\ud560"),(0,n.kt)("li",{parentName:"ul"},"Google Chrome\uacfc Node.js\uc5d0\uc11c \uc0ac\uc6a9  "),(0,n.kt)("li",{parentName:"ul"},"1.1 \ud574\uc11d : \ucef4\ud30c\uc77c\uc740 Just-In-Time (JIT) \ubc29\uc2dd \uc774\uc6a9   "),(0,n.kt)("li",{parentName:"ul"},"1.2 \uc2e4\ud589 : \ud799\uba54\ubaa8\ub9ac \uad00\ub9ac, \uac00\ube44\uc9c0 \ucf5c\ub809\uc158, \ucf5c\uc2a4\ud0dd     ")),(0,n.kt)("p",null,"2.",(0,n.kt)("strong",{parentName:"p"},"Just-In-Time (JIT) \ucef4\ud30c\uc77c")),(0,n.kt)("p",null,"\ubc30\uacbd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc778\ud130\ud504\ub9ac\ud130 : \ucf54\ub4dc\ub97c \ud55c\uc904\ud55c\uc904 \uc2e4\ud589\ud558\uc5ec \ube60\ub974\uc9c0\ub9cc, \ubc18\ubcf5\uc801\uc778 \ucf54\ub4dc \uc2e4\ud589\uc2dc \uc131\ub2a5 \ubd88\uc775.  "),(0,n.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec : \ubaa8\ub4e0 \uc18c\uc2a4\ucf54\ub4dc\ub97c \ubd84\uc11d \ud6c4 \ubc14\uc774\ud2b8 \ucf54\ub4dc\ub97c \ub9cc\ub4e4\uace0\ub098\uc11c \uc2e4\ud589. \ube4c\ub4dc\ud0c0\uc784\uc5d0 \uc2dc\uac04\uc774 \uac78\ub9ac\uc9c0\ub9cc \uc2e4\ud589\uc740 \ube60\ub974\ub2e4.  "),(0,n.kt)("li",{parentName:"ul"},"\ubc14\uc774\ud2b8 \ucf54\ub4dc : \ud30c\uc77c\ud55c \ud6c4 \uc0dd\uc131\ub418\ub294 \uc911\uac04 \ub2e8\uacc4\uc758 \ucf54\ub4dc, \uc8fc\ub85c \uac00\uc0c1 \uba38\uc2e0(VM)\uc5d0\uc11c \uc2e4\ud589\ub418\ub3c4\ub85d \uc124\uacc4\ub41c \ucf54\ub4dc  "),(0,n.kt)("li",{parentName:"ul"},"\uba38\uc2e0\ucf54\ub4dc : \ucef4\ud4e8\ud130\uc758 CPU\uac00 \uc9c1\uc811 \uc774\ud574\ud558\uace0 \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \ucd5c\uc885 \ud615\ud0dc\uc758 \ucf54\ub4dc")),(0,n.kt)("p",null,"V8\uc5d4\uc9c4\uc740 \uc704 2\uac00\uc9c0 \ubc29\uc2dd\uc758 \uc774\uc810\uc744 \ubaa8\ub450 \uac00\uc9c4\ub2e4.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JIT \ucef4\ud30c\uc77c\uc740 \uc2e4\uc2dc\uac04\uc73c\ub85c \ucf54\ub4dc\uc758 \ub369\uc5b4\ub9ac\ub97c \ucef4\ud30c\uc77c \ud55c\ub2e4.  "),(0,n.kt)("li",{parentName:"ul"},"\ucc98\uc74c\uc5d0\ub294 \ubc14\uc774\ud2b8 \ucf54\ub4dc\ub85c \ubcc0\ud658\ud558\uace0, \uc774\ub97c \uc2e4\ud589\ud558\uba74\uc11c \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294(\ud56b \ucf54\ub4dc) \ubd80\ubd84\uc744 \uac10\uc9c0."),(0,n.kt)("li",{parentName:"ul"},"\ud56b \ucf54\ub4dc\ub294 \ub124\uc774\ud2f0\ube0c \uba38\uc2e0 \ucf54\ub4dc(\uae30\uacc4\uc5b4)\ub85c \ucef4\ud30c\uc77c\ub418\uc5b4 \ube60\ub974\uac8c \ub3d9\uc791\ud558\uc5ec \uc131\ub2a5 \uc774\uc810.  ")),(0,n.kt)("p",null,"3.",(0,n.kt)("strong",{parentName:"p"},"Garbage Collection")),(0,n.kt)("p",null,"V8\uc740 \uba54\ubaa8\ub9ac \uad00\ub9ac\ub97c \uc790\ub3d9\uc73c\ub85c \uc218\ud589\ud558\uba70, \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \uba54\ubaa8\ub9ac\ub97c \uc8fc\uae30\uc801\uc73c\ub85c \uc815\ub9ac"),(0,n.kt)("p",null,"4.\ubc14\uc774\ud2b8 \ucf54\ub4dc, \ub124\uc774\ud2f0\ube0c \ucf54\ub4dc, \ud56b \ucf54\ub4dc \uac10\uc9c0 (Hot Code Detection)  "),(0,n.kt)("p",null,"4.1 \ubc14\uc774\ud2b8\ucf54\ub4dc \uc0dd\uc131  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ucc98\uc74c\uc5d0 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\ub294 ",(0,n.kt)("strong",{parentName:"li"},"\ubc14\uc774\ud2b8\ucf54\ub4dc"),"\ub85c \ubcc0\ud658\ub429\ub2c8\ub2e4. \uc774 \ubc14\uc774\ud2b8\ucf54\ub4dc\ub294 ",(0,n.kt)("strong",{parentName:"li"},"\uc778\ud130\ud504\ub9ac\ud130"),"\uc5d0 \uc758\ud574 \uc2e4\ud589\ub429\ub2c8\ub2e4.")),(0,n.kt)("p",null,"4.2 \ud56b \ucf54\ub4dc \uac10\uc9c0 (Hot Code Detection):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\uac00 \uc2e4\ud589\ub418\uba74\uc11c V8 \uc5d4\uc9c4\uc740 \uc790\uc8fc \uc2e4\ud589\ub418\ub294 \ucf54\ub4dc(\uc608: \ub8e8\ud504 \ub0b4\uc5d0\uc11c \ubc18\ubcf5\ub418\ub294 \ucf54\ub4dc)\ub098 \ud568\uc218(\ud56b \ucf54\ub4dc)\ub97c \uac10\uc9c0")),(0,n.kt)("p",null,"4.3 \ub124\uc774\ud2f0\ube0c \ucf54\ub4dc\ub85c \ucef4\ud30c\uc77c:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"V8\uc740 \uc774\ub7ec\ud55c \ud56b \ucf54\ub4dc\ub97c \ucd5c\uc801\ud654 \ub300\uc0c1\uc774\ub77c\uace0 \ud310\ub2e8\ud558\uace0, \ub354 \ube60\ub974\uac8c \uc2e4\ud589\ub420 \uc218 \uc788\ub3c4\ub85d ",(0,n.kt)("strong",{parentName:"li"},"\ub124\uc774\ud2f0\ube0c \uba38\uc2e0 \ucf54\ub4dc\ub85c \ucef4\ud30c\uc77c"),"\ud569\ub2c8\ub2e4.")),(0,n.kt)("p",null,"4.4 \ucd5c\uc801\ud654 \ubc0f \ub514\uc635\ud2f0\ub9c8\uc774\uc988(Deoptimization):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"V8\uc740 \uc2e4\ud589 \uc911\uc5d0 \ucd5c\uc801\ud654\ub97c \uacc4\uc18d \uc801\uc6a9"),(0,n.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \ucf54\ub4dc\uac00 \uc608\uc0c1\uacfc \ub2e4\ub974\uac8c \ub3d9\uc791\ud560 \uacbd\uc6b0 \ucd5c\uc801\ud654\ub97c \ub418\ub3cc\ub9ac\ub294 \uacfc\uc815\ub3c4 \uc218\ud589\ud569\ub2c8\ub2e4.")),(0,n.kt)("p",null,"*\uc6f9\uc5b4\uc148\ube14\ub9ac\uc5b4\ub294 \ub9ce\uc740\uc591\uc758 \ucf54\ub4dc\uac00 \uae30\uacc4\uc5b4(\ub124\uc774\ud2f0\ube0c)\uc5b4\ub85c \ubcc0\uacbd\ub418\uc5b4 \ube60\ub978 \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc900\ub2e4.  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'\ucc38\uace0) JIT\uacfc Execution Context\uc758 2\ub2e8\uacc4  \n\n1.Creation Phase (\uc0dd\uc131 \ub2e8\uacc4):\n   - \ubcc0\uc218 \uac1d\uccb4(Variable Object) \uc0dd\uc131, \uc2a4\ucf54\ud504 \uccb4\uc778(Scope Chain), this \ubc14\uc778\ub529\n\n2.Execution Phase (\uc2e4\ud589 \ub2e8\uacc4):\n   - \ucf54\ub4dc \uc2e4\ud589: \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\ub97c \ud55c \uc904\uc529 \uc2e4\ud589\ud558\uba74\uc11c, \ubcc0\uc218\uc640 \ud568\uc218\uc758 \uac12\uc774 \ud560\ub2f9\ub418\uace0 \uacc4\uc0b0\uc774 \uc218\ud589\ub429\ub2c8\ub2e4.\n\n*JIT \ucef4\ud30c\uc77c\uc740 Execution Phase\uc640 \ub3d9\uc2dc\uc5d0 \uc9c4\ud589\ub418\uac70\ub098 \uadf8 \uc9c1\uc804\uc5d0 \uc644\ub8cc\ub418\uc5b4, \ucd5c\uc801\ud654\ub41c \ucf54\ub4dc\uac00 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc758 2\ub2e8\uacc4\uc5d0\uc11c \uc0ac\uc6a9\n   - \ucf54\ub4dc \uc2e4\ud589 \uc911 \ucd5c\uc801\ud654: \uc774 \ub2e8\uacc4\uc5d0\uc11c V8 \uc5d4\uc9c4\uc740 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\uba74\uc11c \uc790\uc8fc \ud638\ucd9c\ub418\uac70\ub098 \ubc18\ubcf5\ub418\ub294 "\ud56b \ucf54\ub4dc" \ubd80\ubd84\uc744 \uac10\uc9c0\ud569\ub2c8\ub2e4.\n\n')),(0,n.kt)("h3",{id:"\uc774\ubca4\ud2b8-\ub8e8\ud504event-loop"},"\uc774\ubca4\ud2b8 \ub8e8\ud504(Event Loop)"),(0,n.kt)("p",null,"\uc774\ubca4\ud2b8 \ub8e8\ud504\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ub7f0\ud0c0\uc784\uc5d0\uc11c \ube44\ub3d9\uae30 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud558\ub294 \ud575\uc2ec \uba54\ucee4\ub2c8\uc998\uc785\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc2f1\uae00 \uc2a4\ub808\ub4dc \uc5b8\uc5b4 -> \ucf5c\uc2a4\ud0dd \uc791\uc5c5\uc774 \ub05d\ub098\uc57c \ub2e4\uc74c\uc791\uc5c5\uc774 \uc218\ud589 \uac00\ub2a5\ud558\ub2e4.  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ube44\ub3d9\uae30 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \uc774\uc720\uac00 \ubc14\ub85c \uc774\ubca4\ud2b8 \ub8e8\ud504 \ub355\ubd84")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Call Stack"),": \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \ud568\uc218 \ud638\ucd9c\uc744 \uad00\ub9ac\ud558\uae30 \uc704\ud574 \ucf5c \uc2a4\ud0dd(Call Stack)\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Task Queue"),": "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ube44\ub3d9\uae30 \uc791\uc5c5(\uc608: \ud0c0\uc774\uba38, \ub124\ud2b8\uc6cc\ud06c \uc694\uccad \ub4f1)\uc740 \ucf5c \uc2a4\ud0dd\uc5d0\uc11c \ubc14\ub85c \uc2e4\ud589\ub418\uc9c0 \uc54a\uace0, \ub300\uc2e0 Task Queue\uc5d0 \ub123\uc5b4\uc9d1\ub2c8\ub2e4. "),(0,n.kt)("li",{parentName:"ul"},"\ucf5c \uc2a4\ud0dd\uc774 \ube44\uc6cc\uc9c0\uba74 \uc774\ubca4\ud2b8 \ub8e8\ud504\uac00 Task Queue\uc5d0\uc11c \ub300\uae30 \uc911\uc778 \uc791\uc5c5\uc744 \uac00\uc838\uc640 \uc2e4\ud589\ud569\ub2c8\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Event Loop"),": \uc774\ubca4\ud2b8 \ub8e8\ud504\ub294 \ucf5c \uc2a4\ud0dd\uacfc Task Queue\ub97c \ubaa8\ub2c8\ud130\ub9c1\ud558\uba74\uc11c"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ucf5c \uc2a4\ud0dd\uc774 \ube44\uc6cc\uc9c8 \ub54c\ub9c8\ub2e4 Task Queue\uc5d0\uc11c \uc791\uc5c5\uc744 \uac00\uc838\uc640 \uc2e4\ud589. "),(0,n.kt)("li",{parentName:"ul"},"\uc774 \uacfc\uc815\uc774 \ubc18\ubcf5\ub418\uba74\uc11c \ube44\ub3d9\uae30 \uc791\uc5c5\ub4e4\uc774 \uc21c\ucc28\uc801\uc73c\ub85c \ucc98\ub9ac.")))),(0,n.kt)("h3",{id:"call-stack"},"Call Stack"),(0,n.kt)("p",null,"\ucf5c \uc2a4\ud0dd\uc740 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc758 \ud575\uc2ec \uad6c\uc131 \uc694\uc18c\ub85c, \ud568\uc218 \ud638\ucd9c\uc744 \uad00\ub9ac\ud558\ub294 \uc2a4\ud0dd \uad6c\uc870\uc785\ub2c8\ub2e4.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Push/Pop"),": \ud568\uc218\uac00 \ud638\ucd9c\ub418\uba74 \ucf5c \uc2a4\ud0dd\uc5d0 \ud478\uc2dc(Push)\ub418\uace0, \ud568\uc218\uac00 \uc2e4\ud589\uc744 \ub9c8\uce58\uba74 \ud31d(Pop)\ub429\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LIFO(Last In, First Out)"),": \ucf5c \uc2a4\ud0dd\uc740 \ud6c4\uc785\uc120\ucd9c(LIFO) \ubc29\uc2dd\uc73c\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4. \uac00\uc7a5 \ucd5c\uadfc\uc5d0 \ud478\uc2dc\ub41c \ud568\uc218\uac00 \uba3c\uc800 \ud31d\ub429\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\uc2a4\ud0dd \uc624\ubc84\ud50c\ub85c\uc6b0(Stack Overflow)"),": \ucf5c \uc2a4\ud0dd\uc774 \ub108\ubb34 \uae4a\uc5b4\uc838 \ud55c\uacc4\uc5d0 \ub3c4\ub2ec\ud558\uba74 \uc2a4\ud0dd \uc624\ubc84\ud50c\ub85c\uc6b0\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uc7ac\uadc0 \ud638\ucd9c\uc774 \ubb34\ud55c\ud788 \uc77c\uc5b4\ub098\uba74 \uc774\ub7f0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.")),(0,n.kt)("h2",{id:"\uc2f1\uae00\uc2a4\ub808\ub4dc-vs-\uba40\ud2f0\uc2a4\ub808\ub4dc-vs-\uba40\ud2f0\ud504\ub85c\uc138\uc2a4"},"\uc2f1\uae00\uc2a4\ub808\ub4dc vs \uba40\ud2f0\uc2a4\ub808\ub4dc vs \uba40\ud2f0\ud504\ub85c\uc138\uc2a4"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"3\uac00\uc9c0 \ubc29\uc2dd\uc5d0 \ub530\ub77c CallStack, Memory \uad00\ub9ac\uc5d0 \ucc28\uc774\uac00 \uc788\ub2e4.  ")),(0,n.kt)("p",null,"1.",(0,n.kt)("strong",{parentName:"p"},"\uc2f1\uae00 \uc2a4\ub808\ub4dc"),"  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc2f1\uae00 \uc2a4\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c\ub294 ",(0,n.kt)("strong",{parentName:"li"},"\ud558\ub098\uc758 \ucf5c \uc2a4\ud0dd"),"\ub9cc \uc874\uc7ac.  "),(0,n.kt)("li",{parentName:"ul"},"\ud558\ub098\uc758 \uc791\uc5c5\uc774 \uc644\ub8cc\ub420 \ub54c\uae4c\uc9c0 \ub2e4\ub978 \uc791\uc5c5\uc774 \uc2e4\ud589\ub418\uc9c0 \uc54a\ub294\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ube44\ub3d9\uae30 \ucc98\ub9ac\uc5d0 \uc774\ubca4\ud2b8 \ub8e8\ud504\ub97c \ud65c\uc6a9\ud558\uc9c0\ub9cc, \uc5ec\uc804\ud788 \ud558\ub098\uc758 \ucf5c \uc2a4\ud0dd\uc5d0\uc11c \ubaa8\ub4e0 \ud568\uc218 \ud638\ucd9c\uc774 \ucc98\ub9ac.")),(0,n.kt)("p",null,"2.",(0,n.kt)("strong",{parentName:"p"},"\uba40\ud2f0 \uc2a4\ub808\ub4dc"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uba40\ud2f0 \uc2a4\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c\ub294 ",(0,n.kt)("strong",{parentName:"li"},"\uac01 \uc2a4\ub808\ub4dc\ub9c8\ub2e4 \ubcc4\ub3c4\uc758 \ucf5c \uc2a4\ud0dd"),"\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4. (\ub3c5\ub9bd\uc801 \uc2e4\ud589, \uac01 \uc2a4\ub808\ub4dc\uac00 \uc790\uc2e0\uc758 \ucf5c \uc2a4\ud0dd\uc744 \uad00\ub9ac)  "),(0,n.kt)("li",{parentName:"ul"},"\uac01 \uc2a4\ub808\ub4dc\uac00 \uace0\uc720\uc758 \uc2a4\ud0dd \uba54\ubaa8\ub9ac\ub97c \uac00\uc9c0\uace0, \uc774\ub97c \ud1b5\ud574 \ud568\uc218 \ud638\ucd9c\uacfc \ub85c\uceec \ubcc0\uc218\ub4e4\uc744 \uad00\ub9ac\ud569\ub2c8\ub2e4.  "),(0,n.kt)("li",{parentName:"ul"},"\uac01 \uc2a4\ub808\ub4dc\ub294 \uacf5\uc720\uc758 \ud799 \uba54\ubaa8\ub9ac\ub97c \uac00\uc9c4\ub2e4. (\ub3d9\uae30\ud654 \ubb38\uc81c, race condition)  "),(0,n.kt)("li",{parentName:"ul"},"\uac00\ube44\uc9c0 \uceec\ub809\uc158\uc740 \uc774 \uacf5\uc720\ub41c \uba54\ubaa8\ub9ac\uc5d0 \ub300\ud574 \uc774\ub8e8\uc5b4\uc9c4\ub2e4. (\uc2a4\ub808\ub4dc \uac04 \ub3d9\uae30\ud654\uac00 \ud544\uc694,\ubcf5\uc7a1\ub3c4\uac00 \uc99d\uac00)  ")),(0,n.kt)("p",null,"3.",(0,n.kt)("strong",{parentName:"p"},"\uba40\ud2f0 \ud504\ub85c\uc138\uc2a4"),"  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub3c5\ub9bd\ub41c \uba54\ubaa8\ub9ac \uacf5\uac04(\ud799\uacfc \uc2a4\ud0dd)\uc744 \uc0ac\uc6a9. \uae30\ubcf8\uc801\uc73c\ub85c \ud504\ub85c\uc138\uc2a4 \uac04\uc758 \uba54\ubaa8\ub9ac \uacf5\uc720\ub294 \ubd88\uac00\ub2a5 (\ud504\ub85c\uc138\uc2a4\ub294 \uc11c\ub85c \uaca9\ub9ac)  "),(0,n.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc138\uc2a4 \uac04 \ud1b5\uc2e0(IPC, Inter-Process Communication) \uba54\ucee4\ub2c8\uc998\uc744 \uc0ac\uc6a9.  "),(0,n.kt)("li",{parentName:"ul"},"IPC \ubc29\ubc95\uc5d0\ub294 \ud30c\uc774\ud504, \uc18c\ucf13, \uba54\uc2dc\uc9c0 \ud050, \uacf5\uc720 \uba54\ubaa8\ub9ac(shared memory)   ")),(0,n.kt)("h2",{id:"react-\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774-\uc2e4\ud589\ub420-\ub54c-v8-\uc5d4\uc9c4\uacfc-\uc774\ubca4\ud2b8-\ub8e8\ud504\uac00-\ucc98\ub9ac\ud558\ub294-\uc791\uc5c5"},"React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub420 \ub54c V8 \uc5d4\uc9c4\uacfc \uc774\ubca4\ud2b8 \ub8e8\ud504\uac00 \ucc98\ub9ac\ud558\ub294 \uc791\uc5c5"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"3\uac00\uc9c0 \ubc29\uc2dd\uc5d0 \ub530\ub77c CallStack, Memory \uad00\ub9ac\uc5d0 \ucc28\uc774\uac00 \uc788\ub2e4.    ")),(0,n.kt)("h3",{id:"v8-\uc5d4\uc9c4\uc774-\ucc98\ub9ac\ud558\ub294-\uac83"},"V8 \uc5d4\uc9c4\uc774 \ucc98\ub9ac\ud558\ub294 \uac83"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"JSX \ubc0f JavaScript \ucf54\ub4dc\uc758 \ud30c\uc2f1 \ubc0f \ucef4\ud30c\uc77c"),":"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"React \ucef4\ud3ec\ub10c\ud2b8 \ub80c\ub354\ub9c1"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"V8 \uc5d4\uc9c4\uc740 React \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub80c\ub354\ub9c1 \ub85c\uc9c1\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0c1\ud0dc(State)\uc640 \uc18d\uc131(Props)\uc744 \uae30\ubc18\uc73c\ub85c UI\uac00 \uc5b4\ub5bb\uac8c \ud45c\uc2dc\ub420\uc9c0\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"React\uc758 \ub77c\uc774\ud504\uc0ac\uc774\ud074 \uba54\uc11c\ub4dc \uc2e4\ud589"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"componentDidMount"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"componentDidUpdate"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"componentWillUnmount")," \uac19\uc740 React\uc758 \ub77c\uc774\ud504\uc0ac\uc774\ud074 \uba54\uc11c\ub4dc\ub294 JavaScript \ud568\uc218\uc785\ub2c8\ub2e4."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"DOM \uc870\uc791"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"React\ub294 \uac00\uc0c1 DOM(Virtual DOM)\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc2e4\uc81c DOM\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4. V8 \uc5d4\uc9c4\uc740 \uc774 \uac00\uc0c1 DOM\uc758 \ube44\uad50 \uc791\uc5c5\uacfc \uc2e4\uc81c DOM \uc5c5\ub370\uc774\ud2b8 \uba85\ub839\uc744 \ucc98\ub9ac\ud569\ub2c8\ub2e4.")))),(0,n.kt)("h3",{id:"\uc774\ubca4\ud2b8-\ub8e8\ud504\uac00-\ucc98\ub9ac\ud558\ub294-\uac83"},"\uc774\ubca4\ud2b8 \ub8e8\ud504\uac00 \ucc98\ub9ac\ud558\ub294 \uac83"),(0,n.kt)("p",null,"\uc774\ubca4\ud2b8 \ub8e8\ud504\ub294 React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ube44\ub3d9\uae30 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud558\ub294 \ub370 \uad00\uc5ec\ud569\ub2c8\ub2e4. \uc8fc\uc694 \uc5ed\ud560\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\ube44\ub3d9\uae30 \uc791\uc5c5 \ucc98\ub9ac"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ud0c0\uc774\uba38 \ud568\uc218(",(0,n.kt)("inlineCode",{parentName:"li"},"setTimeout"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"setInterval"),")\ub098 \ube44\ub3d9\uae30 API \uc694\uccad(",(0,n.kt)("inlineCode",{parentName:"li"},"fetch"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"axios"),")\uc744 \uc0ac\uc6a9\ud560 \ub54c, "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"React\uc758 \ube44\ub3d9\uae30 \ub80c\ub354\ub9c1"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"React 18\ubd80\ud130 \uc9c0\uc6d0\ud558\ub294 Concurrent Mode\uc5d0\uc11c React\ub294 \ube44\ub3d9\uae30 \ub80c\ub354\ub9c1\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\ub9c8\uc774\ud06c\ub85c\ud0dc\uc2a4\ud06c \ubc0f \ud0dc\uc2a4\ud06c \ud050 \uad00\ub9ac"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Promise")," \uac1d\uccb4\uc758 \ube44\ub3d9\uae30 \ucc98\ub9ac\ub3c4 \uc774\ubca4\ud2b8 \ub8e8\ud504\uc758 \ub9c8\uc774\ud06c\ub85c\ud0dc\uc2a4\ud06c \ud050\uc5d0 \uc758\ud574 \uad00\ub9ac\ub429\ub2c8\ub2e4. "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\uc0ac\uc6a9\uc790 \uc774\ubca4\ud2b8 \ucc98\ub9ac"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\ub85c\ubd80\ud130 \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8(\uc608: \ud074\ub9ad, \ud0a4\ubcf4\ub4dc \uc785\ub825 \ub4f1)\ub294 \uc774\ubca4\ud2b8 \ub8e8\ud504\ub97c \ud1b5\ud574 \ucc98\ub9ac\ub429\ub2c8\ub2e4. \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\uba74 \uc774\ubca4\ud2b8 \ub8e8\ud504\ub294 \uad00\ub828\ub41c \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \ucf5c \uc2a4\ud0dd\uc73c\ub85c \uc804\ub2ec\ud558\uc5ec \uc2e4\ud589\ud569\ub2c8\ub2e4.")))),(0,n.kt)("h2",{id:"errorboundary\uc758-\ucc98\ub9ac\ud558\ub294-\uc560\ub7ec"},"ErrorBoundary\uc758 \ucc98\ub9ac\ud558\ub294 \uc560\ub7ec"),(0,n.kt)("p",null,"1.ErrorBoundary (React\uc758 \uc5d0\ub7ec \uacbd\uacc4)  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1.1 \uc801\uc6a9 \ubc94\uc704: \ub79c\ub354\ub9c1 \ud504\ub85c\uc138\uc2a4\uc758 \uc560\ub7ec\ub97c \uc7a1\ub294\ub2e4.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ErrorBoundary\ub294 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8 \ud2b8\ub9ac\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc5d0\ub7ec\ub9cc \ud3ec\ucc29.  "),(0,n.kt)("li",{parentName:"ul"},"(Concurrent Mode \uac00 \uc544\ub2cc \uacbd\uc6b0) \uba54\uc778\uc2a4\ub808\ub4dc\ub294 \ub79c\ub354\ub9c1\uc5d0 \uc804\ub150\ud558\uba70 \ub2e4\ub978 \uc791\uc5c5\ub4e4\uc744 \ube14\ub77d\ud0b9 \ud55c\ub2e4.  "))),(0,n.kt)("li",{parentName:"ul"},"1.2 \ucef4\ud3ec\ub10c\ud2b8 \uc790\uccb4\ub97c try-catch\ub85c \uac10\uc2f8\uba74 ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1.componentDidCatch\uc640 \uac19\uc740 \ub77c\uc774\ud504\uc0ac\uc774\ud074 \uba54\uc11c\ub4dc\ub97c \ud1b5\ud55c \uc624\ub958 \uc791\uc5c5 \ubd88\uac00\ub2a5 "),(0,n.kt)("li",{parentName:"ul"},"2.\ud558\uc704 \ub178\ub4dc\uc758 \uc624\ub958 \uce90\uce58 \ubd88\uac00\ub2a5  "))),(0,n.kt)("li",{parentName:"ul"},"1.3 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \ub2e4\ub984 : \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec, \ube44\ub3d9\uae30 \uc791\uc5c5(\uc608: ",(0,n.kt)("inlineCode",{parentName:"li"},"setTimeout"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"fetch"),"), \uc11c\ubc84 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc5d0\ub7ec\ub294 \ucc98\ub9ac\ud558\uc9c0 \ubabb\ud55c\ub2e4.  ")),(0,n.kt)("p",null,"2.\uc774\ubca4\ud2b8 \ub8e8\ud504 (JavaScript\uc758 \ube44\ub3d9\uae30 \ucc98\ub9ac \uba54\ucee4\ub2c8\uc998)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc801\uc6a9 \ubc94\uc704: \uc774\ubca4\ud2b8 \ub8e8\ud504\ub294 \ube44\ub3d9\uae30 \uc791\uc5c5\uc774\ub098 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc5d0\ub7ec\ub97c \ucc98\ub9ac  ")),(0,n.kt)("p",null,"*2\uac00\uc9c0 \ubc29\uc2dd\uc758 \uc624\ub958 \ucc98\ub9ac\ub294 \uc2e4\ud589\ucee8\ud14d\uc2a4\ud2b8\uac00 \ub2ec\ub77c\uc11c \uadf8\ub807\ub2e4."))}c.isMDXComponent=!0}}]);