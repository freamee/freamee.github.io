"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9239],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(r),y=o,v=m["".concat(c,".").concat(y)]||m[y]||s[y]||i;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6966:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],u={},c=void 0,l={unversionedId:"util_resources/grid_inventory/Server/Inventory/SetMaxWeight",id:"util_resources/grid_inventory/Server/Inventory/SetMaxWeight",title:"SetMaxWeight",description:"Sets the maximum weight on an inventory.",source:"@site/docs/util_resources/grid_inventory/02-Server/01-Inventory/SetMaxWeight.md",sourceDirName:"util_resources/grid_inventory/02-Server/01-Inventory",slug:"/util_resources/grid_inventory/Server/Inventory/SetMaxWeight",permalink:"/util_resources/grid_inventory/Server/Inventory/SetMaxWeight",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SetItemQuantity",permalink:"/util_resources/grid_inventory/Server/Inventory/SetItemQuantity"},next:{title:"SetMetaData",permalink:"/util_resources/grid_inventory/Server/Inventory/SetMetaData"}},p={},s=[],m={toc:s};function y(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sets the maximum weight on an inventory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"inv: ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"maxWeight: ",(0,i.kt)("inlineCode",{parentName:"li"},"number"))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"inv")," argument can be a number (as player ID) or the inventory uniqueID."),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'exports["avp_grid_inventory"]:SetMaxWeight(inv, maxWeight)\n')))}y.isMDXComponent=!0}}]);