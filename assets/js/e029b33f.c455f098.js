"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[8661],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},p=Object.keys(e);for(o=0;o<p.length;o++)t=p[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)t=p[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),a=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=a(e.components);return o.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=a(t),f=r,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||p;return t?o.createElement(d,c(c({ref:n},l),{},{components:t})):o.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,c=new Array(p);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:r,c[1]=i;for(var a=2;a<p;a++)c[a]=t[a];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},11988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>a});var o=t(87462),r=(t(67294),t(3905));const p={sidebar_position:1},c="Basic Snippets",i={unversionedId:"g-fe/react/snippets/snip00",id:"g-fe/react/snippets/snip00",title:"Basic Snippets",description:"ComponentReference vs ComponentInstance",source:"@site/docs/g-fe/4-react/2-snippets/snip00.md",sourceDirName:"g-fe/4-react/2-snippets",slug:"/g-fe/react/snippets/snip00",permalink:"/docs/g-fe/react/snippets/snip00",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-fe/4-react/2-snippets/snip00.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"frontEnd",previous:{title:"React Snippets",permalink:"/docs/category/react-snippets"},next:{title:"Hooks Snippets",permalink:"/docs/g-fe/react/snippets/snip01"}},s={},a=[{value:"ComponentReference vs ComponentInstance",id:"componentreference-vs-componentinstance",level:2}],l={toc:a},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-snippets"},"Basic Snippets"),(0,r.kt)("h2",{id:"componentreference-vs-componentinstance"},"ComponentReference vs ComponentInstance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport { render } from "react-dom";\n\nconst MyComponent = () => <div>Hello, World!</div>;\n\n// \uc608\uc2dc 1: {Component} \uc0ac\uc6a9\nconst AppWithComponentReference = ({\n  Component,\n}: {\n  Component: React.ReactNode;\n}) => (\n  <div>\n    <h1>Using Component Reference</h1>\n    {Component} {/* \ub2e8\uc21c\ud788 \ucef4\ud3ec\ub10c\ud2b8 \ud0c0\uc785\uc744 \uc0bd\uc785 */}\n  </div>\n);\n\n// \uc608\uc2dc 2: <Component /> \uc0ac\uc6a9\nconst AppWithComponentInstance = ({\n  Component,\n}: {\n  Component: () => React.ReactNode;\n}) => (\n  <div>\n    <h1>Using Component Instance</h1>\n    <Component /> {/* \uc2e4\uc81c\ub85c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub80c\ub354\ub9c1 */}\n  </div>\n);\n\n// \uc2e4\uc81c \ub80c\ub354\ub9c1\nexport const Test01 = () => {\n  return (\n    <>\n      <div>\n        <AppWithComponentReference Component={<MyComponent />} />\n        <AppWithComponentInstance Component={MyComponent} />\n      </div>\n    </>\n  );\n};\n\n1.\n\ub9cc\uc57d\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\uc640 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ud5f7\uac08\ub824\uc11c \uc798\ubabb \uc4f4\ub2e4\uba74 \uc544\ub798\uc640 \uac19\uc740 \uba54\uc2dc\uc9c0\ub97c \ubcf4\uac8c\ub41c\ub2e4.  \nError: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.\n\n2.\nchildren \ucc98\ub7fc \ud2b9\ubcc4\ud55c props\ub294 \ub9ac\uc561\ud2b8 Element\uc774\ub2e4. (React.ReactNode \ub85c \ud0c0\uc774\ud551)  \n- React.Element \ub294 <></> \ub4f1 JSX\uc758 \uacb0\uacfc\ubb3c\uc774\ub2e4.   \n- \ubc18\uba74 React.Node \ub294 JSX \ubfd0 \uc544\ub2c8\ub77c, string, null, number\ub4f1\ub3c4 \uac00\ub2a5\ud558\ub2e4.   \n\n3.\n\ucef4\ud3ec\ub10c\ud2b8\ub294 Element\ub97c \ub9ac\ud134\ud558\ub294 \ud568\uc218\uc774\ub2e4.    \nconst element = <h1>Hello, World!</h1>;  \nconst component = ()=> <h1>Hello, World!</h1>;  \n\n')))}u.isMDXComponent=!0}}]);