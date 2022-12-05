---
sidebar_position: 2
---

# Installation

Installing & dependencies.

## Dependencies
- [x] Mysql (npm will automatically install it for you and will be packed.)
- [x] NodeJS (for installing with npm.)
- [x] Server version atleast 4752. (to support lua54 & escrow)
- [x] OneSync **ON** (For serverside player teleporting/distancing, etc. You can easily make the script to non onesync if you sync the player-position to server, etc.)
- [x] Aquiver module supported framework & mysql resource. See: [Aquiver module compatibles](../../aquiver_module/about.md)

## Install
1. Extract the .zip file and copy paste the content into your resources folder. (The resource name needs to be named: aquiver_animalfarm)
2. Install the npm dependencies, by starting the install_dep.bat. `path: dev/install_dep.bat.`
3. Entire config file is inside: shared-config.ts, `path: source-files/shared/shared-config.ts.` (Almost every variable has a description.)
4. Import the .sql file into your database.
5. Set your framework and sql resource in the `server.ts` file.
6. Set your framework in the `client.ts` file.
6. Change the translations inside the shared-translations.ts. `path: source-files/shared/shared-translations.ts.`
7. If you are finished with everything, you need to compile the Typescript files. I made an easy setup for you, inside the dev folder you just start the compile.bat file and it will compile every files for you in the proper directory.

### Aquiver module config
```typescript
import * as Aquiver from '@freamee/server';
Aquiver.Config.Framework = 'ESX_LEGACY';
Aquiver.Config.SqlDebug = false;
Aquiver.Config.sqlResource = 'oxmysql';
/** If you set this true then the loot pickups (boxes) will give you items instead of instant money. */
Aquiver.Config.ResourceExtra.GiveLootAsItems = false;
/** Set item names, only needed if you set to give loot as items. */
Aquiver.Config.ResourceExtra.ItemNames = {
    egg: 'bandage',
    meal: 'gold',
    milk: 'iron',
};
Aquiver.Config.ResourceExtra.selectedAccount = 'bank';
```