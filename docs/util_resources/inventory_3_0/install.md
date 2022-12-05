---
sidebar_position: 3
---

# Installation

Installing & dependencies.

## Dependencies
- [x] Server version atleast 4752. (to support lua54 & escrow)
- [x] Mysql
- [x] cfx baseevents (or any other which can trigger serverside death event) 

## Install
:::danger
There is no simple install for this resource, so if you scroll down below, more things are explained, how things working etc.
:::

### Adding faction safes
```lua title="shared/config.lua"
Config.FactionSafes = {
  {
    name = 'police',
    position = vector3(3324.2, 5166.1, 18.4), -- Safe position
    size = 100, -- Maximum safe weight
    slots = 40, -- Maximum safe slots
    header = 'Police-Safe', -- Inventory header name (when opened)
    distance = 3 -- Distance to be able to open.
  }
}
```

### Vehicles & veh database rows
**Q:** Why do i have to add the sql rows here?<br/>
**A:** In the previous version we loaded the vehicle inventories when it was opened, so we relied on the client what kind of vehicle it is and the weight was declared after on serverside.

:::info
Now we are loading the inventories when the database loaded, and its easier to follow what kind of model it is and the plate also safe.
:::

```lua title="shared/config.lua"
Config.VehicleMysql = {
    tablename = 'vehicles', -- Table name of the vehicles
    platerow = 'plate', -- Whats the row name of the plate inside the 'vehicles' table?
    modelrow = 'model', -- Whats the row name of the model inside the 'vehicles' table?
    trunkSlots = 40, -- Default value if vehicle model is not present in Config.Vehicles, slots amount for vehicle inventories (TRUNK)
    gloveboxSlots = 40, -- Default value if vehicle model is not present in Config.Vehicles, Slots amount for vehicle inventories (GLOVEBOX)
    trunkSize = 100, -- Default value if vehicle model is not present in Config.Vehicles
    gloveboxSize = 10 -- Default value if vehicle model is not present in Config.Vehicles
}
```

### Death event
If you do not have the default cfx resource named as baseevents, then you have another resource which handling the player death event.<br/>
You should find that event name, and set it.
:::danger
If you do not setup it properly then the inventory items will not delete when the player dies.
:::

```lua title="shared/config.lua"
Config.DeathEvent = 'baseevents:onPlayerDied'
```

### Modify the GetPlayerFaction function
If you do not modify this to your faction getter then the player will not be able to open the faction safe.

```lua title="server/server-utils.lua"
--- Get the Player's Faction
---@param source string | number PlayerSrc
---@return string
Utils.GetPlayerFaction = function(source)
    return 'police'
end
```

### Registering items
- You do not need to add every argument to the functions.
- If you miss one, then the default argument will be applied to the item.

```lua title="shared/shared-items.lua"
-- Example(s)
ItemController.registerItem('bread', "Bread", false, true, false, 5, "Bread is tasty..")
ItemController.registerItem('weapon_pistol', 'Pistol', true, false, true, 2.0)
ItemController.registerItem('cabbage', 'Cabbage')

--- Registering items to be addable after.
---@param item string
---@param formatname string
---@param tradable boolean (Is the item tradable & droppable or not?)
---@param stackable boolean (Is the item stackable or not?)
---@param candelete boolean (Can the system delete the item on death?)
---@param weight number (Item weight, can be float also 0.25)
---@param description string (Item description if there is any.)
---@param defaultVariables table (Default variables to declare when the item is added.)
ItemController.registerItem = function
(
  item,
  formatname,
  tradable,
  stackable,
  candelete,
  weight,
  description,
  defaultVariables
)
```

