"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3656],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,y=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1292:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={},u=void 0,c={unversionedId:"util_resources/grid_inventory/Server/Inventory/AddItem",id:"util_resources/grid_inventory/Server/Inventory/AddItem",title:"AddItem",description:"Add an item to an inventory.",source:"@site/docs/util_resources/grid_inventory/02-Server/01-Inventory/AddItem.md",sourceDirName:"util_resources/grid_inventory/02-Server/01-Inventory",slug:"/util_resources/grid_inventory/Server/Inventory/AddItem",permalink:"/util_resources/grid_inventory/Server/Inventory/AddItem",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Installation",permalink:"/util_resources/grid_inventory/Installation"},next:{title:"CanCarryItem",permalink:"/util_resources/grid_inventory/Server/Inventory/CanCarryItem"}},p={},s=[],m={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Add an item to an inventory."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"inv: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"itemName: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"quantity?: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"nil")),(0,o.kt)("li",{parentName:"ul"},"meta?: ",(0,o.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"nil"))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"inv")," argument can be a number (as player ID) or the inventory uniqueID."),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"response_message"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"InventoryItem")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'exports["avp_grid_inventory"]:AddItem(inv, itemName, quantity, meta)\n')))}d.isMDXComponent=!0}}]);