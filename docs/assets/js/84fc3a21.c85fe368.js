"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[866],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},121:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:2},s="Installation",u={unversionedId:"job_resources/golf/install",id:"job_resources/golf/install",title:"Installation",description:"Installing & dependencies.",source:"@site/docs/job_resources/golf/install.md",sourceDirName:"job_resources/golf",slug:"/job_resources/golf/install",permalink:"/job_resources/golf/install",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"About",permalink:"/job_resources/golf/about"},next:{title:"Common issues / FAQ",permalink:"/job_resources/golf/common_issues"}},c={},d=[{value:"Dependencies",id:"dependencies",level:2},{value:"Install",id:"install",level:2},{value:"Enabling the leaderboard",id:"enabling-the-leaderboard",level:3}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Installing & dependencies."),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Server version atleast 4752. (to support lua54 & escrow)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Mysql datababase (if you want the leaderboard feature)")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Unzip the rar file, and copy the selected version folder to your Fivem resources folder."),(0,a.kt)("li",{parentName:"ol"},"Edit the commands in the server/server.lua folder, or make the events for your pleasure wherever you want."),(0,a.kt)("li",{parentName:"ol"},"Make the locale files for your nationality, if you do not want to edit the variables, just edit the default en.lua."),(0,a.kt)("li",{parentName:"ol"},"Change the config.lua file as you wish, but we do not recommend further editig in this, because you can fuck up many calculating things.")),(0,a.kt)("h3",{id:"enabling-the-leaderboard"},"Enabling the leaderboard"),(0,a.kt)("p",null,"If you want to enable the leaderboard, then you will need a mysql and you will need to import the ",(0,a.kt)("strong",{parentName:"p"},"golf.sql")," into your database.",(0,a.kt)("br",null),"\nAfter you successfully imported it, you just need to change the config.lua Enabled boolean."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="config.lua"',title:'"config.lua"'},"Config.Toplist = {\n    Enabled = true, -- enable or disable the command (it will still gather information to the mysql)\n    Command = 'golfboard',\n    Count = 10 -- how many players shown in the leaderboards, html.\n}\n")))}f.isMDXComponent=!0}}]);