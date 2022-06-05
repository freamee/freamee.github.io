"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5869],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3082:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},s="Installation",c={unversionedId:"casino_resources/texasholdempoker/install",id:"casino_resources/texasholdempoker/install",title:"Installation",description:"Installing & dependencies.",source:"@site/docs/casino_resources/texasholdempoker/install.md",sourceDirName:"casino_resources/texasholdempoker",slug:"/casino_resources/texasholdempoker/install",permalink:"/casino_resources/texasholdempoker/install",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"About",permalink:"/casino_resources/texasholdempoker/about"},next:{title:"Using with inventory items",permalink:"/casino_resources/texasholdempoker/usingwithitems"}},p={},u=[{value:"Dependencies",id:"dependencies",level:2},{value:"Install",id:"install",level:2},{value:"Paths",id:"paths",level:3},{value:"Database connecting",id:"database-connecting",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Installing & dependencies."),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Mysql (npm will automatically install it for you and will be packed.)"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","NodeJS (for installing with npm.)"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Server version atleast 4752. (to support lua54 & escrow)")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Unzip the rar file, and copy the folder in your fivem resources folder. You will own two folders after the purchase, one for the table modelling prop and one for the script."),(0,o.kt)("li",{parentName:"ol"},"After you put the folders in the resources, we need to install the required dependencies for Typescript. (More information below)"),(0,o.kt)("li",{parentName:"ol"},"Import the .sql file into your database, do not forget to modify the .sql selected database. (currently USE 'testserver';)"),(0,o.kt)("li",{parentName:"ol"},"Create or modify the locale files, we have two locale files, because we needed one also for the html."),(0,o.kt)("li",{parentName:"ol"},"Modify the config.lua file."),(0,o.kt)("li",{parentName:"ol"},"start PokerTypescript"),(0,o.kt)("li",{parentName:"ol"},"start pokerasztal")),(0,o.kt)("h3",{id:"paths"},"Paths"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Locale Server & Client side: ",(0,o.kt)("inlineCode",{parentName:"li"},"source-files/src/shared/locales.ts")),(0,o.kt)("li",{parentName:"ul"},"Locale HTML: ",(0,o.kt)("inlineCode",{parentName:"li"},"html/js/locale.js")),(0,o.kt)("li",{parentName:"ul"},"Lua Config: ",(0,o.kt)("inlineCode",{parentName:"li"},"files/sv_config.lua"))),(0,o.kt)("h3",{id:"database-connecting"},"Database connecting"),(0,o.kt)("p",null,"We are using your ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql_connection_string")," from the server.cfg in order to connect to your database."))}m.isMDXComponent=!0}}]);