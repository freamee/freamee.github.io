---
sidebar_position: 4
---

# Export functions

```ts title="source-files/server/exports.ts"
import { API } from "./api";
import { EventDecorator } from "./decorators";

globalThis.exports("open_crypto_panel", (source: number | string) => {
    const Player = API.PlayerManager.getPlayer(source);
    if (!Player) return console.error("source does not exists. (open_crypto_panel");

    /** Get all of the onCryptoOpen events and execute them with the ->Player class. */
    EventDecorator.getAllOfEvents("onCryptoOpen").forEach(a => a(Player))

    Player.triggerNui({
        event: "set-crypto-store",
        data: {
            path: "playerData.cryptoOpened",
            value: true
        }
    });
});

globalThis.exports("set_crypto_wallet_premium", (walletUsername: string, state: boolean) => {
    const Wallet = API.WalletManager.getWalletByWalletUsername(walletUsername);
    if (Wallet) return console.error("Wallet does not exist.");

    if (typeof state !== "boolean") return console.error("state is not a boolean.");

    Wallet.premium = state;
    console.log(`${walletUsername} premium set to: ${state}.`);
});
```

## How to use export functions with .lua
You can trigger these functions from another resource (lua, or anything)

```lua
exports["av_crypto"]:open_crypto_panel(source)
exports["av_crypto"]:set_crypto_wallet_premium("freamee", true)
```