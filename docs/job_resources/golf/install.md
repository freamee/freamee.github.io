---
sidebar_position: 2
---

# Installation

Installing & dependencies.

## Dependencies
- [x] Server version atleast 4752. (to support lua54 & escrow)
- [x] Mysql database (if you want the leaderboard feature)

## Install
1. Unzip the rar file, and copy the selected version folder to your Fivem resources folder.
2. Edit the commands in the server/server.lua folder, or make the events for your pleasure wherever you want.
3. Make the locale files for your nationality, if you do not want to edit the variables, just edit the default en.lua.
4. Change the config.lua file as you wish, but we do not recommend further editig in this, because you can fuck up many calculating things.

### Enabling the leaderboard
If you want to enable the leaderboard, then you will need a mysql and you will need to import the **golf.sql** into your database.<br/>
After you successfully imported it, you just need to change the config.lua Enabled boolean.
```lua title="config.lua"
Config.Toplist = {
    Enabled = true, -- enable or disable the command (it will still gather information to the mysql)
    Command = 'golfboard',
    Count = 10 -- how many players shown in the leaderboards, html.
}
```