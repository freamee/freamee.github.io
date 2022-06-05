"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3584],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3299:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:3},c="Using with inventory items",l={unversionedId:"casino_resources/texasholdempoker/usingwithitems",id:"casino_resources/texasholdempoker/usingwithitems",title:"Using with inventory items",description:"Want to use the script with inventory items, like chips?",source:"@site/docs/casino_resources/texasholdempoker/usingwithitems.md",sourceDirName:"casino_resources/texasholdempoker",slug:"/casino_resources/texasholdempoker/usingwithitems",permalink:"/casino_resources/texasholdempoker/usingwithitems",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Installation",permalink:"/casino_resources/texasholdempoker/install"},next:{title:"Using with accounts/cash",permalink:"/casino_resources/texasholdempoker/usingwithaccounts"}},u={},m=[{value:"Info",id:"info",level:2},{value:"Code changes to made",id:"code-changes-to-made",level:2},{value:"player.ts",id:"playerts",level:3},{value:"config.lua",id:"configlua",level:3}],p={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-with-inventory-items"},"Using with inventory items"),(0,o.kt)("p",null,"Want to use the script with inventory items, like chips?"),(0,o.kt)("h2",{id:"info"},"Info"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Since most inventories don't have a item setter function, and we did the chips with setter and getter, we have to modify the code slightly in order to remove and add the items well."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Export functions are different from the version without inventory!"))),(0,o.kt)("h2",{id:"code-changes-to-made"},"Code changes to made"),(0,o.kt)("h3",{id:"playerts"},"player.ts"),(0,o.kt)("p",null,"Modify ",(0,o.kt)("strong",{parentName:"p"},"player.ts")," setter function for this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="source-files/src/server/player.ts"',title:'"source-files/src/server/player.ts"'},"set chips(amount: number) {\n    const oldChips = this.chips;\n    /** Negative */\n    if(oldChips > amount) {\n        const diff = Math.abs(oldChips - amount);    \n        global.exports[GetCurrentResourceName()].removePlayerChips(this.source, diff);\n    }\n    /** Positive, because the new amount is higher then the old one, so give item. */\n    else if(amount > oldChips) {\n        const diff = Math.abs(amount - oldChips);\n        global.exports[GetCurrentResourceName()].givePlayerChips(this.source, diff);\n    }\n\n    if (this.isPlayerPlayingAtTable()) {\n        this.TriggerClient('setCefVariable', 'mychips', this.chips);\n    }\n}\n")),(0,o.kt)("h3",{id:"configlua"},"config.lua"),(0,o.kt)("p",null,"Modify ",(0,o.kt)("strong",{parentName:"p"},"config.lua")," export functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title= "config.lua"',title:"",'"config.lua"':!0},"if IsDuplicityVersion() then\n    ESX = nil\n    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)\n\n    local chipsItemName = 'casinochips'\n\n    -- Do not modify this config_getPokerTables function.\n    exports('config_getPokerTables', function()\n        return Config.PokerTables\n    end)\n    exports('getPlayerName', function(source)\n        local Name = GetPlayerName(source)\n        \n        local Player = ESX.GetPlayerFromId(source)\n        if Player then\n            Name = Player.getName()\n        end\n\n        return Name\n    end)\n    exports('getPlayerChips', function(source)\n        local Amount = 0\n        local Player = ESX.GetPlayerFromId(source)\n        if Player then\n            local Item = Player.getInventoryItem(chipsItemName)\n            if Item then\n                Amount = Item.count\n            end\n        end\n        return Amount\n    end)\n    exports('givePlayerChips', function(source, amount)\n        local Player = ESX.GetPlayerFromId(source)\n        if Player then\n            Player.addInventoryItem(chipsItemName, amount)\n        end\n    end)\n    exports('removePlayerChips', function(source, amount)\n        local Player = ESX.GetPlayerFromId(source)\n        if Player then\n            Player.removeInventoryItem(chipsItemName, amount)\n        end\n    end)\n    -- If you are using custom Multicharacter resource, you can add your identifier handler here. \n    exports('getIdentifier', function(source)\n        for k, v in ipairs(GetPlayerIdentifiers(source)) do\n            if string.match(v, \"license:\") then\n                return v\n            end\n        end\n    end)\nend\n")))}d.isMDXComponent=!0}}]);