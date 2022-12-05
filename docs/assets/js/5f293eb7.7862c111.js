"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3461],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4976:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={sidebar_position:5},p="\ud83c\udf88 SQL setup & typing",l={unversionedId:"free_resources/aquiver_module/sql",id:"free_resources/aquiver_module/sql",title:"\ud83c\udf88 SQL setup & typing",description:"Info",source:"@site/docs/free_resources/aquiver_module/sql.md",sourceDirName:"free_resources/aquiver_module",slug:"/free_resources/aquiver_module/sql",permalink:"/free_resources/aquiver_module/sql",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"\ud83d\udc8c Issues / FAQ",permalink:"/free_resources/aquiver_module/issues"},next:{title:"\ud83d\udcbb Developing",permalink:"/free_resources/aquiver_module/developer"}},c={},u=[{value:"Info",id:"info",level:2},{value:"Example use (Typescript)",id:"example-use-typescript",level:2},{value:"Updating mysql row.",id:"updating-mysql-row",level:3},{value:"Find mysql row.",id:"find-mysql-row",level:3},{value:"Inserting data to mysql",id:"inserting-data-to-mysql",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-sql-setup--typing"},"\ud83c\udf88 SQL setup & typing"),(0,s.kt)("h2",{id:"info"},"Info"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"I have created a custom database class inside the module."),(0,s.kt)("p",{parentName:"div"},"It will handle the sql rows and tables easier, and has typechecking for Typescript."))),(0,s.kt)("h2",{id:"example-use-typescript"},"Example use (Typescript)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Adding the sql table and define the rows. (Example from PokerTypescript resource)"',title:'"Adding',the:!0,sql:!0,table:!0,and:!0,define:!0,"rows.":!0,"(Example":!0,from:!0,PokerTypescript:!0,'resource)"':!0},"import * as Aquiver from '@freamee/server';\n\nexport interface PokerDatabaseInterface {\n    identifier: string;\n    img: string;\n    stat_betchips: number;\n    stat_wonchips: number;\n    stat_played: number;\n    stat_wongames: number;\n}\n\nexport class PokerBase implements PokerDatabaseInterface {\n    identifier: string;\n    img: string;\n    stat_betchips: number;\n    stat_played: number;\n    stat_wonchips: number;\n    stat_wongames: number;\n\n    constructor(data: PokerDatabaseInterface) {\n        this.identifier = data.identifier;\n        this.img = data.img;\n        this.stat_betchips = data.stat_betchips;\n        this.stat_played = data.stat_played;\n        this.stat_wonchips = data.stat_wonchips;\n        this.stat_wongames = data.stat_wongames;\n    }\n}\n\nexport class PokerBaseRepository extends Aquiver.BaseDatabase<PokerBase, PokerDatabaseInterface> {\n    constructor() {\n        super(\"poker_players\");\n    }\n    constructModel(row: PokerDatabaseInterface): PokerBase {\n        return new PokerBase(row);\n    }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Exporting the sub classes. (Example from PokerTypescript)"',title:'"Exporting',the:!0,sub:!0,"classes.":!0,"(Example":!0,from:!0,'PokerTypescript)"':!0},"import { PokerBaseRepository } from './models/model-player';\n\nexport class ServerDatabase {\n    static PokerRepository = new PokerBaseRepository();\n}\n")),(0,s.kt)("h3",{id:"updating-mysql-row"},"Updating mysql row."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Update example."',title:'"Update','example."':!0},"ServerDatabase.PokerRepository.update({\n    where: {\n        identifier: this.identifier,\n    },\n    set: {\n        stat_played: this.stat_played,\n    },\n});\n")),(0,s.kt)("h3",{id:"find-mysql-row"},"Find mysql row."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Find function example."',title:'"Find',function:!0,'example."':!0},"ServerDatabase.PokerRepository.find({\n    where: {\n        identifier: this.identifier,\n    },\n    limit: 1,\n}).then((a) => {\n    const data = a[0];\n    this.img = data.img;\n    this.stat_betchips = data.stat_betchips;\n    this.stat_played = data.stat_played;\n    this.stat_wonchips = data.stat_wonchips;\n    this.stat_wongames = data.stat_wongames;\n});\n")),(0,s.kt)("h3",{id:"inserting-data-to-mysql"},"Inserting data to mysql"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Insert function example"',title:'"Insert',function:!0,'example"':!0},"ServerDatabase.PokerRepository.insert({\n    identifier: this.identifier,\n    stat_betchips: 0,\n    stat_played: 0,\n    stat_wonchips: 0,\n    stat_wongames: 0,\n}).then(() => {\n    this.load();\n});\n")))}m.isMDXComponent=!0}}]);