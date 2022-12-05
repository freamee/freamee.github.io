---
sidebar_position: 6
---

# FAQ / Common issues

Common issues & Frequently asked questions.

## Open target inventory?
:::danger
This resource is not supporting opening player(target) inventories as second.
:::
There were developers who made this option for their own servers.

You should have to look at this event at first, if you want to make player inventories to be openable.
```lua title="Start developing opening secondary inventory"
AddEventHandler('AquiverInventory:openSecondInventory', function(data)
```