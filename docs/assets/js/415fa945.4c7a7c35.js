"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1684],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),y=c(n),f=o,m=y["".concat(l,".").concat(f)]||y[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6175:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={},l=void 0,c={unversionedId:"util_resources/inventory_4_0/Server/Inventory/SetItemQuantity",id:"util_resources/inventory_4_0/Server/Inventory/SetItemQuantity",title:"SetItemQuantity",description:"Returns the quantity of all of the found items with the specified search options.",source:"@site/docs/util_resources/inventory_4_0/02-Server/01-Inventory/SetItemQuantity.md",sourceDirName:"util_resources/inventory_4_0/02-Server/01-Inventory",slug:"/util_resources/inventory_4_0/Server/Inventory/SetItemQuantity",permalink:"/util_resources/inventory_4_0/Server/Inventory/SetItemQuantity",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SetDurability",permalink:"/util_resources/inventory_4_0/Server/Inventory/SetDurability"},next:{title:"SetMetaData",permalink:"/util_resources/inventory_4_0/Server/Inventory/SetMetaData"}},p={},s=[],y={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns the quantity of all of the found items with the specified search options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"inv: ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"name: ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"quantity: ",(0,i.kt)("inlineCode",{parentName:"li"},"number"))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"inv")," argument can be a number (as player ID) or the inventory uniqueID."),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'exports["avp_inv_4"]:SetItemQuantity(inv, name, quantity)\n')))}f.isMDXComponent=!0}}]);