"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6459],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1250:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:3},s="Adding more Cryptocurrencies",l={unversionedId:"util_resources/av_advanced_crypto/adding_more_crypto",id:"util_resources/av_advanced_crypto/adding_more_crypto",title:"Adding more Cryptocurrencies",description:"How to add more cryptocurrencies?",source:"@site/docs/util_resources/av_advanced_crypto/adding_more_crypto.md",sourceDirName:"util_resources/av_advanced_crypto",slug:"/util_resources/av_advanced_crypto/adding_more_crypto",permalink:"/util_resources/av_advanced_crypto/adding_more_crypto",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Installation",permalink:"/util_resources/av_advanced_crypto/install"},next:{title:"Config",permalink:"/util_resources/av_advanced_crypto/config"}},p={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adding-more-cryptocurrencies"},"Adding more Cryptocurrencies"),(0,a.kt)("p",null,"How to add more cryptocurrencies?"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Adding more cryptos will cause higher resmon. "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="source-files/server/modules/Crypto/crypto.manager.ts"',title:'"source-files/server/modules/Crypto/crypto.manager.ts"'},'static readonly tickers = [\n    {\n        symbol: "ETH", apiSymbol: "ETHBUSD", ticker: "ethbusd@ticker", name: "Ethereum",\n        description: "Ethereum is a decentralized blockchain platform that establishes a peer-to-peer network that securely executes and verifies application code, called smart contracts. Smart contracts allow participants to transact with each other without a trusted central authority."\n    },\n    {\n        symbol: "BTC", apiSymbol: "BTCBUSD", ticker: "btcbusd@ticker", name: "Bitcoin",\n        description: "Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009."\n    },\n    {\n        symbol: "ALGO", apiSymbol: "ALGOBUSD", ticker: "algobusd@ticker", name: "Algorand",\n        description: "Algorand is a self-sustaining, decentralized, blockchain-based network that supports a wide range of applications. These systems are secure, scalable and efficient, all critical properties for effective applications in the real world. Algorand will support computations that require reliable performance guarantees to create new forms of trust."\n    },\n    {\n        symbol: "QNT", apiSymbol: "QNTBUSD", ticker: "qntbusd@ticker", name: "Quant",\n        description: "Quant launched in June 2018 with the goal of connecting blockchains and networks on a global scale, without reducing the efficiency and interoperability of the network. It is the first project to solve the interoperability problem through the creation of the first blockchain operating system."\n    },\n    {\n        symbol: "AVAX", apiSymbol: "AVAXBUSD", ticker: "avaxbusd@ticker", name: "Avalanche",\n        description: "Avalanche is a layer one blockchain that functions as a platform for decentralized applications and custom blockchain networks. It is one of Ethereum\u2019s rivals, aiming to unseat Ethereum as the most popular blockchain for smart contracts. It aims to do so by having a higher transaction output of up to 6,500 transactions per second while not compromising scalability."\n    },\n    {\n        symbol: "DOT", apiSymbol: "DOTBUSD", ticker: "dotbusd@ticker", name: "Polkadot",\n        description: "Polkadot is an open-source sharded multichain protocol that connects and secures a network of specialized blockchains, facilitating cross-chain transfer of any data or asset types, not just tokens, thereby allowing blockchains to be interoperable with each other. Polkadot was designed to provide a foundation for a decentralized internet of blockchains, also known as Web3."\n    }\n];\n')))}m.isMDXComponent=!0}}]);