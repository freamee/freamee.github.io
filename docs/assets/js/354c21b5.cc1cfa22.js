"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2458],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3259:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:6},l="\ud83d\udcbb Developing",c={unversionedId:"aquiver_module/developer",id:"aquiver_module/developer",title:"\ud83d\udcbb Developing",description:"Type definitions.",source:"@site/docs/aquiver_module/developer.md",sourceDirName:"aquiver_module",slug:"/aquiver_module/developer",permalink:"/aquiver_module/developer",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"\ud83c\udf88 SQL setup & typing",permalink:"/aquiver_module/sql"},next:{title:"Roulette",permalink:"/category/roulette"}},u={},p=[{value:"Type definitions.",id:"type-definitions",level:2},{value:"Extending Player class to access all methods",id:"extending-player-class-to-access-all-methods",level:2}],m={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-developing"},"\ud83d\udcbb Developing"),(0,i.kt)("h2",{id:"type-definitions"},"Type definitions."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some are still missing, but the ones we needed are there."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(9347).Z,width:"1916",height:"1039"}),"\n",(0,i.kt)("img",{alt:"image",src:n(1928).Z,width:"1890",height:"1031"})),(0,i.kt)("h2",{id:"extending-player-class-to-access-all-methods"},"Extending Player class to access all methods"),(0,i.kt)("p",null,"You will be able to trigger every class functions which implemented in the ",(0,i.kt)("strong",{parentName:"p"},"Aquiver.ServerPlayer")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Typescript example"',title:'"Typescript','example"':!0},'class MyPlayer extends Aquiver.ServerPlayer {\n    constructor(source: number | string) {\n        super(source);\n\n        this.addItem("bread", 1, {\n            QBCore: {\n                slot: 2,\n                metadata: {\n                    yeeey: true\n                }\n            }\n        });\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Framework specified addItem (version 1.5) maybe its different in the newer versions."',title:'"Framework',specified:!0,addItem:!0,"(version":!0,"1.5)":!0,maybe:!0,its:!0,different:!0,in:!0,the:!0,newer:!0,'versions."':!0},"/**\n * This function adds an item.\n * @param item\n * @param amount\n * @param extra You can add additional framework specified arguments.\n */\naddItem(\n    item: string,\n    amount: number,\n    extra?: {\n        QBCore?: { slot?: number; metadata?: Record<string, any> };\n    }\n) {\n    switch (Config.Framework) {\n        case 'ESX_LEGACY': {\n            const Player = Frameworks.ESX.GetPlayerFromId(this.source);\n            Player.addInventoryItem(item, amount);\n            break;\n        }\n        case 'QBCORE': {\n            const Player = Frameworks.QBCore.Functions.GetPlayer(this.source);\n            Player.Functions.AddItem(item, amount, extra?.QBCore?.slot, extra?.QBCore?.metadata);\n            break;\n        }\n        case 'CUSTOM': {\n            globalThis.exports[GetCurrentResourceName()].addItem(this.source, item, amount);\n            break;\n        }\n    }\n}\n")))}d.isMDXComponent=!0},9347:function(e,t,n){t.Z=n.p+"assets/images/esx_types-ffc773f83ba5cc0e68d9cf15cf5f891b.png"},1928:function(e,t,n){t.Z=n.p+"assets/images/qbcore_types-1c4f022d79f7b5a2d32ea90720144a12.png"}}]);