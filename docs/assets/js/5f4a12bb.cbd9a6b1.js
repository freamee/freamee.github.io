"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7286],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=l.createContext({}),u=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return l.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),g=r,v=m["".concat(s,".").concat(g)]||m[g]||p[g]||a;return t?l.createElement(v,i(i({ref:n},c),{},{components:t})):l.createElement(v,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return i}});var l=t(7294),r=t(6010),a="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return g}});var l=t(7462),r=t(7294),a=t(6010),i=t(2389),o=t(7392),s=t(7094),u=t(2466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var n,t,i=e.lazy,m=e.block,g=e.defaultValue,v=e.values,d=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,o.l)(k,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===g?g:null!=(n=null!=g?g:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:f[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,s.U)(),x=h.tabGroupChoices,w=h.setTabGroupChoices,T=(0,r.useState)(N),E=T[0],S=T[1],C=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=x[d];null!=O&&O!==E&&k.some((function(e){return e.value===O}))&&S(O)}var G=function(e){var n=e.currentTarget,t=C.indexOf(n),l=k[t].value;l!==E&&(P(n),S(l),null!=d&&w(d,String(l)))},_=function(e){var n,t=null;switch(e.key){case"ArrowRight":var l,r=C.indexOf(e.currentTarget)+1;t=null!=(l=C[r])?l:C[0];break;case"ArrowLeft":var a,i=C.indexOf(e.currentTarget)-1;t=null!=(a=C[i])?a:C[C.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":m},b)},k.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return C.push(e)},onKeyDown:_,onFocus:G,onClick:G},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function g(e){var n=(0,i.Z)();return r.createElement(m,(0,l.Z)({key:String(n)},e))}},8726:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return g}});var l=t(7462),r=t(3366),a=(t(7294),t(3905)),i=t(5488),o=t(5162),s=["components"],u={sidebar_position:3},c="Exports",p={unversionedId:"free_resources/fivem_rpc/exports",id:"free_resources/fivem_rpc/exports",title:"Exports",description:"",source:"@site/docs/free_resources/fivem_rpc/exports.mdx",sourceDirName:"free_resources/fivem_rpc",slug:"/free_resources/fivem_rpc/exports",permalink:"/free_resources/fivem_rpc/exports",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Install",permalink:"/free_resources/fivem_rpc/install"},next:{title:"Serverside Object controller",permalink:"/category/serverside-object-controller"}},m={},g=[{value:"Adding new events",id:"adding-new-events",level:2},{value:"Add single local event",id:"add-single-local-event",level:4},{value:"Add single global event",id:"add-single-global-event",level:4},{value:"Add many local events (in key pair table)",id:"add-many-local-events-in-key-pair-table",level:4},{value:"Add many global events (in key pair table)",id:"add-many-global-events-in-key-pair-table",level:4},{value:"Examples",id:"examples",level:3},{value:"Triggering events",id:"triggering-events",level:2},{value:"Triggering local event",id:"triggering-local-event",level:4},{value:"Triggering global event",id:"triggering-global-event",level:4},{value:"Examples",id:"examples-1",level:3},{value:"Creating new listeners",id:"creating-new-listeners",level:2},{value:"Registering locally",id:"registering-locally",level:4},{value:"Registering globally",id:"registering-globally",level:4},{value:"Examples",id:"examples-2",level:3},{value:"Calling listeners",id:"calling-listeners",level:2},{value:"Server only",id:"server-only",level:3},{value:"Client only",id:"client-only",level:3},{value:"Shared",id:"shared",level:3},{value:"Browser / NUI / CEF - RPC",id:"browser--nui--cef---rpc",level:2},{value:"Events",id:"events",level:2}],v={toc:g};function d(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,l.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exports"},"Exports"),(0,a.kt)("h1",{id:"server--client-shared"},"Server & Client (Shared)"),(0,a.kt)("h2",{id:"adding-new-events"},"Adding new events"),(0,a.kt)("h4",{id:"add-single-local-event"},"Add single local event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'exports["fivem-rpc"]:on(eventName, cb)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"eventName: string"),(0,a.kt)("li",{parentName:"ul"},"cb: EventCallback")),(0,a.kt)("h4",{id:"add-single-global-event"},"Add single global event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'exports["fivem-rpc"]:onGlobal(eventName, cb)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"eventName: string"),(0,a.kt)("li",{parentName:"ul"},"cb: EventCallback")),(0,a.kt)("h4",{id:"add-many-local-events-in-key-pair-table"},"Add many local events (in key pair table)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'exports["fivem-rpc"]:onMany(e)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"e: Record<string, EventCallback>")),(0,a.kt)("h4",{id:"add-many-global-events-in-key-pair-table"},"Add many global events (in key pair table)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'exports["fivem-rpc"]:onGlobalMany(e)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"e: Record<string, EventCallback>")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"on",label:"on",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports['fivem-rpc']:on('onPlayerLogin', function(playerSource)\n    print(playerSource)\nend)\n"))),(0,a.kt)(o.Z,{value:"onGlobal",label:"onGlobal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports['fivem-rpc']:onGlobal('onPlayerLogin', function(playerSource)\n    print(playerSource)\nend)\n"))),(0,a.kt)(o.Z,{value:"onMany",label:"onMany",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports['fivem-rpc']:onMany({\n    ['onPlayerLogin'] = function(playerSource)\n        print(playerSource)\n    end,\n    ['onPlayerLogout'] = function(playerSource)\n        print(playerSource)\n    end\n})\n"))),(0,a.kt)(o.Z,{value:"onGlobalMany",label:"onGlobalMany",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports['fivem-rpc']:onGlobalMany({\n    ['onPlayerLogin'] = function(playerSource)\n        print(playerSource)\n    end,\n    ['onPlayerLogout'] = function(playerSource)\n        print(playerSource)\n    end\n})\n")))),(0,a.kt)("h2",{id:"triggering-events"},"Triggering events"),(0,a.kt)("h4",{id:"triggering-local-event"},"Triggering local event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'exports["fivem-rpc"]:trigger(eventName, args?)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"eventName: string"),(0,a.kt)("li",{parentName:"ul"},"args?: any")),(0,a.kt)("h4",{id:"triggering-global-event"},"Triggering global event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'exports["fivem-rpc"]:triggerGlobal(eventName, args?)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"eventName: string"),(0,a.kt)("li",{parentName:"ul"},"args?: any")),(0,a.kt)("h3",{id:"examples-1"},"Examples"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"trigger",label:"trigger",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'exports["fivem-rpc"]:trigger("onPlayerLogin", 2)\n'))),(0,a.kt)(o.Z,{value:"triggerGlobal",label:"triggerGlobal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'exports["fivem-rpc"]:triggerGlobal("onPlayerLogin", 2)\n')))),(0,a.kt)("h2",{id:"creating-new-listeners"},"Creating new listeners"),(0,a.kt)("h4",{id:"registering-locally"},"Registering locally"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'exports["fivem-rpc"]:register(eventName, cb)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"eventName: string"),(0,a.kt)("li",{parentName:"ul"},"cb: RemoteCallback")),(0,a.kt)("h4",{id:"registering-globally"},"Registering globally"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'exports["fivem-rpc"]:registerGlobal(eventName, cb)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"eventName: string"),(0,a.kt)("li",{parentName:"ul"},"cb: RemoteCallback")),(0,a.kt)("h3",{id:"examples-2"},"Examples"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"register",label:"register",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Registering the listener on clientside"',title:'"Registering',the:!0,listener:!0,on:!0,'clientside"':!0},'exports["fivem-rpc"]:register("isPlayerSwimming", function()\n    return IsPedSwimming(PlayerPedId())\nend)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Calling the event from server"',title:'"Calling',the:!0,event:!0,from:!0,'server"':!0},'local isSwimming = exports["fivem-rpc"]:callClient(source, "isPlayerSwimming")\nprint(isSwimming)\n'))),(0,a.kt)(o.Z,{value:"registerGlobal",label:"registerGlobal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Registering the listener on clientside"',title:'"Registering',the:!0,listener:!0,on:!0,'clientside"':!0},'exports["fivem-rpc"]:registerGlobal("isPlayerSwimming", function()\n    return IsPedSwimming(PlayerPedId())\nend)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Calling the event from server"',title:'"Calling',the:!0,event:!0,from:!0,'server"':!0},'local isSwimming = exports["fivem-rpc"]:callGlobalClient(source, "isPlayerSwimming")\nprint(isSwimming)\n')))),(0,a.kt)("h2",{id:"calling-listeners"},"Calling listeners"),(0,a.kt)("h3",{id:"server-only"},"Server only"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"callClient(source, eventName, args)"),(0,a.kt)("li",{parentName:"ul"},"callGlobalClient(source, eventName, args)")),(0,a.kt)("h3",{id:"client-only"},"Client only"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"callServer(eventName, args)"),(0,a.kt)("li",{parentName:"ul"},"callGlobalServer(eventName, args)")),(0,a.kt)("h3",{id:"shared"},"Shared"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"call(eventName, args)"),(0,a.kt)("li",{parentName:"ul"},"callGlobal(eventName, args)")),(0,a.kt)("h2",{id:"browser--nui--cef---rpc"},"Browser / NUI / CEF - RPC"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Require/import the browser.js(or .ts) file into your frontend."))),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- triggerGlobalServer(eventName: string, args?: any)\n- triggerGlobalClient(eventName: string, args?: any)\n- callGlobalServer<T>(eventName: string, args?:any): Promise<T>\n- callGlobalClient<T>(eventName: string, args?:any): Promise<T>\n")))}d.isMDXComponent=!0}}]);