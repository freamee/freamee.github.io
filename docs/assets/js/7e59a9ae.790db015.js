"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7007],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return p}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),p=o,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return r?t.createElement(f,a(a({ref:n},l),{},{components:r})):t.createElement(f,a({ref:n},l))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5369:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:3},c="Config",u={unversionedId:"util_resources/av_advanced_crypto/config",id:"util_resources/av_advanced_crypto/config",title:"Config",description:"Config overview",source:"@site/docs/util_resources/av_advanced_crypto/config.md",sourceDirName:"util_resources/av_advanced_crypto",slug:"/util_resources/av_advanced_crypto/config",permalink:"/util_resources/av_advanced_crypto/config",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Adding more Cryptocurrencies",permalink:"/util_resources/av_advanced_crypto/adding_more_crypto"},next:{title:"Export functions",permalink:"/util_resources/av_advanced_crypto/exports"}},l={},m=[{value:"Main Config",id:"main-config",level:2}],d={toc:m};function p(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"config"},"Config"),(0,i.kt)("p",null,"Config overview"),(0,i.kt)("h2",{id:"main-config"},"Main Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="source-files/server/server.ts"',title:'"source-files/server/server.ts"'},'Aquiver.Config.Framework = "ESX_LEGACY";\nAquiver.Config.SqlDebug = true;\nAquiver.Config.sqlResource = "oxmysql";\n\nAquiver.Config.checkResourceVersion = true;\n\nAquiver.Config.ResourceExtra = {\n    /** Fee percentage when depositing / withdrawing money from crypto. This one is not applied on the player if he has premium. */\n    feePercentage: 0.07,\n    /** Premium user feePercentage */\n    premiumFeePercentage: 0.03,\n\n    /** Maximum digits to be allowed. */\n    maxDigits: 5,\n    /** Maximum transactions to be stored in mysql. (sell & buy) */\n    maximumTransactionHistory: 100,\n    /** Maximum transactions to be showned in the NUI dashboard. (sell & buy) */\n    dashboardMaximumRecentTrades: 20,\n    /** Maximum days to be stored in mysql. (timestamp, symbol, price = chart) */\n    maximumDailyDataDays: 30,\n    /** Maximum history for cryptocurrencies stored in mysql. This is the crypto symbol charts. */\n    maximumHistoryEntry: 200,\n\n    /** Maximum wallet payments. (sent) */\n    maximumWalletRecentSendPayments: 25,\n    /** Maximum wallet payments. (received) */\n    maximumWalletRecentReceivedPayments: 25,\n    /** Maximum wallet notifications. */\n    maximumWalletNotifications: 25,\n\n    /** Maximum leaderboard amount to sent to the player NUI. */\n    maximumToplistEntry: 15,\n    /** Leaderboard updating ticker */\n    toplistUpdateRate: 60000 * 10,\n\n    /** Enable or disable leaderboard. */\n    leaderboardEnabled: true,\n\n    /** Enable or disable player anti flood. */\n    antiFloodSystem: true,\n    /** Flood timeout in miliseconds. (ms) */\n    floodSystemMS: 1000,\n\n    /** Enable or disable the debugger serverside */\n    enableDebug: true,\n\n    /** Enable or disable discord messages. */\n    enableDiscordBot: true,\n    /** Add your discord webhook URL here. */\n    discordWebhook: "",\n}\n')))}p.isMDXComponent=!0}}]);