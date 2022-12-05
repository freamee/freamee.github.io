---
sidebar_position: 3
---

# Adding more Cryptocurrencies

How to add more cryptocurrencies?

:::caution
Adding more cryptos will cause higher resmon. 
:::

```ts title="source-files/server/modules/Crypto/crypto.manager.ts"
static readonly tickers = [
    {
        symbol: "ETH", apiSymbol: "ETHBUSD", ticker: "ethbusd@ticker", name: "Ethereum",
        description: "Ethereum is a decentralized blockchain platform that establishes a peer-to-peer network that securely executes and verifies application code, called smart contracts. Smart contracts allow participants to transact with each other without a trusted central authority."
    },
    {
        symbol: "BTC", apiSymbol: "BTCBUSD", ticker: "btcbusd@ticker", name: "Bitcoin",
        description: "Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009."
    },
    {
        symbol: "ALGO", apiSymbol: "ALGOBUSD", ticker: "algobusd@ticker", name: "Algorand",
        description: "Algorand is a self-sustaining, decentralized, blockchain-based network that supports a wide range of applications. These systems are secure, scalable and efficient, all critical properties for effective applications in the real world. Algorand will support computations that require reliable performance guarantees to create new forms of trust."
    },
    {
        symbol: "QNT", apiSymbol: "QNTBUSD", ticker: "qntbusd@ticker", name: "Quant",
        description: "Quant launched in June 2018 with the goal of connecting blockchains and networks on a global scale, without reducing the efficiency and interoperability of the network. It is the first project to solve the interoperability problem through the creation of the first blockchain operating system."
    },
    {
        symbol: "AVAX", apiSymbol: "AVAXBUSD", ticker: "avaxbusd@ticker", name: "Avalanche",
        description: "Avalanche is a layer one blockchain that functions as a platform for decentralized applications and custom blockchain networks. It is one of Ethereum’s rivals, aiming to unseat Ethereum as the most popular blockchain for smart contracts. It aims to do so by having a higher transaction output of up to 6,500 transactions per second while not compromising scalability."
    },
    {
        symbol: "DOT", apiSymbol: "DOTBUSD", ticker: "dotbusd@ticker", name: "Polkadot",
        description: "Polkadot is an open-source sharded multichain protocol that connects and secures a network of specialized blockchains, facilitating cross-chain transfer of any data or asset types, not just tokens, thereby allowing blockchains to be interoperable with each other. Polkadot was designed to provide a foundation for a decentralized internet of blockchains, also known as Web3."
    }
];
```