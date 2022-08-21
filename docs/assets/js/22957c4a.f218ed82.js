"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8374],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),y=o,m=f["".concat(i,".").concat(y)]||f[y]||p[y]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2573:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],c={sidebar_position:4},i="Export functions",l={unversionedId:"util_resources/av_advanced_crypto/exports",id:"util_resources/av_advanced_crypto/exports",title:"Export functions",description:"How to use export functions with .lua",source:"@site/docs/util_resources/av_advanced_crypto/exports.md",sourceDirName:"util_resources/av_advanced_crypto",slug:"/util_resources/av_advanced_crypto/exports",permalink:"/util_resources/av_advanced_crypto/exports",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Config",permalink:"/util_resources/av_advanced_crypto/config"},next:{title:"Images & Video",permalink:"/util_resources/av_advanced_crypto/images_video"}},u={},p=[{value:"How to use export functions with .lua",id:"how-to-use-export-functions-with-lua",level:2}],f={toc:p};function y(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"export-functions"},"Export functions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="source-files/server/exports.ts"',title:'"source-files/server/exports.ts"'},'import { API } from "./api";\nimport { EventDecorator } from "./decorators";\n\nglobalThis.exports("open_crypto_panel", (source: number | string) => {\n    const Player = API.PlayerManager.getPlayer(source);\n    if (!Player) return console.error("source does not exists. (open_crypto_panel");\n\n    /** Get all of the onCryptoOpen events and execute them with the ->Player class. */\n    EventDecorator.getAllOfEvents("onCryptoOpen").forEach(a => a(Player))\n\n    Player.triggerNui({\n        event: "set-crypto-store",\n        data: {\n            path: "playerData.cryptoOpened",\n            value: true\n        }\n    });\n});\n\nglobalThis.exports("set_crypto_wallet_premium", (walletUsername: string, state: boolean) => {\n    const Wallet = API.WalletManager.getWalletByWalletUsername(walletUsername);\n    if (Wallet) return console.error("Wallet does not exist.");\n\n    if (typeof state !== "boolean") return console.error("state is not a boolean.");\n\n    Wallet.premium = state;\n    console.log(`${walletUsername} premium set to: ${state}.`);\n});\n')),(0,a.kt)("h2",{id:"how-to-use-export-functions-with-lua"},"How to use export functions with .lua"),(0,a.kt)("p",null,"You can trigger these functions from another resource (lua, or anything)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'exports["av_crypto"]:open_crypto_panel(source)\nexports["av_crypto"]:set_crypto_wallet_premium("freamee", true)\n')))}y.isMDXComponent=!0}}]);