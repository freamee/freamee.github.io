---
sidebar_position: 5
---

# Utils

## Shared
```lua
--- Print to console (ERROR)
---@param content table|string|boolean|number
---@param toJSON? boolean
Shared.Utils.Print:Error(content, toJSON)

--- Print to console (ERROR)
---@param content table|string|boolean|number
---@param toJSON? boolean
Shared.Utils.Print:Debug(content, toJSON)

Shared.Utils:RoundNumber(num, decimals)
```


## Server
```lua
--- Calculate and return new position after offsets are applied with heading
---@param vec3 { x:number; y:number; z:number }
---@param heading number
---@param oX number
---@param oY number
---@param oZ number
Server.Utils:GetOffsetFromVector3(vec3, heading, oX, oY, oZ)

-- Check if there any global message coming from the API.
Server.Utils:checkGlobalMessage()

--- Check current resource version. (Invoked resource)
Server.Utils:checkResourceVersion()
```


## Client
```lua
--- Render sprite on screen, it transforms the 3d vector to screen coordinates and renders it.
---@param worldX number
---@param worldY number
---@param worldZ number
---@param textureDict string
---@param textureName string
---@param scale number
---@param r number
---@param g number
---@param b number
---@param a number
---@async
Client.Utils:DrawSprite3D(worldX, worldY, worldZ, textureDict, textureName, scale, r, g, b, a)

--- Render sprite on a 2d Vector screen coordinates
---@param screenX number
---@param screenY number
---@param textureDict string
---@param textureName string
---@param scale number
---@param rotation number
---@param r number
---@param g number
---@param b number
---@param a number
---@async
Client.Utils:DrawSprite2D(screenX, screenY, textureDict, textureName, scale, rotation, r, g, b, a)

--- Request model.
---@param modelHash string
---@async
Client.Utils:RequestModel(modelHash)

---@param x number
---@param y number
---@param z number
---@param text string
---@param size? number Default: 0.25
---@param font? number Default: 0
Client.Utils:DrawText3D(x, y, z, text, size, font)

---@param x number
---@param y number
---@param text string
---@param size? number Default: 0.25
---@param font? number Default: 0
Client.Utils:DrawText2D(x, y, text, size, font)
```