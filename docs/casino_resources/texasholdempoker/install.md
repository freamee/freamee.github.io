---
sidebar_position: 2
---

# Installation

Installing & dependencies.

## Dependencies
- [x] Mysql (npm will automatically install it for you and will be packed.)
- [x] NodeJS (for installing with npm.)
- [x] Server version atleast 4752. (to support lua54 & escrow)
- [x] Aquiver module supported framework & mysql resource. See: [Aquiver module compatibles](../../aquiver_module/about.md)

## Install
1. Extract the .zip and copy the folder in your fivem resources folder. You will own two folders after the purchase, one for the table modelling prop and one for the script.
2. Install the npm dependencies, by starting the install_dep.bat. `path: dev/install_dep.bat`
3. Import the .sql file into your database.
4. Create or modify the locale files, we have two locale files, because we needed one also for the html.
5. Set your framework and sql resource in the `server.ts` file.
6. Set your framework in the `client.ts` file.
7. start PokerTypescript
8. start pokerasztal

### Paths
- Locale Server & Client side: `source-files/src/shared/locales.ts`
- Locale HTML: `html/js/locale.js`
- Lua Config: `files/sv_config.lua`

### Aquiver module config
```typescript
import * as Aquiver from '@freamee/server';

Aquiver.Config.Framework = 'ESX_LEGACY';
Aquiver.Config.SqlDebug = false;
/** Select your mysql resource handler. */
Aquiver.Config.sqlResource = 'oxmysql';
/** Set it to false if you want to use accounts like: bank, black_money, etc. */
Aquiver.Config.ResourceExtra.useItems = true;
/** Selected account type, leave it if you use the resource with items. */
Aquiver.Config.ResourceExtra.selectedAccount = "bank";
/** Selected item type, leave it if you use the resource with accounts. */
Aquiver.Config.ResourceExtra.selectedItem = "chips";
```