### Registering usable items
- Before registering usable event, you have to [define the item.](#registering-items)
- We are triggering these events with two arguments: source and slot (which is used)
- If we want to remove the item when it is used, we need to delete the item on the slot was used, so we have to pass the slot as an argument with the x_y:removeItem function.

```lua title="shared/shared-items.lua"
ItemController.registerUsableItem('bread', function(source, slot)
    local playerInventory = StorageController.getPlayerInventory(source)
    if playerInventory then
        playerInventory:removeItem('bread', 1, slot)
    end
end)

-- For weapons
ItemController.registerUsableItem('weapon_pistol', function(source)
    TriggerClientEvent(Config.Events.use_weapon, source, 'weapon_pistol')
end)
```

### Declaring new vehicle weight(s) in config
- If the vehicle is not present in the Config.Vehicles config then the default weights and slots will be declared.
- You do not need to pass all four table keys. (You can set the trunk only if you want.)

```lua title="shared/config-vehicles.lua"
Config.Vehicles = {
    blade = {
        trunk = 200, -- Maximum weight
        glovebox = 150, -- Maximum weight
        trunkslots = 20, -- Maximum slots
        gloveboxslots = 20 -- Maximum slots
    },
    infernus = {
      trunk = 15
    }
}
```

### Using the Inventory system with Multichar resource(s)
- You need to modify the **Utils.GetIdentifier** function.

```lua title="server/server-utils.lua"
--- Get the Player's identifier.
---- If you have custom Multicharacter resource, change this to your needs.
---@param source string | number PlayerSrc
---@return string
Utils.GetIdentifier = function(source)
    if not Utils.PlayerExist(source) then
        return
    end

    for k, v in pairs(GetPlayerIdentifiers(source)) do
        if string.match(v, 'license:') then
            return string.gsub(v, 'license:', '')
        end
    end

    return "UNKNOWN_IDENTIFIER"
end
```

### Creating shops
:::caution
Always use different uid for the shops, if you registered two with the same uids then it will throw an error for you, and do not overwrite the first one.
:::
#### Shop UID? Why?
If you have some kind of shop business system then you can add your mysql uid to the uid, and track the shop buys, etc. (But you need to set it up further..)
#### Adding shop images
```
cef/img/shopimages/example-drinks.png
```

```lua title="server/server-shops-oop.lua"
Shops:__init__({
    uid = 'grocery-1',
    position = vector3(3324.2, 5166.1, 18.4),
    shopname = 'Grocery Store',
    shopimage = 'grocery.png',
    tables = {
        {
            name = 'Foods',
            categoryimage = 'example-category.png',
            categories = {
                {
                    name = 'Sandwiches',
                    items = {
                        {
                            item = 'sandwich',
                            price = 20
                        }
                    }
                },
                {
                    name = 'Vegetables',
                    items = {
                        {
                            item = 'cabbage',
                            price = 35
                        }
                    }
                }
            }
        }
    }
})
```

### Dropped items
#### You have to options to drop the item:
- Drag the item to the Drop button.
- Press shift and drag it out to the world.

:::info
Items no longer support different model for each item, we had issues that the item fell out of the world and other things, so we are using one single model for it. (You can modify if you want.)
:::

```lua title="shared/config.lua"
Config.Dropped = {
    remainOnGround = 20, -- Minutes to remain the item on the ground.
    model = 'ba_prop_battle_ps_box_01', -- Dropped item model.
    textRange = 6, -- Text rendering max range.
    HudPickupRange = 4, -- Pickup range (to be showed in the CEF/NUI)
    keyPickupRange = 2, -- Pickup range with key.
    pickupKey = 38, -- Pickup control key (**IsControlJustPressed**)
    streamRange = 15, -- Stream range of the objects.
    streamUpdater = 1000, -- How often update the streamed objects. (for loop)
    EnableDropFromVehicle = false -- Enable or disable dropping out items from any vehicle.
}
```

### Aiming / Raycasting / Trade
:::info
If the **AimConfig.enabled** set to **true**, then you can hold down the Shift and it will start the raycasting system.
:::

#### Currently we have two features with raycasting:
- Trading items to targetPlayer.
- Dropping items to the ground.

We planned to add the hovering on vehicles, but at the end we did not.

```lua title="shared/config.lua"
Config.AimConfig = {
    enabled = true, -- Enable or disable the entire raycast system.
    enableKey = 21, -- Shift (Sprint / Run)
    distance = 5, -- Raycast maximum distance
    renderMS = 10, -- Raycast rendering speed MS
    EnableDrawLine = true,
    EnableSprite = true,
    EnableMeters = true,
    PlayerSpriteDict = 'mpinventory', -- Texture dictory. What to show when targetPlayer is hovered?
    PlayerSpriteName = 'mp_specitem_ped', -- Texture name. What to show when targetPlayer is hovered?
    DropSpriteDict = 'mpinventory', -- Texture dictory. What to show when the ground is hovered?
    DropSpriteName = 'mp_arrow' -- Texture name. What to show when the ground is hovered?
}
```

### Weapons
We have the same bullet system with the weapons so you do not need to apply mags to your 'character'.

:::danger
#### When my player shot a bullet the weapon got deleted, bug?
Not a bug, you need keep the item name as the same as the weapon name, so do not register weapons like this: my_server_extra_m4a4, register them as the weapon names. weapon_pistol (So the GetHashKey will not fail.)
:::

```lua title="Example of registering weapons & bullets as items."
ItemController.registerItem('weapon_pistol', 'Pistol', true, false, true, 2.0)
ItemController.registerUsableItem('weapon_pistol', function(source)
    TriggerClientEvent(Config.Events.use_weapon, source, 'weapon_pistol')
end)
```

```lua title="Set weapon bullet types in the config.lua"
Config.Weapons = {
    ['WEAPON_PISTOL'] = '9mm_rounds',
    ['WEAPON_PISTOL50'] = '556_rounds',
    ['WEAPON_STUNGUN'] = {},
    ['WEAPON_KNIFE'] = {}
}
```

### Server event listeners
```lua
Config.ServerEvents = {
    item_defined = 'aquiver-invapi:item-defined',
    player_item_added = 'aquiver-invapi:item-added-toplayer',
    player_item_removed = 'aquiver-invapi:item-removed-player'
}

AddEventHandler(Config.ServerEvents.item_defined, function(itemTable)
    print(string.format('invapi-item-defined: %s', json.encode(itemTable)))
end)
AddEventHandler(Config.ServerEvents.player_item_added, function(source, itemTable, quantity)
    print(string.format('invapi-item-added-toplayer: %s quantity: %s', json.encode(itemTable), quantity))
end)
AddEventHandler(Config.ServerEvents.player_item_removed, function(source, item, quantity)
    print(string.format('invapi-item-removed-player: %s, %s', item, quantity))
end)
```

### Server export functions
For adding more export functions, please check the functions under the inventory class, then you can easily use anything.

```lua
exports('av_givePlayerItem', av_givePlayerItem)
exports('av_removePlayerItem', av_removePlayerItem)
exports('av_getPlayerItemCount', av_getPlayerItemCount)
exports('av_playerHasItems', av_playerHasItems)
exports('av_playerGetInventoryWeight', av_playerGetInventoryWeight)

function av_givePlayerItem(source, item, quantity, vars, slot)
    local playerInventory = StorageController.getPlayerInventory(source)
    if playerInventory then
        return playerInventory:addItem(item, quantity, vars, slot)
    end
end

function av_removePlayerItem(source, item, quantity, slot)
    local playerInventory = StorageController.getPlayerInventory(source)
    if playerInventory then
        return playerInventory:removeItem(item, quantity, slot)
    end
end

function av_getPlayerItemCount(source, item)
    local playerInventory = StorageController.getPlayerInventory(source)
    if playerInventory then
        return playerInventory:getItemCount(item)
    else
        return 0
    end
end

function av_playerHasItems(source, itemsTable)
    local playerInventory = StorageController.getPlayerInventory(source)
    if playerInventory then
        return playerInventory:hasItems(itemsTable)
    end
end

function av_playerGetInventoryWeight(source)
    local playerInventory = StorageController.getPlayerInventory(source)
    if playerInventory then
        return playerInventory:getInventoryWeight()
    end
end
```

### Support