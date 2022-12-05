---
sidebar_position: 2
---

# Installation

Installing & dependencies.

## Dependencies
- [x] Server version atleast 4752. (to support lua54 & escrow)
- [x] Game build version +2060 (Need the casino dlcpack)

## Install
1. Unzip the rar file, and copy one of the folders in your FiveM server resources folder.
2. Edit or create the locale files for your nationality.
3. Change the **config.lua** for your suits.
4. Setup your server chip variables in the **server/sv_main.lua** file.

### Paths
- Translations: `translations.lua`

:::caution
Do not forget to add your framework getter at the start of the **server/sv_main.lua** file!<br/>
You can use any framework.
:::

### Using with inventory items
```lua title="server/sv_main.lua"
function getPlayerChips(source)
    local Amount = 0
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        local Item = xPlayer.getInventoryItem('chips')
        if Item then
            Amount = Item.count
        end
    end
    return Amount
end

function giveChips(source, amount)
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        xPlayer.addInventoryItem('chips', amount)
        updatePlayerChips(source)
    end
end

function removeChips(source, amount)
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        xPlayer.removeInventoryItem('chips', amount)
        updatePlayerChips(source)
    end
end
```
### Using with accounts / cash
```lua title="server/sv_main.lua"
function getPlayerChips(source)
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        return xPlayer.getAccount('chips').money
    else
        return 0
    end
end

function giveChips(source, amount)
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        xPlayer.addAccountMoney('chips', amount)
        updatePlayerChips(source)
    end
end

function removeChips(source, amount)
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        xPlayer.removeAccountMoney('chips', amount)
        updatePlayerChips(source)
    end
end
```