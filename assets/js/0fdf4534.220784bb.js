"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[3969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=u(n),c=r,d=k["".concat(i,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(d,p(p({ref:t},s),{},{components:n})):a.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[k]="string"==typeof e?e:r,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:4},p="Monorepo Turborepo",o={unversionedId:"g-fe/npm/turbo/turebo1",id:"g-fe/npm/turbo/turebo1",title:"Monorepo Turborepo",description:"Introduction",source:"@site/docs/g-fe/8-npm/1-turbo/turebo1.md",sourceDirName:"g-fe/8-npm/1-turbo",slug:"/g-fe/npm/turbo/turebo1",permalink:"/docs/g-fe/npm/turbo/turebo1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-fe/8-npm/1-turbo/turebo1.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"frontEnd",previous:{title:"TurboRepo",permalink:"/docs/category/turborepo"},next:{title:"npm",permalink:"/docs/g-fe/npm/npm001"}},i={},u=[{value:"Introduction",id:"introduction",level:2},{value:"From zero to turbo",id:"from-zero-to-turbo",level:2},{value:"1. Structuring a repository",id:"1-structuring-a-repository",level:2},{value:"\uc608\uc81c \ud504\ub85c\uc81d\ud2b8",id:"\uc608\uc81c-\ud504\ub85c\uc81d\ud2b8",level:3},{value:"\ucd5c\uc18c \uc694\uad6c \uc0ac\ud56d \ud30c\uc77c\ub4e4",id:"\ucd5c\uc18c-\uc694\uad6c-\uc0ac\ud56d-\ud30c\uc77c\ub4e4",level:3},{value:"\ud328\ud0a4\uc9c0\uc758 \uad6c\uc870 \ubc0f \ud328\ud0a4\uc9c0\uc758 \uc9c4\uc785\uc810",id:"\ud328\ud0a4\uc9c0\uc758-\uad6c\uc870-\ubc0f-\ud328\ud0a4\uc9c0\uc758-\uc9c4\uc785\uc810",level:3},{value:"\ucc38\uace0) \ud328\ud0a4\uc9c0 \ubc30\ud3ec\ud560\ub54c \uc9c4\uc785\uc810\uc744 \uc124\uc815\ud558\ub294 2\uac00\uc9c0 \ubc29\ubc95",id:"\ucc38\uace0-\ud328\ud0a4\uc9c0-\ubc30\ud3ec\ud560\ub54c-\uc9c4\uc785\uc810\uc744-\uc124\uc815\ud558\ub294-2\uac00\uc9c0-\ubc29\ubc95",level:3},{value:"exports \uc774\uc810 3\uac00\uc9c0",id:"exports-\uc774\uc810-3\uac00\uc9c0",level:3},{value:"\uc77c\ubc18\uc801\uc778 \ud568\uc815",id:"\uc77c\ubc18\uc801\uc778-\ud568\uc815",level:3},{value:"\uc608\uc81c \ub72f\uc5b4\ubcf4\uae30",id:"\uc608\uc81c-\ub72f\uc5b4\ubcf4\uae30",level:3},{value:"2. Managing dependencies",id:"2-managing-dependencies",level:2},{value:"3. Creating an internal package",id:"3-creating-an-internal-package",level:2},{value:"4. Configuring tasks",id:"4-configuring-tasks",level:2},{value:"5. Running tasks",id:"5-running-tasks",level:2},{value:"6. Caching",id:"6-caching",level:2},{value:"7. Developing apps",id:"7-developing-apps",level:2},{value:"8. Using environment variables",id:"8-using-environment-variables",level:2},{value:"9. Constructing CI",id:"9-constructing-ci",level:2},{value:"10. Upgrading",id:"10-upgrading",level:2}],s={toc:u},k="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"monorepo-turborepo"},"Monorepo Turborepo"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Turborepo\ub780?"),"    "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ubaa8\ub178\ub808\ud3ec(monorepos)\uc758 \uc5d4\ud130\ud504\ub77c\uc774\uc988 \uae09 \uc194\ub8e8\uc158, \ub2e4\uc218\uc758 \ucf54\ub4dc\ubca0\uc774\uc2a4\uc758 \ud14c\uc2a4\ud2b8, \ub9b0\ud2b8, \ube4c\ub4dc \ud504\ub85c\uc138\uc2a4 \ucd5c\uc801\ud654.  ")),(0,r.kt)("p",null,"Turborepo\ub294 JavaScript\uc640 TypeScript \ucf54\ub4dc\ubca0\uc774\uc2a4\ub97c \uc704\ud55c \uace0\uc131\ub2a5 \ube4c\ub4dc \uc2dc\uc2a4\ud15c\uc774\uc5d0\uc694.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc8fc\ub85c \ubaa8\ub178\ub808\ud3ec(monorepos)\uc758 \ud655\uc7a5\uc744 \uc704\ud574 \uc124\uacc4\ub418\uc5c8\uc73c\uba70, \ub2e8\uc77c \ud328\ud0a4\uc9c0 \uc791\uc5c5 \uacf5\uac04\uc5d0\uc11c\ub3c4 \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \ub354\uc6b1 \ube60\ub974\uac8c \ub9cc\ub4e4\uc5b4\uc918\uc694.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ubaa8\ub178\ub808\ud3ec \ubb38\uc81c"),(0,r.kt)("br",{parentName:"p"}),"\n","\ud655\uc7a5\uc131 \uc774\uc288 : \ubaa8\ub178\ub808\ud3ec\ub294 \ub9ce\uc740 \uc774\uc810\uc774 \uc788\uc9c0\ub9cc, \ud655\uc7a5\ud558\ub294 \ub370 \uc5b4\ub824\uc6c0\uc744 \uacaa\uc5b4\uc694. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac01 \uc791\uc5c5 \uacf5\uac04\uc740 \uc790\uccb4 \ud14c\uc2a4\ud2b8 \uc2a4\uc704\ud2b8, \ub9b0\ud2b8 \ud504\ub85c\uc138\uc2a4, \ube4c\ub4dc \ud504\ub85c\uc138\uc2a4\ub97c \uac00\uc9c0\uace0 \uc788\uc5b4\uc694. \ub2e8\uc77c \ubaa8\ub178\ub808\ud3ec\ub294 \uc218\ucc9c \uac1c\uc758 \uc791\uc5c5\uc744 \uc2e4\ud589\ud574\uc57c \ud560 \uc218\ub3c4 \uc788\uc5b4\uc694."),(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc778 \ubaa8\ub178\ub808\ud3ec\uc758 \uc608\ub85c, \uccab \ubc88\uc9f8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc791\uc5c5\uc744 \uc644\ub8cc\ud558\ub294 \ub370 110\ucd08\uac00 \uac78\ub9ac\uace0, \ub450 \ubc88\uc9f8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 140\ucd08\uac00 \uac78\ub824\uc694. \ub450 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0ac\uc774\uc5d0 \uacf5\uc720\ub41c \ud328\ud0a4\uc9c0\ub294 \uc791\uc5c5\uc744 \uc644\ub8cc\ud558\ub294 \ub370 90\ucd08\uac00 \uac78\ub824\uc694. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ubaa8\ub178\ub808\ud3ec \uc194\ub8e8\uc158"),"    "),(0,r.kt)("p",null,"1.\uc6d0\uaca9 \uce90\uc2dc\n\uc774\uc804\uc758 \ubaa8\ub178\ub808\ud3ec\uac00 Turborepo\ub97c \uc0ac\uc6a9\ud558\uba74, \uc138 \uac1c\uc758 \ud328\ud0a4\uc9c0\uc5d0 \ub300\ud55c \uc791\uc5c5\uc744 \uce90\uc2dc\uc5d0\uc11c \ubd88\ub7ec\uc640 80\ubc00\ub9ac\ucd08 \uc548\uc5d0 \uc644\ub8cc\ud560 \uc218 \uc788\uc5b4\uc694.",(0,r.kt)("br",{parentName:"p"}),"\n","Turborepo\ub294 \ubaa8\ub178\ub808\ud3ec\uc758 \ud655\uc7a5 \ubb38\uc81c\ub97c \ud574\uacb0\ud574\uc694. \uc6d0\uaca9 \uce90\uc2dc\ub294 \ubaa8\ub4e0 \uc791\uc5c5\uc758 \uacb0\uacfc\ub97c \uc800\uc7a5\ud558\uc5ec, CI\uac00 \uac19\uc740 \uc791\uc5c5\uc744 \ubc18\ubcf5\ud560 \ud544\uc694\uac00 \uc5c6\uac8c \ud574\uc918\uc694."),(0,r.kt)("p",null,"2.\uc791\uc5c5 \uc2a4\ucf00\uc904\ub9c1\n\ub610\ud55c, \ubaa8\ub178\ub808\ud3ec\uc5d0\uc11c \uc791\uc5c5 \uc2a4\ucf00\uc904\ub9c1\uc740 \uc5b4\ub824\uc6b8 \uc218 \uc788\uc5b4\uc694. \ube4c\ub4dc\ub97c \uba3c\uc800 \ud558\uace0, \ud14c\uc2a4\ud2b8\ub97c \ud558\uace0, \uadf8\ub2e4\uc74c \ub9b0\ud2b8\ub97c \ud574\uc57c \ud560 \uc218 \uc788\uc5b4\uc694.\nTurborepo\ub294 \ubaa8\ub4e0 \uc791\uc5c5\uc744 \ucd5c\ub300\ud55c \ube60\ub974\uac8c \uc2a4\ucf00\uc904\ub9c1\ud558\uace0, \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ubaa8\ub4e0 \ucf54\uc5b4\uc5d0\uc11c \ubcd1\ub82c\ub85c \uc791\uc5c5\uc744 \ucc98\ub9ac\ud574\uc694."),(0,r.kt)("p",null,"3.\uc810\uc9c4\uc801\uc73c\ub85c \ub3c4\uc785 \uac00\ub2a5  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Turborepo\ub294 \uc810\uc9c4\uc801\uc73c\ub85c \ub3c4\uc785\ud560 \uc218 \uc788\uace0, \uba87 \ubd84 \uc548\uc5d0 \ubaa8\ub4e0 \uc800\uc7a5\uc18c\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc5b4\uc694. "),(0,r.kt)("li",{parentName:"ul"},"\uc774\ubbf8 \uc791\uc131\ud55c package.json \uc2a4\ud06c\ub9bd\ud2b8\uc640 \uc120\uc5b8\ud55c \uc885\uc18d\uc131\uc744 \uc0ac\uc6a9\ud558\uba70, turbo.json \ud30c\uc77c \ud558\ub098\ub9cc \ud544\uc694\ud574\uc694."),(0,r.kt)("li",{parentName:"ul"},"npm, yarn, pnpm\uacfc \uac19\uc740 \uc5b4\ub5a4 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\uc640\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5b4\uc694.  "),(0,r.kt)("li",{parentName:"ul"},"Turborepo\ub294 npm \uc0dd\ud0dc\uacc4\uc758 \uad00\uc2b5\uc744 \ub530\ub974\ub2c8\uae4c\uc694.")),(0,r.kt)("h2",{id:"from-zero-to-turbo"},"From zero to turbo"),(0,r.kt)("h2",{id:"1-structuring-a-repository"},"1. Structuring a repository"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Design the directory structure of your monorepo.   ")),(0,r.kt)("p",null,"\ubaa9\uc801 : \ud30c\uc77c \uad6c\uc870 \ucee8\ubca4\uc158\uc744 \uc18c\uac1c\ud558\uaca0\ub2e4.  "),(0,r.kt)("h3",{id:"\uc608\uc81c-\ud504\ub85c\uc81d\ud2b8"},"\uc608\uc81c \ud504\ub85c\uc81d\ud2b8"),(0,r.kt)("p",null,"\uc544\ub798 \uc608\uc81c \ud504\ub85c\uc81d\ud2b8 \ud655\uc778\ud558\uba74\uc11c, \uacf5\uc2dd\ubb38\uc11c \ub0b4\uc6a9\uc774\ub791 \uc2e4\uc81c \ubaa8\ub178\ub798\ud3ec\ub97c \ube44\uad50\ud558\uba74\uc11c \ub4e4\uc744 \uac83.!  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/turborepo/tree/main/examples"},"https://github.com/vercel/turborepo/tree/main/examples"),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/turborepo/tree/main/examples/with-nestjs"},"https://github.com/vercel/turborepo/tree/main/examples/with-nestjs")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"nestjs + nextjs full stack \uac1c\ubc1c\uc5d0\uc11c \uc0ac\uc6a9 \ub41c\ub2e4.   "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vercel/turborepo/tree/main/examples/with-berry"},"https://github.com/vercel/turborepo/tree/main/examples/with-berry"),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"yarn, yarn berry, pnpm \ub4f1 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\uc5d0 \uc0c1\uad00\uc5c6\uc774 \uc0ac\uc6a9 \uac00\ub2a5\ud558\ub2e4.  ")))))),(0,r.kt)("h3",{id:"\ucd5c\uc18c-\uc694\uad6c-\uc0ac\ud56d-\ud30c\uc77c\ub4e4"},"\ucd5c\uc18c \uc694\uad6c \uc0ac\ud56d \ud30c\uc77c\ub4e4"),(0,r.kt)("p",null,"\uc544\ub798\ub294 \uc720\ud6a8\ud55c \uc791\uc5c5 \uacf5\uac04\uc744 \ub9cc\ub4e4\uae30 \uc704\ud55c create-turbo\uc758 \uc8fc\uc694 \uad6c\uc870 \uc694\uc18c\ub4e4\uc774\uc5d0\uc694."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ucd5c\uc18c \uc694\uad6c \uc0ac\ud56d")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specifying packages in a monorepo  "),(0,r.kt)("li",{parentName:"ul"},"A package manager lockfile"),(0,r.kt)("li",{parentName:"ul"},"Root package.json"),(0,r.kt)("li",{parentName:"ul"},"Root turbo.json"),(0,r.kt)("li",{parentName:"ul"},"package.json in each package")),(0,r.kt)("p",null,"1.Specifying packages in a monorepo"),(0,r.kt)("p",null,"\ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\uac00 \ud328\ud0a4\uc9c0\uc758 \uc704\uce58\ub97c \uc124\uba85\ud574\uc57c \ud574\uc694. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"li"},"apps/"),"\uc5d0\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \uc11c\ube44\uc2a4\ub97c,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"packages/"),"\uc5d0\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac \ubc0f \ub3c4\uad6c\ub97c \ubc30\uce58\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud574\uc694.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "workspaces": [\n    "apps/*",\n    "packages/*"\n  ]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774 \uc124\uc815\uc744 \uc0ac\uc6a9\ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"li"},"apps")," \ub610\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"packages")," \ub514\ub809\ud1a0\ub9ac \ub0b4\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),"\uc744 \uac00\uc9c4 \ubaa8\ub4e0 \ub514\ub809\ud1a0\ub9ac\uac00 \ud328\ud0a4\uc9c0\ub85c \uac04\uc8fc\ub3fc\uc694.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uac01 \ud328\ud0a4\uc9c0\uc5d0 \uc788\ub294 package.json"),(0,r.kt)("br",{parentName:"p"}),"\n","\ud328\ud0a4\uc9c0\uac00 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\uc640 turbo\uc5d0 \uc758\ud574 \uc778\uc2dd\ub418\ub824\uba74 \ud574\ub2f9 \ub514\ub809\ud1a0\ub9ac\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \ud30c\uc77c\uc774 \uc788\uc5b4\uc57c \ud574\uc694.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ub8e8\ud2b8 package.json"),(0,r.kt)("br",{parentName:"p"}),"\n","\ub8e8\ud2b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\uc740 \uc791\uc5c5 \uacf5\uac04\uc758 \uae30\ubcf8\uc774\uc5d0\uc694. \uc544\ub798\ub294 \ub8e8\ud2b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\uc758 \uc77c\ubc18\uc801\uc778 \uc608\uc2dc\uc608\uc694:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "private": true,\n  "scripts": {\n    "build": "turbo run build",\n    "dev": "turbo run dev",\n    "lint": "turbo run lint"\n  },\n  "devDependencies": {\n    "turbo": "latest"\n  },\n  "packageManager": "npm@10.0.0"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ub8e8\ud2b8 turbo.json"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"turbo.json"),"\uc740 turbo\uc758 \ub3d9\uc791\uc744 \uc124\uc815\ud558\ub294 \ub370 \uc0ac\uc6a9\ub3fc\uc694. \uc791\uc5c5\uc744 \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uc791\uc5c5 \uad6c\uc131 \ud398\uc774\uc9c0\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc5b4\uc694."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790 \uc7a0\uae08 \ud30c\uc77c"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc7a0\uae08 \ud30c\uc77c(lockfile)\uc740 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\uc640 turbo \ubaa8\ub450\uc5d0\uc11c \uc7ac\ud604 \uac00\ub2a5\ud55c \ub3d9\uc791\uc744 \ubcf4\uc7a5\ud558\ub294 \ub370 \uc911\uc694\ud574\uc694. - Turborepo\ub294 \uc7a0\uae08 \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud574 \uc791\uc5c5 \uacf5\uac04 \ub0b4\uc5d0\uc11c \ub0b4\ubd80 \ud328\ud0a4\uc9c0 \uac04\uc758 \uc885\uc18d\uc131\uc744 \uc774\ud574\ud574\uc694.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud328\ud0a4\uc9c0\uc758 \uad6c\uc870"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc791\uc5c5 \uacf5\uac04 \ub0b4\uc5d0\uc11c \uac01 \ud328\ud0a4\uc9c0\ub97c \ud558\ub098\uc758 \ub3c5\ub9bd\uc801\uc778 \ub2e8\uc704\ub85c \uc0dd\uac01\ud558\ub294 \uac83\uc774 \uc88b\uc544\uc694. "),(0,r.kt)("li",{parentName:"ul"},"\uac01 \ud328\ud0a4\uc9c0\ub294 \uc790\uccb4 ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),', \ub3c4\uad6c \uad6c\uc131, \uc18c\uc2a4 \ucf54\ub4dc\ub97c \uac00\uc9c0\uace0 \uc788\uc73c\uba70, \uc774\ub294 \ub9c8\uce58 \uc791\uc740 "\ud504\ub85c\uc81d\ud2b8" \uac19\uc544\uc694.  ')),(0,r.kt)("h3",{id:"\ud328\ud0a4\uc9c0\uc758-\uad6c\uc870-\ubc0f-\ud328\ud0a4\uc9c0\uc758-\uc9c4\uc785\uc810"},"\ud328\ud0a4\uc9c0\uc758 \uad6c\uc870 \ubc0f \ud328\ud0a4\uc9c0\uc758 \uc9c4\uc785\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"workspaces \ub0b4 \ud328\ud0a4\uc9c0\ub4e4\uc744 \ub3c5\ub9bd\uc801\uc778 \ub2e8\uc704\ub85c \uc0dd\uac01\ud558\ub294\uac8c \ucc98\uc74c\uc5d0\ub294 \uc88b\ub2e4.    "),(0,r.kt)("li",{parentName:"ul"},"\ub3c5\ub9bd\uc801\uc778 \ud328\ud0a4\uc9c0\ub4e4\uc740 \ub3c5\uc790\uc801\uc778 package.json, lint, source code \ub4f1\uc744 \uac00\uc9c4 \uc791\uc740 \ud504\ub85c\uc81d\ud2b8 \uc774\ub2e4.   "),(0,r.kt)("li",{parentName:"ul"},"\ub610\ud55c \ud328\ud0a4\uc9c0\uc758 \uc9c4\uc785\uc810(entrypoint)\uc774 \uc788\uc5b4\uc11c, \ub2e4\ub978 \ud328\ud0a4\uc9c0\uc5d0\uc11c \uc811\uadfc\ud560 \uc218 \uc788\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"exports")," \ud544\ub4dc\uac00 \uc788\ub2e4.  ")),(0,r.kt)("h3",{id:"\ucc38\uace0-\ud328\ud0a4\uc9c0-\ubc30\ud3ec\ud560\ub54c-\uc9c4\uc785\uc810\uc744-\uc124\uc815\ud558\ub294-2\uac00\uc9c0-\ubc29\ubc95"},"\ucc38\uace0) \ud328\ud0a4\uc9c0 \ubc30\ud3ec\ud560\ub54c \uc9c4\uc785\uc810\uc744 \uc124\uc815\ud558\ub294 2\uac00\uc9c0 \ubc29\ubc95"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// case1. \uc9c4\uc785\uc810\uc774 1\uac1c\uc778 \uacbd\uc6b0  \n  "types": "dist/index.d.ts",\n  "main": "dist/index.js",\n  "module": "dist/esm"\n\n// case2. \uc9c4\uc785\uc810\uc774 2\uac1c \uc774\uc0c1\uc778 \uacbd\uc6b0\n  "exports": {\n    ".": {\n      "require": {\n        "types": "./index.d.ts",\n        "default": "./index.js"\n      },\n      "import": {\n        "types": "./esm/index.d.ts",\n        "default": "./esm/index.js"\n      }\n    },\n    "./feature": {\n      "require": {\n        "types": "./index.d.ts",\n        "default": "./index.js"\n      },\n      "import": {\n        "types": "./index.d.mts",\n        "default": "./index.mjs"\n      }\n    }\n  }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud328\ud0a4\uc9c0\uc758 package.json \ud544\ub4dc")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name"),": \ud328\ud0a4\uc9c0\ub97c \uc2dd\ubcc4\ud558\ub294 \ub370 \uc0ac\uc6a9\ub3fc\uc694. \ubc18\ub4dc\uc2dc unique \uac12!.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scripts"),": \ud328\ud0a4\uc9c0\uc758 \ucee8\ud14d\uc2a4\ud2b8\uc5d0\uc11c \uc2e4\ud589\ud560 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc815\uc758\ud558\ub294 \ud544\ub4dc\uc608\uc694."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"exports"),": \ud328\ud0a4\uc9c0\uc758 \uc9c4\uc785\uc810\uc744 \uc9c0\uc815\ud574 \ub2e4\ub978 \ud328\ud0a4\uc9c0\uac00 \uc774 \ud328\ud0a4\uc9c0\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uac8c \ud574\uc918\uc694.")),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 ",(0,r.kt)("inlineCode",{parentName:"p"},"@repo/math")," \ud328\ud0a4\uc9c0\uac00 \uc788\ub2e4\uace0 \uac00\uc815\ud558\uba74, \ub2e4\uc74c\uacfc \uac19\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"exports")," \ud544\ub4dc\ub97c \uac00\uc9c8 \uc218 \uc788\uc5b4\uc694:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "exports": {\n    ".": "./dist/constants.ts",\n    "./add": "./dist/add.ts",\n    "./subtract": "./dist/subtract.ts"\n  }\n}\n')),(0,r.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 \ub2e4\ub978 \ud328\ud0a4\uc9c0\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc774 \ud574\ub2f9 \ud568\uc218\ub4e4\uc744 \ubd88\ub7ec\uc62c \uc218 \uc788\uc5b4\uc694:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GRAVITATIONAL_CONSTANT, SPEED_OF_LIGHT } from '@repo/math';\nimport { add } from '@repo/math/add';\nimport { subtract } from '@repo/math/subtract';\n")),(0,r.kt)("h3",{id:"exports-\uc774\uc810-3\uac00\uc9c0"},"exports \uc774\uc810 3\uac00\uc9c0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"exports"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc740 \ub2e4\uc74c \uc138 \uac00\uc9c0 \uc8fc\uc694 \uc774\uc810\uc744 \uc81c\uacf5\ud574\uc694:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\ubc30\ub7f4 \ud30c\uc77c \ud68c\ud53c"),": ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubc30\ub7f4 \ud30c\uc77c\uc740 \ud558\ub098\uc758 \uc9c4\uc785\uc810\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574, \ub2e4\ub978 \ud328\ud0a4\uc9c0\ub4e4\uc744 re-export \ub97c \ud558\ub294 \ud30c\uc77c\uc774\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\ud3b8\ub9ac\ud574 \ubcf4\uc77c \uc218 \uc788\uc9c0\ub9cc, \ucef4\ud30c\uc77c\ub7ec\uc640 \ubc88\ub4e4\ub7ec\uac00 \ucc98\ub9ac\ud558\uae30 \uc5b4\ub835\uace0 \uc131\ub2a5 \ubb38\uc81c\ub85c \uc774\uc5b4\uc9c8 \uc218 \uc788\uc5b4\uc694.  "),(0,r.kt)("li",{parentName:"ul"},"(Barrel \ud30c\uc77c\uc774 \ubd88\ud544\uc694\ud55c \ubaa8\ub4c8\uae4c\uc9c0 \ubaa8\ub450 \ubd88\ub7ec\uc640 \ud2b8\ub9ac \uc250\uc774\ud0b9(tree-shaking)\uc774 \uc81c\ub300\ub85c \uc791\ub3d9 X)  ")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\ub354 \uac15\ub825\ud55c \uae30\ub2a5"),": ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exports"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," \ud544\ub4dc\uc640 \ube44\uad50\ud574 \uc870\uac74\ubd80 \ub0b4\ubcf4\ub0b4\uae30(Conditional Exports)\uc640 \uac19\uc740 \ub354 \uac15\ub825\ud55c \uae30\ub2a5\uc744 \uc81c\uacf5\ud574\uc694. "),(0,r.kt)("li",{parentName:"ul"},"\uac00\ub2a5\ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"li"},"exports"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uad8c\uc7a5.  ")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"IDE \uc790\ub3d9 \uc644\uc131"),": \ud328\ud0a4\uc9c0\uc758 \uc9c4\uc785\uc810\uc744 ",(0,r.kt)("inlineCode",{parentName:"li"},"exports"),"\ub85c \uc9c0\uc815\ud558\uba74 \ucf54\ub4dc \ud3b8\uc9d1\uae30\uc5d0\uc11c \ud574\ub2f9 \ud328\ud0a4\uc9c0\uc758 \ub0b4\ubcf4\ub0b4\uae30\uc5d0 \ub300\ud55c \uc790\ub3d9 \uc644\uc131 \uae30\ub2a5\uc744 \uc81c\uacf5\ud560 \uc218 \uc788\uc5b4\uc694.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ucc38\uace0"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"exports"),"\uc5d0 \uc640\uc77c\ub4dc\uce74\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc, TypeScript \ucef4\ud30c\uc77c\ub7ec\uc758 \uc131\ub2a5 \ubb38\uc81c\ub85c \uc778\ud574 \uc790\ub3d9 \uc644\uc131 \uae30\ub2a5\uc744 \uc783\uc744 \uc218 \uc788\uc5b4\uc694. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 TypeScript \uac00\uc774\ub4dc\ub97c \ucc38\uc870\ud558\uc138\uc694."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"imports")," (\uc120\ud0dd \uc0ac\ud56d)"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"imports")," \ud544\ub4dc\ub294 \uc678\ubd80 \ud328\ud0a4\uc9c0\uc758 \ud558\uc704 \uacbd\ub85c\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5.  "),(0,r.kt)("li",{parentName:"ul"},"(\ucc38\uace0\ub85c \ud504\ub85c\uc81d\ud2b8\ub0b4 \uc808\ub300 \uacbd\ub85c \uc124\uc815\uc740, tsconfig\uc5d0\uc11c path \ud544\ub4dc \uc0ac\uc6a9)   "),(0,r.kt)("li",{parentName:"ul"},'\uc774\ub294 \ud30c\uc77c \uc774\ub3d9\uacfc \uac19\uc740 \ub9ac\ud329\ud130\ub9c1\uc5d0 \ub354 \ud0c4\ub825\uc801\uc778 \ub2e8\uc21c\ud55c \uacbd\ub85c\ub97c \uc791\uc131\ud558\ub294 "\ub2e8\ucd95\ud0a4"\uc640 \uac19\ub2e4\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\uc5b4\uc694.   ')),(0,r.kt)("p",null,"\uc18c\uc2a4 \ucf54\ub4dc     "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \ud328\ud0a4\uc9c0\ub4e4\uc740 ",(0,r.kt)("inlineCode",{parentName:"li"},"src")," \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc18c\uc2a4 \ucf54\ub4dc\ub97c \uc800\uc7a5"),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub97c \ucef4\ud30c\uc77c\ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"li"},"dist")," \ub514\ub809\ud1a0\ub9ac\ub85c \ucd9c\ub825\ud574\uc694.   ")),(0,r.kt)("h3",{id:"\uc77c\ubc18\uc801\uc778-\ud568\uc815"},"\uc77c\ubc18\uc801\uc778 \ud568\uc815"),(0,r.kt)("p",null,"1.TypeScript\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, \uc791\uc5c5 \uacf5\uac04\uc758 \ub8e8\ud2b8\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\uc774 \uaf2d \ud544\uc694\ud558\uc9c0 \uc54a\uc744 \uac00\ub2a5\uc131\uc774 \ub192\uc544\uc694.   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud328\ud0a4\uc9c0\ub4e4\uc740 \uac01\uac01 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc790\uccb4 \uc124\uc815\uc744 \uc9c0\uc815\ud574\uc57c \ud558\uba70, \uacf5\uc6a9 tsconfig.json\uc744 \ud655\uc7a5\ud574\uc11c \uc0ac\uc6a9.  ")),(0,r.kt)("p",null,"2.\uac00\ub2a5\ud55c \ud55c \ud328\ud0a4\uc9c0 \uacbd\uacc4\ub97c \ub118\uc5b4 \ud30c\uc77c\uc5d0 \uc811\uadfc\ud558\ub294 \uac83\uc740 \ud53c\ud558\ub294 \uac83\uc774 \uc88b\uc544\uc694. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub9cc\uc57d \ub2e4\ub978 \ud328\ud0a4\uc9c0\uc5d0 \uc811\uadfc\ud558\uae30 \uc704\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},"../"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \ubc1c\uacac\ud55c\ub2e4\uba74, "),(0,r.kt)("li",{parentName:"ul"},"\uadf8 \ud328\ud0a4\uc9c0\ub97c \ud544\uc694\ud55c \uc704\uce58\uc5d0 \uc124\uce58\ud558\uace0 package.json exports \ud544\ub4dc\uc5d0 \ub9de\uac8c \uac00\uc838\uc640\uc57c \ud55c\ub2e4.  ")),(0,r.kt)("h3",{id:"\uc608\uc81c-\ub72f\uc5b4\ubcf4\uae30"},"\uc608\uc81c \ub72f\uc5b4\ubcf4\uae30"),(0,r.kt)("p",null,"URL : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vercel/turborepo/tree/main/examples/with-nestjs"},"https://github.com/vercel/turborepo/tree/main/examples/with-nestjs"),"     "),(0,r.kt)("p",null,"1.package.json  "),(0,r.kt)("p",null,"1.1 workspaces \ud544\ub4dc\ub97c \ud1b5\ud574\uc11c \ud558\uc704 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\ub97c \uc54c\uc218\uc788\ub2e4.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"apps\uc5d0\ub294 web(nextjs), api(nestjs) 2\uac1c\uc758 \ud504\ub85c\uc81d\ud2b8\uac00 \uc874\uc7ac\ud55c\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"packages\uc5d0\ub294 api, ui, config \uc124\uc815\ub4e4 (eslint, jest, typescript) \uac00 \uc788\ub2e4.  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"typescript \uc124\uc815\ub3c4 \ud558\ub098\uc758 package\ub85c \ube80\uac83\uc774 \uc2e0\uae30\ud558\ub2e4.  "))),(0,r.kt)("li",{parentName:"ul"},"ui \ud328\ud0a4\uc9c0: turbo gen react-component \uba85\ub839\uc5b4\uac00 \uc788\ub294\ub370, \ubcf4\uc77c\ub7ec \ud50c\ub808\uc774\ud2b8 \ucf54\ub4dc\uc640 exports\ub97c \ucd94\uac00\ud574\uc8fc\ub294 \uadc0\uc5ec\uc6b4 \uc2a4\ud06c\ub9bd\ud2b8\uc774\ub2e4.  ")),(0,r.kt)("p",null,"2.api \ud328\ud0a4\uc9c0 "),(0,r.kt)("p",null,"2.1 dto, entities \ub4f1 \uacf5\ud1b5\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 TS\ud30c\uc77c\uc744 \ubcc4\ub3c4\uc758 \ud328\ud0a4\uc9c0\ub85c \ubd84\ub9ac\ud55c\uac83\uc774 \ub9d8\uc5d0 \ub4e0\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","2.2 app/web \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294\ub370, devDependencies\ub85c \uc124\uce58\uac00 \ub418\uc5b4 \uc788\ub2e4.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\ud328\ud0a4\uc9c0 \ubc84\uc804\uc740 "*"\ub77c\uace0 \uba85\uc2dc\ub418\uc5b4 \uc788\ub294\ub370, \ubaa8\ub4e0 \ubc84\uc804\uc744 \uc4f4\ub2e4\ub294 \uc758\ubbf8\uc774\uace0 \ubaa8\ub178\ub798\ud3ec\ub791 \uad00\uacc4\ub294 \uc5c6\ub2e4.  ')),(0,r.kt)("p",null,"\ucc38\uace0) "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub178\ub808\ud3ec\ub294 \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\uc5d0 \uae30\ubc18\ud558\uc5ec \uc791\ub3d9\ud55c\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"npm workspaces : \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\ub97c npm \uc5d0\uac8c \uc704\uc784\ud55c\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"yarn workspaces : symlink \ub610\ub294 ",(0,r.kt)("strong",{parentName:"li"},"PnP (Plug\u2019n\u2019Play)"),"\ub77c\ub294 \ubc29\uc2dd\uc744 \uc0ac\uc6a9.  "),(0,r.kt)("li",{parentName:"ul"},"pnpm workspaces : pnpm\uc740 \ud328\ud0a4\uc9c0\ub97c \ub9c1\ud06c\ud560 \ub54c \ud558\ub4dc \ub9c1\ud06c \uc0ac\uc6a9.  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud558\ub4dc \ub9c1\ud06c : \uc6d0\ubcf8 \ud30c\uc77c\uacfc \ud558\ub4dc \ub9c1\ud06c \ud30c\uc77c\uc774 \ub3d9\uc77c\ud55c inode.  "),(0,r.kt)("li",{parentName:"ul"},"symlink : \uc6d0\ubcf8 \ud30c\uc77c\uacfc \ubcc4\uac1c\ub85c \ub2e4\ub978 inode \uc0dd\uc131, \ub514\ub809\ud130\ub9ac\ub3c4 \uac00\ub2a5"),(0,r.kt)("li",{parentName:"ul"},"*\ud558\ub4dc \ub9c1\ud06c\ub85c \uc5f0\uacb0\ub41c \ubaa8\ub4e0 \ucc38\uc870\uac00 \uc0ad\uc81c\ub418\uc5b4\uc57c \ub514\uc2a4\ud06c\uc5d0\uc11c \ud30c\uc77c\uc758 \uc2e4\uc81c \ub370\uc774\ud130\uac00 \uc815\ub9ac.  "),(0,r.kt)("li",{parentName:"ul"},"*inode : \ub514\uc2a4\ud06c \ube14\ub85d\uc5d0 \ub300\ud55c \ucc38\uc870 \uc815\ubcf4.  ")))),(0,r.kt)("h2",{id:"2-managing-dependencies"},"2. Managing dependencies"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Using dependencies for sharing code  ")),(0,r.kt)("h2",{id:"3-creating-an-internal-package"},"3. Creating an internal package"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Make a package in your repository")),(0,r.kt)("h2",{id:"4-configuring-tasks"},"4. Configuring tasks"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Design your task patterns")),(0,r.kt)("h2",{id:"5-running-tasks"},"5. Running tasks"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Run tasks as fast as possible")),(0,r.kt)("h2",{id:"6-caching"},"6. Caching"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Never do the same work twice")),(0,r.kt)("h2",{id:"7-developing-apps"},"7. Developing apps"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Run many apps in parallel")),(0,r.kt)("h2",{id:"8-using-environment-variables"},"8. Using environment variables"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Account for variables in your environment")),(0,r.kt)("h2",{id:"9-constructing-ci"},"9. Constructing CI"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ship your applications")),(0,r.kt)("h2",{id:"10-upgrading"},"10. Upgrading"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Upgrading your Turborepo version")))}m.isMDXComponent=!0}}]);