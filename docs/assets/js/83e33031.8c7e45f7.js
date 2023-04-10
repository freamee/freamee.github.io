"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9066],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),y=i,f=s["".concat(u,".").concat(y)]||s[y]||m[y]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1890:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={},u=void 0,p={unversionedId:"util_resources/inventory_4_0/Server/Inventory/SetDurability",id:"util_resources/inventory_4_0/Server/Inventory/SetDurability",title:"SetDurability",description:"Sets the durability on an item found by the findBy search options.",source:"@site/docs/util_resources/inventory_4_0/02-Server/01-Inventory/SetDurability.md",sourceDirName:"util_resources/inventory_4_0/02-Server/01-Inventory",slug:"/util_resources/inventory_4_0/Server/Inventory/SetDurability",permalink:"/util_resources/inventory_4_0/Server/Inventory/SetDurability",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SaveAll",permalink:"/util_resources/inventory_4_0/Server/Inventory/SaveAll"},next:{title:"SetItemQuantity",permalink:"/util_resources/inventory_4_0/Server/Inventory/SetItemQuantity"}},c={},m=[],s={toc:m};function y(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sets the durability on an item found by the findBy search options."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"inv: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"findBy: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"name? ",(0,a.kt)("inlineCode",{parentName:"li"},"string")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"itemHash? ",(0,a.kt)("inlineCode",{parentName:"li"},"string")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"slot? ",(0,a.kt)("inlineCode",{parentName:"li"},"number")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"quantity? ",(0,a.kt)("inlineCode",{parentName:"li"},"number")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"meta? ",(0,a.kt)("inlineCode",{parentName:"li"},"ItemMetaData")))),(0,a.kt)("li",{parentName:"ul"},"durability: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"inv")," argument can be a number (as player ID) or the inventory uniqueID."),(0,a.kt)("p",null,"Returns the updated ",(0,a.kt)("inlineCode",{parentName:"p"},"InventoryItem"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'exports["avp_inv_4"]:SetDurability(inv, findBy, durability)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example"',title:'"Example"'},'local source = source\nexports["avp_inv_4"]:SetDurability(source, { name = "axe" }, 100)\n')))}y.isMDXComponent=!0}}]);