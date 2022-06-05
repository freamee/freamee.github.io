"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9592],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7639:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},s="Installation",c={unversionedId:"casino_resources/roulette/install",id:"casino_resources/roulette/install",title:"Installation",description:"Installing & dependencies.",source:"@site/docs/casino_resources/roulette/install.md",sourceDirName:"casino_resources/roulette",slug:"/casino_resources/roulette/install",permalink:"/casino_resources/roulette/install",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"About",permalink:"/casino_resources/roulette/about"},next:{title:"Modifying export functions",permalink:"/casino_resources/roulette/usingwithitems"}},u={},p=[{value:"Dependencies",id:"dependencies",level:2},{value:"Install",id:"install",level:2},{value:"Paths",id:"paths",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Installing & dependencies."),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Mysql (npm will automatically install it for you and will be packed.)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","NodeJS (for installing with npm.)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Server version atleast 4752. (to support lua54 & escrow)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Game build version +2060 (Need the casino dlcpack)")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Extract the .zip file and copy paste the content into your resources folder."),(0,a.kt)("li",{parentName:"ol"},"Open sv_config.lua file and modify the export functions for your framework."),(0,a.kt)("li",{parentName:"ol"},"We have a .ts config file which contains the translations and every other."),(0,a.kt)("li",{parentName:"ol"},"After you are done with the config file(.ts) you have to compile the files. If you modify even one thing, you will always need to recompile the code!")),(0,a.kt)("h3",{id:"paths"},"Paths"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Config (typescript): ",(0,a.kt)("inlineCode",{parentName:"li"},"source-files/src/shared/editable-config.ts")),(0,a.kt)("li",{parentName:"ul"},"Config (Lua): ",(0,a.kt)("inlineCode",{parentName:"li"},"sv_config.lua"))))}f.isMDXComponent=!0}}]);