"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1956],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return v}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(r),v=o,f=y["".concat(u,".").concat(v)]||y[v]||p[v]||i;return r?t.createElement(f,a(a({ref:n},c),{},{components:r})):t.createElement(f,a({ref:n},c))}));function v(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7985:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={},u=void 0,l={unversionedId:"util_resources/grid_inventory/Server/Inventory/GetInventory",id:"util_resources/grid_inventory/Server/Inventory/GetInventory",title:"GetInventory",description:"Returns the Inventory class itself.",source:"@site/docs/util_resources/grid_inventory/02-Server/01-Inventory/GetInventory.md",sourceDirName:"util_resources/grid_inventory/02-Server/01-Inventory",slug:"/util_resources/grid_inventory/Server/Inventory/GetInventory",permalink:"/util_resources/grid_inventory/Server/Inventory/GetInventory",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"FriskTarget",permalink:"/util_resources/grid_inventory/Server/Inventory/FriskTarget"},next:{title:"GetInventoryClass",permalink:"/util_resources/grid_inventory/Server/Inventory/GetInventoryClass"}},c={},p=[],y={toc:p};function v(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},y,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns the Inventory class itself."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"inv: ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"string"))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"inv")," argument can be a number (as player ID) or the inventory uniqueID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'exports["avp_grid_inventory"]:GetInventory(inv)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example with stash. (Other inventory classes such as Player, will return other informations.)"',title:'"Example',with:!0,"stash.":!0,"(Other":!0,inventory:!0,classes:!0,such:!0,as:!0,"Player,":!0,will:!0,return:!0,other:!0,'informations.)"':!0},'--[[\n{\n    "stashY":5308.7,\n    "isPublic":true,\n    "maxWeight":10000,\n    "inventoryName":"House Safe",\n    "inventoryUniqueId": "stash-1",\n    "inventoryY":7,\n    "inventoryX":7,\n    "stashZ":101.5,\n    "observers":[],\n    "stashX":2942.91,\n    "type":"stash",\n    "items":[]\n}\n]]\n')))}v.isMDXComponent=!0}}]);