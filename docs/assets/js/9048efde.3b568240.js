"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3360],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return y}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),s=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),v=s(r),y=o,f=v["".concat(a,".").concat(y)]||v[y]||p[y]||i;return r?t.createElement(f,c(c({ref:n},l),{},{components:r})):t.createElement(f,c({ref:n},l))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=v;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var s=2;s<i;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}v.displayName="MDXCreateElement"},5791:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return y},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],u={},a=void 0,s={unversionedId:"util_resources/grid_inventory/Server/Events/onInventoryOpen",id:"util_resources/grid_inventory/Server/Events/onInventoryOpen",title:"onInventoryOpen",description:"Triggered when player opens his inventory.",source:"@site/docs/util_resources/grid_inventory/02-Server/03-Events/onInventoryOpen.md",sourceDirName:"util_resources/grid_inventory/02-Server/03-Events",slug:"/util_resources/grid_inventory/Server/Events/onInventoryOpen",permalink:"/util_resources/grid_inventory/Server/Events/onInventoryOpen",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"onInventoryClose",permalink:"/util_resources/grid_inventory/Server/Events/onInventoryClose"},next:{title:"onItemAdded",permalink:"/util_resources/grid_inventory/Server/Events/onItemAdded"}},l={},p=[],v={toc:p};function y(e){var n=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},v,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Triggered when player opens his inventory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'RegisterNetEvent("avp_grid_inventory:onInventoryOpen", function()\n    local playerId = source\n    local weight = exports["avp_grid_inventory"]:GetWeight(playerId)\nend)\n')))}y.isMDXComponent=!0}}]);