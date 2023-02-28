"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7538],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),y=i,f=s["".concat(u,".").concat(y)]||s[y]||m[y]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3546:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={},u=void 0,p={unversionedId:"util_resources/grid_inventory/Server/Inventory/GetItemsBy",id:"util_resources/grid_inventory/Server/Inventory/GetItemsBy",title:"GetItemsBy",description:"Returns multiple items with the specified search options.",source:"@site/docs/util_resources/grid_inventory/02-Server/01-Inventory/GetItemsBy.md",sourceDirName:"util_resources/grid_inventory/02-Server/01-Inventory",slug:"/util_resources/grid_inventory/Server/Inventory/GetItemsBy",permalink:"/util_resources/grid_inventory/Server/Inventory/GetItemsBy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"GetItemQuantityBy",permalink:"/util_resources/grid_inventory/Server/Inventory/GetItemQuantityBy"},next:{title:"GetPropItemByPropId",permalink:"/util_resources/grid_inventory/Server/Inventory/GetPropItemByPropId"}},c={},m=[],s={toc:m};function y(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Returns multiple items with the specified search options."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"inv: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"findBy: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"name? ",(0,a.kt)("inlineCode",{parentName:"li"},"string")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"itemHash? ",(0,a.kt)("inlineCode",{parentName:"li"},"string")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"x? ",(0,a.kt)("inlineCode",{parentName:"li"},"number")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"y? ",(0,a.kt)("inlineCode",{parentName:"li"},"number")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"isWeared? ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"meta? ",(0,a.kt)("inlineCode",{parentName:"li"},"ItemMetaData"))))),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"inv")," argument can be a number (as player ID) or the inventory uniqueID."),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"InventoryItem[]")," (as table)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'exports["avp_grid_inventory"]:GetItemsBy(inv, findBy)\n')))}y.isMDXComponent=!0}}]);