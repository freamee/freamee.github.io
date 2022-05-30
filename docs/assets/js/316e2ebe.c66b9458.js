"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[826],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4543:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},s="Presets",u={unversionedId:"util_resources/mapnotification/not_presets",id:"util_resources/mapnotification/not_presets",title:"Presets",description:"Create notification styling presets.",source:"@site/docs/util_resources/mapnotification/not_presets.md",sourceDirName:"util_resources/mapnotification",slug:"/util_resources/mapnotification/not_presets",permalink:"/util_resources/mapnotification/not_presets",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Installation",permalink:"/util_resources/mapnotification/install"},next:{title:"Triggering",permalink:"/util_resources/mapnotification/triggering"}},c={},p=[{value:"Info",id:"info",level:2},{value:"Default preset examples",id:"default-preset-examples",level:2},{value:"Variables",id:"variables",level:3},{value:"RGB(A) coloring",id:"rgba-coloring",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"presets"},"Presets"),(0,a.kt)("p",null,"Create notification styling presets."),(0,a.kt)("h2",{id:"info"},"Info"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Presets are defined notification styles."),(0,a.kt)("br",null),"\nYou create them under a name, and you just call them with the name, and it will have every settings which set for them. (sound effects, style, etc.)"))),(0,a.kt)("h2",{id:"default-preset-examples"},"Default preset examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="examples"',title:'"examples"'},"createPreset('default', {\n    img = 'logo',\n    iconBg = 'rgb(40, 6, 63)',\n    iconColor = 'rgb(255,255,255)',\n    headerStripe = true,\n    bgHeader = false,\n    headerFontsize = '1',\n    msgFontSize = '0.8',\n    leftBorder = 'rgb(255, 123, 0)',\n    bgLeft = 'rgba(40, 6, 63, 0.45)',\n    bgRight = 'rgba(20, 20, 20, 0.5)',\n    textColor = 'rgb(255, 255, 255)',\n    headerColor = 'rgb(255, 255, 0)',\n    pulseAnimation = true,\n    -- soundEffect = '',\n    -- soundVolume = 0.015\n})\n\ncreatePreset('error', {\n    ikon = 'fas fa-times-circle',\n    iconBg = 'rgb(255, 0, 0)',\n    iconColor = 'rgb(255,255,255)',\n    headerStripe = true,\n    bgHeader = true,\n    headerFontsize = '1',\n    msgFontSize = '0.8',\n    leftBorder = 'rgb(255, 0, 0)',\n    bgLeft = 'rgba(200, 20, 20, 0.35)',\n    bgRight = 'rgba(45, 45, 45, 0.5)',\n    textColor = 'rgb(255, 255, 255)',\n    headerColor = 'rgb(255, 255, 255)',\n    pulseAnimation = true,\n    soundEffect = 'error.mp3',\n    soundVolume = 0.015\n})\n")),(0,a.kt)("h3",{id:"variables"},"Variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"img (String)")," Add your images in the html/img, folder to appear custom images as the notification icon."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ikon (String)")," You can use FontAwesome icons with this, if you have both ikon/img variable in your preset settings, then either of them will appear! Only set one, decide icon or image."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iconBg (String)")," Your icon background color."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iconColor (String)")," Your icon color. (Only work if you use variable 'ikon')"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bgHeader (Boolean)")," You can add full background to your headers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"headerStripe (Boolean)")," Under the header there is a small gradient line which you can enable/disable. (This option is not working if you have bgHeader = true)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"headerFontsize (Number)")," Sets the header font-size."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"msgFontSize (Number)")," Sets the message content font-size."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"leftBorder (String)")," Sets the notification left border color."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bgLeft (String)")," We have our notification background as gradient, this is our gradient starting color."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bgRight (String)")," Background gradient right side coloring."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"textColor (String)")," Message content text color."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"headerColor (String)")," Header text color."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pulseAnimation (Boolean)")," = Enable or disable the pulsating animation on your notification."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"soundEffect (String)")," Add sound effect to your notification. If you do not want your notification to have sfx, just simply comment it out or delete the variable. (I suggest .mp3)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"soundVolume (Number)")," Sound effect volume.")),(0,a.kt)("h3",{id:"rgba-coloring"},"RGB(A) coloring"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you want to use alpha in your ",(0,a.kt)("strong",{parentName:"p"},"RGB colorings"),", just simply modify the rgb(255,255,255) to rgba(255,255,255, .5)"))))}d.isMDXComponent=!0}}]);