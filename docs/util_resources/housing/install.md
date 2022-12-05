---
sidebar_position: 2
---

# Installation

Installing & dependencies.

## Dependencies
- [x] NodeJS (for installing with npm.)
- [x] Server version atleast 4752. (to support lua54 & escrow)
- [x] Aquiver module supported framework & mysql resource. See: [Aquiver module compatibles](../../aquiver_module/about.md)
- [x] Game version should not matter, but we used the latest 2612 version. (For more objects to be present.)

## Install
1. Extract the .zip and copy the folder in your fivem resources folder.
2. Install the npm dependencies, by starting the install_dep.bat. `path: dev/install_dep.bat`
3. Import the .sql file into your database.
4. Modify the locales inside. `path: source-files/shared/shared-translations.ts`
5. Set your framework and sql resource in the `server.ts` file.
6. Set your framework in the `client.ts` file.
7. Modify the object prices. `path: source-files/shared/objects.json`
8. Compile the typescript files to javascript. `path: dev/compile.bat`
9. start housebuilder

### Aquiver module config
```typescript title="Module server config"
import * as Aquiver from "@aquiversdk/server";

Aquiver.Config.Framework = "ESX_LEGACY";
Aquiver.Config.SqlDebug = false;
Aquiver.Config.sqlResource = "oxmysql";
Aquiver.Config.ResourceExtra.selectedAccount = "bank";
/** If less objects (wall,floor,etc.) placed then the value, then the player will not be able to enter the house. */
Aquiver.Config.ResourceExtra.MinimumObjectToEnterHouse = 30;
// How many houses can a player own.
Aquiver.Config.ResourceExtra.MaximumOwnableHouse = 3;
/** Set what type of group needed for the /ahouse command and for other functions. */
Aquiver.Config.ResourceExtra.NeededPermission = "admin";
/** Selectable:
 * "only-owned": Show only player owned houses.
 * "every": Show every blips on map.
 * "sold": Show sold houses on map.
 * "buyable": Show only buyable houses on map.
 */
Aquiver.Config.ResourceExtra.ShowBlips = "buyable";
/** Allow house key owners to build the house. */
Aquiver.Config.ResourceExtra.keyOwnersAbleBuild = false;
```

```typescript title="Module client config"
import * as Aquiver from "@aquiversdk/client";
Aquiver.Config.Framework = "ESX_LEGACY";

/** Enable or Disable GTA native map during editor. */
Aquiver.Config.ResourceExtra.DisplayRadarInEditor = false;

/** These are NodeJS Intervals, this is measured in MS(milisecond), reduce or increase this to gain or loss performance.
 * Check the functions before modifying them, you can make major issues with it.
 */
Aquiver.Config.ResourceExtra.Performance = {
    CursorTickerMS: 15, // Updating Cursor position.
    DoorCheckerMS: 1000, // Updating streamed doors.
    ObjectSelectingMS: 85, // Object selecting render speed.
    PlacingPropRenderMS: 85, // Placing props render. (This is raycast, so its expensive.)
    PlacingPropBindsMS: 1, // This is also placing props render with the camera movements and keybinds.

    DoorDistance: 10 // Vector3<->Vector3 distance to render the doors & markers.
}
```