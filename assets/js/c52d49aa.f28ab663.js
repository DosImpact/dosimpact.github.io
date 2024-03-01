"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[671],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(k,p(p({ref:e},m),{},{components:n})):a.createElement(k,p({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[d]="string"==typeof t?t:r,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1732:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},p="vectorbt - \uae30\ubcf8\uc608\uc81c",i={unversionedId:"g-da/quant/quant003",id:"g-da/quant/quant003",title:"vectorbt - \uae30\ubcf8\uc608\uc81c",description:"\uc804\ub7b5",source:"@site/docs/g-da/quant/quant003.md",sourceDirName:"g-da/quant",slug:"/g-da/quant/quant003",permalink:"/docs/g-da/quant/quant003",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-da/quant/quant003.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"dataAnalytics",previous:{title:"vectorbt - \uac00\uaca9\ub370\uc774\ud130 \uac00\uc838\uc624\uae30",permalink:"/docs/g-da/quant/quant002"},next:{title:"vectorbt - SystemDesign",permalink:"/docs/g-da/quant/quant004"}},l={},s=[{value:"\uc804\ub7b5",id:"\uc804\ub7b5",level:2},{value:"Basic code",id:"basic-code",level:2},{value:"About statistic",id:"about-statistic",level:2}],m={toc:s},d="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vectorbt---\uae30\ubcf8\uc608\uc81c"},"vectorbt - \uae30\ubcf8\uc608\uc81c"),(0,r.kt)("h2",{id:"\uc804\ub7b5"},"\uc804\ub7b5"),(0,r.kt)("p",null,"Long Position"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MA 10 > MA 30"),(0,r.kt)("li",{parentName:"ul"},"0 <= RSI <= 50")),(0,r.kt)("p",null,"Short Position"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MA 10 < MA 30"),(0,r.kt)("li",{parentName:"ul"},"50 < RSI")),(0,r.kt)("h2",{id:"basic-code"},"Basic code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"\nimport numpy as np\nimport pandas as pd\nimport ccxt\nimport ta\nimport vectorbt as vbt\n\n# data layer\ndf = vbt.CCXTData.download_symbol(\n    \"BTC/USDT\",\n    exchange='upbit',\n    config=None,\n    timeframe='4h',\n    start='1 months ago', # '1 months ago' | \n    end='now UTC',\n    delay=0.1,\n    limit=500,\n    retries=3,\n    show_progress=True,\n    params=None,\n    tqdm_kwargs=None\n)\n\n# signal layer\ndf['ma10'] = ta.trend.SMAIndicator(df['Close'], 10).sma_indicator()\ndf['ma30'] = ta.trend.SMAIndicator(df['Close'], 30).sma_indicator()\ndf['rsi'] = ta.momentum.RSIIndicator(df['Close']).rsi()\n\ndf['signal'] = np.where(  df['rsi'].between(0, 50), 1, -1)\ndf['signal2'] = np.select([ df['ma10']>df['ma30'], df['ma30']>df['ma10']], [1,-1],  0 )\n\ncond_go = [(df['signal'] == 1 ) & (df['signal2'] == 1),(df['signal'] == -1 ) & (df['signal2'] == -1)]\ndf['go'] = np.select(cond_go, [1,-1], 0)\n\n# anomalo laery\ndf['go'].value_counts()\n\n\n# trading layer\npf = vbt.Portfolio.from_signals(\n    df['Close'],\n    entries = (df['go']==1), # long \ud3ec\uc9c0\uc158 \uc9c4\uc785\n    exits = (df['go']==-1), # long \ud3ec\uc9c0\uc158 \ud0c8\ucd9c\n    fees = 0.0006, # \uac70\ub798\uc218\uc218\ub8cc ( bybit ) \uc8fc\ubb38\uc2dc post-only\n    # post-only True -> \ubb34\uc870\uac74 \uc9c0\uc815\ud55c \uac00\uaca9\uc5d0\ub9cc \uccb4\uacb0 / \uc218\uc218\ub8cc \ub0ae\uac8c \uc9c0\ubd88 \uac00\ub2a5 / \uc2e4\uc218\ud574\uc11c \uc190\ud574\ubcf4\ub294 \uacbd\uc6b0\uac00 \uc5c6\ub2e4. (\uc2dc\uc7a5\uac00 \uccb4\uacb0 \ub418\ub294 \ucf00\uc774\uc2a4)\n    tp_stop = 0.09, # take profit, 9% \uc774\uc775 > \uc775\uc808\n    sl_stop = 0.02, # stop loss, 2% \uc190\ud574 > \uc190\uc808\n    sl_trail = True, # \ud2b8\ub808\uc77c\ub9c1 \uc2a4\ud0d1\n    short_entries = (df['go']==-1), # short \ud3ec\uc9c0\uc158 \uc9c4\uc785\n    short_exits = (df['go']==1) # short \ud3ec\uc9c0\uc158 \ud0c8\ucd9c\n)\n\n# statistic layer\npf.stats()\n\n\n# visualize layer\npf.plot().show()\n\n# report layer\n\n\n\n")),(0,r.kt)("h2",{id:"about-statistic"},"About statistic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Start                         2024-02-01 12:00:00+00:00\nEnd                           2024-03-01 08:00:00+00:00\nPeriod                                 29 days 00:00:00\nStart Value                                       100.0\nEnd Value                                    109.572245\nTotal Return [%]                               9.572245\nBenchmark Return [%]                           44.81877\nMax Gross Exposure [%]                            100.0\nTotal Fees Paid                                0.833725\nMax Drawdown [%]                               3.399299\nMax Drawdown Duration                  19 days 00:00:00\nTotal Trades                                          7\nTotal Closed Trades                                   7\nTotal Open Trades                                     0\nOpen Trade PnL                                      0.0\nWin Rate [%]                                  71.428571\nBest Trade [%]                                10.168664\nWorst Trade [%]                               -2.572038\nAvg Winning Trade [%]                          2.720888\nAvg Losing Trade [%]                           -1.95435\nAvg Winning Trade Duration              1 days 13:36:00\nAvg Losing Trade Duration               1 days 08:00:00\nProfit Factor                                  3.459934\nExpectancy                                     1.367464\nSharpe Ratio                                   4.562917\nCalmar Ratio                                  63.540884\nOmega Ratio                                    1.573677\nSortino Ratio                                  8.072026\ndtype: object\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc2dc\uc791\uc77c\uc790 (Start):")," 2024\ub144 2\uc6d4 1\uc77c\ubd80\ud130 \ubc31\ud14c\uc2a4\ud305\uc774 \uc2dc\uc791\ub41c \ub0a0\uc9dc \ubc0f \uc2dc\uac04.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc885\ub8cc\uc77c\uc790 (End):")," 2024\ub144 3\uc6d4 1\uc77c\uae4c\uc9c0\uc758 \ubc31\ud14c\uc2a4\ud305 \uc885\ub8cc\uc77c\uc790 \ubc0f \uc2dc\uac04.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uae30\uac04 (Period):")," \uc804\uccb4 \ubc31\ud14c\uc2a4\ud305 \uae30\uac04\uc73c\ub85c, 29\uc77c \ub3d9\uc548 \uc9c4\ud589\ub428.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc2dc\uc791 \uc790\ubcf8\uae08 (Start Value):")," \ubc31\ud14c\uc2a4\ud305 \ucd08\uae30 \ud22c\uc790\uae08\uc73c\ub85c, 100.0 \ub2e8\uc704.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc885\ub8cc \uc790\ubcf8\uae08 (End Value):")," \ubc31\ud14c\uc2a4\ud305 \uc885\ub8cc \uc2dc\uc758 \uc790\ubcf8\uae08.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ucd1d \uc218\uc775\ub960 ","[%]"," (Total Return ","[%]","):")," \uc804\uccb4 \uae30\uac04 \ub3d9\uc548\uc758 \uc218\uc775\ub960. \ud604\uc7ac\ub294 9.572245%\ub85c \ub098\ud0c0\ub0a8.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ubca4\uce58\ub9c8\ud06c \uc218\uc775\ub960 ","[%]"," (Benchmark Return ","[%]","):")," \ubca4\uce58\ub9c8\ud06c \uc218\uc775\ub960\ub85c, \ud604\uc7ac\ub294 44.81877%\ub85c \ub098\ud0c0\ub0a8.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ucd5c\ub300 \ucd1d \ub178\ucd9c \ube44\uc728 ","[%]"," (Max Gross Exposure ","[%]","):")," \uc804\uccb4 \ud3ec\ud2b8\ud3f4\ub9ac\uc624\uc758 \ucd5c\ub300 \ub178\ucd9c \ube44\uc728\ub85c, \ud604\uc7ac\ub294 100.0%\ub85c \ub098\ud0c0\ub0a8.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ucd1d \uc218\uc218\ub8cc \uc9c0\ubd88\uc561 (Total Fees Paid):")," \uc804\uccb4 \ubc31\ud14c\uc2a4\ud305 \uae30\uac04 \ub3d9\uc548 \uc9c0\ubd88\ub41c \ucd1d \uc218\uc218\ub8cc.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ucd5c\ub300 \uc190\uc2e4\ub960 ","[%]"," (Max Drawdown ","[%]","):")," \ud3ec\ud2b8\ud3f4\ub9ac\uc624\uac00 \ucd5c\ub300\ub85c \uc190\uc2e4\uc744 \ubcf8 \ube44\uc728.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ucd5c\ub300 \uc190\uc2e4\ub960 \uc9c0\uc18d \uae30\uac04 (Max Drawdown Duration):")," \ucd5c\ub300 \uc190\uc2e4\ub960\uc774 \uc9c0\uc18d\ub41c \uae30\uac04.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ucd1d \uac70\ub798 \ud69f\uc218 (Total Trades):")," \uc804\uccb4 \uac70\ub798 \ud69f\uc218.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ucd1d \uccb4\uacb0\ub41c \uac70\ub798 \ud69f\uc218 (Total Closed Trades):")," \uc644\ub8cc\ub41c \uac70\ub798\uc758 \ucd1d \ud69f\uc218.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ucd1d \ubbf8\uccb4\uacb0 \uac70\ub798 \ud69f\uc218 (Total Open Trades):")," \uc544\uc9c1 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc740 \uac70\ub798\uc758 \ucd1d \ud69f\uc218.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ubbf8\uccb4\uacb0 \uac70\ub798 \uc190\uc775 (Open Trade PnL):")," \uc544\uc9c1 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc740 \uac70\ub798\uc758 \uc190\uc775.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc2b9\ub960 ","[%]"," (Win Rate ","[%]","):")," \uc804\uccb4 \uac70\ub798 \uc911 \uc774\uae34 \uac70\ub798\uc758 \ube44\uc728.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ucd5c\ub300 \uc218\uc775\ub960 ","[%]"," (Best Trade ","[%]","):")," \ub2e8\uc77c \uac70\ub798 \uc911 \ucd5c\ub300 \uc218\uc775\ub960.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ucd5c\ub300 \uc190\uc2e4\ub960 ","[%]"," (Worst Trade ","[%]","):")," \ub2e8\uc77c \uac70\ub798 \uc911 \ucd5c\ub300 \uc190\uc2e4\ub960.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ud3c9\uade0 \uc774\uae34 \uac70\ub798 \uc218\uc775\ub960 ","[%]"," (Avg Winning Trade ","[%]","):")," \uc774\uae34 \uac70\ub798\uc758 \ud3c9\uade0 \uc218\uc775\ub960.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ud3c9\uade0 \uc9c4 \uac70\ub798 \uc190\uc2e4\ub960 ","[%]"," (Avg Losing Trade ","[%]","):")," \uc9c4 \uac70\ub798\uc758 \ud3c9\uade0 \uc190\uc2e4\ub960.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ud3c9\uade0 \uc774\uae34 \uac70\ub798 \uae30\uac04 (Avg Winning Trade Duration):")," \uc774\uae34 \uac70\ub798\uc758 \ud3c9\uade0 \uae30\uac04.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ud3c9\uade0 \uc9c4 \uac70\ub798 \uae30\uac04 (Avg Losing Trade Duration):")," \uc9c4 \uac70\ub798\uc758 \ud3c9\uade0 \uae30\uac04.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc218\uc775 \uc694\uc778 (Profit Factor):")," \uc774\uae34 \uac70\ub798 \ub300\ube44 \uc9c4 \uac70\ub798\uc758 \ube44\uc728.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uae30\ub300\uac12 (Expectancy):")," \ud3c9\uade0\uc801\uc73c\ub85c \uae30\ub300\ub418\ub294 \uc218\uc775.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc0e4\ud504 \ube44\uc728 (Sharpe Ratio):")," \ud22c\uc790\uc5d0 \ub300\ud55c \ub9ac\uc2a4\ud06c \ub300\ube44 \uc218\uc775\uc758 \ube44\uc728.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uce7c\ub9c8 \ube44\uc728 (Calmar Ratio):")," \ucd5c\ub300 \uc190\uc2e4 \ub300\ube44 \uc5f0\uac04 \uc218\uc775\uc758 \ube44\uc728.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc624\uba54\uac00 \ube44\uc728 (Omega Ratio):")," \uc774\uae34 \uac70\ub798\uc640 \uc9c4 \uac70\ub798\uc758 \ube44\uc728\uc744 \uace0\ub824\ud55c \uce21\uc815 \uc9c0\ud45c.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uc18c\ub974\ud2f0\ub178 \ube44\uc728 (Sortino Ratio):")," \ub9ac\uc2a4\ud06c\ub97c \uace0\ub824\ud558\uc5ec \uacc4\uc0b0\ub41c \uc218\uc775 \ub300\ube44 \ube44\uc728."))))}c.isMDXComponent=!0}}]);