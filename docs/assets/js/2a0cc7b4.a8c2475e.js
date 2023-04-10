"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6142],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return r?t.createElement(d,a(a({ref:n},l),{},{components:r})):t.createElement(d,a({ref:n},l))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6387:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={},c=void 0,u={unversionedId:"util_resources/inventory_4_0/Creating Shops",id:"util_resources/inventory_4_0/Creating Shops",title:"Creating Shops",description:"Path: shared/shops.lua",source:"@site/docs/util_resources/inventory_4_0/04-Creating Shops.md",sourceDirName:"util_resources/inventory_4_0",slug:"/util_resources/inventory_4_0/Creating Shops",permalink:"/util_resources/inventory_4_0/Creating Shops",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"shortkeys",permalink:"/util_resources/inventory_4_0/Client/Statebags/shortkeys"},next:{title:"Registering Items",permalink:"/util_resources/inventory_4_0/Registering Items"}},l={},p=[],m={toc:p};function f(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Path: ",(0,i.kt)("inlineCode",{parentName:"p"},"shared/shops.lua")),(0,i.kt)("p",null,"Peds and Blips are created through the aquiver-lib resource."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'---@class ShopStaticData\n---@field shopName string\n---@field items ShopItem[]\n---@field blip? { sprite: number; colour:number; scale:number; }\n---@field locations { x: number; y:number; z:number; }[]\n---@field peds? { modelName: string; scenario?:string; coords: vector3; heading:number; }[]\n\n---@type { [string]: ShopStaticData }\nlocal Module <const> = {\n    ["General"] = {\n        shopName = "General Shop",\n        items = {\n            { name = "gold",   price = 200 },\n            { name = "cognac", price = 100 }\n        },\n        blip = {\n            sprite = 52,\n            colour = 69,\n            scale = 0.8\n        },\n        locations = {\n            vector3(223.832962, -792.619751, 30.695190)\n        },\n        peds = {\n            {\n                modelName = "mp_m_shopkeep_01",\n                scenario = \'WORLD_HUMAN_AA_COFFEE\',\n                coords = vec3(223.832962, -792.619751, 31.0),\n                heading = 270.311,\n            },\n        }\n    }\n}\n')))}f.isMDXComponent=!0}}]);