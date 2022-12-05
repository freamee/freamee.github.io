---
sidebar_position: 2
---

# Installation

Installing & dependencies.

## Dependencies
- [x] Mysql (npm will automatically install it for you and will be packed.)
- [x] NodeJS (for installing with npm.)
- [x] Server version atleast 4752. (to support lua54 & escrow)
- [x] Game build version +2060 (Need the casino dlcpack)

## Install
1. Extract the .zip file and copy paste the content into your resources folder.
2. Open sv_config.lua file and modify the export functions for your framework.
3. We have a .ts config file which contains the translations and every other.
4. After you are done with the config file(.ts) you have to compile the files. If you modify even one thing, you will always need to recompile the code!

### Paths
- Config (typescript): `source-files/src/shared/editable-config.ts`
- Config (Lua): `sv_config.lua`