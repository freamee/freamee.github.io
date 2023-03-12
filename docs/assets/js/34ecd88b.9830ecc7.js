"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5315],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return v}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),v=a,f=d["".concat(s,".").concat(v)]||d[v]||m[v]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),a=t(6010),o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(7462),a=t(7294),o=t(6010),i=t(2389),l=t(7392),s=t(7094),u=t(2466),c="tabList__CuJ",m="tabItem_LNqP";function d(e){var n,t,i=e.lazy,d=e.block,v=e.defaultValue,f=e.values,p=e.groupId,y=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.l)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===v?v:null!=(n=null!=v?v:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:g[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,E=N.setTabGroupChoices,I=(0,a.useState)(k),S=I[0],x=I[1],T=[],_=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=w[p];null!=O&&O!==S&&h.some((function(e){return e.value===O}))&&x(O)}var C=function(e){var n=e.currentTarget,t=T.indexOf(n),r=h[t].value;r!==S&&(_(n),x(r),null!=p&&E(p,String(r)))},R=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;t=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var o,i=T.indexOf(e.currentTarget)-1;t=null!=(o=T[i])?o:T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},y)},h.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:function(e){return T.push(e)},onKeyDown:R,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":S===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(g.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function v(e){var n=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},1368:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return v}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(5488),l=t(5162),s=["components"],u={},c="Install (ESX)",m={unversionedId:"util_resources/grid_inventory/Install-ESX",id:"util_resources/grid_inventory/Install-ESX",title:"Install (ESX)",description:"",source:"@site/docs/util_resources/grid_inventory/03-Install-ESX.md",sourceDirName:"util_resources/grid_inventory",slug:"/util_resources/grid_inventory/Install-ESX",permalink:"/util_resources/grid_inventory/Install-ESX",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"shortkeys",permalink:"/util_resources/grid_inventory/Client/Statebags/shortkeys"},next:{title:"Housing",permalink:"/category/housing"}},d={},v=[{value:"Modifications",id:"modifications",level:2},{value:"config.lua",id:"configlua",level:3},{value:"server/common.lua",id:"servercommonlua",level:3},{value:"server/functions.lua",id:"serverfunctionslua",level:3},{value:"server/main.lua",id:"servermainlua",level:3},{value:"server/classes/player.lua",id:"serverclassesplayerlua",level:3},{value:"Converting old items",id:"converting-old-items",level:2},{value:"AccountMoney as items",id:"accountmoney-as-items",level:2}],f={toc:v};function p(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-esx"},"Install (ESX)"),(0,o.kt)("p",null,"Installing & dependencies."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Modify the es_extended resource, follow the steps ahead."))),(0,o.kt)("h2",{id:"modifications"},"Modifications"),(0,o.kt)("h3",{id:"configlua"},"config.lua"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="config.lua"',title:'"config.lua"'},"Config.EnableDefaultInventory   = true\n")),(0,o.kt)("h3",{id:"servercommonlua"},"server/common.lua"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"old",label:"Old",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/common.lua"',title:'"server/common.lua"'},"MySQL.ready(function()\n  if not Config.OxInventory then\n    local items = MySQL.query.await('SELECT * FROM items')\n    for k, v in ipairs(items) do\n      ESX.Items[v.name] = {label = v.label, weight = v.weight, rare = v.rare, canRemove = v.can_remove}\n    end\n  else\n    TriggerEvent('__cfx_export_ox_inventory_Items', function(ref)\n      if ref then\n        ESX.Items = ref()\n      end\n    end)\n\n    AddEventHandler('ox_inventory:itemList', function(items)\n      ESX.Items = items\n    end)\n\n    while not next(ESX.Items) do\n      Wait(0)\n    end\n  end\n\n  ESX.RefreshJobs()\n\n  print(('[^2INFO^7] ESX ^5Legacy %s^0 initialized!'):format(GetResourceMetadata(GetCurrentResourceName(), \"version\", 0)))\n    \n  StartDBSync()\n  if Config.EnablePaycheck then\n        StartPayCheck()\n    end\nend)\n"))),(0,o.kt)(l.Z,{value:"new",label:"New",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/common.lua"',title:'"server/common.lua"'},'MySQL.ready(function()\n  AddEventHandler("avp_grid_inventory:itemListReq", function(itemsResponse)\n    ESX.Items = itemsResponse\n  end)\n\n  ESX.RefreshJobs()\n\n  print((\'[^2INFO^7] ESX ^5Legacy %s^0 initialized!\'):format(GetResourceMetadata(GetCurrentResourceName(), "version", 0)))\n    \n  StartDBSync()\n  if Config.EnablePaycheck then\n        StartPayCheck()\n    end\nend)\n')))),(0,o.kt)("h3",{id:"serverfunctionslua"},"server/functions.lua"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"old",label:"Old",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/functions.lua"',title:'"server/functions.lua"'},"function ESX.GetItemLabel(item)\n  if Config.OxInventory then\n    item = exports.ox_inventory:Items(item)\n    if item then\n      return item.label\n    end\n  end\n\n  if ESX.Items[item] then\n    return ESX.Items[item].label\n  else\n    print('[^3WARNING^7] Attemting to get invalid Item -> ^5' .. item .. \"^7\")\n  end\nend\n"))),(0,o.kt)(l.Z,{value:"new",label:"New",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/functions.lua"',title:'"server/functions.lua"'},'function ESX.GetItemLabel(item)\n  local item = exports["avp_grid_inventory"]:GetRegisteredItem(item)\n  if item then\n    return item.formatName\n  end\nend\n')))),(0,o.kt)("h3",{id:"servermainlua"},"server/main.lua"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Delete this section from the code."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Delete this from the server/main.lua"',title:'"Delete',this:!0,from:!0,the:!0,'server/main.lua"':!0},"  -- Inventory\n  if not Config.OxInventory then\n    if result.inventory and result.inventory ~= '' then\n      local inventory = json.decode(result.inventory)\n\n      for name, count in pairs(inventory) do\n        local item = ESX.Items[name]\n\n        if item then\n          foundItems[name] = count\n        else\n          print(('[^3WARNING^7] Ignoring invalid item ^5\"%s\"^7 for ^5\"%s^7\"'):format(name, identifier))\n        end\n      end\n    end\n\n    for name, item in pairs(ESX.Items) do\n      local count = foundItems[name] or 0\n      if count > 0 then\n        userData.weight = userData.weight + (item.weight * count)\n      end\n\n      table.insert(userData.inventory,\n        {name = name, count = count, label = item.label, weight = item.weight, usable = Core.UsableItemsCallbacks[name] ~= nil, rare = item.rare,\n         canRemove = item.canRemove})\n    end\n\n    table.sort(userData.inventory, function(a, b)\n      return a.label < b.label\n    end)\n  else\n    if result.inventory and result.inventory ~= '' then\n      userData.inventory = json.decode(result.inventory)\n    else\n      userData.inventory = {}\n    end\n  end\n")),(0,o.kt)("h3",{id:"serverclassesplayerlua"},"server/classes/player.lua"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Add this function to the player class."',title:'"Add',this:!0,function:!0,to:!0,the:!0,player:!0,'class."':!0},"function self.setAccountOverride(accountName, money, reason)\n    reason = reason or 'unknown'\n    if not tonumber(money) then \n        print(('[^1ERROR^7] Tried To Set Account ^5%s^0 For Player ^5%s^0 To An Invalid Number -> ^5%s^7'):format(accountName, self.playerId, money))\n        return\n    end\n    if money >= 0 then\n        local account = self.getAccount(accountName)\n        \n        if account then\n            money = account.round and ESX.Math.Round(money) or money\n            self.accounts[account.index].money = money\n\n            self.triggerEvent('esx:setAccountMoney', account)\n            TriggerEvent('esx:setAccountMoney', self.source, accountName, money, reason)\n        else\n            print(('[^1ERROR^7] Tried To Set Invalid Account ^5%s^0 For Player ^5%s^0!'):format(accountName, self.playerId))\n        end\n    else\n        print(('[^1ERROR^7] Tried To Set Account ^5%s^0 For Player ^5%s^0 To An Invalid Number -> ^5%s^7'):format(accountName, self.playerId, money))\n    end\nend\n")),(0,o.kt)("h2",{id:"converting-old-items"},"Converting old items"),(0,o.kt)("p",null,"You can use the server command: ",(0,o.kt)("inlineCode",{parentName:"p"},"Convert_ESX"),", it should convert the old items to the new inventory.\nThis function will not erase the old items, so do not be afraid."),(0,o.kt)("p",null,"Do not forget to register the old items before running this command. If the item is not registered via the ",(0,o.kt)("inlineCode",{parentName:"p"},"RegisterItem")," function in the ",(0,o.kt)("inlineCode",{parentName:"p"},"avp_grid_inventory")," then the item will not be added."),(0,o.kt)("h2",{id:"accountmoney-as-items"},"AccountMoney as items"),(0,o.kt)("p",null,"Add your accounts here which you want to use them as items."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="source/cfx_based/server/frameworks/esx.lua"',title:'"source/cfx_based/server/frameworks/esx.lua"'},'local accountsAsItems = {\n    ["money"] = true\n}\n')))}p.isMDXComponent=!0}}]);