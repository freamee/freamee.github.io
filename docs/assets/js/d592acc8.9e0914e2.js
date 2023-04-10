"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[250],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(n),y=a,f=s["".concat(u,".").concat(y)]||s[y]||c[y]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},975:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},u=void 0,m={unversionedId:"util_resources/inventory_4_0/Server/Inventory/SetMetaData",id:"util_resources/inventory_4_0/Server/Inventory/SetMetaData",title:"SetMetaData",description:"Sets the metadata for an item found with the findBy options.",source:"@site/docs/util_resources/inventory_4_0/02-Server/01-Inventory/SetMetaData.md",sourceDirName:"util_resources/inventory_4_0/02-Server/01-Inventory",slug:"/util_resources/inventory_4_0/Server/Inventory/SetMetaData",permalink:"/util_resources/inventory_4_0/Server/Inventory/SetMetaData",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SetItemQuantity",permalink:"/util_resources/inventory_4_0/Server/Inventory/SetItemQuantity"},next:{title:"GetRegisteredItem",permalink:"/util_resources/inventory_4_0/Server/Items/GetRegisteredItem"}},p={},c=[],s={toc:c};function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sets the metadata for an item found with the findBy options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"inv: ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"findBy: ",(0,i.kt)("inlineCode",{parentName:"li"},"table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"name? ",(0,i.kt)("inlineCode",{parentName:"li"},"string")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"itemHash? ",(0,i.kt)("inlineCode",{parentName:"li"},"string")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"slot? ",(0,i.kt)("inlineCode",{parentName:"li"},"number")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"quantity? ",(0,i.kt)("inlineCode",{parentName:"li"},"number")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"meta? ",(0,i.kt)("inlineCode",{parentName:"li"},"ItemMetaData")))),(0,i.kt)("li",{parentName:"ul"},"metaData: ",(0,i.kt)("inlineCode",{parentName:"li"},"{ [string]: any }"))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"inv")," argument can be a number (as player ID) or the inventory uniqueID."),(0,i.kt)("p",null,"Returns the updated ",(0,i.kt)("inlineCode",{parentName:"p"},"InventoryItem"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'exports["avp_inv_4"]:SetMetaData(inv, findBy, metaData)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example"',title:'"Example"'},'local source = source\nlocal bodyArmourItem = exports["avp_inv_4"]:GetItemBy({ name = "body_armour" })\nif not bodyArmourItem then return end\n\nbodyArmourItem.meta.durability = 100\nbodyArmourItem.meta.drawable = 20\n\nexports["avp_inv_4"]:SetMetaData(source, { itemHash = bodyArmourItem.itemHash }, bodyArmourItem.meta)\n\n')))}y.isMDXComponent=!0}}]);