"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[509],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(r),f=i,m=g["".concat(c,".").concat(f)]||g[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5746:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={sidebar_position:4},c="Triggering",l={unversionedId:"util_resources/mapnotification/triggering",id:"util_resources/mapnotification/triggering",title:"Triggering",description:"Triggering the notifications.",source:"@site/docs/util_resources/mapnotification/triggering.md",sourceDirName:"util_resources/mapnotification",slug:"/util_resources/mapnotification/triggering",permalink:"/util_resources/mapnotification/triggering",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Presets",permalink:"/util_resources/mapnotification/not_presets"},next:{title:"Mobile Data Computer",permalink:"/category/mobile-data-computer"}},u={},p=[{value:"Serverside",id:"serverside",level:2},{value:"Clientside",id:"clientside",level:2}],g={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"triggering"},"Triggering"),(0,o.kt)("p",null,"Triggering the notifications."),(0,o.kt)("h2",{id:"serverside"},"Serverside"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Using export functions"',title:'"Using',export:!0,'functions"':!0},"exports['av_notify']:AQUIVER_NOTIFY(source, type, time, header, msg)\n\n-- Full example\nexports['av_notify']:AQUIVER_NOTIFY(source, 'error', 5, 'Error header', 'Error message content')\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Using events"',title:'"Using','events"':!0},"TriggerClientEvent('AV:NOTIFY:SEND', source, type, time, header, msg)\n\n-- Full example\nTriggerClientEvent('AV:NOTIFY:SEND', source, 'error', 5, 'Error header', 'Error message content')\n")),(0,o.kt)("h2",{id:"clientside"},"Clientside"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Using export functions"',title:'"Using',export:!0,'functions"':!0},"exports['av_notify']:AQUIVER_NOTIFY(type, time, header, msg)\n\n-- Full example\nexports['av_notify']:AQUIVER_NOTIFY('info', 5, 'Info header', 'Today was a good day.')\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Using events"',title:'"Using','events"':!0},"TriggerEvent('AV:NOTIFY:SEND', type, time, header, msg)\n\n-- Full example\nTriggerEvent('AV:NOTIFY:SEND', 'info', 5, 'Info header', 'Today was a good day.')\n")))}f.isMDXComponent=!0}}]);