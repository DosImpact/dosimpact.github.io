"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[2685],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var i=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=l,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return t?i.createElement(k,a(a({ref:n},c),{},{components:t})):i.createElement(k,a({ref:n},c))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,a=new Array(r);a[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var s=2;s<r;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=t(87462),l=(t(67294),t(3905));const r={sidebar_position:1},a="\ub514\uc790\uc778 \ud328\ud134 with Typescript",o={unversionedId:"g-fe/common/designPattern/dp01",id:"g-fe/common/designPattern/dp01",title:"\ub514\uc790\uc778 \ud328\ud134 with Typescript",description:"- \ub514\uc790\uc778 \ud328\ud134 with Typescript",source:"@site/docs/g-fe/0-common/3-designPattern/dp01.md",sourceDirName:"g-fe/0-common/3-designPattern",slug:"/g-fe/common/designPattern/dp01",permalink:"/docs/g-fe/common/designPattern/dp01",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-fe/0-common/3-designPattern/dp01.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"frontEnd",previous:{title:"DesignPattern",permalink:"/docs/category/designpattern"},next:{title:"\uc0dd\uc131\ud328\ud134:\ube4c\ub354",permalink:"/docs/g-fe/common/designPattern/dp04"}},p={},s=[{value:"\uc5ed\ud560 &amp; \ucc45\uc784",id:"\uc5ed\ud560--\ucc45\uc784",level:2},{value:"1.\ucc45\uc784 (Responsibility)",id:"1\ucc45\uc784-responsibility",level:3},{value:"2.\uc5ed\ud560 (Role)",id:"2\uc5ed\ud560-role",level:3},{value:"SOLID",id:"solid",level:2},{value:"1. \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59 (Single Responsibility Principle, SRP)",id:"1-\ub2e8\uc77c-\ucc45\uc784-\uc6d0\uce59-single-responsibility-principle-srp",level:3},{value:"2. \uac1c\ubc29-\ud3d0\uc1c4 \uc6d0\uce59 (Open/Closed Principle, OCP)",id:"2-\uac1c\ubc29-\ud3d0\uc1c4-\uc6d0\uce59-openclosed-principle-ocp",level:3},{value:"3. \ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59 (Liskov Substitution Principle, LSP)",id:"3-\ub9ac\uc2a4\ucf54\ud504-\uce58\ud658-\uc6d0\uce59-liskov-substitution-principle-lsp",level:3},{value:"4. \uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59 (Interface Segregation Principle, ISP)",id:"4-\uc778\ud130\ud398\uc774\uc2a4-\ubd84\ub9ac-\uc6d0\uce59-interface-segregation-principle-isp",level:3},{value:"5. \uc758\uc874 \uc5ed\uc804 \uc6d0\uce59 (Dependency Inversion Principle, DIP)",id:"5-\uc758\uc874-\uc5ed\uc804-\uc6d0\uce59-dependency-inversion-principle-dip",level:3},{value:"5.1 \uc758\uc874\uc131 \uc8fc\uc785 (Dependency Injection, DI)",id:"51-\uc758\uc874\uc131-\uc8fc\uc785-dependency-injection-di",level:3},{value:"SOLID ( OOP vs Functional Programming )",id:"solid--oop-vs-functional-programming-",level:2},{value:"1. \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59 (Single Responsibility Principle, SRP)",id:"1-\ub2e8\uc77c-\ucc45\uc784-\uc6d0\uce59-single-responsibility-principle-srp-1",level:3},{value:"2. \uac1c\ubc29-\ud3d0\uc1c4 \uc6d0\uce59 (Open/Closed Principle, OCP)",id:"2-\uac1c\ubc29-\ud3d0\uc1c4-\uc6d0\uce59-openclosed-principle-ocp-1",level:3},{value:"3. \ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59 (Liskov Substitution Principle, LSP)",id:"3-\ub9ac\uc2a4\ucf54\ud504-\uce58\ud658-\uc6d0\uce59-liskov-substitution-principle-lsp-1",level:3},{value:"4. \uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59 (Interface Segregation Principle, ISP)",id:"4-\uc778\ud130\ud398\uc774\uc2a4-\ubd84\ub9ac-\uc6d0\uce59-interface-segregation-principle-isp-1",level:3},{value:"5. \uc758\uc874 \uc5ed\uc804 \uc6d0\uce59 (Dependency Inversion Principle, DIP)",id:"5-\uc758\uc874-\uc5ed\uc804-\uc6d0\uce59-dependency-inversion-principle-dip-1",level:3}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\ub514\uc790\uc778-\ud328\ud134-with-typescript"},"\ub514\uc790\uc778 \ud328\ud134 with Typescript"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4-with-typescript"},"\ub514\uc790\uc778 \ud328\ud134 with Typescript"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%EC%97%AD%ED%95%A0--%EC%B1%85%EC%9E%84"},"\uc5ed\ud560 \\& \ucc45\uc784"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1%EC%B1%85%EC%9E%84-responsibility"},"1.\ucc45\uc784 (Responsibility)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2%EC%97%AD%ED%95%A0-role"},"2.\uc5ed\ud560 (Role)")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#solid"},"SOLID"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1-%EB%8B%A8%EC%9D%BC-%EC%B1%85%EC%9E%84-%EC%9B%90%EC%B9%99-single-responsibility-principle-srp"},"1. \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59 (Single Responsibility Principle, SRP)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-%EA%B0%9C%EB%B0%A9-%ED%8F%90%EC%87%84-%EC%9B%90%EC%B9%99-openclosed-principle-ocp"},"2. \uac1c\ubc29-\ud3d0\uc1c4 \uc6d0\uce59 (Open/Closed Principle, OCP)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-%EB%A6%AC%EC%8A%A4%EC%BD%94%ED%94%84-%EC%B9%98%ED%99%98-%EC%9B%90%EC%B9%99-liskov-substitution-principle-lsp"},"3. \ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59 (Liskov Substitution Principle, LSP)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#4-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%B6%84%EB%A6%AC-%EC%9B%90%EC%B9%99-interface-segregation-principle-isp"},"4. \uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59 (Interface Segregation Principle, ISP)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#5-%EC%9D%98%EC%A1%B4-%EC%97%AD%EC%A0%84-%EC%9B%90%EC%B9%99-dependency-inversion-principle-dip"},"5. \uc758\uc874 \uc5ed\uc804 \uc6d0\uce59 (Dependency Inversion Principle, DIP)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#51-%EC%9D%98%EC%A1%B4%EC%84%B1-%EC%A3%BC%EC%9E%85-dependency-injection-di"},"5.1 \uc758\uc874\uc131 \uc8fc\uc785 (Dependency Injection, DI)")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#solid--oop-vs-functional-programming-"},"SOLID ( OOP vs Functional Programming )"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1-%EB%8B%A8%EC%9D%BC-%EC%B1%85%EC%9E%84-%EC%9B%90%EC%B9%99-single-responsibility-principle-srp-1"},"1. \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59 (Single Responsibility Principle, SRP)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-%EA%B0%9C%EB%B0%A9-%ED%8F%90%EC%87%84-%EC%9B%90%EC%B9%99-openclosed-principle-ocp-1"},"2. \uac1c\ubc29-\ud3d0\uc1c4 \uc6d0\uce59 (Open/Closed Principle, OCP)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-%EB%A6%AC%EC%8A%A4%EC%BD%94%ED%94%84-%EC%B9%98%ED%99%98-%EC%9B%90%EC%B9%99-liskov-substitution-principle-lsp-1"},"3. \ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59 (Liskov Substitution Principle, LSP)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#4-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4-%EB%B6%84%EB%A6%AC-%EC%9B%90%EC%B9%99-interface-segregation-principle-isp-1"},"4. \uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59 (Interface Segregation Principle, ISP)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#5-%EC%9D%98%EC%A1%B4-%EC%97%AD%EC%A0%84-%EC%9B%90%EC%B9%99-dependency-inversion-principle-dip-1"},"5. \uc758\uc874 \uc5ed\uc804 \uc6d0\uce59 (Dependency Inversion Principle, DIP)"))))))),(0,l.kt)("h2",{id:"\uc5ed\ud560--\ucc45\uc784"},"\uc5ed\ud560 & \ucc45\uc784"),(0,l.kt)("h3",{id:"1\ucc45\uc784-responsibility"},"1.\ucc45\uc784 (Responsibility)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucc45\uc784\uc740 \uac1d\uccb4\ub098 \ubaa8\ub4c8\uc774 \uc218\ud589\ud574\uc57c \ud558\ub294 \uad6c\uccb4\uc801\uc778 \uc791\uc5c5\uc774\ub098 \uae30\ub2a5\uc744 \uc758\ubbf8.  "),(0,l.kt)("li",{parentName:"ul"},"\ub9f4\ubc84 \ubcc0\uc218 \ud639\uc740 \ub9e4\uc18c\ub4dc\ub85c \ud45c\ud604 "),(0,l.kt)("li",{parentName:"ul"},"\uc815\ubcf4 \ubcf4\uc720 \ucc45\uc784: \uac1d\uccb4\uac00 \uc5b4\ub5a4 \ub370\uc774\ud130\ub97c \uac00\uc9c0\uace0 \uc788\uc5b4\uc57c \ud558\ub294\uac00\uc5d0 \ub300\ud55c \ucc45\uc784\uc785\ub2c8\ub2e4. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4, ",(0,l.kt)("inlineCode",{parentName:"li"},"User")," \ud074\ub798\uc2a4\ub294 \uc0ac\uc6a9\uc790\uc758 \uc774\ub984\uacfc \uc774\uba54\uc77c\uc744 \ubcf4\uc720\ud560 \ucc45\uc784\uc774 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ud589\ub3d9 \ucc45\uc784: \uac1d\uccb4\uac00 \uc218\ud589\ud574\uc57c \ud560 \uc791\uc5c5\uc5d0 \ub300\ud55c \ucc45\uc784\uc785\ub2c8\ub2e4. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4, ",(0,l.kt)("inlineCode",{parentName:"li"},"UserService")," \ud074\ub798\uc2a4\ub294 \uc0ac\uc6a9\uc790\ub97c \uc800\uc7a5\ud558\uac70\ub098 \uac80\uc0c9\ud558\ub294 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \ucc45\uc784\uc774 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,l.kt)("h3",{id:"2\uc5ed\ud560-role"},"2.\uc5ed\ud560 (Role)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc5ed\ud560\uc740 \ucc45\uc784\uc758 \uc9d1\ud569  "),(0,l.kt)("li",{parentName:"ul"},"\uc5ed\ud560\uc740 \ubcf4\ud1b5 \uc778\ud130\ud398\uc774\uc2a4\ub098 \ucd94\uc0c1 \ud074\ub798\uc2a4\ub85c \ud45c\ud604  "),(0,l.kt)("li",{parentName:"ul"},"\uc608)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ud558\ub294 \ucc45\uc784"),(0,l.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790 \uc785\ub825\uc744 \uc720\ud6a8\uc131 \uac80\uc0ac\ud558\ub294 \ucc45\uc784"),(0,l.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \ube44\uc988\ub2c8\uc2a4 \uaddc\uce59\uc744 \uc801\uc6a9\ud558\ub294 \ucc45\uc784")))),(0,l.kt)("p",null,"*\ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59(Single Responsibility Principle, SRP)\uc744 \uc9c0\ud0a8\ub2e4\ub294 \uac83\uc740 \ud558\ub098\uc758 \ud074\ub798\uc2a4\uac00 \ud558\ub098\uc758 \uc5ed\ud560\ub9cc \ub2f4\ub2f9.  "),(0,l.kt)("h2",{id:"solid"},"SOLID"),(0,l.kt)("h3",{id:"1-\ub2e8\uc77c-\ucc45\uc784-\uc6d0\uce59-single-responsibility-principle-srp"},"1. \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59 (Single Responsibility Principle, SRP)"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud074\ub798\uc2a4\uc5d0 \ub108\ubb34 \ub9ce\uc740 \ucc45\uc784\uc744 \ub123\uc73c\uba74 \uc548\ub41c\ub2e4. ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc815\uc758: \ud074\ub798\uc2a4\ub294 \ud558\ub098\uc758 \ucc45\uc784\ub9cc \uac00\uc838\uc57c \ud558\uba70, \ubcc0\uacbd\uc758 \uc774\uc720\ub294 \uc624\uc9c1 \ud558\ub098\uc5ec\uc57c \ud569\ub2c8\ub2e4.  ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// SRP \uc704\ubc18 \uc608\uc2dc\nclass UserService {\n    // \uc0ac\uc6a9\uc790\uc758 \ub370\uc774\ud130\ub97c \uc800\uc7a5\n    saveUser(user: User): void {\n        // \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uc800\uc7a5\n        console.log("Saving user to the database");\n    }\n\n    // \uc0ac\uc6a9\uc790\uc758 \uc774\uba54\uc77c\uc744 \ubc1c\uc1a1\n    sendEmail(user: User, message: string): void {\n        // \uc774\uba54\uc77c \ubc1c\uc1a1 \ub85c\uc9c1\n        console.log(`Sending email to ${user.email}: ${message}`);\n    }\n\n    // \uc0ac\uc6a9\uc790\uc758 \ub370\uc774\ud130 \uc720\ud6a8\uc131 \uac80\uc0ac\n    validateUserData(user: User): boolean {\n        // \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\uac00 \uc720\ud6a8\ud55c\uc9c0 \ud655\uc778\ud558\ub294 \ub85c\uc9c1\n        if (user.name && user.email) {\n            console.log("User data is valid");\n            return true;\n        }\n        console.log("User data is invalid");\n        return false;\n    }\n}\n\n// SRP \uc900\uc218 \uc608\uc2dc\n// \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \ucc45\uc784\nclass UserRepository {\n    saveUser(user: User): void {\n        // \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uc800\uc7a5\n        console.log("Saving user to the database");\n    }\n}\n// \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc774\uba54\uc77c\uc744 \ubc1c\uc1a1\ud558\ub294 \ucc45\uc784\nclass EmailService {\n    sendEmail(user: User, message: string): void {\n        // \uc774\uba54\uc77c \ubc1c\uc1a1 \ub85c\uc9c1\n        console.log(`Sending email to ${user.email}: ${message}`);\n    }\n}\n// \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\uc758 \uc720\ud6a8\uc131\uc744 \uac80\uc0ac\ud558\ub294 \ucc45\uc784\nclass UserValidator {\n    validateUserData(user: User): boolean {\n        // \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\uac00 \uc720\ud6a8\ud55c\uc9c0 \ud655\uc778\ud558\ub294 \ub85c\uc9c1\n        if (user.name && user.email) {\n            console.log("User data is valid");\n            return true;\n        }\n        console.log("User data is invalid");\n        return false;\n    }\n}\n')),(0,l.kt)("h3",{id:"2-\uac1c\ubc29-\ud3d0\uc1c4-\uc6d0\uce59-openclosed-principle-ocp"},"2. \uac1c\ubc29-\ud3d0\uc1c4 \uc6d0\uce59 (Open/Closed Principle, OCP)"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ubd80\ubaa8 \ud074\ub798\uc2a4\ub97c \uc790\uafb8 \uc218\uc815\ud558\ub294\uac74 \uc798\ubabb\ub418\uc5c8\ub2e4. \uc790\uc2dd\uc744 \ud655\uc7a5\ud574\ub77c.  ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc815\uc758: \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc5d4\ud130\ud2f0(\ud074\ub798\uc2a4, \ubaa8\ub4c8, \ud568\uc218 \ub4f1)\ub294 \ud655\uc7a5\uc5d0\ub294 \uc5f4\ub824 \uc788\uc5b4\uc57c \ud558\uc9c0\ub9cc, \uc218\uc815\uc5d0\ub294 \ub2eb\ud600 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc0ac\ub840: \ub9cc\uc57d \uc0c8\ub85c\uc6b4 \ud560\uc778 \uc815\ucc45\uc744 \ucd94\uac00\ud574\uc57c \ud55c\ub2e4\uace0 \uac00\uc815\ud560 \ub54c, \uae30\uc874 \ucf54\ub4dc\ub97c \uc218\uc815\ud558\uc9c0 \uc54a\uace0 \uc0c8\ub85c\uc6b4 \ud074\ub798\uc2a4\ub97c \ucd94\uac00\ud558\uc5ec \uae30\ub2a5\uc744 \ud655\uc7a5\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4, ",(0,l.kt)("inlineCode",{parentName:"li"},"Discount")," \ud074\ub798\uc2a4\ub97c \ud655\uc7a5\ud558\ub294 \uc0c8\ub85c\uc6b4 ",(0,l.kt)("inlineCode",{parentName:"li"},"HolidayDiscount")," \ud074\ub798\uc2a4\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// OCP \uc704\ubc18 \uc608\uc2dc\nclass Discount {\n  calculate(price: number, type: string): number {\n    if (type === 'holiday') {\n      return price * 0.9;\n    } else if (type === 'member') {\n      return price * 0.8;\n    }\n    return price;\n  }\n}\n\n// OCP \uc900\uc218 \uc608\uc2dc\nabstract class Discount {\n  abstract calculate(price: number): number;\n}\n\nclass HolidayDiscount extends Discount {\n  calculate(price: number): number {\n    return price * 0.9;\n  }\n}\n\nclass MemberDiscount extends Discount {\n  calculate(price: number): number {\n    return price * 0.8;\n  }\n}\n")))),(0,l.kt)("h3",{id:"3-\ub9ac\uc2a4\ucf54\ud504-\uce58\ud658-\uc6d0\uce59-liskov-substitution-principle-lsp"},"3. \ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59 (Liskov Substitution Principle, LSP)"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ubd80\ubaa8\uc758 \uae30\ub2a5\uc744 \uc798\uc4f0\ub2e4\uac00, \uc790\uc2dd\uc5d0\uc640\uc11c \uadf8 \uae30\ub2a5\uc774 \uc608\uc0c1\uacfc \ub2e4\ub974\uac8c \ub3d9\uc791\ud558\uac8c \ud558\uc9c0 \ub9d0\ub77c ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc815\uc758: \uc790\uc2dd \ud074\ub798\uc2a4\ub294 \uc5b8\uc81c\ub098 \ubd80\ubaa8 \ud074\ub798\uc2a4\ub97c \ub300\uccb4\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc0ac\ub840: \uc608\ub97c \ub4e4\uc5b4, ",(0,l.kt)("inlineCode",{parentName:"li"},"Rectangle")," \ud074\ub798\uc2a4\ub97c \uc0c1\uc18d\ubc1b\uc740 ",(0,l.kt)("inlineCode",{parentName:"li"},"Square")," \ud074\ub798\uc2a4\uac00 \uc788\ub2e4\uba74, ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ud568\uc218\ub3c4 ",(0,l.kt)("inlineCode",{parentName:"li"},"Square")," \uac1d\uccb4\ub97c ",(0,l.kt)("inlineCode",{parentName:"li"},"Rectangle"),"\ucc98\ub7fc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub807\uc9c0 \uc54a\ub2e4\uba74 LSP\ub97c \uc704\ubc18\ud55c \uac83\uc785\ub2c8\ub2e4.  "),(0,l.kt)("li",{parentName:"ul"},"*\uc778\uc9c0\uc801\uc778 \uce21\uba74\uc774 \uc788\ub2e4. getArea \ud568\uc218\ub294 WxH \ub97c \uc5f0\uc0b0\ud558\ub294 \uc904 \uc54c\uc558\ub2e4.(\ubd80\ubaa8), \ud558\uc9c0\ub9cc \uc790\uc2dd\uc5d0\uc11c\ub294 WxW \ud639\uc740 HxH \uc73c\ub85c \ubc14\ub00c\uc5b4 \uc788\ub2e4.  "),(0,l.kt)("li",{parentName:"ul"},"*\ub2e4\ud615\uc131\uc744 \uac00\uc9c0\ub294\uac83\uc740 \ud544\uc694\ud55c\ub370, \ubd80\ubaa8\uc758 \ub3d9\uc791\uc744 \uc608\uc0c1\uacfc \ud06c\uac8c \ubc97\uc5b4\ub098\uba74 \uc548\ub41c\ub2e4.  ")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// LSP \uc704\ubc18 \uc608\uc2dc\nclass Rectangle {\n  constructor(protected width: number, protected height: number) {}\n\n  setWidth(width: number) {\n    this.width = width;\n  }\n\n  setHeight(height: number) {\n    this.height = height;\n  }\n\n  getArea(): number {\n    return this.width * this.height;\n  }\n}\n\nclass Square extends Rectangle {\n  setWidth(width: number) {\n    this.width = width;\n    this.height = width;\n  }\n\n  setHeight(height: number) {\n    this.height = height;\n    this.width = height;\n  }\n}\n\nfunction printArea(rectangle: Rectangle) {\n  rectangle.setWidth(5);\n  rectangle.setHeight(10);\n  console.log(rectangle.getArea()); // Rectangle\uc5d0\uc11c\ub294 50\uc744 \uae30\ub300\ud558\uc9c0\ub9cc, Square\uc5d0\uc11c\ub294 100\uc774 \ucd9c\ub825\ub428\n}\n\n// LSP \uc900\uc218 \uc608\uc2dc\nclass Shape {\n  getArea(): number {\n    throw new Error("Method not implemented.");\n  }\n}\n\nclass Rectangle extends Shape {\n  constructor(private width: number, private height: number) {\n    super();\n  }\n\n  getArea(): number {\n    return this.width * this.height;\n  }\n}\n\nclass Square extends Shape {\n  constructor(private size: number) {\n    super();\n  }\n\n  getArea(): number {\n    return this.size * this.size;\n  }\n}\n')),(0,l.kt)("p",null,"\ub2e4\ub978 \uc608\uc2dc) \ubd80\ubaa8\ud074\ub798\uc2a4\uc758 fly\ub294 \uc798 \ub3d9\uc791\ud558\uc600\uc73c\ub098, \uc790\uc2dd\ud074\ub798\uc2a4\ub294 \uc608\uc678\ub97c \ub358\uc9c4\ub2e4.  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'// \ubd80\ubaa8 \ud074\ub798\uc2a4: \uc0c8(Bird)\nclass Bird {\n    fly() {\n        console.log("I can fly!");\n    }\n}\n\n// \uc790\uc2dd \ud074\ub798\uc2a4: \ud3ad\uadc4(Penguin)\nclass Penguin extends Bird {\n    fly() {\n        throw new Error("Penguins can\'t fly.");\n    }\n}\n')),(0,l.kt)("h3",{id:"4-\uc778\ud130\ud398\uc774\uc2a4-\ubd84\ub9ac-\uc6d0\uce59-interface-segregation-principle-isp"},"4. \uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59 (Interface Segregation Principle, ISP)"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ubaa8\ub4c8\uc5d0\uc11c \ubbf8\uc0ac\uc6a9 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc788\ub2e4\uba74 \ub354 \ubd84\ub9ac\uac00 \uac00\ub2a5\ud558\ub2e4. \ub108\ubb34 \ud55c\uacf3\uc5d0 \ubab0\uc544\ub454\uac83.   ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc815\uc758: \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc790\uc2e0\uc774 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uc544\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc0ac\ub840: ",(0,l.kt)("inlineCode",{parentName:"li"},"Robot")," \ud074\ub798\uc2a4\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"eat()")," \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4. \uc774\ub294 ISP\ub97c \uc704\ubc18\ud558\ub294 \uac83\uc774\ubbc0\ub85c, ",(0,l.kt)("inlineCode",{parentName:"li"},"Worker")," \uc778\ud130\ud398\uc774\uc2a4\ub97c ",(0,l.kt)("inlineCode",{parentName:"li"},"Workable"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"li"},"Eatable"),"\ub85c \ubd84\ub9ac\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// ISP \uc704\ubc18 \uc608\uc2dc\ninterface Worker {\n  work(): void;\n  eat(): void;\n}\n\nclass HumanWorker implements Worker {\n  work() {\n    console.log('Working');\n  }\n\n  eat() {\n    console.log('Eating');\n  }\n}\n\nclass RobotWorker implements Worker {\n  work() {\n    console.log('Working');\n  }\n\n  eat() {\n    // \ub85c\ubd07\uc740 \uba39\uc9c0 \uc54a\uc74c\n  }\n}\n\n// ISP \uc900\uc218 \uc608\uc2dc\ninterface Workable {\n  work(): void;\n}\n\ninterface Eatable {\n  eat(): void;\n}\n\nclass HumanWorker implements Workable, Eatable {\n  work() {\n    console.log('Working');\n  }\n\n  eat() {\n    console.log('Eating');\n  }\n}\n\nclass RobotWorker implements Workable {\n  work() {\n    console.log('Working');\n  }\n}\n")),(0,l.kt)("h3",{id:"5-\uc758\uc874-\uc5ed\uc804-\uc6d0\uce59-dependency-inversion-principle-dip"},"5. \uc758\uc874 \uc5ed\uc804 \uc6d0\uce59 (Dependency Inversion Principle, DIP)"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uace0\uc218\uc900\uc758 \ubaa8\ub4c8(\ubd80\ubaa8)\uc5d0 \uc758\uc874\ud574\uc57c, \uc800\uc218\uc900 \ubaa8\ub4c8(\uc790\uc2dd)\uc744 \ub9ce\uc774 \uc218\uc6a9 \ud560 \uc218 \uc788\ub2e4.  ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc815\uc758: \uace0\uc218\uc900 \ubaa8\ub4c8\uc740 \uc800\uc218\uc900 \ubaa8\ub4c8\uc5d0 \uc758\uc874\ud574\uc11c\ub294 \uc548 \ub418\uba70, \ub458 \ub2e4 \ucd94\uc0c1\ud654\uc5d0 \uc758\uc874\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc0ac\ub840: \uc608\ub97c \ub4e4\uc5b4, ",(0,l.kt)("inlineCode",{parentName:"li"},"Light")," \ud074\ub798\uc2a4\uac00 ",(0,l.kt)("inlineCode",{parentName:"li"},"Button")," \ud074\ub798\uc2a4\uc5d0 \uc758\uc874\ud558\uace0 \uc788\ub2e4\uba74, ",(0,l.kt)("inlineCode",{parentName:"li"},"Button"),"\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 ",(0,l.kt)("inlineCode",{parentName:"li"},"Light"),"\ub3c4 \ubcc0\uacbd\ud574\uc57c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc774\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574, ",(0,l.kt)("inlineCode",{parentName:"li"},"Light")," \ud074\ub798\uc2a4\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"Switchable")," \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \uc758\uc874\ud558\uace0, ",(0,l.kt)("inlineCode",{parentName:"li"},"Button")," \ud074\ub798\uc2a4\uac00 \uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\ub3c4\ub85d \ud574\uc57c \ud569\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// DIP \uc704\ubc18 \uc608\uc2dc\nclass Button {\n  turnOn() {\n    console.log('Button turned on');\n  }\n  \n  turnOff() {\n    console.log('Button turned off');\n  }\n}\n\nclass Light {\n  private button: Button;\n\n  constructor(button: Button) {\n    this.button = button;\n  }\n\n  toggle() {\n    this.button.turnOn();\n  }\n}\n\n// DIP \uc900\uc218 \uc608\uc2dc\ninterface Switchable {\n  turnOn(): void;\n  turnOff(): void;\n}\n\nclass Button implements Switchable {\n  turnOn() {\n    console.log('Button turned on');\n  }\n  \n  turnOff() {\n    console.log('Button turned off');\n  }\n}\n\nclass Light {\n  private device: Switchable;\n\n  constructor(device: Switchable) {\n     // DI\ub97c \uc0ac\uc6a9\ud55c \uc758\uc874\uc131 \uc8fc\uc785\n    this.device = device;\n  }\n\n  toggle() {\n    this.device.turnOn();\n  }\n}\n")),(0,l.kt)("h3",{id:"51-\uc758\uc874\uc131-\uc8fc\uc785-dependency-injection-di"},"5.1 \uc758\uc874\uc131 \uc8fc\uc785 (Dependency Injection, DI)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DIP\ub97c \uad6c\ud604\ud558\ub294 \ubc29\ubc95 \uc911 \ud558\ub098\uc774\ub2e4.  "),(0,l.kt)("li",{parentName:"ul"},"DI\ub97c \ud1b5\ud574\uc11c \uc758\uc874\uc131\uc744 \ud074\ub798\uc2a4 \ub0b4\ubd80 \ud504\ub85c\ud37c\ud2f0\uac00 \uc544\ub2cc \uc0dd\uc131\uc790\ub97c \ud1b5\ud574\uc11c \ubc1b\ub3c4\ub85d \ud55c\ub2e4.    ")),(0,l.kt)("h2",{id:"solid--oop-vs-functional-programming-"},"SOLID ( OOP vs Functional Programming )"),(0,l.kt)("h3",{id:"1-\ub2e8\uc77c-\ucc45\uc784-\uc6d0\uce59-single-responsibility-principle-srp-1"},"1. \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59 (Single Responsibility Principle, SRP)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OOP: \ud074\ub798\uc2a4\ub294 \ud558\ub098\uc758 \ucc45\uc784\ub9cc \uac00\uc838\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"FP: \ud568\uc218\ub294 \ud558\ub098\uc758 \uc77c\ub9cc \uc218\ud589",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc21c\uc218 \ud568\uc218(pure function) : \uc678\ubd80 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\ub85c\uc368 \ud568\uc218\uc758 \ucc45\uc784\uc774 \uba85\ud655\ud574\uc9d1\ub2c8\ub2e4.")))),(0,l.kt)("h3",{id:"2-\uac1c\ubc29-\ud3d0\uc1c4-\uc6d0\uce59-openclosed-principle-ocp-1"},"2. \uac1c\ubc29-\ud3d0\uc1c4 \uc6d0\uce59 (Open/Closed Principle, OCP)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OOP: \ud074\ub798\uc2a4\ub294 \ud655\uc7a5 \uac00\ub2a5\ud574\uc57c \ud558\uc9c0\ub9cc, \uc218\uc815\ud558\uc9c0 \uc54a\uace0\ub3c4 \uae30\uc874 \ucf54\ub4dc\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"FP: \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c\ub294 \ud568\uc218\ub4e4\uc774 \ubd88\ubcc0\uc131(immutability)\uc744 \uac00\uc9c4\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uae30\uc874\uc758 \ud568\uc218\ub97c \uc218\uc815\ud558\ub294 \ub300\uc2e0, \uc0c8\ub85c\uc6b4 \ud568\uc218\ub97c \uc791\uc131\ud558\uc5ec \uae30\uc874 \ud568\uc218\ub97c \uc870\ud569\ud558\uac70\ub098 \ud655\uc7a5. "),(0,l.kt)("li",{parentName:"ul"},"\ud568\uc218\uc758 \uc870\ud569(composition)\uc774\ub098 \uace0\ucc28 \ud568\uc218(higher-order function)\ub97c \uc0ac\uc6a9")))),(0,l.kt)("h3",{id:"3-\ub9ac\uc2a4\ucf54\ud504-\uce58\ud658-\uc6d0\uce59-liskov-substitution-principle-lsp-1"},"3. \ub9ac\uc2a4\ucf54\ud504 \uce58\ud658 \uc6d0\uce59 (Liskov Substitution Principle, LSP)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OOP: \uc790\uc2dd \ud074\ub798\uc2a4\ub294 \uc5b8\uc81c\ub098 \ubd80\ubaa8 \ud074\ub798\uc2a4\ub97c \ub300\uccb4\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"FP: \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c\ub294 \uc8fc\ub85c \ub2e4\ud615\uc131\uc744 \uace0\ucc28 \ud568\uc218\ub098 \ud568\uc218 \ud569\uc131(composition)\uc744 \ud1b5\ud574 \uad6c\ud604\ud569\ub2c8\ub2e4. ")),(0,l.kt)("h3",{id:"4-\uc778\ud130\ud398\uc774\uc2a4-\ubd84\ub9ac-\uc6d0\uce59-interface-segregation-principle-isp-1"},"4. \uc778\ud130\ud398\uc774\uc2a4 \ubd84\ub9ac \uc6d0\uce59 (Interface Segregation Principle, ISP)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OOP: \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \uc790\uc2e0\uc774 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uc544\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"FP: \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c \uc778\ud130\ud398\uc774\uc2a4\ub294 \ud568\uc218\uc758 \uc2dc\uadf8\ub2c8\ucc98\ub85c \ud45c\ud604. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ISP\uc758 \uac1c\ub150\uc740 \ud568\uc218\uac00 \ubd88\ud544\uc694\ud558\uac8c \ub9ce\uc740 \uc778\uc790\ub97c \ubc1b\uc9c0 \uc54a\ub3c4\ub85d \uc124\uacc4\ud558\ub294 \uac83\uacfc \uad00\ub828\uc774 \uc788\uc2b5\ub2c8\ub2e4. "),(0,l.kt)("li",{parentName:"ul"},"\uc791\uc740 \ud568\uc218\ub85c \ub098\ub204\uae30")))),(0,l.kt)("h3",{id:"5-\uc758\uc874-\uc5ed\uc804-\uc6d0\uce59-dependency-inversion-principle-dip-1"},"5. \uc758\uc874 \uc5ed\uc804 \uc6d0\uce59 (Dependency Inversion Principle, DIP)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OOP: \uace0\uc218\uc900 \ubaa8\ub4c8\uc740 \uc800\uc218\uc900 \ubaa8\ub4c8\uc5d0 \uc758\uc874\ud574\uc11c\ub294 \uc548 \ub418\uba70, \ub458 \ub2e4 \ucd94\uc0c1\ud654\uc5d0 \uc758\uc874\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"FP: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"DIP\uc640 \uc720\uc0ac : \uc758\uc874\uc131\uc744 \ud568\uc218\ub85c \uc804\ub2ec\ud558\uc5ec, \uad6c\uccb4\uc801\uc778 \uad6c\ud604 \ub300\uc2e0 \ucd94\uc0c1\uc801\uc778 \ud589\ub3d9\uc744 \uc758\uc874\uc131\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4\ub294 \uc810"),(0,l.kt)("li",{parentName:"ul"},"DI\uc640 \uc720\uc0ac : \uc758\uc874\uc131\uc744 \uc8fc\uc785\ud558\ub294 \ub300\uc2e0, \uc758\uc874\uc131 \uc790\uccb4\ub97c \ud568\uc218\uc758 \uc778\uc790\ub85c \uc804\ub2ec\ud558\uc5ec \uad6c\ud604  ")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc740 \uc8fc\ub85c \ubd88\ubcc0\uc131, \uc21c\uc218 \ud568\uc218, \ud568\uc218 \ud569\uc131 \ub4f1\uc758 \uac1c\ub150\uc744 \uac15\uc870\ud558\uae30 \ub54c\ubb38\uc5d0, \uad6c\ud604 \ubc29\uc2dd\uc774 \ub2e4\ub974\ub2e4.")))}m.isMDXComponent=!0}}]);