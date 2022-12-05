---
sidebar_position: 2
---

# 🕹️ Custom framework exports

## Info
:::info
If you have selected the **Aquiver.Config.Framework = "CUSTOM"**, then you should add the export functions inside the resource.
:::

:::danger
If you are not a developer and you have no idea what you are getting into with custom selected framework please ignore this part.
:::

## Exports
```typescript title="Serverside export functions."
globalThis.exports[GetCurrentResourceName()].addItem(this.source, item, amount);
globalThis.exports[GetCurrentResourceName()].removeItem(this.source, item, amount);
return globalThis.exports[GetCurrentResourceName()].getItemAmount(this.source, item) ?? 0;
return globalThis.exports[GetCurrentResourceName()].getItem(this.source, item);
return globalThis.exports[GetCurrentResourceName()].getAccountMoney(this.source, accountType) ?? 0;
globalThis.exports[GetCurrentResourceName()].addAccountMoney(this.source, accountType, amount);
globalThis.exports[GetCurrentResourceName()].setAccountMoney(this.source, accountType, amount);
return globalThis.exports[GetCurrentResourceName()].getRoleplayName(this.source) ?? 'UNDEFINED_NAME';
return globalThis.exports[GetCurrentResourceName()].getIdentifier(this.source) ?? '';
return globalThis.exports[GetCurrentResourceName()].hasPermission(this.source) ?? false;
globalThis.exports[GetCurrentResourceName()].notification(this.source, message);
```

## Export setup example.
:::danger
This export should be inside the resource where the Aquiver module is present, since we are triggering the imports with **GetCurrentResourceName()**
:::
These are just examples, none of the functions are valid of course.
```lua title="Example export function with .lua setup."
exports('hasPermission', function(source, permissionGroup)
    local Player = Myframework.getter.player(source)
    return Player.hasGroup(permissionGroup)
end)
```