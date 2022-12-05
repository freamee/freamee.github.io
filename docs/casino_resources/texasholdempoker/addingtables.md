---
sidebar_position: 5
---

# Creating more tables

Create or modify the Poker table positions.

### Command
We have a command named **/createpokertable** inside the **config.lua** file.

:::caution
This is a clientside command, so everyone can use it to spawn table(s) locally.<br/>
After you have created your table positions, you should delete this command from the config.lua file!
:::

After using the command you will have the table position and rotation in your client console.

```lua title="config.lua"
RegisterCommand('createpokertable', function()
    if DoesEntityExist(testTable) then
        return
    end

    local pokermodel = 'pokerasztal'
    RequestModel(pokermodel)
    while not HasModelLoaded(pokermodel) do
        print('not exist')
        Citizen.Wait(100)
    end

    testTable = CreateObject(pokermodel, GetEntityCoords(PlayerPedId()), false, false, false)
    SetEntityHeading(testTable, GetEntityHeading(PlayerPedId()))
    PlaceObjectOnGroundProperly(testTable)

    Citizen.Wait(1000)
    local pos = GetEntityCoords(testTable)
    local _, groundZ, offsets = GetGroundZCoordWithOffsets(pos.x, pos.y, pos.z)
    print(vector3(pos.x, pos.y, groundZ))
    print(GetEntityHeading(testTable))

    Citizen.Wait(2500)
    if DoesEntityExist(testTable) then
        DeleteObject(testTable)
    end
end)
```

### Adding or setting the positions
After you have the position & rotation result in the client console, you should add those here.<br/>
In order to not bug your script the hell out, you should have to use different **id** for every table.
```lua title="config.lua"
Config.PokerTables = {
    { id = 1, pos = vector3(1111.128, 217.078, -50.440), heading = 165.9, blind = 20 },
    { id = 2, pos = vector3(1104.686, 208.9376, -50.440), heading = 56.8, blind = 100 }
}
```