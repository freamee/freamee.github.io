"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3121],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3525:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s=void 0,u={unversionedId:"util_resources/inventory_4_0/Registering Items",id:"util_resources/inventory_4_0/Registering Items",title:"Registering Items",description:"Info",source:"@site/docs/util_resources/inventory_4_0/06-Registering Items.md",sourceDirName:"util_resources/inventory_4_0",slug:"/util_resources/inventory_4_0/Registering Items",permalink:"/util_resources/inventory_4_0/Registering Items",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"Creating Shops",permalink:"/util_resources/inventory_4_0/Creating Shops"},next:{title:"Crafting",permalink:"/util_resources/inventory_4_0/Crafting"}},c={},p=[{value:"Info",id:"info",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2},{value:"Use function example",id:"use-function-example",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"info"},"Info"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You should register all of your items in the inventory resource."),(0,i.kt)("p",{parentName:"div"},"If you want you can create an export function for the RegisterItem function, ",(0,i.kt)("strong",{parentName:"p"},"but if the resource which is registering the new item starts slower, then the item will not be added to the inventory and may be deleted.")))),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"---@field label string\n---@field tradable boolean\n---@field deletable boolean\n---@field stackable boolean\n---@field description string\n---@field weight number\n---@field category string\n---@field defaultMeta InventoryItemMetaData\n---@field usable boolean\n---@field droppedModel string\n---@field weaponHash number | string\n---@field allowedAttachments string[]\n---@field generateSerial boolean\n---@field server? { export?: string; onUseDeleteAmount?:number; }\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example"',title:'"Example"'},'ScriptShared.Items:Add("money", {\n    stackable = true,\n    deletable = true,\n    tradable = true,\n    label = "Money",\n    weight = 0.0,\n    category = "Currency"\n})\n')),(0,i.kt)("h2",{id:"use-function-example"},"Use function example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example"',title:'"Example"'},'ScriptShared.Items:Add("gold", {\n    stackable = true,\n    deletable = true,\n    tradable = true,\n    label = "Gold",\n    weight = 1.5,\n    usable = true,\n    category = "Raw material",\n    server = {\n        export = "resource_name.any_function_name",\n        onUseDeleteAmount = 1\n    }\n})\n')),(0,i.kt)("p",null,"You should create the export function in the resource which was specified in the server.export variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Export function in the another resource"',title:'"Export',function:!0,in:!0,the:!0,another:!0,'resource"':!0},'export("any_function_name", function(source, item)\n    print(source)\n    print(json.encode(item, { indent = true }))\nend)\n')))}d.isMDXComponent=!0}}]);