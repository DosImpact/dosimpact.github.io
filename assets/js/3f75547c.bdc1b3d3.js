"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[7277],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>_});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,_=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return t?r.createElement(_,i(i({ref:n},p),{},{components:t})):r.createElement(_,i({ref:n},p))}));function _(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:4},i="\ud648\uc11c\ubc84 (MacMini) \uc6b4\uc6a9 \ubc29\ubc95 4",l={unversionedId:"g-devops/home-server/dvop-c004",id:"g-devops/home-server/dvop-c004",title:"\ud648\uc11c\ubc84 (MacMini) \uc6b4\uc6a9 \ubc29\ubc95 4",description:"---",source:"@site/docs/g-devops/5-home-server/dvop-c004.md",sourceDirName:"g-devops/5-home-server",slug:"/g-devops/home-server/dvop-c004",permalink:"/docs/g-devops/home-server/dvop-c004",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-devops/5-home-server/dvop-c004.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"devOps",previous:{title:"\ud648\uc11c\ubc84 (MacMini) \uc6b4\uc6a9 \ubc29\ubc95 3",permalink:"/docs/g-devops/home-server/dvop-c003"},next:{title:"\ub9e5\ubd81 \ucd08\uae30 \uc14b\uc5c5",permalink:"/docs/g-devops/home-server/dvop-c005"}},s={},c=[{value:"Nginx\uc73c\ub85c CodeServer\uc5d0 https \ubd99\uc774\uae30",id:"nginx\uc73c\ub85c-codeserver\uc5d0-https-\ubd99\uc774\uae30",level:2},{value:"1. nginx \uc124\uce58",id:"1-nginx-\uc124\uce58",level:2},{value:"80 \ud3ec\ud2b8\ub85c \ubcc0\uacbd\ud574\uc11c nginx\uc811\uadfc\uc774 \ub418\ub294\uc9c0 \ud655\uc778",id:"80-\ud3ec\ud2b8\ub85c-\ubcc0\uacbd\ud574\uc11c-nginx\uc811\uadfc\uc774-\ub418\ub294\uc9c0-\ud655\uc778",level:3},{value:"2. \ub3c4\uba54\uc778 \uc5f0\uacb0",id:"2-\ub3c4\uba54\uc778-\uc5f0\uacb0",level:2},{value:"DNS Record",id:"dns-record",level:3},{value:"A Type \uc124\uc815 \ud6c4 \ub3c4\uba54\uc778 \uc811\uc18d \ud655\uc778",id:"a-type-\uc124\uc815-\ud6c4-\ub3c4\uba54\uc778-\uc811\uc18d-\ud655\uc778",level:3},{value:"3. https \uc801\uc6a9 - \uc778\uc99d\uc11c \ubc1c\uae09",id:"3-https-\uc801\uc6a9---\uc778\uc99d\uc11c-\ubc1c\uae09",level:2},{value:"\uc790\ub3d9 \ubc1c\uae09 \ubc29\uc2dd",id:"\uc790\ub3d9-\ubc1c\uae09-\ubc29\uc2dd",level:3},{value:"\ucc38\uace0) manual \ubc29\uc2dd",id:"\ucc38\uace0-manual-\ubc29\uc2dd",level:3},{value:"4. \uc778\uc99d\uc11c \uac31\uc2e0",id:"4-\uc778\uc99d\uc11c-\uac31\uc2e0",level:2},{value:"cron job",id:"cron-job",level:3},{value:"\ucd5c\uc885 nginx.conf",id:"\ucd5c\uc885-nginxconf",level:2},{value:"\uc608) \ucd5c\uc885 nginx.conf (code-server)",id:"\uc608-\ucd5c\uc885-nginxconf-code-server",level:3},{value:"\uc608) \ucd5c\uc885 nginx.conf (ghost cms)",id:"\uc608-\ucd5c\uc885-nginxconf-ghost-cms",level:3},{value:"\uc694\uc57d",id:"\uc694\uc57d",level:2},{value:"NOTE) brew / nginx / certbot \uba85\ub839\uc5b4 \uc815\ub9ac",id:"note-brew--nginx--certbot-\uba85\ub839\uc5b4-\uc815\ub9ac",level:3},{value:"ref",id:"ref",level:2}],p={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ud648\uc11c\ubc84-macmini-\uc6b4\uc6a9-\ubc29\ubc95-4"},"\ud648\uc11c\ubc84 (MacMini) \uc6b4\uc6a9 \ubc29\ubc95 4"),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"keywords",content:"Mac Server, \ub9e5\ubbf8\ub2c8 \uc11c\ubc84, \uc6b4\uc6a9"})),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%ED%99%88%EC%84%9C%EB%B2%84-macmini-%EC%9A%B4%EC%9A%A9-%EB%B0%A9%EB%B2%95-4"},"\ud648\uc11c\ubc84 (MacMini) \uc6b4\uc6a9 \ubc29\ubc95 4"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#nginx%EC%9C%BC%EB%A1%9C-codeserver%EC%97%90-https-%EB%B6%99%EC%9D%B4%EA%B8%B0"},"Nginx\uc73c\ub85c CodeServer\uc5d0 https \ubd99\uc774\uae30")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1-nginx-%EC%84%A4%EC%B9%98"},"1. nginx \uc124\uce58"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#80-%ED%8F%AC%ED%8A%B8%EB%A1%9C-%EB%B3%80%EA%B2%BD%ED%95%B4%EC%84%9C-nginx%EC%A0%91%EA%B7%BC%EC%9D%B4-%EB%90%98%EB%8A%94%EC%A7%80-%ED%99%95%EC%9D%B8"},"80 \ud3ec\ud2b8\ub85c \ubcc0\uacbd\ud574\uc11c nginx\uc811\uadfc\uc774 \ub418\ub294\uc9c0 \ud655\uc778")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%97%B0%EA%B2%B0"},"2. \ub3c4\uba54\uc778 \uc5f0\uacb0"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#dns-record"},"DNS Record")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#a-type-%EC%84%A4%EC%A0%95-%ED%9B%84-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%A0%91%EC%86%8D-%ED%99%95%EC%9D%B8"},"A Type \uc124\uc815 \ud6c4 \ub3c4\uba54\uc778 \uc811\uc18d \ud655\uc778")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3-https-%EC%A0%81%EC%9A%A9---%EC%9D%B8%EC%A6%9D%EC%84%9C-%EB%B0%9C%EA%B8%89"},"3. https \uc801\uc6a9 - \uc778\uc99d\uc11c \ubc1c\uae09"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%EC%9E%90%EB%8F%99-%EB%B0%9C%EA%B8%89-%EB%B0%A9%EC%8B%9D"},"\uc790\ub3d9 \ubc1c\uae09 \ubc29\uc2dd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%EC%B0%B8%EA%B3%A0-manual-%EB%B0%A9%EC%8B%9D"},"\ucc38\uace0) manual \ubc29\uc2dd")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#4-%EC%9D%B8%EC%A6%9D%EC%84%9C-%EA%B0%B1%EC%8B%A0"},"4. \uc778\uc99d\uc11c \uac31\uc2e0"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cron-job"},"cron job")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%EC%B5%9C%EC%A2%85-nginxconf"},"\ucd5c\uc885 nginx.conf"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%EC%98%88-%EC%B5%9C%EC%A2%85-nginxconf-code-server"},"\uc608) \ucd5c\uc885 nginx.conf (code-server)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%EC%98%88-%EC%B5%9C%EC%A2%85-nginxconf-ghost-cms"},"\uc608) \ucd5c\uc885 nginx.conf (ghost cms)")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%EC%9A%94%EC%95%BD"},"\uc694\uc57d"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#note-brew--nginx--certbot-%EB%AA%85%EB%A0%B9%EC%96%B4-%EC%A0%95%EB%A6%AC"},"NOTE) brew / nginx / certbot \uba85\ub839\uc5b4 \uc815\ub9ac")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#ref"},"ref"))))),(0,o.kt)("h2",{id:"nginx\uc73c\ub85c-codeserver\uc5d0-https-\ubd99\uc774\uae30"},"Nginx\uc73c\ub85c CodeServer\uc5d0 https \ubd99\uc774\uae30"),(0,o.kt)("p",null,"\ud55c\ubc88 \ud574\ubcf4\uba74 \uc5b4\ub835\uc9c0 \uc54a\ub2e4. \ucc98\uc74c\uc5d0\ub294 \ubb34\uc9c0 \uc5b4\ub824\uc6e0\ub2e4...  "),(0,o.kt)("h2",{id:"1-nginx-\uc124\uce58"},"1. nginx \uc124\uce58"),(0,o.kt)("p",null,"\uc544\ub798 \uba85\ub839\uc5b4\ub97c \ucc38\uace0\ud574\uc11c nginx\ub97c MacOS\uc5d0 \uc124\uce58\ud55c\ub2e4.   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#1 \ud328\ud0a4\uc9c0 \uc124\uce58\nbrew install nginx \n\n#2 \uc11c\ube44\uc2a4 \uc2dc\uc791\nbrew services start nginx\n\n#3 \uc11c\ube44\uc2a4 \ubaa9\ub85d\nbrew services\n\n# \uc11c\ube44\uc2a4 \uc7ac\uc2dc\uc791\nbrew services restart nginx\n\n#4 8080\ud3ec\ud2b8 \uc811\uadfc\uc2dc nginx \ub3c4\ub2ec \ud655\uc778\ud558\uc790.\n> http://123.123.123.123:8080/\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"80-\ud3ec\ud2b8\ub85c-\ubcc0\uacbd\ud574\uc11c-nginx\uc811\uadfc\uc774-\ub418\ub294\uc9c0-\ud655\uc778"},"80 \ud3ec\ud2b8\ub85c \ubcc0\uacbd\ud574\uc11c nginx\uc811\uadfc\uc774 \ub418\ub294\uc9c0 \ud655\uc778"),(0,o.kt)("p",null,"\uc124\uc815\ud30c\uc77c\uc5d0\uc11c 80 \ud3ec\ud2b8\ub85c \ubcc0\uacbd\ud574\uc11c nginx\uc811\uadfc\uc774 \ub418\ub294\uc9c0 \ud655\uc778"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# 1. nginx.conf \ud30c\uc77c \uacbd\ub85c \ud655\uc778\nbrew info nginx\n\n# 1.1 \uc544\ub798\ucc98\ub7fc \uc124\uc815\ud30c\uc77c \uacbd\ub85c\ub97c \ud655\uc778 \n...\nThe default port has been set in /opt/homebrew/etc/nginx/nginx.conf to 8080 so that\nnginx can run without sudo.\n...\n\n# 2. \uc124\uc815 \ud30c\uc77c \ubcc0\uacbd\n\uc124\uc815 \ud30c\uc77c \uacbd\ub85c : /opt/homebrew/etc/nginx/nginx.conf\n  - \ud3ec\ud2b8 8080 > 80 \ubcc0\uacbd\n\n#3. \uc11c\ube44\uc2a4 \uc7ac\uc2dc\uc791\nbrew services restart nginx\n\n#3 nginx \ub3c4\ub2ec \ud655\uc778 (port 80)\n> http://123.123.123.123\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"2-\ub3c4\uba54\uc778-\uc5f0\uacb0"},"2. \ub3c4\uba54\uc778 \uc5f0\uacb0"),(0,o.kt)("h3",{id:"dns-record"},"DNS Record"),(0,o.kt)("p",null,"\uac00\ube44\uc544\uc5d0\uc11c \uad6c\ub9e4\ud55c \ub3c4\uba54\uc778\uc744 \uc5f0\uacb0\ud558\uae30 \uc704\ud574 DNS \ub808\ucf54\ub4dc\ub97c \uc218\uc815\ud574\uc57c\ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uac04\ub2e8\ud558\uac8c \ub808\ucf54\ub4dc \ud0c0\uc785\uc744 \uc124\uba85\ud558\uba74  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A \ud0c0\uc785\uc744 \uc8fc\ub85c \uc0ac\uc6a9\ud55c\ub2e4. \ub3c4\uba54\uc778\uacfc IP\ub97c \uc5f0\uacb0\ud55c\ub2e4.  ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\uc11c\ube0c \ub3c4\uba54\uc778\uc774\ub77c\ub294 \uac1c\ub150\uc774 \uc788\ub2e4.   "),(0,o.kt)("li",{parentName:"ul"},"\ub0b4\uac00 \uad6c\ub9e4\ud55c \ub3c4\uba54\uc778\uc774 my-coding.site \ub77c\uba74"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.my-coding.site"},"www.my-coding.site"),", blog.my-coding.site \ub4f1 \ubb34\ud55c\uc73c\ub85c \uc11c\ube0c\ub3c4\uba54\uc778\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.  "),(0,o.kt)("li",{parentName:"ul"},"\uc11c\ube0c\ub3c4\uba54\uc778\uc774 \uc5c6\ub294 \uacbd\uc6b0\ub294 @ \ub77c\uace0 \uc4f0\uba74 \ub41c\ub2e4. "))),(0,o.kt)("li",{parentName:"ul"},"CNAME \uc740 \ub3c4\uba54\uc778\uacfc \ub3c4\uba54\uc778\uc744 \uc5f0\uacb0\ud55c\ub2e4.  ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ud2f0\uc2a4\ud1a0\ub9ac \ube14\ub85c\uadf8\ub97c \uc6b4\uc601\ud558\ub294\ub370, \uac1c\uc778 \ub3c4\uba54\uc778\uc744 \uac00\uc9c0\uace0 \uc2f6\uc744\ub54c \uc0ac\uc6a9\ud55c\ub2e4.  ")))),(0,o.kt)("h3",{id:"a-type-\uc124\uc815-\ud6c4-\ub3c4\uba54\uc778-\uc811\uc18d-\ud655\uc778"},"A Type \uc124\uc815 \ud6c4 \ub3c4\uba54\uc778 \uc811\uc18d \ud655\uc778"),(0,o.kt)("p",null,"my-coding.site \ub3c4\uba54\uc778\uc744 \uad6c\ub9e4 \ud6c4 ",(0,o.kt)("a",{parentName:"p",href:"http://www.my-coding.site"},"www.my-coding.site")," \ub3c4\uba54\uc778\uacfc \ub0b4 \ub9e5\ubbf8\ub2c8 \uc11c\ubc84\uc640 \uc5f0\uacb0\ud574\uc57c \ud55c\ub2e4.    "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#1 A \ud0c0\uc785\uc73c\ub85c \ub808\ucf54\ub4dc\ub97c \ucd94\uac00\ud55c\ub2e4. \n- eg) www.my-coding.site -> 123.123.123.123 \uc124\uc815\uc744 \uc6d0\ud55c\ub2e4\uba74\n- host : www ( host\ub294 www \uc774\uba70 \uc11c\ube0c\ub3c4\uba54\uc778\uc744 \ub73b\ud55c\ub2e4. )\n\n# \ucc38\uace0)\n- eg) my-coding.site -> 123.123.123.123 \uc124\uc815\uc744 \uc6d0\ud55c\ub2e4\uba74\n- host:@\n- Note) host\uc5d0 @\uc740 \uc11c\ube0c\ub3c4\uba54\uc778\uc774 \uc5c6\ub294 \uacbd\uc6b0\uc774\ub2e4.\n- \uc989, http://my-coding.site \ub85c \uc811\uc18d\ud558\uba74 \uc9c0\uc815\ub41c IP\ub85c \uc774\ub3d9\ud55c\ub2e4.\n\n#2 nginx \ub3c4\ub2ec \ud655\uc778\n>http://www.my-coding.site \n\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"3-https-\uc801\uc6a9---\uc778\uc99d\uc11c-\ubc1c\uae09"},"3. https \uc801\uc6a9 - \uc778\uc99d\uc11c \ubc1c\uae09"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ukprog.tistory.com/125"},"https://ukprog.tistory.com/125")),(0,o.kt)("p",null,"certbot\uc73c\ub85c \uc778\uc99d\uc11c\ub97c \ubc1c\uae09\ud558\ub294 \ubc29\ubc95\uc740 2\uac00\uc9c0\uac00 \uc788\ub2e4.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"manual \ubc29\uc2dd  "),(0,o.kt)("li",{parentName:"ul"},"nginx, apache \ub4f1 \uc11c\ubc84\ub97c \uba85\uc2dc\ud558\ub294 \uc790\ub3d9 \ubc1c\uae09 \ubc29\uc2dd  "),(0,o.kt)("li",{parentName:"ul"},"\ud6c4\uc790\uc758 \ubc29\ubc95\uc744 \ucd94\ucc9c\ud55c\ub2e4.  ")),(0,o.kt)("h3",{id:"\uc790\ub3d9-\ubc1c\uae09-\ubc29\uc2dd"},"\uc790\ub3d9 \ubc1c\uae09 \ubc29\uc2dd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# 1. nginx\uc5d0 https \uc778\uc99d\uc11c\ub97c \ubc1b\ub294 \uba85\ub839\uc5b4  \n\n# \ub3c4\uba54\uc778\uc774 \uc5ec\ub7ec\uac1c\uc778/\ud558\ub098\uc778 \uacbd\uc6b0\nsudo certbot --nginx --nginx-server-root /opt/homebrew/etc/nginx -d domain.com,www.domain.com\nsudo certbot --nginx --nginx-server-root /opt/homebrew/etc/nginx -d domain.com\n# --nginx-server-root \uacbd\ub85c \uc9c0\uc815, brew\ub85c nginx\uc744 \uc124\uce58\ud574\uc11c \uae30\ubcf8 \uacbd\ub85c\ub791 \ub2e4\ub974\ub2e4.!\n# --nginx : cerbot\uc774 \ucc98\ub9ac\ud560 \ub300\uc0c1\uc758 \uc11c\ubc84, apache\ub4f1\uc774 \uc788\ub2e4.  \n# \uc704 \uba85\ub839\uc5b4\uac00 \uc218\ud589\ub418\uba74 nginx.conf\ud30c\uc77c\uc774 \uc800\uc808\ub85c \ubcc0\uacbd\ub41c\ub2e4.  \n\n# 2. \uc544\ub798 \ud30c\uc77c\uc744 nginx\uac00 \uc77d\ub3c4\ub85d \uad8c\ud55c \ubd80\uc5ec\ud558\uae30\n# sudo chmod -R 755 /etc/letsencrypt\n\n# 3. \uc7ac\uc2dc\uc791\n# nginx -t\n# brew services restart nginx\n\n")),(0,o.kt)("h3",{id:"\ucc38\uace0-manual-\ubc29\uc2dd"},"\ucc38\uace0) manual \ubc29\uc2dd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# 1. \uc778\uc99d\uc11c \ubc1c\uae09 \uc2dc\uc791\nsudo certbot certonly --manual \n\n(\uac00\ub2a5\ud558\uba74 \uc544\ub798 \uba85\ub839\uc5b4\ub85c nginx \uc124\uc815\uc744 \uc790\ub3d9\uc73c\ub85c \uc124\uc815\ud558\uac8c\ub054 \ud558\uc790.)\nsudo certbot --nginx -d yourdomain.com\n\n\n# 2. \uc5f0\uacb0\ud560 \ub3c4\uba54\uc778 \uc785\ub825\nwww.my-coding.site\n\n# \ub3c4\uba54\uc778\uc5d0 \uc544\ub798 \ud30c\uc77c \uc11c\ube59\ud558\ub3c4\ub85d nginx \uc124\uc815 \ubcc0\uacbd\nCreate a file containing just this data:\nEmu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN9.HpJsIlJVhSaVM-6mjKz5_4ZU5tydqNW2B5pjcvuHjS0\nAnd make it available on your web server at this URL:\nhttp://www.my-coding.site/.well-known/acme-challenge/Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN9\n\n\n# nginx.conf \ucd94\uac00\n---\n    server {\n        listen 80 ;\n        server_name www.my-coding.site;\n\n        location /.well-known/acme-challenge {\n            alias /opt/homebrew/etc/nginx/.well-known/acme-challenge; # \uc2e4\uc81c \ud30c\uc77c\uc774 \uc704\uce58\ud55c \uacbd\ub85c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.\n            try_files $uri $uri/ /opt/homebrew/etc/nginx/.well-known/acme-challenge/Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN9; # \ud2b9\uc815 \ud30c\uc77c\uba85\uc744 \uc5ec\uae30\uc5d0 \uc9c0\uc815\ud569\ub2c8\ub2e4.\n        }\n\n        location / {  # HTTP to HTTPS \ub9ac\ub514\ub809\uc158\n            return 301 https://$host$request_uri;\n        }\n    }\n...\n\n--- \n\nmkdir -p .well-known/acme-challenge/\nvi Emu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN8\nEmu_LEu_HbaAeKH6OrOER88xvjurfFKRJM7-MoYhjN8.HpJsIlJVhSaVM-6mjKz5_4ZU5tydqNW2B5pjcvuHjS0  \uc785\ub825 \ud6c4 \uc800\uc7a5\n\n#3. nginx \uc7ac\uc2e4\ud589\nnginx -t # \ubb38\ubc95 \uac80\uc0ac\nbrew services restart nginx # \uc7ac\uc2dc\uc791 \n\n#4. cerbot \ud655\uc778 \ud6c4 \ubc1c\uae09 \uc131\uacf5\nSuccessfully received certificate.\nCertificate is saved at: /etc/letsencrypt/live/www.my-coding.site /fullchain.pem\nKey is saved at:         /etc/letsencrypt/live/www.my-coding.site /privkey.pem\nThis certificate expires on 2023-11-08.\nThese files will be updated when the certificate renews.\n\n\n#5. \uc778\uc99d\uc11c \uc77d\uae30 \uad8c\ud55c \ubb38\uc81c \ud574\uacb0\nsudo chmod -R 755 /etc/letsencrypt\n\n#6. https \ucc98\ub9ac\ud558\ub294 nginx.conf \ucd94\uac00\n\n---\n    server {\n        listen 443 ssl; \n        server_name www.my-coding.site; \n        ssl_certificate /etc/letsencrypt/live/www.my-coding.site/fullchain.pem; \n        ssl_certificate_key /etc/letsencrypt/live/www.my-coding.site/privkey.pem; \n\n        # SSL \uc124\uc815 (\ucd5c\uc2e0 \ubcf4\uc548 \uad8c\uc7a5)\n        ssl_protocols TLSv1.2 TLSv1.3;\n        ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384';\n        ssl_prefer_server_ciphers off;\n\n        # SSL \uc138\uc158 \uce90\uc2f1 \uc124\uc815\n        ssl_session_cache shared:SSL:10m;\n        ssl_session_timeout 1h;\n\n        location / {\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Host $host;\n            proxy_set_header X-Forwarded-Proto $scheme;\n            proxy_pass http://127.0.0.1:3030/;\n        }   \n    }\n...\n\n")),(0,o.kt)("h2",{id:"4-\uc778\uc99d\uc11c-\uac31\uc2e0"},"4. \uc778\uc99d\uc11c \uac31\uc2e0"),(0,o.kt)("p",null,"sudo certbot certonly --manual \uba85\ub839\uc5b4\ub97c \uc774\uc6a9\ud588\ub354\ub77c\uba74 \uc790\ub3d9\uc73c\ub85c \uac31\uc2e0\uc774 \ubd88\uac00\ub2a5 \ud558\ub2e4.    "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[certbot]\n# \uc778\uc99d\uc11c \uc815\ubcf4 , \uc720\ud6a8\uae30\uac04, \uacbd\ub85c \ud655\uc778 \nsudo certbot certificates\n\n# \uc778\uc99d\uc11c \ubc1c\uae09\nsudo certbot --nginx -d yourdomain.com\nsudo certbot certonly --manual \n\n# \uc778\uc99d\uc11c \uac31\uc2e0 dry-run\nsudo certbot renew --dry-run\n\n# \uc778\uc99d\uc11c \uac31\uc2e0 (--apache, --nginx \ub4f1\uc73c\ub85c \uc790\ub3d9 \ubc1c\uae09\ud55c \uacbd\uc6b0)\nsudo certbot renew\n\n# \uc778\uc99d\uc11c \uac31\uc2e0 (--manual \ub85c \ubc1c\uae09\ud55c \uacbd\uc6b0)\nsudo certbot certonly --manual --dry-run -d www.your-domain.com\n- /opt/homebrew/etc/nginx\n\n")),(0,o.kt)("h3",{id:"cron-job"},"cron job"),(0,o.kt)("p",null,'echo "0 0,12 * * ',(0,o.kt)("em",{parentName:"p"}," root python -c 'import random; import time; time.sleep(random.random() ")," 3600)' && certbot renew -q\" | sudo tee -a /etc/crontab > /dev/null"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\ucd5c\uc885-nginxconf"},"\ucd5c\uc885 nginx.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#user  nobody;\nworker_processes  1;\n\n#error_log  logs/error.log;\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n#pid        logs/nginx.pid;\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    #log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '\n    #                  '$status $body_bytes_sent \"$http_referer\" '\n    #                  '\"$http_user_agent\" \"$http_x_forwarded_for\"';\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n    #gzip  on;\n\n    server {\n        listen 443 ssl; # managed by Certbot\n        server_name www.you-domain.site; # managed by Certbot\n        ssl_certificate /opt/homebrew/etc/nginx/fullchain.pem; # managed by Certbot\n        ssl_certificate_key /opt/homebrew/etc/nginx/privkey.pem; # managed by Certbot\n        # SSL \uc124\uc815 \ucd94\uac00 (optional, \ucd94\ucc9c)\n        ssl_protocols TLSv1.2 TLSv1.3;\n        ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384';\n        ssl_prefer_server_ciphers off;\n        ssl_session_timeout 1d;\n        ssl_session_cache shared:SSL:50m;\n\n        location / {\n            proxy_pass http://127.0.0.1:2229/;           \n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection upgrade;\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Proto $scheme;\n        }   \n    }\n\n    server {\n        listen 80 ;\n        server_name www.you-domain.site;\n        location / {  # HTTP to HTTPS \ub9ac\ub514\ub809\uc158\n            return 301 https://$host$request_uri;\n        }\n    }\n\n    include servers/*;\n}\n")),(0,o.kt)("h3",{id:"\uc608-\ucd5c\uc885-nginxconf-code-server"},"\uc608) \ucd5c\uc885 nginx.conf (code-server)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#user  nobody;\nworker_processes  1;\n\n#error_log  logs/error.log;\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n#pid        logs/nginx.pid;\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    #log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '\n    #                  '$status $body_bytes_sent \"$http_referer\" '\n    #                  '\"$http_user_agent\" \"$http_x_forwarded_for\"';\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n    #gzip  on;\n\n    # vscode\n    server {\n        listen 443 ssl; \n        server_name code.coding-play.site; \n        ssl_certificate /etc/letsencrypt/live/code.coding-play.site/fullchain.pem; \n        ssl_certificate_key /etc/letsencrypt/live/code.coding-play.site/privkey.pem; \n\n        # SSL \uc124\uc815 \ucd94\uac00 (optional, \ucd94\ucc9c)\n        ssl_protocols TLSv1.2 TLSv1.3;\n        ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384';\n        # ssl_prefer_server_ciphers off;\n        # ssl_session_timeout 1d;\n        # ssl_session_cache shared:SSL:50m;\n\n\n        location / {\n            proxy_pass http://127.0.0.1:2229;           \n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection upgrade;\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Proto $scheme;\n        }   \n    }\n\n    server {\n        listen 80 ;\n        server_name code.coding-play.site;\n\n        location /.well-known/acme-challenge {\n            alias /opt/homebrew/etc/nginx/.well-known/acme-challenge; # \uc2e4\uc81c \ud30c\uc77c\uc774 \uc704\uce58\ud55c \uacbd\ub85c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.\n            try_files $uri $uri/ /opt/homebrew/etc/nginx/.well-known/acme-challenge/XGNhDLRm4LMqNgFd3QC3RdI4mGM1ZedPYZiSt0nTCUY; # \ud2b9\uc815 \ud30c\uc77c\uba85\uc744 \uc5ec\uae30\uc5d0 \uc9c0\uc815\ud569\ub2c8\ub2e4.\n        }\n\n        location / {  # HTTP to HTTPS \ub9ac\ub514\ub809\uc158\n            return 301 https://$host$request_uri;\n        }\n    }\n\n    include servers/*;\n}\n\n# nginx -t\n# brew services restart nginx\n# sudo chmod -R 755 /etc/letsencrypt\n")),(0,o.kt)("h3",{id:"\uc608-\ucd5c\uc885-nginxconf-ghost-cms"},"\uc608) \ucd5c\uc885 nginx.conf (ghost cms)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#user  nobody;\nworker_processes  1;\n\n#error_log  logs/error.log;\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n#pid        logs/nginx.pid;\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    #log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n    #                  \'$status $body_bytes_sent "$http_referer" \'\n    #                  \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n    #gzip  on;\n\n    # ghost cms - coding-play\n    server {\n        listen 80 ;\n        server_name wp.coding-play.site;\n\n        location /.well-known/acme-challenge {\n            alias /opt/homebrew/etc/nginx/.well-known/acme-challenge; # \uc2e4\uc81c \ud30c\uc77c\uc774 \uc704\uce58\ud55c \uacbd\ub85c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.\n            try_files $uri $uri/ /opt/homebrew/etc/nginx/.well-known/acme-challenge/GA8XfAQnDC7jp1kjtxMmzhUJ5RVeYWG0MbwfdnH1JXQ; # \ud2b9\uc815 \ud30c\uc77c\uba85\uc744 \uc5ec\uae30\uc5d0 \uc9c0\uc815\ud569\ub2c8\ub2e4.\n        }\n\n        location / {  # HTTP to HTTPS \ub9ac\ub514\ub809\uc158\n            return 301 https://$host$request_uri;\n            # proxy_pass http://127.0.0.1:8080;\n        }\n        # location ~ /.well-known {\n        #     allow all;\n        # }\n    }\n\n    server {\n        listen 443 ssl; \n        server_name wp.coding-play.site; \n        ssl_certificate /etc/letsencrypt/live/wp.coding-play.site/fullchain.pem; \n        ssl_certificate_key /etc/letsencrypt/live/wp.coding-play.site/privkey.pem; \n\n        # SSL \uc124\uc815 (\ucd5c\uc2e0 \ubcf4\uc548 \uad8c\uc7a5)\n        ssl_protocols TLSv1.2 TLSv1.3;\n        ssl_ciphers \'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384\';\n        ssl_prefer_server_ciphers off;\n\n        # SSL \uc138\uc158 \uce90\uc2f1 \uc124\uc815\n        ssl_session_cache shared:SSL:10m;\n        ssl_session_timeout 1h;\n\n        location / {\n            # proxy_set_header Host "wp.coding-play.site";\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Host $host;\n            proxy_set_header X-Forwarded-Proto $scheme;\n            # proxy_set_header X-Real-IP $remote_addr;\n            # proxy_set_header Host $http_host;\n            # proxy_set_header X-NginX-Proxy true;\n            # proxy_redirect off;\n            proxy_pass http://127.0.0.1:3030/;\n\n\n            # proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            # proxy_set_header X-Forwarded-Proto $scheme;\n            # proxy_set_header X-Real-IP $remote_addr;\n            # proxy_set_header Host $http_host;\n        }   \n    }\n\n    include servers/*;\n}\n\n# nginx -t\n# brew services restart nginx\n# sudo chmod -R 755 /etc/letsencrypt\n')),(0,o.kt)("h2",{id:"\uc694\uc57d"},"\uc694\uc57d"),(0,o.kt)("p",null,"1.\ub3c4\uba54\uc778 \uc124\uc815"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778\uc744 \uad6c\ub9e4\ud55c\ub2e4. eg) example.com"),(0,o.kt)("li",{parentName:"ul"},"DNS \ub798\ucf54\ub4dc \uc124\uc815\uc73c\ub85c \ub0b4 \uc544\uc774\ud53c\uc640 \uc5f0\uacb0\ud55c\ub2e4. eg) ",(0,o.kt)("a",{parentName:"li",href:"http://www.example.com"},"www.example.com")," -> 123.123.123.123")),(0,o.kt)("p",null,"2.nginx 80 port \uc124\uc815"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ub9e5\ubbf8\ub2c8\uc758 80\ud3ec\ud2b8 \uc811\uc18d = nginx\ub85c \uc14b\uc5c5"),(0,o.kt)("li",{parentName:"ul"},"\ub9c8\uce58 GW \uac19\uc740 \uc5ed\ud559\uc744 nginx\uac00 \ud574\uc8fc\ub294 \uac83\uc774\ub2e4.  "),(0,o.kt)("li",{parentName:"ul"},"\uadf8\ub9ac\uace0 \uac01 \ub3c4\uba54\uc778 \ubcc4\ub85c \ubd84\uae30\ucc98\ub9ac \ud558\uc5ec, \ub4b7\ub2e8\uc758 \uc11c\ube44\uc2a4 \ud3ec\ud2b8\ub85c \uc5f0\uacb0\ud55c\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    server {\n        listen 80 ; # nginx\ub294 80\ud3ec\ud2b8 open  \n        server_name www.example.com; # \ud2b9\uc815 \uc11c\ube0c \ub3c4\uba54\uc778\uc5d0 \ud574\ub2f9\ud558\ub294 \uacbd\uc6b0\ub9cc \ucc98\ub9ac\ud55c\ub2e4.\n\n        location / {  # HTTP to HTTPS \ub9ac\ub514\ub809\uc158\n            return 301 https://$host$request_uri;\n        }\n    }\n")),(0,o.kt)("p",null,"3.cerbot \uc2e4\ud589"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sudo certbot certonly --manual"),"\uc73c\ub85c \uc778\uc99d\uc11c\ubc1c\uae09 \uc9c4\ud589"),(0,o.kt)("li",{parentName:"ul"},"cerbot\uc5d0\uc11c \uc784\uc758\uc758 \uacbd\ub85c\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0bc\ud14c\ub2c8, \ud2b9\uc815 \ud30c\uc77c\uc744 \uc77d\uc744 \uc218 \uc788\ub3c4\ub85d \uc14b\ud305\ud558\ub77c \ud55c\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\uadf8 \uc124\uc815\uc744 ",(0,o.kt)("inlineCode",{parentName:"li"},"location /")," \uc55e\ub2e8\uc5d0 \ud55c\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    server {\n        listen 80 ; # nginx\ub294 80\ud3ec\ud2b8 opn  \n        server_name www.example.com; # \uadf8 \uc911 \ud2b9\uc815 \ub3c4\uba54\uc778\uc5d0 \ud574\ub2f9\ud558\ub294 \uacbd\uc6b0\ub9cc \ucc98\ub9ac\ud55c\ub2e4. \n\n        location /.well-known/acme-challenge {\n            alias /opt/homebrew/etc/nginx/.well-known/acme-challenge; # \uc2e4\uc81c \ud30c\uc77c\uc774 \uc704\uce58\ud55c \uacbd\ub85c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.\n            try_files $uri $uri/ /opt/homebrew/etc/nginx/.well-known/acme-challenge/EaICkPAIxkrb_MYWJPqLihzZCc228BkrgxXPvi9qUTA; # \ud2b9\uc815 \ud30c\uc77c\uba85\uc744 \uc5ec\uae30\uc5d0 \uc9c0\uc815\ud569\ub2c8\ub2e4.\n        }\n\n        location / {  # HTTP to HTTPS \ub9ac\ub514\ub809\uc158\n            return 301 https://$host$request_uri;\n        }\n    }\n")),(0,o.kt)("p",null,"4.nginx 443 port \uc124\uc815"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc778\uc99d\uc774 \uc131\uacf5\ub418\uba74, \ud2b9\uc815 \uacbd\ub85c\uc5d0 \uc778\uc99d\uc11c\ub97c \ub9cc\ub4e4\uc5b4\uc8fc\uac8c \ub41c\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\uc774\ub294 fullchain.pem, privkey.pem 2\uac1c\uac00 \ub098\uc628\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ub514\ub809\ud130\ub9ac\ub294 nginx\uac00 \uc77d\uc744\uad8c\ud55c\uc774 \uc5c6\uc73c\ubbc0\ub85c ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo chmod -R 755 /etc/letsencrypt")," \uba85\ub839\uc5b4\ub85c \uad8c\ud55c \ubd80\uc5ec"),(0,o.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\ucc98\ub7fc \uc124\uc815\uc744 \ucd94\uac00\ud55c\ub2e4. (\uc544\ub798 \uc608\uc81c\ub294 localhost 3030\ud3ec\ud2b8\ub85c \uc9c4\uc785\ud55c\ub2e4.)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    server {\n        listen 443 ssl; \n        server_name www.example.com; \n\n        ssl_certificate /etc/letsencrypt/live/www.example.com/fullchain.pem; \n        ssl_certificate_key /etc/letsencrypt/live/www.example.com/privkey.pem; \n\n        # SSL \uc124\uc815 (\ucd5c\uc2e0 \ubcf4\uc548 \uad8c\uc7a5)\n        ssl_protocols TLSv1.2 TLSv1.3;\n        ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384';\n        ssl_prefer_server_ciphers off;\n\n        # SSL \uc138\uc158 \uce90\uc2f1 \uc124\uc815\n        ssl_session_cache shared:SSL:10m;\n        ssl_session_timeout 1h;\n\n        location / {\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Host $host;\n            proxy_set_header X-Forwarded-Proto $scheme;\n            proxy_pass http://127.0.0.1:3030/;\n        }   \n    }\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"note-brew--nginx--certbot-\uba85\ub839\uc5b4-\uc815\ub9ac"},"NOTE) brew / nginx / certbot \uba85\ub839\uc5b4 \uc815\ub9ac"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[brew]\nbrew search nginx   # \ud328\ud0a4\uc9c0 \uac80\uc0c9 \nbrew install nginx  # \ud328\ud0a4\uc9c0 \uc124\uce58\n\nbrew services start nginx  # \uc11c\ube44\uc2a4 \uc2dc\uc791\nbrew services restart nginx \n( brew services [run|start|stop|restart|cleanup] service_name  )\n\nbrew services # \uc11c\ube44\uc2a4 \ud655\uc778\nName        Status  User      File\nnginx       started dosimpact ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist\n\n---\n\n[nginx]\n# \uc124\uc815\ud30c\uc77c \ubcc0\uacbd \ud6c4 \ubb38\ubc95 \uccb4\ud06c\ud558\uae30\nnginx -t \n\n# nginx.conf \ud30c\uc77c \uacbd\ub85c \ud655\uc778\nbrew info nginx\n...\nThe default port has been set in /opt/homebrew/etc/nginx/nginx.conf to 8080 so that\nnginx can run without sudo.\n...\n\n# nginx root \ud3f4\ub354 \ud655\uc778 \n>nginx -V\n\nnginx version: nginx/1.25.1 ...\nconfigure arguments: --prefix=/opt/homebrew/Cellar/nginx/1.25.1_1 ...\n\n\uc5ec\uae30\uc11c : --prefix=/opt/homebrew/Cellar/nginx/1.25.1_1 \uc5d0 \ub8e8\ud2b8 \ub514\ub809\ud130\ub9ac\uac00 \ub41c\ub2e4.\n\ud558\uc9c0\ub9cc \ud574\ub2f9 \ub514\ub809\ud130\ub9ac\uc758 html \ud3f4\ub354\ub294 \ub9c1\ud06c\uac00 \uac78\ub824 \uc788\ub2e4. \n\ucd5c\uc885\uc801\uc73c\ub85c /opt/homebrew/var/www \ub77c\ub294 \uacf3\uc5d0 index.html \uc774 \uc788\ub2e4. \n\n---\n[certbot]\n\n# \uc778\uc99d\uc11c \ubc1c\uae09\nsudo certbot certonly --manual \nsudo certbot --nginx -d yourdomain.com\nsudo certbot --nginx --nginx-server-root /opt/homebrew/etc/nginx -d yourdomain.com\n\n\n# \uc778\uc99d\uc11c \uc815\ubcf4 , \uc720\ud6a8\uae30\uac04, \uacbd\ub85c \ud655\uc778\nsudo certbot certificates\nsudo certbot certificates -d www.domain.com\n\nSaving debug log to /var/log/letsencrypt/letsencrypt.log\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nFound the following certs:\n  Certificate Name: MY_DOMAIN\n    Serial Number: 3841dcd9246507891a8afc5cde8df0e0af1\n    Key Type: ECDSA\n    Domains: MY_DOMAIN\n    Expiry Date: 2023-11-08 12:19:45+00:00 (VALID: 89 days)\n    Certificate Path: /etc/letsencrypt/live/MY_DOMAIN/fullchain.pem\n    Private Key Path: /etc/letsencrypt/live/MY_DOMAIN/privkey.pem\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n\n# \uc778\uc99d\uc11c \uac31\uc2e0 dry-run\nsudo certbot renew --dry-run\nsudo certbot renew --dry-run -d www.domain.com\n\n# \uc778\uc99d\uc11c \uac31\uc2e0\n( \ubc1c\uae09\uc2dc 90\uc77c \uc5f0\uc7a5, 30\uc77c \ub0a8\uc558\uc744\ub54c \uc5f0\uc7a5 \uac00\ub2a5 )\nsudo certbot renew\n\n# \uc778\uc99d\uc11c \uc0ad\uc81c\nsudo certbot delete --cert-name yourdomain.com\n\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"ref"},"ref"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.delmaster.net/69"},"DNS \ub808\ucf54\ub4dc \uc885\ub958"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://inpa.tistory.com/entry/WEB-%F0%9F%8C%90-DNS-%EB%A0%88%EC%BD%94%EB%93%9C-%EC%A2%85%EB%A5%98-%E2%98%85-%EC%95%8C%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC"},"DNS \ub808\ucf54\ub4dc \uc885\ub958 \uc27d\uac8c \uc774\ud574"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://dev-repository.tistory.com/96"},"ssh \uc811\uc18d to mac mini"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.hakawati.co.kr/entry/Code-Server-%EA%B5%AC%EC%B6%95%ED%8E%B8#NginX%EC%9D%98%20%ED%8C%A8%EC%8A%A4%EC%9B%8C%EB%93%9C%20%EC%9D%B8%EC%A6%9D%20%EA%B5%AC%EC%84%B1-1"},"nginx + code-server \uad6c\ucd95"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://donghun.dev/code-server-tutorial-guide"},"code-server \uc790\uccb4\uc5d0 https \uc801\uc6a9")))}m.isMDXComponent=!0}}]);