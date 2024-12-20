"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[6835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:1},i="Amplitude \uc0ac\uc6a9\ubc95",o={unversionedId:"g-da/amplitude/amp1",id:"g-da/amplitude/amp1",title:"Amplitude \uc0ac\uc6a9\ubc95",description:"\uc0ac\uc6a9 \ubaa9\uc801 : \ud37c\ub110\ucd94\uc801\uc744 \ud558\uae30 \uc704\ud574\uc11c Amplitude \uc0ac\uc6a9\ud55c\ub2e4.",source:"@site/docs/g-da/7-amplitude/amp1.md",sourceDirName:"g-da/7-amplitude",slug:"/g-da/amplitude/amp1",permalink:"/docs/g-da/amplitude/amp1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-da/7-amplitude/amp1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"dataAnalytics",previous:{title:"7.Amplitude",permalink:"/docs/category/7amplitude"}},p={},u=[{value:"React with Amplitude (JS Web SDK)",id:"react-with-amplitude-js-web-sdk",level:2},{value:"install",id:"install",level:3},{value:"GET API Key",id:"get-api-key",level:3},{value:"Logger",id:"logger",level:3},{value:"Logger Usage",id:"logger-usage",level:3},{value:"\ud37c\ub110 \ub9cc\ub4e4\uae30",id:"\ud37c\ub110-\ub9cc\ub4e4\uae30",level:2},{value:"Amplitude Event + URL Shorter Server",id:"amplitude-event--url-shorter-server",level:2}],s={toc:u},d="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"amplitude-\uc0ac\uc6a9\ubc95"},"Amplitude \uc0ac\uc6a9\ubc95"),(0,r.kt)("p",null,"\uc0ac\uc6a9 \ubaa9\uc801 : \ud37c\ub110\ucd94\uc801\uc744 \ud558\uae30 \uc704\ud574\uc11c Amplitude \uc0ac\uc6a9\ud55c\ub2e4.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubb34\ub8cc \ud50c\ub79c\uc740 \ub9e4\ub2ec \ucd5c\ub300 \ucc9c\ub9cc\uac1c\uc758 \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac   "),(0,r.kt)("li",{parentName:"ul"},"\uace0\uae09 \uae30\ub2a5\uc774 \ud544\uc694\ud558\uba74 \uc720\ub8cc \ud50c\ub79c\uc73c\ub85c \uc804\ud658  ")),(0,r.kt)("h2",{id:"react-with-amplitude-js-web-sdk"},"React with Amplitude (JS Web SDK)"),(0,r.kt)("p",null,"Goal  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API \ud0a4 \ubc1c\uae09\ud569\ub2c8\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"Impression Event \ub0a8\uae41\ub2c8\ub2e4.   "),(0,r.kt)("li",{parentName:"ul"},"Click Event \ub0a8\uae41\ub2c8\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\ud37c\ub110 \ub300\uc2dc\ubcf4\ub4dc\ub97c \ub9cc\ub4e4\uc5b4\ubd05\ub2c8\ub2e4.  ")),(0,r.kt)("h3",{id:"install"},"install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"yarn add @amplitude/analytics-browser\n---?\nyarn add amplitude-js \nyarn add @types/amplitude-js -D  \n")),(0,r.kt)("h3",{id:"get-api-key"},"GET API Key"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(84763).Z,width:"1648",height:"1316"}),"   "),(0,r.kt)("p",null,"API \ud0a4\ub294 \uc124\uc815 > Projects > API Key\uc5d0 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Project Level \ub85c \uad00\ub9ac  ")),(0,r.kt)("h3",{id:"logger"},"Logger"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as amplitude from '@amplitude/analytics-browser';\n\nconst AMPLITUDE_API_KEY = 'API_KEY';\n\nclass AmplitudeLogger {\n  init() {\n    amplitude.init(AMPLITUDE_API_KEY);\n  }\n  // user id\uae30\ubc18 \ub85c\uae45, \uc911\ubcf5\ub85c\uadf8 \uc81c\uac70\uc5d0 \uc0ac\uc6a9  \n  setLoginUser(userId: number) {\n    const padded = userId.toString().padStart(6, '0');\n    console.log(`Set Login User: ${padded}`);\n    amplitude.setUserId(padded);\n  }\n\n  unsetLoginUser() {\n    amplitude.reset();\n  }\n  // \ud398\uc774\uc9c0 \ubdf0 \ub85c\uae45  \n  logPageView(page: string, options:any) {\n    console.log(`PageView:${page}`);\n    amplitude.track(`PageView:${page}`, options);\n  }\n  // \ud074\ub9ad \ub85c\uae45  \n  logClick(name: string, options:any) {\n    console.log(`Click:${name}`);\n    amplitude.track(`Click:${name}`, options);\n  }\n}\n\nexport const amplitudeLogger = new AmplitudeLogger();\n")),(0,r.kt)("h3",{id:"logger-usage"},"Logger Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"---\n// root \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ucd08\uae30\ud654 \ud560 \uac83  \n  useEffect(() => {\n    amplitudeLogger.init();\n  }, []);\n---\n// page level\uc758 logger HOC  \nexport const AmplitudePage = ({ pageName, children }: Props) => {\n  useEffect(() => {\n    amplitudeLogger.logPageView(pageName);\n  }, [pageName]);\n\n  return <>{children}</>;\n};\n---\n// login page level\uc758 logger HOC  \n  useEffect(() => {\n    if (user?.id) {\n      amplitudeLogger.setLoginUser(user.id);\n    } else {\n      amplitudeLogger.unsetLoginUser();\n    }\n  }, [user?.id]);\n---\n\n")),(0,r.kt)("h2",{id:"\ud37c\ub110-\ub9cc\ub4e4\uae30"},"\ud37c\ub110 \ub9cc\ub4e4\uae30"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(30281).Z,width:"2628",height:"1482"}),(0,r.kt)("br",{parentName:"p"}),"\n","Data > Events  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8\uac00 \uc798 \uc313\uc774\ub294\uc9c0 \ud655\uc778\ud55c\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \uc774\ub984\uc744 \ud655\uc778\ud55c\ub2e4.  ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(86857).Z,width:"3024",height:"1722"}),(0,r.kt)("br",{parentName:"p"}),"\n","\ud37c\ub110 \ub9cc\ub4e4\uae30 : Create > Funnel  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \uc774\ub984\uc744 \uc785\ub825\ud574\uc11c \uccab\ubc88\uc9f8 \ud37c\ub110\uc744 \ub4f1\ub85d\ud55c\ub2e4.  "),(0,r.kt)("li",{parentName:"ul"},"\uc774\uc5b4\uc11c \ub2e4\uc74c \ud37c\ub110\uc744 \ub4f1\ub85d\ud55c\ub2e4.  ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(23801).Z,width:"736",height:"548"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc720\uc800 \uae30\ubc18\uc73c\ub85c \uc911\ubcf5\uc81c\uac70\uac00 \ub418\ubbc0\ub85c, Totals \ub85c \uce21\uc815\ud55c\ub2e4. (\ud14c\uc2a4\ud2b8 \ud658\uacbd)  ")),(0,r.kt)("h2",{id:"amplitude-event--url-shorter-server"},"Amplitude Event + URL Shorter Server"),(0,r.kt)("p",null,"\ubb38\uc81c : \ud2b9\uc815 URL\ub97c \ud074\ub9ad\ud588\uc744\ub54c Amplitude Event \ub0a8\uae30\uba74\uc11c \ub9ac\ub2e4\uc774\ub809\ud2b8\ub3c4 \ub418\uc5b4\uc57c \ud568.  "),(0,r.kt)("p",null,"\uc2dc\ub098\ub9ac\uc624 : \uc0ac\uc6a9\uc790\uac00 \ud2b9\uc815 URL\uc744 \ud074\ub9ad\ud558\uba74 amplitude\uc5d0 \ub0a8\uace0 \ub2e4\ub978 \ud398\uc774\uc9c0\ub85c \uc9c4\uc785\ud55c\ub2e4."))}m.isMDXComponent=!0},23801:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-1-298577bf9ef4fb3c0bdc9a65278b2fae.png"},30281:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-2-3a445b1dfdd94db666c13211f1a18cbe.png"},86857:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-3-3ee726617df2310e87afe3f55a3180da.png"},84763:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-916d26aa3bbf95978e770f313b97f74a.png"}}]);