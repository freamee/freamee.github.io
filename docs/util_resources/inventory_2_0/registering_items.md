---
sidebar_position: 4
---

# Registering items

Define & register items.

## Info

:::info
We have our custom item definer system. You will not need to add your items in the MySQL.<br/>
This function will take care the item datas, such as weight and the use functions, etc.
:::

```lua title="Example of item registering"
defineItem({
    item = 'bread', -- image name and main item name
    formatname = 'Kenyér', -- formatted name
    type = 'food', -- (Does not matter, but we wanted this so we can loop through the player inventory and find the foods easily.)
    tradable = true, -- player can drop & put items into storages like glovebox. (IF TRUE)
    candelete = true, -- delete item on death?
    weight = 1.25, -- weight / quantity
    stackable = true, -- is this item stackable? example: weapons are not 
    description = 'Bread is a staple food prepared from a dough of flour and water, usually by baking.', -- item description
    model = 'v_ret_247_swtcorn2', -- item drop model
}, function(source, item, slot)
    local identifier = Config.getIdentifier(source)
    if not AquiverInventories[identifier] then return end
    Config.DebugMsg(string.format('(player:%s) %s used on slot %s', source, item, slot))

    local success = AquiverInventories[identifier].removeItemAtSlot(slot, 1)
    if success then
        Config.DebugMsg('Removed one amount from the bread.')
    end
end)
```

## Using defineItem as an export function
You can use this function in other resources also with the export function, but keep in mind, if the inventory is not loaded yet and some other resource wants to register with the function, then it will not happen. If you want it to be loaded first in other resource, then simply define a dependency in your other resource's fxmanifest.lua.

```lua title="fxmanifest.lua (other resource)"
dependencies {'av_inventory'}
```