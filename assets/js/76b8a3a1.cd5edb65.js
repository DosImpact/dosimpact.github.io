"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[1144],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||s;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:2},o="NextJS Essential 2 - Server",l={unversionedId:"g-fe/next/next002-2",id:"g-fe/next/next002-2",title:"NextJS Essential 2 - Server",description:"- NextJS Essential 2 - Server",source:"@site/docs/g-fe/5-next/next002-2.md",sourceDirName:"g-fe/5-next",slug:"/g-fe/next/next002-2",permalink:"/docs/g-fe/next/next002-2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-fe/5-next/next002-2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"frontEnd",previous:{title:"NextJS Essential 1 - SSR",permalink:"/docs/g-fe/next/next002-1"},next:{title:"NextJS Essential 3 - Routing",permalink:"/docs/g-fe/next/next002-3"}},i={},p=[{value:"Server Level",id:"server-level",level:2},{value:"Server router handler",id:"server-router-handler",level:2},{value:"api",id:"api",level:3},{value:"GET - basic",id:"get---basic",level:4},{value:"header, cookies",id:"header-cookies",level:4},{value:"GET - Route Segments Paramters, Query Parameters",id:"get---route-segments-paramters-query-parameters",level:4},{value:"CORS",id:"cors",level:4},{value:"POST",id:"post",level:4},{value:"middleware",id:"middleware",level:3},{value:"Server actions",id:"server-actions",level:2},{value:"etc",id:"etc",level:2},{value:"metadata",id:"metadata",level:2},{value:"directory custome convention",id:"directory-custome-convention",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nextjs-essential-2---server"},"NextJS Essential 2 - Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#nextjs-essential-2---server"},"NextJS Essential 2 - Server"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#server-level"},"Server Level")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#server-router-handler"},"Server router handler"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#api"},"api"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#get---basic"},"GET - basic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#header-cookies"},"header, cookies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#get---route-segments-paramters-query-parameters"},"GET - Route Segments Paramters, Query Parameters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#cors"},"CORS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#post"},"POST")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#middleware"},"middleware")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#server-actions"},"Server actions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#etc"},"etc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#metadata"},"metadata")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#directory-custome-convention"},"directory custome convention"))))),(0,a.kt)("h2",{id:"server-level"},"Server Level"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1.Server actions : \ub3d9\uc801 URL \ucc98\ub9ac  "),(0,a.kt)("li",{parentName:"ul"},"2.Server router handler : \uc815\uc801 URL \ucc98\ub9ac   ")),(0,a.kt)("h2",{id:"server-router-handler"},"Server router handler"),(0,a.kt)("h3",{id:"api"},"api"),(0,a.kt)("p",null,"ref : ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/app/building-your-application/routing/route-handlers"},"https://nextjs.org/docs/app/building-your-application/routing/route-handlers")),(0,a.kt)("p",null,"app \ud3f4\ub354 \ud558\uc704\uc5d0 api \ub77c\ub294\uacf3\uc5d0 \uc815\uc758 \ud574\uc57c \ud55c\ub2e4.  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"route.js|ts \ub77c\ub294 \uc774\ub984\uc73c\ub85c \uc815\uc758 \ud574\uc57c \ud55c\ub2e4. "),(0,a.kt)("li",{parentName:"ul"},"GET, POST \ub4f1 \uc774\ub984\uc73c\ub85c \ud568\uc218\ub97c export \ud574\uc8fc\uc5b4\uc57c \ud55c\ub2e4.  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS")))))),(0,a.kt)("h4",{id:"get---basic"},"GET - basic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// TS : app/api/hello/route.ts\nimport { NextResponse } from "next/server";\n\nexport const GET = async () => {\n  // json resposne\n  return NextResponse.json({\n    hello: "true",\n  });\n};\n\n')),(0,a.kt)("h4",{id:"header-cookies"},"header, cookies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { NextResponse } from "next/server";\nimport { cookies, headers } from "next/headers";\n\nexport const GET = async () => {\n  const sig = headers().get("signature"); // get from header \n\n  const cookieStore = cookies();\n  const token = cookieStore.get("token"); // get from client cookies\n\n  // text message resposne\n  return new NextResponse("ok", {\n    status: 200, // status code\n    headers: {\n      foo: "bar", // header\n      "Set-Cookie": `token=${token?.value ? "visited + 1" : "visited"}`, // header(cookie)\n    },\n  });\n};\n')),(0,a.kt)("h4",{id:"get---route-segments-paramters-query-parameters"},"GET - Route Segments Paramters, Query Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// TS : app/api/hello/[id]/route.ts\nimport { NextResponse, NextRequest } from "next/server";\n\ninterface GetParams {\n  params: {\n    id: string;\n  };\n}\n\n// api/hello/123?name=do\nexport const GET = async (request: NextRequest, { params }: GetParams) => {\n  // 1. Dynamic Route Segments > params \n  const searchParams = request.nextUrl.searchParams;\n  // 2. URL Query Parameters\n  const name = searchParams.get("name");\n\n  return NextResponse.json({\n    hello: params.id,\n    name,\n  });\n};\n\n')),(0,a.kt)("h4",{id:"cors"},"CORS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const dynamic = 'force-dynamic' // defaults to auto\n \nexport async function GET(request: Request) {\n  return new Response('Hello, Next.js!', {\n    status: 200,\n    headers: {\n      'Access-Control-Allow-Origin': '*',\n      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',\n      'Access-Control-Allow-Headers': 'Content-Type, Authorization',\n    },\n  })\n}\n")),(0,a.kt)("h4",{id:"post"},"POST"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\n// form data\nexport async function POST(request: Request) {\n  const formData = await request.formData();\n  const name = formData.get("name");\n  const email = formData.get("email");\n  return NextResponse.json({ name, email });\n}\n\n// json parsing\nexport async function PATCH(request: Request) {\n  const formData = await request.json();\n  const { name, email } = formData;\n  return NextResponse.json({ name, email });\n}\n\n')),(0,a.kt)("h3",{id:"middleware"},"middleware"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";\nimport { NextRequest, NextResponse } from "next/server";\n\nexport async function middleware(req: NextRequest) {\n  const res = NextResponse.next();\n  /* \uc0ac\uc6a9\uc790 \uc138\uc158\uc744 \uac00\uc838\uc640\uc57c \uc11c\ubc84\ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c object\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4. */\n  const supabase = createMiddlewareClient({ req, res });\n  await supabase.auth.getSession();\n  return res;\n}\n\n')),(0,a.kt)("h2",{id:"server-actions"},"Server actions"),(0,a.kt)("h2",{id:"etc"},"etc"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"metadata"},"metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"icons (TODO)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// layout.tsx\nexport const metadata: Metadata = {\n  title: "Spotify",\n  description: "Listen to music",\n};\n')),(0,a.kt)("h2",{id:"directory-custome-convention"},"directory custome convention"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"actions : server actions \ub4e4\uc744 \ub123\ub294 \ud3f4\ub354  \napp : Next App Router\nhooks : hook \ubaa8\uc74c, \ub354 \uc138\ubd84\ud654 \ud574\ub3c4 \uad1c\ucc2e\uc744 \ub4ef  \ncomponents : \uacf5\ud1b5 \ucef4\ud3ec\ub10c\ud2b8 \ubaa8\uc74c, \ub354 \uc138\ubd84\ud654 \ud574\ub3c4 \uad1c\ucc2e\uc744 \ub4ef  \nlibs : Server Side Module, Utils \ub4f1 > \ub354 \uc138\ubd84\ud654 \ud574\ub3c4 \uad1c\ucc2e\uc744 \ub4ef\n- server \uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ubaa8\ub4c8\uc774\ub77c\ub294 \uba85\uc2dc\ub97c \ud558\uba74 \uc88b\uc744 \ub4ef \n- server/utils, server/libs\n- \uc5ec\uae30\uc11c\ub3c4 `use server` \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud55c\uac00? \npublic : \uc815\uc801\ud30c\uc77c \ub9ac\uc18c\uc2a4  \nconstants\n\n")))}m.isMDXComponent=!0}}]);