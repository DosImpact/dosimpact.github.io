"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[7722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>E,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},E=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},O=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,E=l(e,["components","mdxType","originalType","parentName"]),p=i(r),O=o,m=p["".concat(c,".").concat(O)]||p[O]||u[O]||s;return r?n.createElement(m,a(a({ref:t},E),{},{components:r})):n.createElement(m,a({ref:t},E))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var i=2;i<s;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}O.displayName="MDXCreateElement"},39010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const s={sidebar_position:2},a="sql-DML",l={unversionedId:"g-be/sql/sql002",id:"g-be/sql/sql002",title:"sql-DML",description:"",source:"@site/docs/g-be/2-sql/sql002.md",sourceDirName:"g-be/2-sql",slug:"/g-be/sql/sql002",permalink:"/docs/g-be/sql/sql002",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-be/2-sql/sql002.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"backEnd",previous:{title:"sql-DDL",permalink:"/docs/g-be/sql/sql001"},next:{title:"sql-DCL",permalink:"/docs/g-be/sql/sql003"}},c={},i=[],E={toc:i},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},E,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sql-dml"},"sql-DML"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- user \uc870\ud68c,\uc0dd\uc131\nselect user, host from mysql.`user` u;\ncreate user 'my_app'@'%' identified by 'my_password';\n\n-- \uad8c\ud55c \ubd80\uc5ec\n-- *\ud2b9\uc815 \uad8c\ud55c\ub9cc \ubd80\uc5ec\uac00\ub2a5, *\ud2b9\uc815DB\uc5d0\ub9cc \uad8c\ud55c \ubd80\uc5ec \uac00\ub2a5   \n\nGRANT ALL PRIVILEGES ON \ub370\uc774\ud130\ubca0\uc774\uc2a4\uba85.* TO '\uacc4\uc815\uc544\uc774\ub514'@'\ud638\uc2a4\ud2b8';\nGRANT ALL PRIVILEGES ON *.* TO '\uacc4\uc815\uc544\uc774\ub514'@'\ud638\uc2a4\ud2b8';\nGRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, RELOAD ON *.* TO '\uacc4\uc815\uc544\uc774\ub514'@'\ud638\uc2a4\ud2b8';  \nGRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, RELOAD, PROCESS, REFERENCES, INDEX, ALTER, SHOW DATABASES, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, REPLICATION SLAVE, REPLICATION CLIENT, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, CREATE USER, EVENT, TRIGGER, LOAD FROM S3, SELECT INTO S3, INVOKE LAMBDA, INVOKE SAGEMAKER, INVOKE COMPREHEND ON *.* TO 'my_app'@'%';\n\n-- \uad8c\ud55c \uac31\uc2e0\nFLUSH PRIVILEGES; \n\n-- \uad8c\ud55c \uc870\ud68c \nSHOW GRANTS FOR 'my_app'@'%';\n")))}u.isMDXComponent=!0}}]);