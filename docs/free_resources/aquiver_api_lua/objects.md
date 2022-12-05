---
sidebar_position: 7
---

# Objects

:::info
For more class functions check the github & code.
:::

## Create object(s) serverside
```lua
local Object = Server.ObjectManager:new({
    model = "prop_veg_crop_orange",
    x = 0.0,
    y = 0.0,
    z = 0.0,
    variables = {
        isTree = true
    },
    dimension = 0
})
```
### Add press function to object
```lua
---@type fun(Player: SAquiverPlayer, Object: SAquiverObject)
Object.onPress = function(Player, Object)
    Player:freeze(true)
    Player:disableMovement(true)
    Player:progress("Progess Text...", 5000, function()
        Player:disableMovement(false)
        Player:freeze(false)
        Player:addItem("av_peach", 1)
    end)
end
```

### Attach particle effect to an object
```lua
Server.ParticleManager:new({
    toObjectRemoteId = Object.data.remoteId,
    offset = vector3(0, 0, 1.15),
    particleDict = "cut_family4",
    particleName = "cs_fam4_juice_splash",
    particleUid = "grind-splash",
    rotation = vector3(0, 0, 0),
    scale = 8.0,
    dimension = Object.data.dimension,
    timeMS = 3500
})
```

### Variable validator(s)
:::info
This way the created object entities will have a default variables like numbers, and you do not have to mess with nils during development.
:::
```lua
Server.ObjectManager:addVariableValidator("avp_wooden_barrel", function(Object)
    local v = Object.data.variables

    v.woodenBarrelLitre = Shared.Utils:RoundNumber(v.woodenBarrelLitre or 0, 1)
    v.woodenBarrelAlcoholPercentage = Shared.Utils:RoundNumber(v.woodenBarrelAlcoholPercentage or 0, 1)
    v.woodenBarrelAge = Shared.Utils:RoundNumber(v.woodenBarrelAge or 0, 0)

    -- Important
    v.cellar_object = true
end)
```