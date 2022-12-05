---
sidebar_position: 3
---

# Config

Config overview

## Main Config
```ts title="source-files/server/server.ts"
Aquiver.Config.Framework = "ESX_LEGACY";
Aquiver.Config.SqlDebug = true;
Aquiver.Config.sqlResource = "oxmysql";

Aquiver.Config.checkResourceVersion = true;

Aquiver.Config.ResourceExtra = {
    /** Fee percentage when depositing / withdrawing money from crypto. This one is not applied on the player if he has premium. */
    feePercentage: 0.07,
    /** Premium user feePercentage */
    premiumFeePercentage: 0.03,

    /** Maximum digits to be allowed. */
    maxDigits: 5,
    /** Maximum transactions to be stored in mysql. (sell & buy) */
    maximumTransactionHistory: 100,
    /** Maximum transactions to be showned in the NUI dashboard. (sell & buy) */
    dashboardMaximumRecentTrades: 20,
    /** Maximum days to be stored in mysql. (timestamp, symbol, price = chart) */
    maximumDailyDataDays: 30,
    /** Maximum history for cryptocurrencies stored in mysql. This is the crypto symbol charts. */
    maximumHistoryEntry: 200,

    /** Maximum wallet payments. (sent) */
    maximumWalletRecentSendPayments: 25,
    /** Maximum wallet payments. (received) */
    maximumWalletRecentReceivedPayments: 25,
    /** Maximum wallet notifications. */
    maximumWalletNotifications: 25,

    /** Maximum leaderboard amount to sent to the player NUI. */
    maximumToplistEntry: 15,
    /** Leaderboard updating ticker */
    toplistUpdateRate: 60000 * 10,

    /** Enable or disable leaderboard. */
    leaderboardEnabled: true,

    /** Enable or disable player anti flood. */
    antiFloodSystem: true,
    /** Flood timeout in miliseconds. (ms) */
    floodSystemMS: 1000,

    /** Enable or disable the debugger serverside */
    enableDebug: true,

    /** Enable or disable discord messages. */
    enableDiscordBot: true,
    /** Add your discord webhook URL here. */
    discordWebhook: "",
}
```