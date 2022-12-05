---
sidebar_position: 4
---

# Event manager

## Whats the point of this?
- You can trigger event(s) locally
- You can have the same event names in other resources
- You do not have to check if the event name already exist or not
- You can register events in a table style

:::info
Events registered by the module, will have a custom event name with prefixes. This way the event names will not merge with the others.
:::


```lua
---@param eventName string | { [string]: fun(...) }
---@param cb? fun(...)
Shared.EventManager:RegisterModuleNetworkEvent(eventName, cb)
---@param eventName string | { [string]: fun(...) }
---@param cb? fun(...)
Shared.EventManager:RegisterModuleEvent(eventName, cb)

Shared.EventManager:TriggerModuleEvent(eventName, ...)
Shared.EventManager:TriggerModuleServerEvent(eventName, ...)
Shared.EventManager:TriggerModuleClientEvent(eventName, ...)
```

## Registering & Triggering (single)
```lua title="Example"
Shared.EventManager:RegisterModuleEvent("JobStarted", function(jobName)
    print(jobName) -- "miner"
end)
```
> For example if the resource name is "job_miner", and the event which we registered with the module named as "JobStarted" then the
event name will be: "job_miner:JobStarted"

```lua title="Triggering the local event"
Shared.EventManager:TriggerModuleEvent("JobStarted", "miner")
```

## Registering events in a table
```lua
Shared.EventManager:RegisterModuleEvent({
    ["JobStarted"] = function(jobName)
        print(jobName)
    end,
    ["JobEnded"] = function(jobName)
        print(jobName)
    end
})
```