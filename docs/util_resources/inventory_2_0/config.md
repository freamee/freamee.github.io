---
sidebar_position: 3
---

# Config

Config overview

## Main Config

- `Config.Locale = 'en'` Change locale.
- `Config.Debug` (enables or disables the console logs [server,client also]) Default is set to true, set it to false if you do not want to receive any messages.
- `Config.FactionSafes` You will need to add your faction names and safe positions here.
- `Config.OtherInventories` You can insert here global inventories, house inventories or any other. (More description downwards, about the assign function.)
- `Config.Weapons` Add your weapons and specify the required bullets here. important, your item name should match the GTA V weapon name. eg: WEAPON_PISTOL
- `Config.SaveFreq` How often save the inventories.
- `Config.DeleteItemsDeath` Delete tradable/deletable items on player death or not.
- `Config.StartingItems` Starting inventory items. (eg. player joins your server)
- `Config.DefaultSlots` You can change the inventory slots amount. (vehicles, safes, etc.)
- `Config.DefaultWeights` You can change the inventory maximum weight. (If the vehicle is defined in the config_weights.lua, then it will use the defined weight, not the default which is set here.)
- `Config.IgnoreSlotsOnPickup` If you do not want the system, to add items instantly to your slots (1-5), then disable this, then the given item will be added from the starting slots. (6.)
- `Config.vehicleExistDatabase` Very important! We are creating the vehicletrunks/gloveboxes on open, so when the player is near any vehicle, the system will check that the vehicle he is trying to open is really existing in the database, so we can not open npc vehicles, etc. This is not a repetetive mysql function, because when the data is loaded in, we are using simply serverside tables to store the datas.
- `Config.isPlayerAdmin` Add your admin system here, so you can use the give command.
- `Config.getPlayerFaction` Add your faction getter here. (It should return the faction name, which is set in the Config.FactionSafes, thats how we recognize the player that he has the rights to open it.)
- `Config.GetPlayerName` You can change it to your roleplay name getter.
- `Functions.SendNotification` Modify it to your notification system.

## Config Weights
:::info
This will store your vehicle storage datas.<br/>
Add your vehicles here with a defined trunk & glovebox weight.
:::
```lua title="Example"
VehicleWeights = {
    ['blade'] = { trunk = 350, glovebox = 50 },
    ['buccaneer'] = { trunk = 300, glovebox = 65 }
}
```