"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[7838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,d=m["".concat(c,".").concat(p)]||m[p]||g[p]||s;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[m]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:2},i="Github \uba40\ud2f0 \uacc4\uc815\uc73c\ub85c \ud478\uc26c\ud558\uae30",a={unversionedId:"g-devops/common/git/git002",id:"g-devops/common/git/git002",title:"Github \uba40\ud2f0 \uacc4\uc815\uc73c\ub85c \ud478\uc26c\ud558\uae30",description:"Goal",source:"@site/docs/g-devops/0-common/3-git/git002.md",sourceDirName:"g-devops/0-common/3-git",slug:"/g-devops/common/git/git002",permalink:"/docs/g-devops/common/git/git002",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-devops/0-common/3-git/git002.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devOps",previous:{title:"github + SSH \uc811\uc18d",permalink:"/docs/g-devops/common/git/git001"},next:{title:"Docker",permalink:"/docs/category/docker"}},c={},u=[{value:"Goal",id:"goal",level:2},{value:"\ubc29\ubc95",id:"\ubc29\ubc95",level:2}],l={toc:u},m="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"github-\uba40\ud2f0-\uacc4\uc815\uc73c\ub85c-\ud478\uc26c\ud558\uae30"},"Github \uba40\ud2f0 \uacc4\uc815\uc73c\ub85c \ud478\uc26c\ud558\uae30"),(0,o.kt)("h2",{id:"goal"},"Goal"),(0,o.kt)("p",null,"\uc0c8\ub85c\uc6b4 \uae43\ud5d9 \uacc4\uc815\uc744 \ub9cc\ub4e4\uc5c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","github repo\uc5d0 \ub530\ub77c\uc11c ssh key\ub97c \ubc14\uafb8\uc5b4 \uac00\uba70 \ucee4\ubc0b\uc744 \ud558\uace0\uc790 \ud55c\ub2e4.  "),(0,o.kt)("h2",{id:"\ubc29\ubc95"},"\ubc29\ubc95"),(0,o.kt)("p",null,"github\uc5d0 ssh\ud0a4\ub85c \uc811\uadfc\ud560 \uc218 \uc788\ub2e4. \uae30\uc874\uc758 \uacc4\uc815\uc758 ssh \uc124\uc815\uc740 \uadf8\ub300\ub85c \ub450\uc790.   "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc0c8\ub85c\uc6b4 \uacc4\uc815\uc740 host\ub97c \ubc14\uafb8\uc5b4\uc11c .ssh/config\uc5d0\uc11c \ud2b9\uc815 ssh\ud0a4\ub97c \ud0dc\uc6b0\ub3c4\ub85d \ubc14\uafb8\uc790.    ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'\n// 0. \uae30\uc874\uc758 \uacc4\uc815\uc740 github\uc5d0 \uc131\uacf5\uc801\uc73c\ub85c \ub4f1\ub85d\ub418\uc5c8\ub2e4\uace0 \uac00\uc815\ud55c\ub2e4.  \n// \uc694\uc57d\ud558\uba74 \uc544\ub798 3\ub2e8\uacc4 \uacfc\uc815\uc774\ub2e4.   \nssh-keygen -t rsa -b 2048\nssh-add ~/.ssh/id_rsa\n# + github SSH\ud0a4 \ub4f1\ub85d  \n\n\n// 1. username2 \ud0a4 \uc0dd\uc131 \nssh-keygen -t rsa -C "username2@naver.com" -f "id_rsa_username2"\n\n// 2. ssh-agent\uc5d0 \ub4f1\ub85d \n>ssh-add id_rsa_username2\n    \n//\ud655\uc778\n//\uae30\uc874\uc758 \ud0a4\uc640, \uc0c8\ub85c\uc6b4\ud0a4 2\uac1c\uac00 \ubcf4\uc778\ub2e4.  \n>ssh-add -l\n\n        3072 SHA256:Q6+jD5XCUndXMqG5x8Soqk3WWX5GqNbX3i9j86UDjcc username1@gmail.com (RSA)\n        3072 SHA256:22dNKg4vehTS60TsgTN4sLgq9mw1P44rVStY9fFg814 username2@naver.com (RSA)\n\n//3. ~/.ssh/config \uc218\uc815 (\uc5c6\uc73c\uba74 \ub9cc\ub4e4\uae30.)\n// host\uc758 \uc815\ubcf4\ub85c ssh\ud0a4\ub97c \ubd84\uae30\ud574\uc8fc\ub294 \uc124\uc815\uc774\ub2e4.  \n# Personal account-username2\nHost github.com-username2\nHostName github.com\nUser git.\nIdentityFile ~/.ssh/id_rsa_username2\n\n\n//\ud655\uc778 \nssh -T github.com-username2\nHi username2! You\'ve successfully authenticated, but GitHub does not provide shell access.\n\n\n//4. github \uc5d0 ssh\ud0a4 \ub4f1\ub85d\ud558\uae30\n\n//5.\n//\uae43 \ub808\ud3ec \ubc1b\uc544\uc624\uae30 \n// \uae43 \ub808\ud3ec\uc5d0\uc11c ssh \ub85c \ud074\ub860 \uc8fc\uc18c\ub97c \ubcf5\uc0ac\ud558\uba74 \uc544\ub798\uc640 \uac19\ub2e4.\ngit clone git@github.com:username2/multi-user.git\n\n// \uc544\ub798\ucc98\ub7fc \ud638\uc2a4\ud2b8\ub97c \ubc14\uafd4\uc11c, \ubc1b\uc544\uc624\uc790. ( \uc11c\ub85c \ub2e4\ub978 \ube44\ubc00\ud0a4\ub97c \ubd84\uae30\ud558\ub3c4\ub85d )\ngit clone git@github.com-username2:username2/multi-user.git\n\n// \ub610\ub294 \uc544\ub798\ucc98\ub7fc remote\ub97c \ucd94\uac00\ud574\ub3c4 \uc88b\ub2e4.  \ngit remote add upstream git@github.com-username2:username2/multi-user.git\n\n\n// 6. \uac01 \ud504\ub85c\uc81d\ud2b8 \ub85c\uceec\uc5d0, gitconfig \ucd94\uac00\ud558\uae30 ( \ucee4\ubc0b\ud130 \uc815\ubcf4 \uc785\ub825 )\ngit config --local user.name "username2"\ngit config --local user.email "username2@naver.com"\n// \ud655\uc778\ngit config --local --list\n    \n')),(0,o.kt)("p",null,"ref)\n",(0,o.kt)("a",{parentName:"p",href:"https://usingu.co.kr/frontend/git/%ED%95%9C-%EC%BB%B4%ED%93%A8%ED%84%B0%EC%97%90%EC%84%9C-github-%EA%B3%84%EC%A0%95-%EC%97%AC%EB%9F%AC%EA%B0%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/"},"https://usingu.co.kr/frontend/git/%ED%95%9C-%EC%BB%B4%ED%93%A8%ED%84%B0%EC%97%90%EC%84%9C-github-%EA%B3%84%EC%A0%95-%EC%97%AC%EB%9F%AC%EA%B0%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/")))}g.isMDXComponent=!0}}]);