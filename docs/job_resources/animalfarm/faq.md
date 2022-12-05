---
sidebar_position: 3
---

# FAQ

Frequently asked questions.

### Does the animals move?
It was planned to make them moving inside the paddocks, but for now they are in a stable random position.

### Can I delete a created farm with a command?
You can not delete a farm at the moment, but you do not even need to, if you created one, you can reposition/resell and basically do everything with it.
Currently, you have to query your database to delete everything which is attached to the farm and restart the server.

### Players can hear each other in diferent farm(s)
Dimension system works with FiveM native SetEntityRoutingBucket, i guess the newer voice resources are upgraded for this solution.
If your server has this issue, you should modify the voice resource by checking that the player-player GetEntityRoutingBucket are the same or not.

### Object and Ped dimension(s)
Objects and Peds are not affected by the RoutingBucket, they are handled by our custom dimension manager.
They are created from our a serverside 'api', and only the necessary data is sent to the client so it can be created and streamed to every player who is inside.

### Restarting the resource makes my game crash.
It is because the stream folder is in our script folder. If you want to frequently restart the script over and over again because you are developing it, you should cut the stream folder from it then copy it into a different resource.

In the fxmanifest.lua you need to include these lines, so we can load the custom props and models with RequestModel.
```lua title="fxmanifest.lua"
file 'avp_farm_props_ytyp.ytyp'
data_file 'DLC_ITYP_REQUEST' 'avp_farm_props_ytyp.ytyp'
```