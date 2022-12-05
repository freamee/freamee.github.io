---
sidebar_position: 2
---

# Usage

How to use this script?

## Spawning object(s)
```lua title="Spawning object(s) example code"
--> ObjectController.create = function(_model, _position, _uid, _options)
-- _options = {
--     rotation = vector3,
--     freezed = boolean,
--     collision = boolean,
--     alpha = number,
--     clickable = boolean,
--     servervars = table,
--     sharedvars = table,
-- }

-- @return {
--     uid = self.data.uid,
--     object = ObjectController._store[self.data.uid]
-- }

local o = ObjectController.create('prop_barrel_01a', vector3(-2612, 1870, 167), 'uid-1', {
    clickable = true
})
-- print(o.uid) - @string
-- print(o.object) - @table
```

## Setting & Getting variables (shared & server)
```lua title="Creating an object then set shared and server variable on it."
local o = ObjectController.create('prop_barrel_01a', vector3(-2612, 1870, 167), 'uid-1', {
    clickable = true
})
o.object.setSharedVar('name', 'Shared Variable Example')
o.object.setSharedVar('progress', 5)
o.object.setServerVariable('safe_key', '49fasj384823492898')

-- Getting variables
local name = o.object.getSharedVar('name')
print(name) -- @returns 'Shared Variable Example'
print(o.object.getServerVar('safe_key')) -- @returns '49fasj384823492898'
```

## Shared event listeners (server & client)
### OnObjectClicked
```lua
AddEventHandler(Config.Events.object_clicked, function(uid, data)
    -- On Object Clicked
    -- print(uid, data)
end)
```
### OnObjectVariableChange
```lua
AddEventHandler(Config.Events.variable_changed, function(uid, key, value)
    -- On Object Variable Change
    -- Config.DebugMsg(string.format('Object variable changed: (%s) %s', key, value))
end)
```

## Export functions
### Serverside
```lua
exports('oc_create', ObjectController.create)
exports('oc_delete', ObjectController.delete)
exports('oc_get', ObjectController.get)
exports('oc_exist', ObjectController.exist)
```
### Clientside
```lua
exports('oc_addfunction', FunctionController.add)
exports('oc_removefunction', FunctionController.remove)
```

## Render Function Pool
### Whats this?
We have a custom thread which triggers every function which is added to this pool.<br/>
With this, you do not need to always create a for loop with the streamed objects.
### Adding functions & examples
If you create a function with the same **uid** then you will receive a console message on clientside and the **function remains the old one.**

```lua title="Adding render function"
-- FunctionController.add = function(uid, func)

-- Render out variables
FunctionController.add('render-names', function(data) -- <-- data always gets called
    DrawText3D(data.position.x, data.position.y, data.position.z + 1.2, json.encode(data.sharedvars))
end)

-- Add one more render function (eg. markers)
FunctionController.add('render-markers', function(data) -- <-- data always gets called
    local x, y, z = table.unpack(data.position)
    DrawMarker(2, x, y, z + 1.5, 0.0, 0.0, 0.0, 0.0, 180.0, 0.0, 0.25, 0.25, 0.25, 255, 255, 0, 50, false, true, 2, nil,
        nil, false)
end)

-- Delete render function with timeout
Citizen.CreateThread(function()
    Citizen.Wait(5000)
    FunctionController.remove('render-names')
end)
```

## Object class functions
```lua
+ setPosition(_pos: vector3)
+ setRotation(_rot: vector3)
+ setFreezed(_state: boolean) -- (Freeze object)
+ setModel(_model: string) -- (Change object model)
+ setAlpha(_alpha: number) -- (Set object alpha)
+ setServerVariable(key: string, value: any)
+ getServerVar(key: string)
+ setSharedVar(key: string, value: any)
+ getSharedVar(key: string)
+ save (You need to setup it with database etc, the examples are already inside the server.lua file)
```