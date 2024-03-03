"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[7178],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),g=a,f=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:7},s="python schedule",i={unversionedId:"g-da/quant/quant007",id:"g-da/quant/quant007",title:"python schedule",description:"\uc2a4\ucf00\uc974 \ubb38\uc11c",source:"@site/docs/g-da/quant/quant007.md",sourceDirName:"g-da/quant",slug:"/g-da/quant/quant007",permalink:"/docs/g-da/quant/quant007",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-da/quant/quant007.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"dataAnalytics",previous:{title:"telegram \uc54c\ub9bc API \uc5f0\ub3d9",permalink:"/docs/g-da/quant/quant006"},next:{title:"vectorbt - template",permalink:"/docs/g-da/quant/quant008"}},l={},d=[{value:"\uc2a4\ucf00\uc974 \ubb38\uc11c",id:"\uc2a4\ucf00\uc974-\ubb38\uc11c",level:2},{value:"\uc608) vt - ScheduleManager",id:"\uc608-vt---schedulemanager",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-schedule"},"python schedule"),(0,a.kt)("h2",{id:"\uc2a4\ucf00\uc974-\ubb38\uc11c"},"\uc2a4\ucf00\uc974 \ubb38\uc11c"),(0,a.kt)("p",null,"\ubb38\uc11c : ",(0,a.kt)("a",{parentName:"p",href:"https://schedule.readthedocs.io/en/stable/"},"https://schedule.readthedocs.io/en/stable/"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'# $ pip install schedule\n\nimport schedule\nimport time\n\ndef job():\n    print("I\'m working...")\n\nschedule.every(10).minutes.do(job)\nschedule.every().hour.do(job)\nschedule.every().day.at("10:30").do(job)\nschedule.every().monday.do(job)\nschedule.every().wednesday.at("13:15").do(job)\nschedule.every().day.at("12:42", "Europe/Amsterdam").do(job)\nschedule.every().minute.at(":17").do(job)\n\nwhile True:\n    schedule.run_pending()\n    time.sleep(1)\n\n')),(0,a.kt)("h2",{id:"\uc608-vt---schedulemanager"},"\uc608) vt - ScheduleManager"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"\nimport numpy as np\nimport pandas as pd\nimport ccxt\nimport ta\nimport vectorbt as vbt\nimport requests\n\ndef engulfing_rsi():\n    df = vbt.CCXTData.download_symbol(\n        \"BTC/USDT\",\n        exchange='upbit',\n        config=None,\n        timeframe='4h',\n        start='1 months ago', # '1 months ago' | \n        end='now UTC',\n        delay=0.1,\n        limit=500,\n        retries=3,\n        show_progress=True,\n        params=None,\n        tqdm_kwargs=None\n    )\n    df['signal_engulfing'] = 0\n    \n    for current in range(1, len(df.index)):\n        previous = current - 1\n        if df.iat[current, 3] > df.iat[previous, 0]:\n            if df.iat[current, 0] < df.iat[previous, 3]:\n                df.iat[current, 5] = 1\n        elif df.iat[current, 3] < df.iat[previous, 0]:\n            if df.iat[current, 0] > df.iat[previous, 3]:\n                df.iat[current, 5] = -1\n\n    df['rsi'] = ta.momentum.RSIIndicator(df['Close']).rsi()\n    cond_rsi = [ df['rsi'] < 30, df['rsi'] > 60 ]\n    df['signal_rsi'] = np.select(cond_rsi, [1,-1], 0)\n    \n    cond_go = [ (df['signal_engulfing'] == 1) & (df['signal_rsi'] == 1), \n               (df['signal_engulfing'] == -1) & (df['signal_rsi'] == -1)  ]\n    df['go'] =np.select(cond_go, [1, -1], 0)\n    \n    pf = vbt.Portfolio.from_signals(df['Close'], \n                                entries = (df['go'] == 1), \n                                exits = (df['go'] == -1), \n                                fees = 0.0006,\n                                tp_stop = 0.09,\n                                sl_stop = 0.03,\n                                short_entries = (df['go'] == -1),\n                                short_exits = (df['go'] == 1)                                                         \n                               )\n    \n    return df['go'].iloc[-1], df['Close'].iloc[-1]\n\nlist_strategy = [engulfing_rsi]\n\ndef get_signal():\n    for strategy in list_strategy:\n        (go, closing_price) = strategy()\n        if go == 1:\n            requests.get(f'{base_url}{strategy.__name__}_LONG @ {closing_price}')\n        elif go == -1:\n            requests.get(f'{base_url}{strategy.__name__}_SHORT @ {closing_price}')\n\n\nbase_url = 'https://api.telegram.org/bot7021924962:AAET_xxx-0WKc/sendmessage?chat_id=-xxxx&text='\n\nget_signal()\nmanager = vbt.ScheduleManager()\nmanager.every().minutes.do(get_signal)\nmanager.start()\n")))}p.isMDXComponent=!0}}]);