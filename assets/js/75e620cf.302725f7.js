"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[5419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),g=r,m=l["".concat(c,".").concat(g)]||l[g]||d[g]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},a="React + github actions \ubc30\ud3ec\ud558\uae30",s={unversionedId:"g-devops/common/git/git003",id:"g-devops/common/git/git003",title:"React + github actions \ubc30\ud3ec\ud558\uae30",description:"Install React with vite",source:"@site/docs/g-devops/0-common/3-git/git003.md",sourceDirName:"g-devops/0-common/3-git",slug:"/g-devops/common/git/git003",permalink:"/docs/g-devops/common/git/git003",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-devops/0-common/3-git/git003.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"devOps",previous:{title:"Github \uba40\ud2f0 \uacc4\uc815\uc73c\ub85c \ud478\uc26c\ud558\uae30",permalink:"/docs/g-devops/common/git/git002"},next:{title:"Docker",permalink:"/docs/category/docker"}},c={},p=[{value:"Install React with vite",id:"install-react-with-vite",level:2},{value:"Repo Sync",id:"repo-sync",level:2},{value:"setip github actions",id:"setip-github-actions",level:2}],u={toc:p},l="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react--github-actions-\ubc30\ud3ec\ud558\uae30"},"React + github actions \ubc30\ud3ec\ud558\uae30"),(0,r.kt)("h2",{id:"install-react-with-vite"},"Install React with vite"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ko.vitejs.dev/guide/"},"https://ko.vitejs.dev/guide/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm create vite@latest\nnpm run dev\n")),(0,r.kt)("h2",{id:"repo-sync"},"Repo Sync"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'*\uba40\ud2f0 \uacc4\uc815\ngit config --local user.name "username2"\ngit config --local user.email "username2@naver.com"\n\ngit push origin main\n')),(0,r.kt)("h2",{id:"setip-github-actions"},"setip github actions"),(0,r.kt)("p",null,"\ubb38\uc11c >> ",(0,r.kt)("a",{parentName:"p",href:"https://ko.vitejs.dev/guide/static-deploy.html#github-pages"},"https://ko.vitejs.dev/guide/static-deploy.html#github-pages")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'//1.\nimport { defineConfig } from "vite";\nimport react from "@vitejs/plugin-react";\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [react()],\n  base: "/react-test-2/", // \ucd94\uac00\n});\n\n//2. \n# .github/workflows/deploy.yml\n# GitHub Pages\uc5d0 \uc815\uc801 \ucf58\ud150\uce20\ub97c \ubc30\ud3ec\ud558\uae30 \uc704\ud55c \uac04\ub2e8\ud55c \uc6cc\ud06c\ud50c\ub85c\uc6b0\nname: Deploy static content to Pages\n\non:\n  # \uae30\ubcf8 \ube0c\ub79c\uce58\uc5d0 \ub300\ud55c \ud478\uc2dc \uc774\ubca4\ud2b8 \ubc1c\uc0dd \uc2dc \uc2e4\ud589\n  push:\n    branches: ["master"]\n  # Actions \ud0ed\uc5d0\uc11c \uc218\ub3d9\uc73c\ub85c \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \uad6c\uc131\n  workflow_dispatch:\n\n# GITHUB_TOKEN\uc758 \uad8c\ud55c\uc744 \uc124\uc815\ud558\uc5ec GitHub Pages\uc5d0 \ubc30\ud3ec\ud560 \uc218 \uc788\ub3c4\ub85d \ud568\npermissions:\n  contents: read\n  pages: write\n  id-token: write\n\n# \ub3d9\uc2dc\uc5d0 \ud558\ub098\uc758 \ubc30\ud3ec\ub9cc \ud5c8\uc6a9\ud558\ub3c4\ub85d \uad6c\uc131\nconcurrency:\n  group: "pages"\n  cancel-in-progress: true\n\njobs:\n  # \ub2e8\uc21c\ud788 \ubc30\ud3ec\ub9cc \uc218\ud589\ud558\uae30\uc5d0 \ud558\ub098\uc758 \uc7a1\uc73c\ub85c\ub9cc \uad6c\uc131\n  deploy:\n    environment:\n      name: github-pages\n      url: ${{ steps.deployment.outputs.page_url }}\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v4\n      - name: Set up Node\n        uses: actions/setup-node@v3\n        with:\n          node-version: 18\n          cache: "npm"\n      - name: Install dependencies\n        run: npm install\n      - name: Build\n        run: npm run build\n      - name: Setup Pages\n        uses: actions/configure-pages@v3\n      - name: Upload artifact\n        uses: actions/upload-pages-artifact@v2\n        with:\n          # dist \ub514\ub809\ud130\ub9ac \uc5c5\ub85c\ub4dc\n          path: "./dist"\n      - name: Deploy to GitHub Pages\n        id: deployment\n        uses: actions/deploy-pages@v2\n---\n\uc774 GitHub Actions workflow\ub294 Node.js \ud504\ub85c\uc81d\ud2b8\ub97c \ube4c\ub4dc\ud558\uace0 GitHub Pages\ub85c \ubc30\ud3ec\ud558\ub294 \uacfc\uc815\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. \uac01 \ub2e8\uacc4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:\n\n1. **Checkout (\uccb4\ud06c\uc544\uc6c3):**\n   - `actions/checkout` \uc561\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud604\uc7ac \ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc758 \ucf54\ub4dc\ub97c \uccb4\ud06c\uc544\uc6c3\ud569\ub2c8\ub2e4.\n\n2. **Node \uc124\uc815:**\n   - `actions/setup-node` \uc561\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec Node.js \ud658\uacbd\uc744 \uc124\uc815\ud569\ub2c8\ub2e4.\n   - Node.js \ubc84\uc804\uc744 18\ub85c \uc124\uc815\ud558\uace0, npm \ud328\ud0a4\uc9c0\ub97c \uce90\uc2dc\ud569\ub2c8\ub2e4.\n\n3. **\uc758\uc874\uc131 \uc124\uce58:**\n   - `npm install` \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8\uc758 npm \uc885\uc18d\uc131\uc744 \uc124\uce58\ud569\ub2c8\ub2e4.\n\n4. **\ube4c\ub4dc:**\n   - `npm run build` \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8\ub97c \ube4c\ub4dc\ud569\ub2c8\ub2e4.\n\n5. **GitHub Pages \uc124\uc815:**\n   - `actions/configure-pages` \uc561\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec GitHub Pages\ub97c \uc124\uc815\ud569\ub2c8\ub2e4.\n\n6. **Artifact \uc5c5\ub85c\ub4dc:**\n   - `actions/upload-pages-artifact` \uc561\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \ube4c\ub4dc\ub41c \uacb0\uacfc\ubb3c\uc744 GitHub Pages\uc5d0 \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\ub3c4\ub85d artifact\ub85c \uc800\uc7a5\ud569\ub2c8\ub2e4.\n   - `path: "./dist"`\ub294 \ube4c\ub4dc\ub41c \uacb0\uacfc\ubb3c\uc774 \uc800\uc7a5\ub41c \ub514\ub809\ud1a0\ub9ac\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.\n\n7. **GitHub Pages\ub85c \ubc30\ud3ec:**\n   - `actions/deploy-pages` \uc561\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec GitHub Pages\ub85c \ube4c\ub4dc\ub41c \uacb0\uacfc\ubb3c\uc744 \ubc30\ud3ec\ud569\ub2c8\ub2e4.\n   - `id: deployment`\ub294 \uc774 \ubc30\ud3ec \uc791\uc5c5\uc744 \uc2dd\ubcc4\ud558\uae30 \uc704\ud55c \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4.\n\n\uc774 workflow\ub294 Node.js \ud504\ub85c\uc81d\ud2b8\ub97c \ube4c\ub4dc\ud558\uace0, \uadf8 \uacb0\uacfc\ubb3c\uc744 GitHub Pages\ub85c \uc790\ub3d9\uc73c\ub85c \ubc30\ud3ec\ud558\ub294 \uacfc\uc815\uc744 \uc790\ub3d9\ud654\ud569\ub2c8\ub2e4.\n')))}d.isMDXComponent=!0}}]);