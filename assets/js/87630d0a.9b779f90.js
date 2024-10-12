"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[6233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(87462),o=n(67294),a=n(3905);const c={sidebar_position:1},p="React Typescript",s={unversionedId:"g-fe/ts/react-ts/rts01",id:"g-fe/ts/react-ts/rts01",title:"React Typescript",description:"ReactNode vs ReactElement",source:"@site/docs/g-fe/2-ts/2-react-ts/rts01.md",sourceDirName:"g-fe/2-ts/2-react-ts",slug:"/g-fe/ts/react-ts/rts01",permalink:"/docs/g-fe/ts/react-ts/rts01",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-fe/2-ts/2-react-ts/rts01.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"frontEnd",previous:{title:"Typescript Lib Publish Guide",permalink:"/docs/g-fe/ts/complier/tsc02"},next:{title:"4.Markup",permalink:"/docs/category/4markup"}},i={},l=[{value:"ReactNode vs ReactElement",id:"reactnode-vs-reactelement",level:2},{value:"ReactNode vs ()=&gt; React.ReactNode",id:"reactnode-vs--reactreactnode",level:2}],u={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-typescript"},"React Typescript"),(0,a.kt)("h2",{id:"reactnode-vs-reactelement"},"ReactNode vs ReactElement"),(0,a.kt)("p",null,"ReactNode\ub294 ReactElement\ub97c \ud3ec\ud568\ud558\ub294 \ub354 \ud070 \uac1c\ub150\uc785\ub2c8\ub2e4.  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc2ec\uc9c0\uc5b4\ub294 null, undefined\ub3c4 \uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub294 \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c null\ub3c4 \ub9ac\ud134\ud560 \uc218 \uc788\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.  "),(0,a.kt)("li",{parentName:"ul"},"\ubc18\uba74 ReactElement\ub294 ",(0,a.kt)(o.Fragment,null)," \ud639\uc740 ",(0,a.kt)("div",null)," \ub4f1\uc758 JSX\ub97c \ub9ac\ud134\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. createElement \ud568\uc218\ub77c\uace0\ub3c4 \ubcfc\uc218\uc788\uc2b5\ub2c8\ub2e4.  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    type ReactNode =\n        | ReactElement\n        | string\n        | number\n        | Iterable<ReactNode>\n        | ReactPortal\n        | boolean\n        | null\n        | undefined\n        | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES[\n            keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES\n        ];\n")),(0,a.kt)("h2",{id:"reactnode-vs--reactreactnode"},"ReactNode vs ()=> React.ReactNode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nconst MyComponent = () => <div>Hello, World!</div>;\n\n// \uc608\uc2dc 1: {Component} \uc0ac\uc6a9\n// ReactNode\ub97c \uc778\uc790\ub85c \ubc1b\ub294\ub2e4. \uc2ac\ub86f\ud328\ud134\ucc98\ub7fc \ucef4\ud3ec\ub10c\ud2b8\ub97c {}\uc73c\ub85c \ub123\uc5b4\uc57c \ud55c\ub2e4.\nconst AppWithComponentReference = ({\n  Component,\n}: {\n  Component: React.ReactNode;\n}) => (\n  <div>\n    <h1>Using Component Reference</h1>\n    {Component} {/* \ub2e8\uc21c\ud788 \ucef4\ud3ec\ub10c\ud2b8 \ud0c0\uc785\uc744 \uc0bd\uc785 */}\n  </div>\n);\n\n// \uc608\uc2dc 2: <Component /> \uc0ac\uc6a9\n// \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc778\uc790\ub85c \ubc1b\ub294\ub2e4. JSX\ub97c \ub9ac\ud134\ud574\uc57c \ud55c\ub2e4. ()=>React.ReactNode;\nconst AppWithComponentInstance = ({\n  Component,\n}: {\n  Component: React.ComponentType; // React.ComponentType; // () => React.ReactNode;\n}) => (\n  <div>\n    <h1>Using Component Instance</h1>\n    <Component /> {/* \uc2e4\uc81c\ub85c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub80c\ub354\ub9c1 */}\n  </div>\n);\n\n// \uc2e4\uc81c \ub80c\ub354\ub9c1\nexport const Test01 = () => {\n  return (\n    <>\n      <div>\n        <AppWithComponentReference Component={<MyComponent />} />\n        <AppWithComponentInstance Component={MyComponent} />\n      </div>\n    </>\n  );\n};\n\n')))}m.isMDXComponent=!0}}]);