---
sidebar_position: 2
---

# Installation

Installing & dependencies.

## Dependencies
- [x] Mysql
- [x] CFX baseevents

:::info
We use **baseevents** for the player death event. If you have different death system implemented, you can change the event.
This event will handle the item deleting on the player death. (If you have it enabled in the config, and the item is deletable)
:::

## Install
1. Unzip the rar file, and copy the folder in your Fivem server 
2. Edit or create the locale LUA files for your nationality. (locales/)
3. Edit the HTML locale file. (html/js/locale.js)
4. Modify the config.lua and config_weights.lua files, more informations will be downwards.
5. Import the av_inventory.sql file into your database.
6. Read the advanced setup downwards.