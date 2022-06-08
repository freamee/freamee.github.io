"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5869],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3082:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:2},s="Installation",c={unversionedId:"casino_resources/texasholdempoker/install",id:"casino_resources/texasholdempoker/install",title:"Installation",description:"Installing & dependencies.",source:"@site/docs/casino_resources/texasholdempoker/install.md",sourceDirName:"casino_resources/texasholdempoker",slug:"/casino_resources/texasholdempoker/install",permalink:"/casino_resources/texasholdempoker/install",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"About",permalink:"/casino_resources/texasholdempoker/about"},next:{title:"Creating more tables",permalink:"/casino_resources/texasholdempoker/addingtables"}},u={},p=[{value:"Dependencies",id:"dependencies",level:2},{value:"Install",id:"install",level:2},{value:"Paths",id:"paths",level:3},{value:"Aquiver module config",id:"aquiver-module-config",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Installing & dependencies."),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Mysql (npm will automatically install it for you and will be packed.)"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","NodeJS (for installing with npm.)"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Server version atleast 4752. (to support lua54 & escrow)"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Aquiver module supported framework & mysql resource. See: ",(0,l.kt)("a",{parentName:"li",href:"/aquiver_module/about"},"Aquiver module compatibles"))),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Extract the .zip and copy the folder in your fivem resources folder. You will own two folders after the purchase, one for the table modelling prop and one for the script."),(0,l.kt)("li",{parentName:"ol"},"Install the npm dependencies, by starting the install_dep.bat. ",(0,l.kt)("inlineCode",{parentName:"li"},"path: dev/install_dep.bat")),(0,l.kt)("li",{parentName:"ol"},"Import the .sql file into your database."),(0,l.kt)("li",{parentName:"ol"},"Create or modify the locale files, we have two locale files, because we needed one also for the html."),(0,l.kt)("li",{parentName:"ol"},"Set your framework and sql resource in the ",(0,l.kt)("inlineCode",{parentName:"li"},"server.ts")," file."),(0,l.kt)("li",{parentName:"ol"},"Set your framework in the ",(0,l.kt)("inlineCode",{parentName:"li"},"client.ts")," file."),(0,l.kt)("li",{parentName:"ol"},"start PokerTypescript"),(0,l.kt)("li",{parentName:"ol"},"start pokerasztal")),(0,l.kt)("h3",{id:"paths"},"Paths"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Locale Server & Client side: ",(0,l.kt)("inlineCode",{parentName:"li"},"source-files/src/shared/locales.ts")),(0,l.kt)("li",{parentName:"ul"},"Locale HTML: ",(0,l.kt)("inlineCode",{parentName:"li"},"html/js/locale.js")),(0,l.kt)("li",{parentName:"ul"},"Lua Config: ",(0,l.kt)("inlineCode",{parentName:"li"},"files/sv_config.lua"))),(0,l.kt)("h3",{id:"aquiver-module-config"},"Aquiver module config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as Aquiver from '@freamee/server';\n\nAquiver.Config.Framework = 'ESX_LEGACY';\nAquiver.Config.SqlDebug = false;\n/** Select your mysql resource handler. */\nAquiver.Config.sqlResource = 'oxmysql';\n/** Set it to false if you want to use accounts like: bank, black_money, etc. */\nAquiver.Config.ResourceExtra.useItems = true;\n/** Selected account type, leave it if you use the resource with items. */\nAquiver.Config.ResourceExtra.selectedAccount = \"bank\";\n/** Selected item type, leave it if you use the resource with accounts. */\nAquiver.Config.ResourceExtra.selectedItem = \"chips\";\n")))}d.isMDXComponent=!0}}]);