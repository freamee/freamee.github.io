"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1833],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,v=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return t?r.createElement(v,a(a({ref:n},d),{},{components:t})):r.createElement(v,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4583:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],u={},c=void 0,l={unversionedId:"util_resources/grid_inventory/Server/Events/onItemAdded",id:"util_resources/grid_inventory/Server/Events/onItemAdded",title:"onItemAdded",description:"Triggered when a inventory receives a new item. (with addItem or any other function)",source:"@site/docs/util_resources/grid_inventory/02-Server/03-Events/onItemAdded.md",sourceDirName:"util_resources/grid_inventory/02-Server/03-Events",slug:"/util_resources/grid_inventory/Server/Events/onItemAdded",permalink:"/util_resources/grid_inventory/Server/Events/onItemAdded",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"onInventoryOpen",permalink:"/util_resources/grid_inventory/Server/Events/onInventoryOpen"},next:{title:"onItemRemoved",permalink:"/util_resources/grid_inventory/Server/Events/onItemRemoved"}},d={},s=[],p={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Triggered when a inventory receives a new item. (with addItem or any other function)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"inventoryUniqueID: ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"item: ",(0,i.kt)("inlineCode",{parentName:"li"},"InventoryItem")),(0,i.kt)("li",{parentName:"ul"},"addedItemName: ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"addedQuantity: ",(0,i.kt)("inlineCode",{parentName:"li"},"number"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'addEventHandler("avp_grid_inventory:onItemAdded", function(inventoryUniqueID, item, addedItemName, addedQuantity)\n    -- Do something with it.\n    print(item.itemHash)\nend)\n')))}m.isMDXComponent=!0}}]);