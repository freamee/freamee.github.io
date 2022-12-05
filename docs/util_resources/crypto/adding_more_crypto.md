---
sidebar_position: 3
---

# Adding more Cryptocurrencies

How to add more cryptocurrencies?

:::info
Modify the **editable-config.ts** file.
:::

```typescript title="editable.config.ts"
export const RegisteredCryptos = [
    'BTC',
    'ETH',
    'XMR',
    'ALGO',
    'QNT',
    'LUNA', // RIP
    'ADA',
    'LTC',
    'SOL',
    'DOT',
    'AVAX',
    'XRP',
    'ATOM',
    'XLM'
];
```

:::caution
Adding more cryptos will load your resource slower.

With the default cryptos loading time is around 10 seconds, we needed timeout between the API requests so we do not have error response. 
:::