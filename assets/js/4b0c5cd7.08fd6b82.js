"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[45],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1},s="Zustand Basic",i={unversionedId:"g-fe/react/zustand/zustand-01",id:"g-fe/react/zustand/zustand-01",title:"Zustand Basic",description:"- App\uc758 \uc804\uc5ed\uc0c1\ud0dc\uad00\ub9ac\uac00 \uac00\ub2a5",source:"@site/docs/g-fe/4-react/3-zustand/zustand-01.md",sourceDirName:"g-fe/4-react/3-zustand",slug:"/g-fe/react/zustand/zustand-01",permalink:"/docs/g-fe/react/zustand/zustand-01",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-fe/4-react/3-zustand/zustand-01.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"frontEnd",previous:{title:"Hooks Snippets",permalink:"/docs/g-fe/react/snippets/snip01"},next:{title:"6.NextJS",permalink:"/docs/category/6nextjs"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Basic1 (create, set)",id:"basic1-create-set",level:3},{value:"Counter",id:"counter",level:3},{value:"TodoList",id:"todolist",level:3},{value:"Fetch (create, AbortController, AxiosError, debouncedFetch)",id:"fetch-create-abortcontroller-axioserror-debouncedfetch",level:3},{value:"ref",id:"ref",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zustand-basic"},"Zustand Basic"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"App\uc758 \uc804\uc5ed\uc0c1\ud0dc\uad00\ub9ac\uac00 \uac00\ub2a5  "),(0,o.kt)("li",{parentName:"ul"},"git : ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/zustand"},"https://github.com/pmndrs/zustand"),"  "),(0,o.kt)("li",{parentName:"ul"},"React, Nextjs \ubaa8\ub450 \ubcc4 \ub2e4\ub978 \uc124\uc815\uc5c6\uc774 \uc0ac\uc6a9 \uac00\ub2a5\ud558\ub2e4.  ")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"basic1-create-set"},"Basic1 (create, set)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { create } from 'zustand'\n\nconst useBearStore = create((set) => ({\n  bears: 0,\n  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),\n  removeAllBears: () => set({ bears: 0 }),\n}))\n---\nfunction BearCounter() {\n  const bears = useBearStore((state) => state.bears)\n  return <h1>{bears} around here ...</h1>\n}\n\nfunction Controls() {\n  const increasePopulation = useBearStore((state) => state.increasePopulation)\n  return <button onClick={increasePopulation}>one up</button>\n}\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// define store, setter\nimport { create } from 'zustand';\n\ninterface AuthModalStore {\n  isOpen: boolean;\n  onOpen: () => void;\n  onClose: () => void;\n}\n\nconst useAuthModal = create<AuthModalStore>((set) => ({\n  isOpen: false,\n  onOpen: () => set({ isOpen: true }),\n  onClose: () => set({ isOpen: false }),\n}));\n\nexport default useAuthModal;\n---\n  const authModal = useAuthModal();\n  <Button onClick={authModal.onOpen} />\n\n")),(0,o.kt)("h3",{id:"counter"},"Counter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { create } from "zustand";\nimport { debounce } from "lodash-es";\n\ninterface CounterStoreProps {\n  count: number;\n  increaseCount: () => void;\n  decreaseCount: () => void;\n}\n\nexport const counterStore = create<CounterStoreProps>((set) => ({\n  count: 0,\n  increaseCount: () => set((state) => ({ count: state.count + 1 })),\n  decreaseCount: () => set((state) => ({ count: state.count - 1 })),\n}));\n')),(0,o.kt)("h3",{id:"todolist"},"TodoList"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uc548\uc758 \uac1d\uccb4(todoListArray)\uc758 \ubd88\ubcc0\uc131\uc744 \uc9c0\ucf1c\uc57c\ud55c\ub2e4. (for \ub9ac\ub79c\ub354\ub9c1)  ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// todoList\ninterface TodoListProps {\n  todoList: string[];\n  addTodo: (content: string) => void;\n  updateTodo: (id: number, updatedContent: string) => void;\n  deleteTodo: (id: number) => void;\n}\n\nexport const todoListStore = create<TodoListProps>((set) => ({\n  todoList: [],\n  addTodo: (content: string) =>\n    set(({ todoList }) => {\n      return { todoList: [...todoList, content] };\n    }),\n  updateTodo: (id: number, updatedContent: string) =>\n    set(({ todoList }) => {\n      todoList[id] = updatedContent;\n      return { todoList: [...todoList] };\n    }),\n  deleteTodo: (id: number) =>\n    set(({ todoList }) => {\n      todoList.splice(id, 1);\n      return { todoList: [...todoList] };\n    }),\n}));\n")),(0,o.kt)("h3",{id:"fetch-create-abortcontroller-axioserror-debouncedfetch"},"Fetch (create, AbortController, AxiosError, debouncedFetch)"),(0,o.kt)("p",null,"\uae30\uc874\uc758 \uc694\uccad\uc744 \ucde8\uc18c\ud558\uace0 \uc0c8\ub85c\uc6b4 \uc694\uccad\uc744 \ubcf4\ub0b4\ub294 \ub85c\uc9c1.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"abort\ub97c \ud638\ucd9c\ud588\ub2e4\uba74 AbortController\ub97c \ub2e4\uc2dc \uc0dd\uc131\ud574\uc57c\ud55c\ub2e4.  "),(0,o.kt)("li",{parentName:"ul"},"\uadf8\ub807\uc9c0 \uc54a\uc73c\uba74, \uae30\uc874\uc694\uccad \ubc0f \uc0c8\ub85c\uc6b4 \uc694\uccad\uc5d0 \ub300\ud574\uc11c \ubaa8\ub450 \ucde8\uc18c \ub41c\ub2e4.  ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { create } from "zustand";\nimport { debounce } from "lodash-es";\nimport axios, { AxiosError } from "axios";\n\n// https://api.thecatapi.com/v1/images/search?limit=1\ninterface RandomCatState {\n  id: string;\n  url: string;\n  width: number;\n  height: number;\n  loading: boolean;\n  error: null | AxiosError;\n  fetchData: (id?: string) => void;\n  debouncedFetch: () => void;\n}\n\nexport const useRandomCatStore = create<RandomCatState>((set, get) => {\n  let controller = new AbortController();\n\n  return {\n    id: "0",\n    url: "",\n    width: 0,\n    height: 0,\n    loading: false,\n    error: null,\n    fetchData: async (id?: string) => {\n      if (get().loading) controller.abort();\n\n      controller = new AbortController();\n      set({ loading: true });\n      try {\n        const result = await axios.get(\n          "https://api.thecatapi.com/v1/images/search?limit=1",\n          {\n            signal: controller.signal,\n          }\n        );\n        set({ ...result.data?.[0], loading: false });\n      } catch (error) {\n        assertAxiosError(error);\n        if (error?.code === "ERR_CANCELED") {\n          return;\n        }\n        set({ loading: false, error });\n      }\n    },\n    debouncedFetch: debounce(() => get().fetchData(), 200), // debouncing\n  };\n});\n\n')),(0,o.kt)("h2",{id:"ref"},"ref"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"github : ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/zustand"},"https://github.com/pmndrs/zustand"),"  "),(0,o.kt)("li",{parentName:"ul"},"React \uc0c1\ud0dc \uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac Zustand\uc758 \ucf54\ub4dc\ub97c \ud30c\ud5e4\uccd0\ubcf4\uc790 : ",(0,o.kt)("a",{parentName:"li",href:"https://ui.toast.com/weekly-pick/ko_20210812"},"https://ui.toast.com/weekly-pick/ko_20210812"),"  "),(0,o.kt)("li",{parentName:"ul"},"zustand deep dive : ",(0,o.kt)("a",{parentName:"li",href:"https://www.nextree.io/zustand/"},"https://www.nextree.io/zustand/"))))}p.isMDXComponent=!0}}]);