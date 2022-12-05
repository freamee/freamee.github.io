---
sidebar_position: 6
---

# Attachments

:::warning
While registering attachments make sure you make it in a **shared .lua** file, which is requested both on the server and clientside.
:::


## Registering attachments
```lua title="Register single"
Shared.AttachmentManager:registerOne("bucket", {
    model = "prop_barrel_02a",
    boneId = 0,
    x = 0.0,
    y = 0.45,
    z = 0.5,
    rx = 0.0,
    ry = 0.0,
    rz = 0.0
})
```
```lua title="Register many"
Shared.AttachmentManager:registerMany({
    -- AVP_BOTTLER ATTACHMENTS (BOTTLES BY SINGLE)
    ["object_bottler_1"] = {
        model = "prop_amb_beer_bottle",
        boneId = 0,
        x = 0.2,
        y = -0.6075,
        z = 0.20,
        rx = 0.0,
        ry = -27.0,
        rz = 0.0
    },
    ["object_bottler_2"] = {
        model = "prop_amb_beer_bottle",
        boneId = 0,
        x = 0.2,
        y = -0.319,
        z = 0.20,
        rx = 0.0,
        ry = -27.0,
        rz = 0.0
    },
})
```

## Adding attachment to entities

```lua title="To object"
local aObject = Server.ObjectManager:get(objectID)
if not aObject then return end
aObject:addAttachment("object_bottler_1")
```
```lua title="To player"
local aPlayer = Server.PlayerManaget:get(source)
if not aPlayer then return end
aPlayer:addAttachment("bucket")
```