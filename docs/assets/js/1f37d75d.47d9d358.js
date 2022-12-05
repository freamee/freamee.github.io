"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7217],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5486:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:6},s="Attachments",l={unversionedId:"free_resources/aquiver_api_lua/attachments",id:"free_resources/aquiver_api_lua/attachments",title:"Attachments",description:"While registering attachments make sure you make it in a shared .lua file, which is requested both on the server and clientside.",source:"@site/docs/free_resources/aquiver_api_lua/attachments.md",sourceDirName:"free_resources/aquiver_api_lua",slug:"/free_resources/aquiver_api_lua/attachments",permalink:"/free_resources/aquiver_api_lua/attachments",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Utils",permalink:"/free_resources/aquiver_api_lua/utils"},next:{title:"Objects",permalink:"/free_resources/aquiver_api_lua/objects"}},u={},p=[{value:"Registering attachments",id:"registering-attachments",level:2},{value:"Adding attachment to entities",id:"adding-attachment-to-entities",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"attachments"},"Attachments"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While registering attachments make sure you make it in a ",(0,i.kt)("strong",{parentName:"p"},"shared .lua")," file, which is requested both on the server and clientside."))),(0,i.kt)("h2",{id:"registering-attachments"},"Registering attachments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Register single"',title:'"Register','single"':!0},'Shared.AttachmentManager:registerOne("bucket", {\n    model = "prop_barrel_02a",\n    boneId = 0,\n    x = 0.0,\n    y = 0.45,\n    z = 0.5,\n    rx = 0.0,\n    ry = 0.0,\n    rz = 0.0\n})\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Register many"',title:'"Register','many"':!0},'Shared.AttachmentManager:registerMany({\n    -- AVP_BOTTLER ATTACHMENTS (BOTTLES BY SINGLE)\n    ["object_bottler_1"] = {\n        model = "prop_amb_beer_bottle",\n        boneId = 0,\n        x = 0.2,\n        y = -0.6075,\n        z = 0.20,\n        rx = 0.0,\n        ry = -27.0,\n        rz = 0.0\n    },\n    ["object_bottler_2"] = {\n        model = "prop_amb_beer_bottle",\n        boneId = 0,\n        x = 0.2,\n        y = -0.319,\n        z = 0.20,\n        rx = 0.0,\n        ry = -27.0,\n        rz = 0.0\n    },\n})\n')),(0,i.kt)("h2",{id:"adding-attachment-to-entities"},"Adding attachment to entities"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="To object"',title:'"To','object"':!0},'local aObject = Server.ObjectManager:get(objectID)\nif not aObject then return end\naObject:addAttachment("object_bottler_1")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="To player"',title:'"To','player"':!0},'local aPlayer = Server.PlayerManaget:get(source)\nif not aPlayer then return end\naPlayer:addAttachment("bucket")\n')))}d.isMDXComponent=!0}}]);