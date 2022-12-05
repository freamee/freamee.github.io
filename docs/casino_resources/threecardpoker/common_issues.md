---
sidebar_position: 3
---

# Common issues / FAQ

Common issues / Frequently asked questions.

## The tables not spawning.
The script uses world object function. (**GetClosestObjectOfType**)

It will not spawn any object for your client, you need to map your Poker tables and add them in your config.lua.

You can use the **/getpokertable** command for getting the closest Poker table coordinates.

## Help notifications are not showing up.
This will be an error related to your resources.

There can only be one scaleform notification show up at the same time, maybe one of your resources resets it to the default, so it disappears.

## The tables with MLO.
We did not try the script with MLO, but some of your customers did. Reach out in our Discord, for more informations.

We are not experienced in GTA V map/modding, but if we know it well, there is a flag for the object which can disable the interaction with the object, comes from that the GetClosestObjectOfType native will not work for us.

If you modified the config.lua or you could not even modify that because in your MLO the /getpokertable is not getting any values from the closest table, then you should reach out for your MLOs creator, for further instructions