---
sidebar_position: 3
---

# Modifying export functions

Modify export functions to use your cash or chips as items.

## Info
:::info
You can use any function inside the export functions which returns numbers.
:::

:::info
I have added the examples with ESX framework, but almost every framework shares the same function names.
:::

:::caution
Do not forget to add your framework getter in the **sv_config.lua**!
:::

## Using with accounts / cash (bank, etc.)
Modify **sv_config.lua** export functions, example for basic ESX:
```lua title="sv_config.lua"
ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

exports('getPlayerChips', function(source)
    local Amount = 0
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        local Bank = xPlayer.getAccount('bank')
        if Bank then
            Amount = Bank.money
        end
    end
    return Amount
end)

exports('givePlayerChips', function(source, amount)

local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        xPlayer.addAccountMoney('bank', amount)
    end
end)

exports('removePlayerChips', function(source, amount)
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        xPlayer.removeAccountMoney('bank', amount)
    end
end)

exports('getPlayerName', function(source)
    local Name = GetPlayerName(source)
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        Name = xPlayer.getName()
    end
    return Name
end)
```

## Using with inventory items

:::caution
You have to take care of players buying the chips as items!<br/>
Do not forget to register your item.
:::

Modify **sv_config.lua** export functions, example for basic ESX:
```lua title="sv_config.lua"
ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

exports('getPlayerChips', function(source)
    local Amount = 0
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        local Item = xPlayer.getInventoryItem('chips')
        if Item then
            Amount = Item.count
        end
    end
    return Amount
end)

exports('givePlayerChips', function(source, amount)
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        xPlayer.addInventoryItem('chips', amount)
    end
end)

exports('removePlayerChips', function(source, amount)
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        xPlayer.removeInventoryItem('chips', amount)
    end
end)

exports('getPlayerName', function(source)
    local Name = GetPlayerName(source)
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        Name = xPlayer.getName()
    end
    return Name
end)
```