"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[5380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=i(r),d=o,y=u["".concat(s,".").concat(d)]||u[d]||c[d]||p;return r?n.createElement(y,a(a({ref:t},m),{},{components:r})):n.createElement(y,a({ref:t},m))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var i=2;i<p;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const p={sidebar_position:4},a="NestJS TypeOrmModule",l={unversionedId:"g-be/nest/ne003-typeorm-02",id:"g-be/nest/ne003-typeorm-02",title:"NestJS TypeOrmModule",description:"TypeORM \uc18c\uac1c",source:"@site/docs/g-be/1-nest/ne003-typeorm-02.md",sourceDirName:"g-be/1-nest",slug:"/g-be/nest/ne003-typeorm-02",permalink:"/docs/g-be/nest/ne003-typeorm-02",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-be/1-nest/ne003-typeorm-02.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"backEnd",previous:{title:"NestJS PostgreSQL \uc124\uce58",permalink:"/docs/g-be/nest/ne003-typeorm-01"},next:{title:"NestJS TypeORM Entity 1",permalink:"/docs/g-be/nest/ne003-typeorm-03"}},s={},i=[{value:"TypeORM \uc18c\uac1c",id:"typeorm-\uc18c\uac1c",level:2},{value:"install",id:"install",level:2},{value:"\ucc38\uc870 \ubb38\uc11c",id:"\ucc38\uc870-\ubb38\uc11c",level:2}],m={toc:i},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nestjs-typeormmodule"},"NestJS TypeOrmModule"),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"keywords",content:"NestJS,TypeORM"})),(0,o.kt)("h2",{id:"typeorm-\uc18c\uac1c"},"TypeORM \uc18c\uac1c"),(0,o.kt)("p",null,"\uc7a5\uc810"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Class Entity\uc5d0 \ub370\uc774\ucf54\ub808\uc774\ud130\ub85c \uc27d\uac8c \ubaa8\ub378\ub9c1 \ud639\uc740 \ud0c0\uc774\ud551\uc774 \uac00\ub2a5\ud558\ub2e4.  "),(0,o.kt)("li",{parentName:"ul"},"Class Entity\ub85c \ubaa8\ub378 \uc815\uc758 \ubc0f \ucee4\uc2a4\ud140 \ud568\uc218\ub85c \ucd94\uac00,\uc5c5\ub370\uc774\ud2b8 \uc804 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1 \ucd94\uac00 \uac00\ub2a5  "),(0,o.kt)("li",{parentName:"ul"},"\ub808\ud30c\uc9c0\ud1a0\ub9ac \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5 \uac00\ub2a5"),(0,o.kt)("li",{parentName:"ul"},"CRUD \uc77c\ub828\uc758 \uae30\ub2a5\uc744 \ubb36\uc744 \uc218 \uc788\uc74c"),(0,o.kt)("li",{parentName:"ul"},"NodeJS \ubc31\uc11c\ubc84 \ubfd0\ub9cc \uc544\ub2c8\ub77c, \ube0c\ub77c\uc6b0\uc838 , React Native \uc5d0\uc11c\ub3c4 \uc9c1\uc811 \uc0ac\uc6a9 \uac00\ub2a5"),(0,o.kt)("li",{parentName:"ul"},"\ub2e4\uc591\ud55c DB\uc640 \uc5f0\ub3d9 \uac00\ub2a5 ( mysql, postgresql, .. )")),(0,o.kt)("p",null,"\ub2e8\uc810 "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"0.3.17 \ub77c\ub294 \ubc84\uc804     "),(0,o.kt)("li",{parentName:"ul"},"\ub9ce\uc740 \uae30\ub2a5 \ucd94\uac00\uc911 ( eg min, max, sum \uae30\ub2a5 \uc5c6\uc74c ) > \ucffc\ub9ac\ube4c\ub354\ub97c \uc774\uc6a9\ud574\uc57c\ud568   ")),(0,o.kt)("h2",{id:"install"},"install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add @nestjs/typeorm typeorm pg\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# .env.dev\nDATABASE_URL=postgres://<userid-postgres>:<password>@<host>:<port>/<dbname>\nDATABASE_IS_SSL=0\nDATABASE_NO_USE_CA=1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { HelloModule } from './hello/hello.module';\nimport { UsersModule } from './users/users.module';\nimport { ConfigModule } from '@nestjs/config';\nimport * as Joi from 'joi';\nimport { TypeOrmModule } from '@nestjs/typeorm';\n\n@Module({\n  imports: [\n    ConfigModule.forRoot({\n      isGlobal: true,\n      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod',\n      ignoreEnvFile: process.env.NODE_ENV === 'production',\n      validationSchema: Joi.object({\n        NODE_ENV: Joi.string().valid('dev', 'production').default('dev'),\n        PORT: Joi.number().default(3000),\n        DATABASE_URL: Joi.string().required(),\n        DATABASE_IS_SSL: Joi.number().required(),\n        DATABASE_NO_USE_CA: Joi.number().required(),\n      }),\n    }),\n    TypeOrmModule.forRoot({\n      type: 'postgres',\n      url: process.env.DATABASE_URL,\n      synchronize: process.env.NODE_ENV === 'dev' ? true : false,\n      logging: true,\n      ...(process.env.DATABASE_IS_SSL === '1' && {\n        ssl: { rejectUnauthorized: process.env.DATABASE_NO_USE_CA === '1' },\n      }),\n    }),\n    HelloModule,\n    UsersModule,\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n\n")),(0,o.kt)("h2",{id:"\ucc38\uc870-\ubb38\uc11c"},"\ucc38\uc870 \ubb38\uc11c"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://typeorm.io/#/"},"https://typeorm.io/#/"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typeorm/typeorm/tree/master/docs"},"https://github.com/typeorm/typeorm/tree/master/docs"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://typeorm.io/#/many-to-one-one-to-many-relations"},"https://typeorm.io/#/many-to-one-one-to-many-relations"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://orkhan.gitbook.io/typeorm/"},"https://orkhan.gitbook.io/typeorm/")))}c.isMDXComponent=!0}}]);