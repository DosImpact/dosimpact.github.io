"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[2937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),k=l,d=u["".concat(o,".").concat(k)]||u[k]||m[k]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},60753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const a={sidebar_position:6},i="Web Security",s={unversionedId:"g-fe/js/js-library/lib-06-security",id:"g-fe/js/js-library/lib-06-security",title:"Web Security",description:"- Web Security",source:"@site/docs/g-fe/1-js/2-js-library/lib-06-security.md",sourceDirName:"g-fe/1-js/2-js-library",slug:"/g-fe/js/js-library/lib-06-security",permalink:"/docs/g-fe/js/js-library/lib-06-security",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-fe/1-js/2-js-library/lib-06-security.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"frontEnd",previous:{title:"Intl",permalink:"/docs/g-fe/js/js-library/lib-05-formatter"},next:{title:"Bundler",permalink:"/docs/category/bundler"}},o={},p=[{value:"1.Security Details in Your Code",id:"1security-details-in-your-code",level:2},{value:"2.Cross-Site Scripting Attacks(XSS)",id:"2cross-site-scripting-attacksxss",level:2},{value:"2.1 X-XSS-Protection \ud5e4\ub354\uac00 \uad8c\uc7a5\ub418\uc9c0 \uc54a\ub098\uc694?",id:"21-x-xss-protection-\ud5e4\ub354\uac00-\uad8c\uc7a5\ub418\uc9c0-\uc54a\ub098\uc694",level:3},{value:"2.2 Content Security Policy(CSP)",id:"22-content-security-policycsp",level:3},{value:"1. HTTP \uc751\ub2f5 \ud5e4\ub354\ub97c \ud1b5\ud55c \uc124\uc815",id:"1-http-\uc751\ub2f5-\ud5e4\ub354\ub97c-\ud1b5\ud55c-\uc124\uc815",level:4},{value:"2. <code>&lt;meta&gt;</code> \ud0dc\uadf8\ub97c \ud1b5\ud55c \uc124\uc815",id:"2-meta-\ud0dc\uadf8\ub97c-\ud1b5\ud55c-\uc124\uc815",level:4},{value:"\uc548\uc804\ud55c CSP \uc124\uc815 \ud301",id:"\uc548\uc804\ud55c-csp-\uc124\uc815-\ud301",level:4},{value:"2.3 \ub77c\uc774\ube0c\ub7ec\ub9ac \ubaa8\ub4c8 \ucde8\uc57d\uc131",id:"23-\ub77c\uc774\ube0c\ub7ec\ub9ac-\ubaa8\ub4c8-\ucde8\uc57d\uc131",level:3},{value:"3.Cross-Site Request Forgery (CSRF, XSRF)",id:"3cross-site-request-forgery-csrf-xsrf",level:2},{value:"4.Cross-Site Resource Sharing (CORS)",id:"4cross-site-resource-sharing-cors",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"web-security"},"Web Security"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#web-security"},"Web Security"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1security-details-in-your-code"},"1.Security Details in Your Code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2cross-site-scripting-attacksxss"},"2.Cross-Site Scripting Attacks(XSS)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#21-x-xss-protection-%ED%97%A4%EB%8D%94%EA%B0%80-%EA%B6%8C%EC%9E%A5%EB%90%98%EC%A7%80-%EC%95%8A%EB%82%98%EC%9A%94"},"2.1 X-XSS-Protection \ud5e4\ub354\uac00 \uad8c\uc7a5\ub418\uc9c0 \uc54a\ub098\uc694?")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#22-content-security-policycsp"},"2.2 Content Security Policy(CSP)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1-http-%EC%9D%91%EB%8B%B5-%ED%97%A4%EB%8D%94%EB%A5%BC-%ED%86%B5%ED%95%9C-%EC%84%A4%EC%A0%95"},"1. HTTP \uc751\ub2f5 \ud5e4\ub354\ub97c \ud1b5\ud55c \uc124\uc815")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-meta-%ED%83%9C%EA%B7%B8%EB%A5%BC-%ED%86%B5%ED%95%9C-%EC%84%A4%EC%A0%95"},"2. ",(0,l.kt)("inlineCode",{parentName:"a"},"<meta>")," \ud0dc\uadf8\ub97c \ud1b5\ud55c \uc124\uc815")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%EC%95%88%EC%A0%84%ED%95%9C-csp-%EC%84%A4%EC%A0%95-%ED%8C%81"},"\uc548\uc804\ud55c CSP \uc124\uc815 \ud301")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#23-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%AA%A8%EB%93%88-%EC%B7%A8%EC%95%BD%EC%84%B1"},"2.3 \ub77c\uc774\ube0c\ub7ec\ub9ac \ubaa8\ub4c8 \ucde8\uc57d\uc131")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3cross-site-request-forgery-csrf-xsrf"},"3.Cross-Site Request Forgery (CSRF, XSRF)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#4cross-site-resource-sharing-cors"},"4.Cross-Site Resource Sharing (CORS)"))))),(0,l.kt)("h2",{id:"1security-details-in-your-code"},"1.Security Details in Your Code"),(0,l.kt)("p",null,"JS\ucf54\ub4dc\ub294 \ub204\uad6c\ub098 \uc77d\uc744 \uc218 \uc788\ub2e4. \uc2ec\uc9c0\uc5b4 \uc18c\uc2a4\ucf54\ub4dc\uc774\ub2e4.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc911\uc694\ud55c \uae30\ubc00\ub370\uc774\ud130\ub97c \ub123\uc73c\uba74 \uc548\ub41c\ub2e4.  "),(0,l.kt)("li",{parentName:"ul"},"Google API Key\ub294 \ud2b9\uc815 \ub3c4\uba54\uc778\ub9cc \ud5c8\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \uacf5\uac1c\ub418\uc5b4\ub3c4 \uad1c\ucc2e\ub2e4. (\ubcf4\uc548\ub9e4\ucee4\ub2c8\uc998 \uc911 \ud558\ub098)  ")),(0,l.kt)("h2",{id:"2cross-site-scripting-attacksxss"},"2.Cross-Site Scripting Attacks(XSS)"),(0,l.kt)("p",null,"XSS\ub294 \uacf5\uaca9\uc790\uac00 \uc545\uc131 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub2e4\ub978 \uc0ac\uc6a9\uc790\uc758 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc2e4\ud589\ud558\uac8c \ud558\ub294 \ubcf4\uc548 \ucde8\uc57d\uc810\uc785\ub2c8\ub2e4. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc8fc\ub85c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc0ac\uc6a9\uc790 \uc785\ub825\uc744 \uc801\uc808\ud788 \uac80\uc99d\ud558\uc9c0 \uc54a\uace0 \uadf8\ub300\ub85c HTML\uc5d0 \ud3ec\ud568\uc2dc\ud0ac \ub54c \ubc1c\uc0dd \ud55c\ub2e4.  ")),(0,l.kt)("p",null,"\ud574\ucee4\ub294 \uc545\uc758\uc801\uc778 \ucf54\ub4dc\uac00 \ub2f4\uae34 JS \ucf54\ub4dc\ub97c \uc8fc\uc785 \ubc0f \uc2e4\ud589\uc2dc\ud0a8\ub2e4.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc774 \ucf54\ub4dc\ub97c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ucd94\uac00\uac00 \uac00\ub2a5\ud558\ub2e4\uba74 XSS \uacf5\uaca9 \uc704\ud5d8\uc5d0 \ub178\ucd9c \ub41c\ub2e4.  "),(0,l.kt)("li",{parentName:"ul"},"\uc608) URL Paramater\uc5d0 \ub123\uc740 \uc815\ubcf4\ub97c innerHTML\uc5d0 \ub123\ub294 \ucf54\ub4dc\uac00 \uc788\ub2e4\uba74, \ubcf4\uc548\ud5c8\uc810\uc774 \ub420 \uc218 \uc788\ub2e4.  ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub204\uad70\uac00\uac00 \uc6f9\uc0ac\uc774\ud2b8 \uacf5\uc720 \ub9c1\ud06c\uc5d0 \uc545\uc758\uc801\uc778 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub123\uace0, \ubfcc\ub9b4 \uc218 \uc788\ub2e4.  "),(0,l.kt)("li",{parentName:"ul"},"img\ud0dc\uadf8\uc758 onError \ud578\ub4e4\ub7ec\uc5d0 \uc2a4\ud06c\ub9bd\ud2b8 \ub123\uae30"))),(0,l.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uc758 \uc785\ub825\uc5d0 \ub300\ud574\uc11c \uc545\uc758\uc801\uc778 \uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc788\ub294\uc9c0, senitize-html \ub4f1\uc744 \ud1b5\ud574\uc11c \uc810\uac80\ud574\uc57c \ud55c\ub2e4.  ")),(0,l.kt)("p",null,"next.config.js \uc5d0\uc11c \uc774\ubbf8\uc9c0 \ub3c4\uba54\uc778\uc744 \uc124\uc815\ud558\ub294\uac83\ub3c4 XSS \ubc29\uc9c0\uc5d0 \ub3c4\uc6c0\uc774 \ub41c\ub2e4. "),(0,l.kt)("h3",{id:"21-x-xss-protection-\ud5e4\ub354\uac00-\uad8c\uc7a5\ub418\uc9c0-\uc54a\ub098\uc694"},"2.1 X-XSS-Protection \ud5e4\ub354\uac00 \uad8c\uc7a5\ub418\uc9c0 \uc54a\ub098\uc694?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc624\ud0d0\uc9c0 \ubb38\uc81c: \ube0c\ub77c\uc6b0\uc800\uc758 \ub0b4\uc7a5 XSS \ud544\ud130\ub294 \uc885\uc885 \uc815\uc0c1\uc801\uc778 \ucf54\ub4dc\ub098 \ucf58\ud150\uce20\ub97c \uc798\ubabb \uc778\uc2dd\ud558\uc5ec \ucc28\ub2e8\ud558\ub294 \uacbd\uc6b0\uac00 \uc874\uc7ac. "),(0,l.kt)("li",{parentName:"ul"},"\uc548\uc804\ud558\uc9c0 \uc54a\uc740 \ubc29\uc5b4: XSS \ubc29\uc9c0\ub97c \uc704\ud55c \uc644\ubcbd\ud55c \ud574\uacb0\ucc45\uc73c\ub85c \uac04\uc8fc\ub418\uc9c0 \uc54a\uc73c\uba70, "),(0,l.kt)("li",{parentName:"ul"},"\ub354 \ub098\uc740 \ub300\uc548: \ud604\uc7ac\ub294 CSP(Content Security Policy)\uc640 \uac19\uc740 \ub354 \uac15\ub825\ud558\uace0 \uad00\ub9ac \uac00\ub2a5\ud55c \ubcf4\uc548 \uba54\ucee4\ub2c8\uc998\uc744 \uc0ac\uc6a9\ud558\uc5ec XSS \uacf5\uaca9\uc744 \ubc29\uc9c0\ud558\ub294 \uac83\uc774 \uad8c\uc7a5\ub429\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"22-content-security-policycsp"},"2.2 Content Security Policy(CSP)"),(0,l.kt)("p",null,"Content Security Policy(CSP) \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c XSS(Cross-Site Scripting) \ubc0f \ub370\uc774\ud130 \ub3c4\uc6a9\uacfc \uac19\uc740 \ub2e4\uc591\ud55c \uacf5\uaca9\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 \uac15\ub825\ud55c \ubcf4\uc548 \uba54\ucee4\ub2c8\uc998\uc785\ub2c8\ub2e4. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CSP\ub97c \uc62c\ubc14\ub974\uac8c \uc124\uc815\ud558\uba74, \ube0c\ub77c\uc6b0\uc800\uac00 \ud398\uc774\uc9c0\uc5d0\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \ucf58\ud150\uce20\uc758 \ucd9c\ucc98\ub97c \uc81c\ud55c"),(0,l.kt)("li",{parentName:"ul"},"\ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc740 \uc2a4\ud06c\ub9bd\ud2b8, \uc2a4\ud0c0\uc77c, \uc774\ubbf8\uc9c0 \ub4f1\uc758 \ub9ac\uc18c\uc2a4\uac00 \ub85c\ub4dc\ub418\ub294 \uac83\uc744 \ubc29\uc9c0.  ")),(0,l.kt)("p",null,"CSP \uc124\uc815 \ubc29\ubc95"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CSP\ub294 HTTP \uc751\ub2f5 \ud5e4\ub354 \ub610\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"<meta>")," \ud0dc\uadf8\ub97c \ud1b5\ud574 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ( \uc8fc\ub85c HTTP \uc751\ub2f5 \ud5e4\ub354\ub85c \uc124\uc815\ud558\ub294 \uac83\uc774 \uc77c\ubc18\uc801)")),(0,l.kt)("h4",{id:"1-http-\uc751\ub2f5-\ud5e4\ub354\ub97c-\ud1b5\ud55c-\uc124\uc815"},"1. HTTP \uc751\ub2f5 \ud5e4\ub354\ub97c \ud1b5\ud55c \uc124\uc815"),(0,l.kt)("p",null,"\uc11c\ubc84\uc5d0\uc11c HTTP \uc751\ub2f5 \ud5e4\ub354\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Security-Policy"),"\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774 \ud5e4\ub354\ub294 \ube0c\ub77c\uc6b0\uc800\uac00 \ud398\uc774\uc9c0 \ub85c\ub4dc \uc2dc \uc801\uc6a9\ud560 CSP \uaddc\uce59\uc744 \uc815\uc758\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4, \ub2e4\uc74c\uacfc \uac19\uc774 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:;\n\n\uc774 \uaddc\uce59\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uc758\ubbf8\ub97c \uac16\uc2b5\ub2c8\ub2e4:\n- **default-src 'self'**: \uae30\ubcf8 \uc18c\uc2a4\ub294 \uc790\uae30 \uc790\uc2e0(\ub3d9\uc77c \ucd9c\ucc98)\uc5d0\uc11c\ub9cc \ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n- **script-src 'self' https://trusted.cdn.com**: \uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc790\uae30 \uc790\uc2e0\uacfc `https://trusted.cdn.com`\uc5d0\uc11c\ub9cc \ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n- **style-src 'self' 'unsafe-inline'**: \uc2a4\ud0c0\uc77c\uc740 \uc790\uae30 \uc790\uc2e0\uc5d0\uc11c\ub9cc \ub85c\ub4dc\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc778\ub77c\uc778 \uc2a4\ud0c0\uc77c(`'unsafe-inline'`)\ub3c4 \ud5c8\uc6a9\ub429\ub2c8\ub2e4.\n- **img-src 'self' data:**: \uc774\ubbf8\uc9c0\ub294 \uc790\uae30 \uc790\uc2e0\uacfc `data:` URI \uc2a4\ud0a4\ub9c8\uc5d0\uc11c\ub9cc \ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n")),(0,l.kt)("h4",{id:"2-meta-\ud0dc\uadf8\ub97c-\ud1b5\ud55c-\uc124\uc815"},"2. ",(0,l.kt)("inlineCode",{parentName:"h4"},"<meta>")," \ud0dc\uadf8\ub97c \ud1b5\ud55c \uc124\uc815"),(0,l.kt)("p",null,"HTML \ubb38\uc11c\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"<head>")," \uc139\uc158\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"<meta>")," \ud0dc\uadf8\ub97c \uc0ac\uc6a9\ud558\uc5ec CSP\ub97c \uc124\uc815\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774 \ubc29\ubc95\uc740 \uc8fc\ub85c \uc11c\ubc84\uc5d0\uc11c HTTP \uc751\ub2f5 \ud5e4\ub354\ub97c \uc81c\uc5b4\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; script-src 'self' https://trusted.cdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:;\">\n")),(0,l.kt)("p",null,"CSP\ub294 \ub2e4\uc591\ud55c \uc9c0\uc2dc\uc5b4(directive)\ub97c \ud1b5\ud574 \ud398\uc774\uc9c0 \ub0b4\uc758 \ub9ac\uc18c\uc2a4 \ub85c\ub529\uc744 \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc8fc\uc694 \uc9c0\uc2dc\uc5b4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"default-src"),": \uae30\ubcf8 \ucf58\ud150\uce20\uc758 \ucd9c\ucc98\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. \ub2e4\ub978 \uc9c0\uc2dc\uc5b4\uac00 \ubcc4\ub3c4\ub85c \uc9c0\uc815\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \uc774 \uaddc\uce59\uc774 \uc801\uc6a9\ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"script-src"),": \uc2a4\ud06c\ub9bd\ud2b8\uc758 \ucd9c\ucc98\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style-src"),": CSS \uc2a4\ud0c0\uc77c\uc2dc\ud2b8\uc758 \ucd9c\ucc98\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"img-src"),": \uc774\ubbf8\uc9c0 \ud30c\uc77c\uc758 \ucd9c\ucc98\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"font-src"),": \uc6f9 \ud3f0\ud2b8\uc758 \ucd9c\ucc98\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"connect-src"),": AJAX \uc694\uccad, WebSocket \uc5f0\uacb0 \ub4f1\uc758 \ucd9c\ucc98\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"media-src"),": \uc624\ub514\uc624\uc640 \ube44\ub514\uc624\uc758 \ucd9c\ucc98\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"object-src"),": \ud50c\ub798\uc2dc\uc640 \uac19\uc774 ",(0,l.kt)("inlineCode",{parentName:"li"},"<object>"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"<embed>"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"<applet>")," \ud0dc\uadf8\ub97c \ud1b5\ud574 \ub85c\ub4dc\ub418\ub294 \ucf58\ud150\uce20\uc758 \ucd9c\ucc98\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"frame-src"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"<frame>"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"<iframe>")," \ud0dc\uadf8\ub97c \ud1b5\ud574 \ub85c\ub4dc\ub418\ub294 \ucf58\ud150\uce20\uc758 \ucd9c\ucc98\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"report-uri"),": \uc704\ubc18\uc774 \ubc1c\uc0dd\ud588\uc744 \ub54c \ubcf4\uace0\uc11c\ub97c \uc804\uc1a1\ud560 URI\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"report-to"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"report-uri")," \ub300\uc2e0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucd5c\uc2e0 \ubc29\ubc95\uc73c\ub85c, \uc704\ubc18 \ubcf4\uace0\uc11c\uc758 \ubaa9\uc801\uc9c0 \uadf8\ub8f9\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,l.kt)("h4",{id:"\uc548\uc804\ud55c-csp-\uc124\uc815-\ud301"},"\uc548\uc804\ud55c CSP \uc124\uc815 \ud301"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\ucd5c\uc18c \uad8c\ud55c \ubd80\uc5ec \uc6d0\uce59"),": \uac00\ub2a5\ud55c \ud55c \uc801\uc740 \ucd9c\ucc98\ub9cc \ud5c8\uc6a9\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4. \ubd88\ud544\uc694\ud55c \ucd9c\ucc98\ub098 \uc704\ud5d8\ud55c \uc778\ub77c\uc778 \uc2a4\ud06c\ub9bd\ud2b8(",(0,l.kt)("inlineCode",{parentName:"p"},"'unsafe-inline'"),"), \ud3c9\uac00(",(0,l.kt)("inlineCode",{parentName:"p"},"'unsafe-eval'"),")\ub97c \ud5c8\uc6a9\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud569\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\ucc28\ub2e8 \ub300\uc2e0 \ubcf4\uace0 \ubaa8\ub4dc \uc0ac\uc6a9"),": \uc0c8\ub85c\uc6b4 CSP \uc124\uc815\uc744 \uc801\uc6a9\ud558\uae30 \uc804\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Security-Policy-Report-Only")," \ud5e4\ub354\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc704\ubc18 \uc0ac\ud56d\uc744 \ubcf4\uace0\ub9cc \ud558\ub3c4\ub85d \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc2e4\uc81c\ub85c \ucc28\ub2e8\ub418\uae30 \uc804\uc5d0 \uc7a0\uc7ac\uc801\uc778 \ubb38\uc81c\ub97c \ubbf8\ub9ac \ubc1c\uacac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"Content-Security-Policy-Report-Only: default-src 'self'; report-uri /csp-violation-report-endpoint/;\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"CSP \uc815\ucc45\uc744 \uc9c0\uc18d\uc801\uc73c\ub85c \uac80\ud1a0 \ubc0f \uac1c\uc120"),": \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc5c5\ub370\uc774\ud2b8\ub420 \ub54c\ub9c8\ub2e4 CSP \uc815\ucc45\ub3c4 \uc774\uc5d0 \ub9de\uac8c \ubcc0\uacbd\ud558\uace0, \ubcf4\uace0\uc11c\uc5d0\uc11c \ubc1c\uc0dd\ud55c \uc704\ubc18\uc744 \uac80\ud1a0\ud558\uc5ec CSP\ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \uac15\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."))),(0,l.kt)("p",null,"CSP \uc801\uc6a9 \uc0ac\ub840"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4, \ud2b9\uc815 \ud398\uc774\uc9c0\uc5d0\uc11c \uc678\ubd80 \uc2a4\ud06c\ub9bd\ud2b8\uc640 \uc2a4\ud0c0\uc77c\uc744 \uc644\uc804\ud788 \ucc28\ub2e8\ud558\uace0, \uc774\ubbf8\uc9c0\uc640 \ud3f0\ud2b8\ub294 \ud2b9\uc815 CDN\uc5d0\uc11c\ub9cc \ub85c\ub4dc\ub418\ub3c4\ub85d \ud558\ub824\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src https://cdn.example.com; font-src https://cdn.example.com;\n")),(0,l.kt)("h3",{id:"23-\ub77c\uc774\ube0c\ub7ec\ub9ac-\ubaa8\ub4c8-\ucde8\uc57d\uc131"},"2.3 \ub77c\uc774\ube0c\ub7ec\ub9ac \ubaa8\ub4c8 \ucde8\uc57d\uc131"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"npm install \uc774\ud6c4\ub85c \ub098\uc624\ub294 \ucde8\uc57d\uc131\uc5d0 \ub300\ud574\uc11c \ubc18\ub4dc\uc2dc \uccb4\ud06c\ud558\uc790.  ")),(0,l.kt)("h2",{id:"3cross-site-request-forgery-csrf-xsrf"},"3.Cross-Site Request Forgery (CSRF, XSRF)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"XSS \uc5f0\uad00\ub420 \uc218 \uc788\uc9c0\ub9cc, \ubc18\ub4dc\uc2dc \uadf8\ub807\uc9c0 \uc54a\ub2e4.    "),(0,l.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\ub97c \uc18d\uc5ec\uc11c \uc790\uaca9\uc99d\uba85\uc740 \ub85c\uceec \ud398\uc774\uc9c0\uc758 \ucfe0\ud0a4\ub97c \uc774\uc6a9\ud558\uace0, \ud574\ucee4\uac00 \uc900\ube44\ud55c \ud398\uc774\uc9c0\ub85c \uc694\uccad\uc744 \ubcf4\ub0b4\ub3c4\ub85d \ud558\ub294\uac83.  "),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\uba74 \uc0ac\uc6a9\uc790\uc758 \uc790\uaca9\uc99d\uba85\uc774 \ud3ec\ud568\ub418\uc5b4 \ud398\uc774\uc9c0\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0b4\uac8c \ub41c\ub2e4.  ")),(0,l.kt)("p",null,"CSRF \ud1a0\ud070 \uc0ac\uc6a9: \uc11c\ubc84\ub294 \uac01 \uc694\uccad\uc5d0 \uace0\uc720\ud55c CSRF \ud1a0\ud070\uc744 \ud3ec\ud568\uc2dc\ud0a4\uace0, \uc774 \ud1a0\ud070\uc774 \uc720\ud6a8\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uc694\uccad\uc744 \ucc98\ub9ac\ud569\ub2c8\ub2e4. \uc774\ub294 \uc591\uc2dd \uc81c\ucd9c \uc2dc \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4.\nSameSite \ucfe0\ud0a4 \uc18d\uc131 \uc124\uc815: \ucfe0\ud0a4\uc5d0 SameSite \uc18d\uc131\uc744 \uc124\uc815\ud558\uc5ec, \ub3d9\uc77c\ud55c \uc0ac\uc774\ud2b8\uc5d0\uc11c\ub9cc \ucfe0\ud0a4\uac00 \uc804\uc1a1\ub418\ub3c4\ub85d \uc81c\ud55c\ud568\uc73c\ub85c\uc368 CSRF \uacf5\uaca9\uc744 \uc608\ubc29\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\uc911 \uc81c\ucd9c \ucfe0\ud0a4: \uc694\uccad \ubcf8\ubb38\uc5d0 CSRF \ud1a0\ud070\uc744 \ud3ec\ud568\uc2dc\ud0a4\uace0, \ub3d9\uc77c\ud55c \ud1a0\ud070\uc744 \ucfe0\ud0a4\ub85c\ub3c4 \uc804\uc1a1\ud558\uc5ec \uc77c\uce58 \uc5ec\ubd80\ub97c \ud655\uc778\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc2dc\ub098\ub9ac\uc624  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fake.com \uc5d0\uc11c b.com \ub85c CSRF\uc744 \ud558\ub824\uace0 \ud55c\ub2e4.  ")),(0,l.kt)("p",null,"1.fake.com \uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"withCredentials")," \uc124\uc815:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"AJAX \uc694\uccad\uc5d0\uc11c \ucfe0\ud0a4\ub97c \ud3ec\ud568\ud558\ub824\uba74 ",(0,l.kt)("inlineCode",{parentName:"li"},"XMLHttpRequest")," \ub610\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"fetch")," \uc694\uccad \uc2dc ",(0,l.kt)("inlineCode",{parentName:"li"},"withCredentials")," \uc18d\uc131\uc744 ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"\ub85c \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.\n2.b.com \uc11c\ubc84\uc758 CORS \uc124\uc815:"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"b.com")," \uc11c\ubc84\uac00 CORS \ud5e4\ub354\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Origin"),"\uc744 \uc801\uc808\ud788 \uc124\uc815.  "),(0,l.kt)("li",{parentName:"ul"},'cors("*")\uc744 \ud574\ubc84\ub9ac\ub294 \uacbd\uc6b0.',(0,l.kt)("br",{parentName:"li"}),"3.SameSite \ucfe0\ud0a4 \uc18d\uc131:"),(0,l.kt)("li",{parentName:"ul"},"\ucfe0\ud0a4\uac00 ",(0,l.kt)("inlineCode",{parentName:"li"},"SameSite=None"),"\uc73c\ub85c \uc124\uc815.   "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Secure")," \uc18d\uc131\ub3c4 \ud568\uaed8 \uc124\uc815\ub418\uc5b4 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.(HTTPS).    ")),(0,l.kt)("h2",{id:"4cross-site-resource-sharing-cors"},"4.Cross-Site Resource Sharing (CORS)"))}m.isMDXComponent=!0}}]);